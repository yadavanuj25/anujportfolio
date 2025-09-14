import React, { useState, useEffect } from "react";
import AppRouter from "./routers/AppRouter";
import PreLoader from "./components/loaders/PreLoader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <main className="overflow-x-hidden bg-white text-dark">
      {loading ? <PreLoader /> : <AppRouter />}
    </main>
  );
};

export default App;
