/**
 * Fetches the favicon URL for a given website URL
 * Uses Google's favicon service as it handles CORS and various formats
 */
export async function getFaviconUrl(url: string): Promise<string | null> {
  try {
    // Extract domain from URL
    const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
    const hostname = urlObj.hostname.replace(/^www\./, '');
    
    // Use Google's favicon service - it handles CORS and various formats
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`;
  } catch (error) {
    // If URL parsing fails, try to extract domain manually
    try {
      const domain = url.replace(/^https?:\/\//, '').split('/')[0].replace(/^www\./, '');
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    } catch {
      return null;
    }
  }
}

/**
 * Extracts the domain name from a URL for display purposes
 */
export function extractDomain(url: string): string {
  try {
    const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
    return urlObj.hostname.replace(/^www\./, '');
  } catch {
    return url.replace(/^https?:\/\//, '').split('/')[0].replace(/^www\./, '');
  }
}

