import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TypeWriter = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 100); // Adjust the typing speed as needed

    return () => clearTimeout(timer);
  }, [currentIndex, text]);

  return (
    <div
      className="text-black py-3 px-2 text-center"
      dangerouslySetInnerHTML={{ __html: displayText }}
    ></div>
  );
};

TypeWriter.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TypeWriter;
