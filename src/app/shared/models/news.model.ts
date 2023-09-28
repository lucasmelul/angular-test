
export interface New {
  title: string;
  author: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ResponseNews {
  articles: New[];
  totalResults: number;
  status: string;
}

export interface NewsParams {
  pageSize?: number;
  page?: number;
  q?: string;
  category?: string;
  from?: string;
  to?: string;
  domains?: string;
}
