import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { News } from "../models/news";
import { newsHeadlinesFetchAction } from "../redux/actions";
import { newsHeadlinesSelector } from "../redux/selectors";
import { State } from "../redux/store";
import NewsRow from "./NewsRow";

type HeadlinesListProps = { newsHeadlines: News[]; fetchHeadings: () => void };

const HeadlinesList: FC<HeadlinesListProps> = ({
  newsHeadlines,
  fetchHeadings,
}) => {
  useEffect(() => {
    fetchHeadings();
  }, []);

  return (
    <div>
      <h1 className="sm:text-3xl sm:px-32 sm:py-8">Headlines :</h1>
      <div className="flex  justify-center flex-wrap">
        {newsHeadlines.map((h: News) => (
          <NewsRow news={h} key={h.title} />
        ))}
      </div>
    </div>
  );
};
HeadlinesList.defaultProps = {};

const mapStateToProps = (h: State) => ({
  newsHeadlines: newsHeadlinesSelector(h),
});

const mapDispatchToProps = {
  fetchHeadings: newsHeadlinesFetchAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(HeadlinesList));
