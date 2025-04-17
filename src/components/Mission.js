import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missions';

function Mission({ mission }) {
  const {
    id, name, description, joined,
  } = mission;
  const dispatch = useDispatch();

  const handleJoinMission = () => {
    dispatch(joinMission(id));
  };
  return (
    <tr>
      <td className="border p-6 font-bold">{name}</td>
      <td className="border p-3 ">{description}</td>
      <td className="border p-3">
        {!joined ? (
          <span className="bg-gray-400 border-0 rounded text-white px-3 py-2 text-base block">
            NOT A MEMBER
          </span>
        )
          : (
            <span className="bg-green-500 border-0 rounded text-white px-3 py-2 text-base block">
              Active Member
            </span>
          )}
      </td>
      <td className="border p-3">
        {!joined ? (
          <button
            className="bg-sky-500 border-0 rounded text-white cursor-pointer px-3 py-2 text-base"
            type="button"
            onClick={handleJoinMission}
          >
            Join Mission
          </button>
        ) : (
          <button
            className="mt-6 px-3 py-2 border border-red-500 text-red-500 bottom-0 rounded-md cursor-pointer"
            type="button"
            onClick={handleJoinMission}
          >
            Leave Mission
          </button>
        )}
      </td>
    </tr>
  );
}
Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joined: PropTypes.bool.isRequired,
  }).isRequired,
};
export default Mission;
