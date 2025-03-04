import React, { createContext, useContext,  ReactNode } from 'react';
import useFetchNews from '../../hooks/news-service';

interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

interface Article {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

interface NewsContextType {
  newsData: NewsResponse | null;
  loading: boolean;
  error: string | null;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { newsData, loading, error } = useFetchNews(); // Use the same newsCode as News

  return (
    <NewsContext.Provider value={{ newsData, loading, error }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};