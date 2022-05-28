import { FC, memo } from "react";

type Props = {};

const Button: FC<Props> = (props) => {
  return <div>Button</div>;
};

Button.defaultProps = {};

export default memo(Button);
