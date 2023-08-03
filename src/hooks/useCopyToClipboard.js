import { useEffect } from "react";
import ClipboardJS from "clipboard";

// Work with another library "clipboard"

const useCopyToClipboard = (elementClass, copyText) => {
  useEffect(() => {
    const clipboard = new ClipboardJS(elementClass);
    return () => {
      clipboard.destroy();
    };
  }, [elementClass]);

  const copyToClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(copyText)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((error) => {
          console.error("Failed to copy text to clipboard:", error);
        });
    } else {
      alert("Copying to clipboard is not supported in this browser.");
    }
  };

  return copyToClipboard;
};

export default useCopyToClipboard;
