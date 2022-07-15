import { FC, memo } from "react";
import { News } from "../models/news";

type NewsRowProps = {
  news: News;
};

const NewsRow: FC<NewsRowProps> = ({ news }) => {
  return (
    <div>
      <img src={news.urlToImage} />
      <h1>{news.title}</h1>
    </div>
  );
};

NewsRow.defaultProps = {};

export default memo(NewsRow);
