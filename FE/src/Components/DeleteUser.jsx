import React from "react";

export default function DeleteUser({ handleUserDelet }) {
  return (
    <div id="deleteEmployeeModal" className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Delete Employee</h4>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this user?</p>
            <p className="text-warning">
              <small>This action cannot be undone.</small>
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={handleUserDelet}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
