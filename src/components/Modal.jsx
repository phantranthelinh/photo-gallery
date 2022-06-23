import React, { useRef } from "react";
import { motion } from "framer-motion";

export const Modal = ({ selectedImg, setSelectedImg }) => {
  const constraintsRef = useRef(null);

  const clickHandler = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      className="backdrop"
      ref={constraintsRef}
      onClick={clickHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        style={{ cursor: "pointer" }}
        drag
        dragConstraints={constraintsRef}
        src={selectedImg}
        alt="enlarged pic"
      />
    </motion.div>
  );
};
