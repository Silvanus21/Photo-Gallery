import React from "react";
import { motion } from "framer-motion";

function Modal({ selectedImage, setSelectedImage }) {
  const handleChange = (event) => {
    if (event.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={handleChange}
    >
      <motion.img 
      initial={{ y : "100vh" }}
      animate={{ y : 0 }}
      src={selectedImage} alt="Larger Pic" />
    </motion.div>
  );
}

export default Modal;
