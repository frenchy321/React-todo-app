import React from "react";

function Form() {
  return (
    <div>
      <div className="todo-icon py-5 d-flex align-items-center justify-content-center">
        <i className="fa-solid fa-pen-clip"></i>
      </div>
      <form className="form-sm container text-center">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            typeOf="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="button" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
