import { useState, useEffect } from 'react';

// Define interfaces based on the API response
interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

interface Article {
  source: Source;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

interface Source {
  id: string | null;
  name: string;
}

const useFetchNews = () => {
  const [newsData, setNewsData] = useState<NewsResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  // Assuming this is the correct base URL for your news API
  const BASE_URL = 'https://newsapi.org/v2/everything?q=*&from=2025-02-27&sortBy=popularity&apiKey=b2046eee1ee447f0976792a85514d1a6'; // Update this to the actual API endpoint

  useEffect(() => {
    //if (!newsCode) return;

    const fetchNewsData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${BASE_URL}`);
        if (!response.ok) {
          throw new Error('Failed to fetch news data');
        }
        const result: NewsResponse = await response.json();
        setNewsData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  return { newsData, loading, error };
};

export default useFetchNews;