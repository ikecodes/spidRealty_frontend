import React from "react";
import { Form } from "react-bootstrap";
import AgentLayout from "./AgentLayout";
const AgentPost = () => {
  return (
    <AgentLayout>
      <div className='row justify-content-center'>
        <div className='col-lg-8'>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              name='title'
              placeholder='Enter property title'
              className='bg-light rounded-0'
            />
          </Form.Group>
        </div>
      </div>
    </AgentLayout>
  );
};

export default AgentPost;
