import { useState } from "react";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";

const CopyButton = ({ copyItem, children, className }) => {
  const copyToClipboard = useCopyToClipboard(".copy", copyItem);
  const [showNotification, setShowNotification] = useState(false);

  const handleCopyToClipboard = () => {
    setShowNotification(true);
    copyToClipboard();

    setTimeout(() => {
      setShowNotification(false);
    }, 500);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleCopyToClipboard}
        className={`copy ${className}`}
      >
        {children}
      </button>

      {showNotification && (
        <div className="notification top-0 mb-1 m-auto text-center bg-green-300 w-40">
          Password copied
        </div>
      )}
    </>
  );
};

export default CopyButton;
