import axios from "axios";
import { News } from "./models/news";

type NewsObj = {
  news: News;
};

export const getNewsHeadlines = async () => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=a0b0b341dad347878294dc87ce870c7c`
  );
  return response.data.articles;
};

export const getNews = async (newsTitle: string) => {
  const response = await axios.get<NewsObj[]>(
    `https://newsapi.org/v2/everything?q=${newsTitle}&apiKey=a0b0b341dad347878294dc87ce870c7c`
  );
  return response.data;
};
