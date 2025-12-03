const TeamCard = ({ avatar, name, message }) => {
  return (
    <div className='team-card'>
      <img
        className='avatar'
        src={`/avatars/${avatar}`}
        alt={`avatar of ${name}`}
      />
      <div className='team-card-text-container'>
        <h3>{name}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default TeamCard;
