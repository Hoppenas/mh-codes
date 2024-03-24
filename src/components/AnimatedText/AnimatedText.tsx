import { FC } from "react";
import "./animatedText.scss";

interface IAnimatedText {
  text: string;
  isSubText?: boolean;
}

const AnimatedText: FC<IAnimatedText> = ({ text, isSubText = false }) => (
  <div
    className={`animatedText ${
      isSubText ? "animatedText--small" : "animatedText--large"
    }`}
  >
    {text}
  </div>
);

export default AnimatedText;
