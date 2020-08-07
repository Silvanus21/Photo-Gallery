import React from "react";
import useFirestore from "../hooks/useFirestore";
import {motion} from "framer-motion"

function ImageGrid({ setSelectedImage }) {
  const { documents } = useFirestore("images");
  console.log(documents);

  return (
    <div className="img-grid">
      {documents &&
        documents.map((doc) => {
          return (
            <motion.div
              layout
              whileHover={{ opacity : 1 }}
              className="img-wrap"
              key={doc.id}
              onClick={() => setSelectedImage(doc.url)}
            >
              <motion.img 
              initial={{ opacity : 0 }}
              animate={{ opacity : 1 }}
              transition={{ delay : 1 }}
              src={doc.url} alt="Uploaded pic" />
            </motion.div>
          );
        })}
    </div>
  );
}

export default ImageGrid;
