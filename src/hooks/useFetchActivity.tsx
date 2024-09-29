import { useState } from "react";

const useFetchActivity = (filter: string) => {
  const [activity, setActivity] = useState<string>("No hi ha activitat");

  const fetchActivity = () => {
    fetch(`/api/filter?type=${filter}`)
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
