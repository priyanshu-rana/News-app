import { FC, memo } from "react";

type Props = {};

const SideBar: FC<Props> = (props) => {
  return <div>SideBar comp</div>;
};

SideBar.defaultProps = {};

export default memo(SideBar);
