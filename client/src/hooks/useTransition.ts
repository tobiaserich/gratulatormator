import React from "react";
import { useHistory } from "react-router-dom";

const useTransition = (animation: string): [any, any] => {
  const [animationName, setAnimation] = React.useState(animation);
  const [targetName, setTarget] = React.useState("");
  const history = useHistory();
  let transition: NodeJS.Timeout;

  const setForwarding = (event: any, animation: string, target: string) => {
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
