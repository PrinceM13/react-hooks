import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar.jsx";

export const HomePage = () => {
  const [count, setCount] = useState(0);
  const [coverImages, setCoverImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [duration, setDuration] = useState(1);

  useEffect(() => {
    const fetchCoverImages = async () => {
      fetch("https://shibe.online/api/shibes?count=10")
        .then((res) => res.json())
        .then((res) => setCoverImages(res));
    };
    fetchCoverImages();
  }, []);

  useEffect(() => {
    const MIN = 1;
    const currentDuration = duration < MIN ? MIN : duration;
    const interval = setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % 10);
    }, currentDuration * 1000);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <>
      <Navbar />
      <h1>Welcome to my homepage</h1>
      {/* <h1>{count}</h1> */}
      {/* <button onClick={() => setCount(count + 1)}>+1</button> */}
      {/*  TODO: Cover Images */}
      <section style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <h1>{currentIndex}</h1>
        <div>
          <img src={coverImages[currentIndex]} height={250} />
        </div>
        <div>
          <input value={duration} onChange={(e) => setDuration(e.target.value)} />
        </div>

        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "2rem" }}>
          {coverImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              width={50}
              style={{ border: currentIndex === idx ? "0.5rem solid red" : "" }}
            />
          ))}
        </div>
      </section>
      {/*  TODO: Jokes */}
    </>
  );
};
