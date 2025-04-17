import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleMission } from '../redux/missions/missions';

function Mission({ mission }) {
  const dispatch = useDispatch();
  const {
    id, name, description, joined,
  } = mission;

  const handleToggleMission = () => {
    dispatch(toggleMission(id));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        {!joined ? (
          <span>
            Not a member
          </span>
        ) : (
          <span>
            Member
          </span>
        )}
      </td>
      <td>
        {!joined ? (
          <button type="button" onClick={handleToggleMission}>
            Join Mission
          </button>
        ) : (
          <button type="button" onClick={handleToggleMission}>
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
