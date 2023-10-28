import { useEffect, useState } from "react";

const useTextDecryption = (data, interval = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subText, setSubText] = useState("");

  function generateRandomText(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomText = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomText += characters.charAt(randomIndex);
    }
    return randomText;
  }

  // TODO: rotate index every interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % data.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, [data.length, interval]);

  // TODO: generate random text (hint: need another hook)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSubText((previous) => data[currentIndex].slice(0, previous.length + 1));
    }, 50); // interval / data[currentIndex].length

    return () => clearInterval(intervalId);
  }, [data.length, interval, currentIndex]);

  useEffect(() => {
    setSubText("");
  }, [currentIndex]);

  return [
    data[currentIndex],
    subText,
    generateRandomText(data[currentIndex]?.length - subText?.length + 1)
  ];
};

export const ChallengePage = () => {
  const data = ["encrypt access tokens", "share encrypted data", "encrypt credit cards"];
  const [fullText, subText, randomText] = useTextDecryption(data);

  return (
    <div style={{ width: "100vh" }}>
      <h1
        style={{
          textAlign: "start"
        }}
      >
        {fullText}
      </h1>
      <h1
        style={{
          textAlign: "start"
        }}
      >
        {subText}
        {randomText}
      </h1>
    </div>
  );
};
