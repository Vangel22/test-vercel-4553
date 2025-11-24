import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/data`);
      const resData = await res.json();
      if (resData) {
        setData(resData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => await fetchData())();
  }, []);

  return (
    <>
      <h1>Connecting via Vercel</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {data && data.map((d) => <span key={d.id}>{d.name}</span>)}
      </div>
    </>
  );
}

export default App;
