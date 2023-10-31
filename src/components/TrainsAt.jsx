import PropTypes from "prop-types";

import { useState, useEffect } from "react";
function TrainsAt({ slug }) {
  const [fighter, setFighter] = useState(null);

  useEffect(() => {
    fetch(`https://ioayoub.fr/api/mma-fighters/${slug}`)
      .then((res) => res.json())
      .then((data) => setFighter(data));
  }, [slug]);

  const handleClick = () => {
    alert(`${fighter.name} trains at ${fighter.trainsAt}`);
  };

  return (
    <button className="bg-gray-300 rounded-xl h-8 px-2" onClick={handleClick}>
      Training place
    </button>
  );
}

TrainsAt.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default TrainsAt;
