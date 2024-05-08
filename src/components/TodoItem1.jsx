function TodoItem1() {
  
  let todoName = 'Buy Milk';
  let todoDate = '04/10/2023';
  
  return (
    <div className="container">
      <div className="row mj-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-1">
          <button type="button" class="btn btn-danger mj-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
