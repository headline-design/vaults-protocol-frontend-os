import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyPasteTextApp = ({ text, copyText: copyTextOpt, hideIcon }) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyText = copyTextOpt ?? text;

  const onCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <CopyToClipboard text={copyText} onCopy={onCopy}>
      <div style={{display:"flex", alignItems: "center"}}>
        <div className="copyable__text">{text}</div>
        <span style={{marginLeft: ".5rem"}} className={`copy ${isCopied ? "active" : ""}`}>
            
          {isCopied
            ? " copied!"
            : !hideIcon && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 7V7C14 6.06812 14 5.60218 13.8478 5.23463C13.6448 4.74458 13.2554 4.35523 12.7654 4.15224C12.3978 4 11.9319 4 11 4H8C6.11438 4 5.17157 4 4.58579 4.58579C4 5.17157 4 6.11438 4 8V11C4 11.9319 4 12.3978 4.15224 12.7654C4.35523 13.2554 4.74458 13.6448 5.23463 13.8478C5.60218 14 6.06812 14 7 14V14" stroke="#CCD2E3" strokeWidth="2"/>
<rect x="10" y="10" width="10" height="10" rx="2" stroke="#CCD2E3" strokeWidth="2"/>
</svg>

              )}
        </span>
      </div>
    </CopyToClipboard>
  );
};

export default CopyPasteTextApp;