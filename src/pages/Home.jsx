import React, { useEffect, useState } from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api/memes";

const Home = () => {
  const [data, setMemes] = useState([]);
  useEffect(() => {
    getAllMemes().then((memes) => setMemes(memes.data.memes));
  }, []);

  return (
    <div className="row">
      {data.map((meme) => (
        <MemeCard img={meme.url} title={meme.name} />
      ))}
    </div>
  );
};

export default Home;
