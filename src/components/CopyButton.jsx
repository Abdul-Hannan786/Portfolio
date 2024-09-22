import React, { useState } from "react";
import "../index.css";

const ClipboardButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "konainraza105@gmail.com"; // Replace with your actual email

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset tooltip after 2 seconds
    });
  };

  return (
    <button
      className="copy dark:bg-transparent border border-black"
      onClick={copyToClipboard}
    >
      <span data-text-initial="Copied to clipboard" className="tooltip">
        {copied ? "Copied!" : "Copy to clipboard"}
      </span>
      <span>
        <svg
          xmlSpace="preserve"
          style={{ enableBackground: "new 0 0 512 512" }}
          viewBox="0 0 6.35 6.35"
          height="20"
          width="20"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="clipboard w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-md border border-gray-700 group-hover:border-none p-2  rotate-45"
        >
          <g>
            <path
              fill="#00000"
              d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
            ></path>
          </g>
        </svg>
        <svg
          xmlSpace="preserve"
          style={{ enableBackground: "new 0 0 512 512" }}
          viewBox="0 0 24 24"
          height="18"
          width="18"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="checkmark"
        >
          <g>
            <path
              data-original="#000000"
              fill="currentColor"
              d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
            ></path>
          </g>
        </svg>
      </span>
    </button>
  );
};

export default ClipboardButton;
