import { OpenAI } from 'openai';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface AnalyzeRequest {
  domain: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { domain }: AnalyzeRequest = req.body;

    if (!domain) {
      return res.status(400).json({ message: 'Domain is required' });
    }

    // Validate domain format
    const domainRegex = /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i;
    if (!domainRegex.test(domain.trim())) {
      return res.status(400).json({ message: 'Invalid domain format' });
    }

    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ message: 'OpenAI API key not configured' });
    }

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are a brand perception analyst. Analyze brands and provide insights about how they are perceived in the market. Be concise, accurate, and professional.`,
        },
        {
          role: 'user',
          content: `Analyze the brand perception for the domain "${domain}". Provide:
1. A 2-3 sentence summary of how this brand is perceived
2. A list of 5-8 dominant adjectives that describe this brand
3. A list of 3-5 perceived competitor domains

Format your response as JSON:
{
  "summary": "2-3 sentence summary here",
  "adjectives": ["adjective1", "adjective2", ...],
  "competitors": ["competitor1.com", "competitor2.com", ...]
}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
      response_format: { type: 'json_object' },
    });

    const content = completion.choices[0]?.message?.content;
    
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    const analysis = JSON.parse(content);

    // Validate response structure
    if (!analysis.summary || !Array.isArray(analysis.adjectives) || !Array.isArray(analysis.competitors)) {
      throw new Error('Invalid response format from OpenAI');
    }

    return res.status(200).json(analysis);
  } catch (error) {
    console.error('Error analyzing domain:', error);
    
    if (error instanceof Error) {
      return res.status(500).json({ 
        message: error.message || 'Failed to analyze domain' 
      });
    }

    return res.status(500).json({ message: 'An unexpected error occurred' });
  }
}

