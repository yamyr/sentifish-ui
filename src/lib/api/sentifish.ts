/**
 * Sentifish API client
 * Connects to the FastAPI backend for web search evaluation
 */

const API_BASE = import.meta.env.VITE_SENTIFISH_API_URL || "http://localhost:4010";

export type SearchProvider = "brave" | "serper" | "tavily" | "tinyfish";

export interface Dataset {
  name: string;
  queries: DatasetQuery[];
  created_at?: string;
}

export interface DatasetQuery {
  query: string;
  relevant_urls?: string[];
  intent?: string;
}

export interface EvalRunRequest {
  dataset: string;
  providers: SearchProvider[];
  top_k?: number;
}

export interface EvalResult {
  query: string;
  provider: SearchProvider;
  results: SearchResult[];
  scores: MetricScores;
  latency_ms: number;
}

export interface SearchResult {
  url: string;
  title: string;
  snippet: string;
  position: number;
}

export interface MetricScores {
  precision_at_k: number;
  recall_at_k: number;
  ndcg_at_k: number;
  mrr: number;
}

export interface EvalRun {
  id: string;
  dataset: string;
  providers: SearchProvider[];
  top_k: number;
  status: "running" | "completed" | "failed";
  created_at: string;
  results?: EvalResult[];
}

export interface RunSummary {
  provider: SearchProvider;
  avg_precision: number;
  avg_recall: number;
  avg_ndcg: number;
  avg_mrr: number;
  avg_latency_ms: number;
  total_queries: number;
}

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...options?.headers },
    ...options,
  });
  if (!res.ok) {
    const err = await res.text().catch(() => res.statusText);
    throw new Error(`API ${res.status}: ${err}`);
  }
  return res.json();
}

export const sentifishApi = {
  health: () => apiFetch<{ status: string }>("/health"),

  getProviders: () => apiFetch<SearchProvider[]>("/api/providers"),

  getDatasets: () => apiFetch<Dataset[]>("/api/datasets"),
  createDataset: (dataset: Dataset) =>
    apiFetch<Dataset>("/api/datasets", { method: "POST", body: JSON.stringify(dataset) }),
  getDataset: (name: string) => apiFetch<Dataset>(`/api/datasets/${name}`),
  deleteDataset: (name: string) =>
    apiFetch<void>(`/api/datasets/${name}`, { method: "DELETE" }),

  getRuns: () => apiFetch<EvalRun[]>("/api/runs"),
  triggerRun: (req: EvalRunRequest) =>
    apiFetch<EvalRun>("/api/runs", { method: "POST", body: JSON.stringify(req) }),
  getRun: (id: string) => apiFetch<EvalRun>(`/api/runs/${id}`),
  getRunSummary: (id: string) => apiFetch<RunSummary[]>(`/api/runs/${id}/summary`),
};
