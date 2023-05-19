import React, { useState } from "react";
import Timer from "../utils/timer";

export const TimerContext = React.createContext({
  newTimer: {},
  timer: null,
});

export const useTimer = () => React.useContext(TimerContext);

export const TimerContextProvider = (props) => {
  const [timer, setTimer] = useState(new Timer());

  const newTimer = () => {
    setTimer(new Timer());
  };

  return (
    <TimerContext.Provider
      value={{
        newTimer: newTimer,
        timer: timer,
      }}
    >
      {props.children}
    </TimerContext.Provider>
  );
};

export default TimerContextProvider;
