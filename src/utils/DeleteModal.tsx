import React from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { adminDeleteProperty, deleteArticle } from "../slices/adminSlice";
import { deleteProperty } from "../slices/propertySlice";
import { deleteEnquiry } from "../slices/enquirySlice";

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
                  if (props?.type === "admin-property") {
                    dispatch(adminDeleteProperty(props?.data));
                  } else if (props?.type === "property") {
                    dispatch(deleteProperty(props?.data));
                  } else if (props?.type === "article") {
                    dispatch(deleteArticle(props?.data));
                  } else {
                    dispatch(deleteEnquiry(props?.data));
                  }
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
