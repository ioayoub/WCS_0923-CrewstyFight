import PropTypes from "prop-types";

import TrainsAt from "./TrainsAt";

function Card({ image, name, nickname, category, slug }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-row flex-wrap">
      <img className="w-full" src={image} alt={`ìmage de ${name}`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{nickname}</p>
      </div>

      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {category}
        </span>
      </div>
      <TrainsAt slug={slug} />
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Card;
