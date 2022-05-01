import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "../../shared/Button";
import AgentLayout from "./AgentLayout";
const AgentPost = () => {
  const [feature, setFeature] = useState("");
  const [features, setFeatures] = useState([""]);

  const handleFeature = () => {
    setFeatures([...features, feature]);
    setFeature("");
  };
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
              className='rounded-0'
            />
          </Form.Group>
          <div className='row'>
            <div className='col-lg-4'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Purpose</Form.Label>
                <Form.Control as='select'>
                  <option value=''>--Select--</option>
                  <option value='Rent'>Rent</option>
                  <option value='Sale'>Sale</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className='col-lg-4'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Type of Property</Form.Label>
                <Form.Control as='select'>
                  <option value=''>--Select--</option>
                  <option value='Rent'>Rent</option>
                  <option value='Sale'>Sale</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className='col-lg-4'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Sub-type of Property</Form.Label>
                <Form.Control as='select'>
                  <option value=''>--Select--</option>
                  <option value='Rent'>Rent</option>
                  <option value='Sale'>Sale</option>
                </Form.Control>
              </Form.Group>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Bedrooms</Form.Label>
                <Form.Control as='select'>
                  <option value=''>--Select--</option>
                  <option value='Rent'>1</option>
                  <option value='Sale'>2</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className='col-lg-3'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Bathrooms</Form.Label>
                <Form.Control as='select'>
                  <option value=''>--Select--</option>
                  <option value='Rent'>1</option>
                  <option value='Sale'>2</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className='col-lg-3'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Toilets</Form.Label>
                <Form.Control as='select'>
                  <option value=''>--Select--</option>
                  <option value='Rent'>1</option>
                  <option value='Sale'>2</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className='col-lg-3'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Size</Form.Label>
                <Form.Control
                  type='text'
                  name='size'
                  placeholder='1 sqm'
                  className='rounded-0'
                />
              </Form.Group>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>State</Form.Label>
                <Form.Control as='select'>
                  <option value=''>--Select--</option>
                  <option value='Rent'>Rent</option>
                  <option value='Sale'>Sale</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className='col-lg-4'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Locality</Form.Label>
                <Form.Control as='select'>
                  <option value=''>--Select--</option>
                  <option value='Rent'>Rent</option>
                  <option value='Sale'>Sale</option>
                </Form.Control>
              </Form.Group>
            </div>
          </div>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Street</Form.Label>
            <Form.Control
              type='text'
              name='street'
              placeholder='Enter street'
              className='rounded-0'
            />
          </Form.Group>
          <div className='row'>
            <div className='col-lg-4'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type='number'
                  name='price'
                  placeholder='3000'
                  className='rounded-0'
                />
              </Form.Group>
            </div>
            <div className='col-lg-8'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as='textarea'
                  placeholder='Description of property'
                ></Form.Control>
              </Form.Group>
            </div>
          </div>

          <p className='text-secondary m-0'>
            Add special features e.g security, parking space e.t.c
          </p>
          {features.length !== 0 &&
            features.map((item) => (
              <h6 className='my-3 me-2 d-inline-block' key={item}>
                {item}
              </h6>
            ))}
          <div className='row align-content-center'>
            <div className='col-lg-4'>
              <Form.Group className='mb-3'>
                <Form.Control
                  type='text'
                  value={feature}
                  onChange={(e) => setFeature(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className='col-lg-4'>
              <Button title='add' handleClick={handleFeature} />
            </div>
          </div>

          <Form.Group className='mb-3'>
            <Form.Check
              key='furnished'
              id='furnished'
              type='checkbox'
              label='Furnished'
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Check
              key='condition'
              id='condition'
              type='checkbox'
              label='Newly-built'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Upload images</Form.Label>
            <Form.Control type='file' name='image' className='rounded-0' />
          </Form.Group>

          <div className='mt-5 text-center'>
            <Button title='upload property' />
          </div>
        </div>
      </div>
    </AgentLayout>
  );
};

export default AgentPost;
