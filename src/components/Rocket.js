import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleRocket } from '../redux/rockets/rockets';

function Rocket({ rocket }) {
  const dispatch = useDispatch();
  const {
    id, name, image, description, reserved,
  } = rocket;

  const handleToggleRocket = () => {
    dispatch(toggleRocket(id));
  };

  return (
    <div>
      <img src={image} alt={name} />
      <div>
        <h2>
          {name}
          {reserved && (
          <span>
            Reserved
          </span>
          )}
        </h2>
        <p className="mt-2 text-lg max-w-45 ">{description}</p>
        {reserved ? (
          <button
            className="mt-6 px-3 py-2 border border-red-500 text-red-500 bottom-0 rounded-md cursor-pointer"
            type="button"
            onClick={handleToggleRocket}
          >
            Cancel Reservation
          </button>
        ) : (
          <button
            className="mt-6 px-3 py-2 bg-sky-500 text-white bottom-0 rounded-md cursor-pointer"
            type="button"
            onClick={handleToggleRocket}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
}

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Rocket;
