import { useState } from "react";

const useFetchActivity = (filter: string) => {
  const [activity, setActivity] = useState<string>("No hi ha activitat");

  const fetchActivity = () => {
    const apiUrl =
      import.meta.env.MODE === "development"
        ? "/api"
        : import.meta.env.VITE_API_URL;

    fetch(`${apiUrl}/filter?type=${filter}`)
      .then((res) => res.json())
      .then((data) => {
        const randomNumber = Math.floor(Math.random() * data.length);
        setActivity(data[randomNumber].activity);
      })
      .catch((err) => console.log(err));

    return;
  };

  return { activity, fetchActivity };
};

export default useFetchActivity;
