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

  // Dynamic date: 7 days ago from today
  // const today = new Date();
  // const fromDate = new Date(today.setDate(today.getDate() - 7))
  //   .toISOString()
  //   .split('T')[0]; // e.g., "2025-02-25"

  const BASE_URL = `https://newsapi.org/v2/everything?q=*&from=2025-02-27&sortBy=popularity&apiKey=b2046eee1ee447f0976792a85514d1a6`;

  useEffect(() => {
    const fetchNewsData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Using fetch (default option)
        const response = await fetch(BASE_URL, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch news data: ${response.statusText}`);
        }
        const result: NewsResponse = await response.json();
        setNewsData(result);

        // Alternative: Using axios (uncomment to use)
        // const response = await axios.get(BASE_URL);
        // setNewsData(response.data);
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
  }, []); // Empty dependency array since we only fetch once on mount

  return { newsData, loading, error };
};

export default useFetchNews;