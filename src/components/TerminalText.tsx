'use client';
import React, { useState } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
}

function TypingText(props: TypingTextProps) {
  const { text, className } = props;

  const [index, setIndex] = React.useState(0);
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index));
      setIndex((prevIndex) => prevIndex + 1);
      // setCursorVisible(displayText !== text);
      // setFinished(displayText === text);
    }, 100);

    return () => clearInterval(interval);
  }, [index, text]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-neutral-950 border-white border p-2 m-auto rounded-lg caret-transparent">
      <text className={className}>{'> '}{displayText}{cursorVisible && '█'}</text>
    </div>
  )
}

export default TypingText;
