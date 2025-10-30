import axios from 'axios';
import type { AnalysisResponse } from '../types/analysis';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export async function analyzeDomain(domain: string): Promise<AnalysisResponse> {
  try {
    const response = await axios.post<AnalysisResponse>(
      `${API_BASE_URL}/analyze`,
      { domain },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 30000, // 30 second timeout
      }
    );
    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message || 'Failed to analyze domain';
      throw new Error(errorMessage);
    }
    throw new Error('An unexpected error occurred');
  }
}

