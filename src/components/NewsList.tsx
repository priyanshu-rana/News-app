import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { News } from "../models/news";
import {
  newsFetchAction,
  newsFetchedAction,
  newsHeadlinesFetchAction,
} from "../redux/actions";
import { newsHeadlinesSelector, newsSelector } from "../redux/selectors";
import { State } from "../redux/store";
import NewsRow from "./NewsRow";

type NewsListProps = {
  news: News[];
  fetchHeadlines: () => void;
};

const NewsList: FC<NewsListProps> = ({ news, fetchHeadlines }) => {
  useEffect(() => {
    fetchHeadlines();
  }, []);
  return (
    <div>
      <div className="sm:flex  sm:justify-between sm:px-20 sm:py-4">
        <h1 className="text-3xl  font-bold  font-serif"> Priyanshu's News</h1>
        <input
          type="search"
          className="sm:px-2 sm:py-1 text-blue-500 border-2 rounded-md"
          placeholder="Search News Here"
        />
      </div>
      <h1 className="sm:text-3xl sm:px-32 sm:py-8">Headlines :</h1>
      <div className="flex  justify-center flex-wrap  ">
        {news.map((n) => (
          <NewsRow news={n} key={n.title} />
        ))}
      </div>
    </div>
  );
};

NewsList.defaultProps = {};

const mapStateToProps = (n: State) => ({
  news: newsHeadlinesSelector(n),
});

const mapDispatchToProps = {
  fetchHeadlines: newsHeadlinesFetchAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(NewsList));
