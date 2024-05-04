import { useEffect, useState } from "react";
import { client } from "../client";

// https://www.sanity.io/answers/adding-a-downloadable-file-url-after-uploading-a-pdf-in-sanity-io

const UrlDownload = ({ fileRef, fileTitle }) => {
  const [link, setLink] = useState("");

  useEffect(() => {
    const fetchUrl = async () => {
      if (fileRef) {
        const assetLink = await client.fetch(`*[_id == $id][0].url`, {
          id: fileRef,
        });
        setLink(assetLink);
      }
    };

    fetchUrl();
  }, [fileRef]);

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {fileTitle}
    </a>
  ) : (
    <span>Loading...</span>
  );
};

export default UrlDownload;
