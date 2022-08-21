import { ChangeEvent, FC, memo, useState } from "react";
import { connect } from "react-redux";
import { News } from "../models/news";
import { newsFetchAction } from "../redux/actions";
import { newsSelector } from "../redux/selectors";
import { State } from "../redux/store";
import NewsRow from "./NewsRow";

type NewsListProps = {
  query?: string;
  news: any;
  fetchNews: (query: string) => void;
};

const NewsList: FC<NewsListProps> = ({ news, query, fetchNews }) => {
  const [showHeadLines, setShowHeadLines] = useState<boolean>(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      fetchNews(event.target.value);
      setShowHeadLines(false);
    } else {
      setShowHeadLines(true);
    }
  };

  return (
    <div>
      <div className="sm:flex  sm:justify-between sm:px-20 sm:py-4">
        <h1 className="text-3xl  font-bold  font-serif">FAST NEWS</h1>
        <input
          onChange={handleChange}
          className="sm:px-2 sm:py-1 text-blue-500 border-2 rounded-md"
          placeholder="Search News Here"
        />
      </div>
      <h1 className="sm:text-3xl sm:px-32 sm:py-8">News :</h1>{" "}
      <div className="flex  justify-center flex-wrap">
        {news.map((n: News) => (
          <NewsRow news={n} key={n.title} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (n: State) => ({
  news: newsSelector(n),
});

const mapDispatchToProps = {
  fetchNews: newsFetchAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(NewsList));
