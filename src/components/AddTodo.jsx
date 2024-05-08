function AddTodo() {
  return (
    <div className="container">
      <div className="row mj-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Task Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-1">
          <button type="button" class="btn btn-success mj-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
