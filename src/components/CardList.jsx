import { useState, useEffect } from "react";
import Card from "./Card";

function CardList() {
  const [fighters, setFighters] = useState(null);

  useEffect(() => {
    fetch("https://ioayoub.fr/api/mma-fighters")
      .then((res) => res.json())
      .then((data) => setFighters(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-row flex-wrap gap-8 justify-center my-16">
      {fighters &&
        fighters.map((f) => (
          <Card
            key={f.slug}
            image={f.imgUrl}
            name={f.name}
            nickname={f.nickname}
            category={f.category}
            slug={f.slug}
          />
        ))}
    </div>
  );
}

export default CardList;
