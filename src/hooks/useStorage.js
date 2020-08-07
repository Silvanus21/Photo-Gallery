import { useState, useEffect } from "react";
import { projectStorage, projectDatabase, timeStamp } from "../firebase/config";

const useStorage = (file) => {
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //reference...
    const storageReference = projectStorage.ref(file.name);
    const databaseReference = projectDatabase.collection("images")

    storageReference.put(file).on(
      "state_changed",
      (snapShot) => {
        let percentage =
          (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        let url = await storageReference.getDownloadURL();
        setUrl(url);
        const createdAt = timeStamp()
        databaseReference.add({ url, createdAt})
      }
    );
  }, [file])

  return { error, progress, url };
};

export default useStorage;
