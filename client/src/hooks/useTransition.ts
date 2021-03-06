import React from "react";
import { useHistory } from "react-router-dom";

const useTransition = (animation: string): [string, any] => {
  const [animationName, setAnimation] = React.useState<string>(animation);
  const [targetName, setTarget] = React.useState<string>("");
  const history = useHistory();
  let transition: NodeJS.Timeout;

  const setForwarding = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    animation: string,
    target: string
  ) => {
    event.preventDefault();
    setAnimation(animation);
    setTarget(target);
    clearTimeout(transition);
    if (target !== "none") {
      transition = setTimeout(() => {
        history.push(target);
      }, 250);
    }
  };

  return [animationName, setForwarding];
};

export default useTransition;
