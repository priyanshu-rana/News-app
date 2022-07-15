import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { News } from "../models/news";
import { newsFetchAction } from "../redux/actions";
import { newsSelector } from "../redux/selectors";
import { State } from "../redux/store";
import NewsRow from "./NewsRow";

type NewsListProps = {
  news: any[];
  fetchNews: () => void;
};

const NewsList: FC<NewsListProps> = ({ news, fetchNews }) => {
  useEffect(fetchNews, []);

  return (
    <div>
      {/* {news.map((s) => (
        <NewsRow news={s} key={s.title} />
      ))} */}
      {news.map((n) => (
        <div>{n.title}</div>
      ))}
    </div>
  );
};

NewsList.defaultProps = {};

const mapStateToProps = (n: State) => ({
  news: newsSelector(n),
});

const mapDispatchToProps = {
  fetchNews: newsFetchAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(NewsList));
