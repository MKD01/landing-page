const ListItem = ({ num, heading, body }) => {
  return (
    <li className='main-li'>
      <div className='orange-background list-num'>{num}</div>
      <div className='li-content'>
        <h4>{heading}</h4>
        <p>{body}</p>
      </div>
    </li>
  );
};

export default ListItem;
