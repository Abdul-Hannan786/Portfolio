import{ useState, useEffect } from "react";
import "../index.css";

const LoadingScreen = () => {
  const [loadingText, setLoadingText] = useState("Booting up... 🚀");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingText("System ready... 🖥️");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className="terminal-loader w-screen h-screen">
          <div className="terminal-header">
            <div className="terminal-title">Terminal</div>
            <div className="terminal-controls">
              <div className="control close"></div>
              <div className="control minimize"></div>
              <div className="control maximize"></div>
            </div>
          </div>
          <div className="w-max flex items-end gap-3">
            <p className="m-0 p-0 h-max text-white">Abdul@Hannan:~$</p>
            <div className="texts">{loadingText}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
