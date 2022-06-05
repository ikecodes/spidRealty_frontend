import React from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";

const DeleteModal = (props: any) => {
  const dispatch = useDispatch();
  return (
    <Modal
      {...props}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className='d-flex gap-3 flex-wrap flex-md-nowrap'>
          <div>
            <h5>Are you sure you want to delete this?</h5>
            <div>
              <button
                className='btn btn-danger'
                onClick={() => {
                  console.log("action");
                  props.onHide();
                }}
              >
                Yes delete
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;
