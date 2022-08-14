import { ChangeEvent, ChangeEventHandler, FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { News } from "../models/news";
import { newsFetchAction, newsHeadlinesFetchAction } from "../redux/actions";
import {
  newsHeadlinesSelector,
  newsQuerySelector,
  newsSelector,
} from "../redux/selectors";
import { State } from "../redux/store";
import HeadlinesList from "./HeadlinesList";
import NewsRow from "./NewsRow";

type NewsListProps = {
  query: string;
  news: News[];
  fetchNews: (query: string) => void;
};

const NewsList: FC<NewsListProps> = ({ news, query, fetchNews }) => {
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   fetchNews(event.target.value);
  // };
  return (
    <div>
      {/* <div className="sm:flex  sm:justify-between sm:px-20 sm:py-4">
        <h1 className="text-3xl  font-bold  font-serif"> Priyanshu's News</h1>
        <input
          value={query}
          onChange={handleChange}
          className="sm:px-2 sm:py-1 text-blue-500 border-2 rounded-md"
          placeholder="Search News Here"
        />
      </div>

      <div>
        <h1 className="sm:text-3xl sm:px-32 sm:py-8">News :</h1>{" "}
        {news.map((n: News) => (
          <NewsRow news={n} key={n.title} />
        ))}
      </div> */}
      <HeadlinesList />
    </div>
  );
};

const mapStateToProps = (n: State) => ({
  // news: newsSelector(n),
  // query: newsQuerySelector(n),
});

const mapDispatchToProps = {
  // fetchNews: newsFetchAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(NewsList));
