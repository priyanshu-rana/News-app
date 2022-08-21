import { FC, memo } from "react";
import HeadlinesList from "./HeadlinesList";
import NewsList from "./NewsList";

type HomePageProps = {};

const HomePage: FC<HomePageProps> = (props) => {
  return (
    <div>
      <NewsList />
      <HeadlinesList />
    </div>
  );
};

HomePage.defaultProps = {};

export default memo(HomePage);
