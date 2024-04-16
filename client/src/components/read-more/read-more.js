import { useMemo, useState } from "react";

import styles from "./styles.module.css";

const ReadMore = ({ textSize = 190, textClass, buttonClass, children }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const text = useMemo(() => {
    return children ? children.toString().trim() : "";
  }, [children]);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className={`${styles.text} ${textClass}`}>
      {isReadMore ? `${text.slice(0, textSize)}... ` : text}
      <span
        onClick={toggleReadMore}
        className={`${styles.toggleReadMore} ${buttonClass}`}
      >
        {isReadMore ? "Read more" : " Show less"}
      </span>
    </p>
  );
};

export default ReadMore;
