const Delete = (props) => {
  return (
    <i
      className="fa fa-trash delete"
      style={{ marginLeft: 10, color:'red' }}
      onClick={() => props.onDelete(props.element)}
    ></i>
  );
};

export default Delete;
