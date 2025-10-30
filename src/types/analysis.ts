export interface AnalysisResponse {
  summary: string;           // 2-3 sentence brand perception summary
  adjectives: string[];      // 5-8 dominant adjectives
  competitors: string[];    // 3-5 perceived competitor domains
}

export interface AnalysisError {
  message: string;
  code?: string;
}

