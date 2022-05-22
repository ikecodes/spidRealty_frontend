import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import { useSelector } from "react-redux";
import { AuthState } from "../../constants/interfaces";
import { states, categories, numbers, types } from "../../constants/selectors";
import Button from "../../shared/Button";
import Toast from "../../utils/Toast";
import AgentLayout from "./AgentLayout";
const AgentPost = () => {
  const { loading } = useSelector((state: AuthState) => state.auth);
  const [towns, setTowns] = useState<any>([]);
  const [features, setFeatures] = useState([""]);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [toilets, setToilets] = useState("");
  const [size, setSize] = useState("");
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState<string | undefined>("");
  const [description, setDescription] = useState("");
  const [feature, setFeature] = useState("");
  const [furnished, setFurnished] = useState(false);
  const [newlyBuilt, setNewlyBuilt] = useState(false);
  const [images, setImages] = useState<any>("");

  const handleFeature = () => {
    setFeatures([...features, feature]);
    setFeature("");
  };
  useEffect(() => {
    setTowns([]);
    const arr = states.find((location) => location.state.name === state);
    if (arr) setTowns(arr?.state.locals);
  }, [state]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (
      !title ||
      !type ||
      !category ||
      !state ||
      !town ||
      !location ||
      !price ||
      !description ||
      !images
    )
      return Toast("Please input all required fields", "info");
    // const formdata = new FormData();
  };
  return (
    <AgentLayout>
      <div className='row justify-content-center'>
        <div className='col-lg-8'>
          <Form.Group className='mb-3'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Enter property title'
              className='rounded-0'
            />
          </Form.Group>
          <div className='row'>
            <div className='col-lg-4'>
              <Form.Group className='mb-3'>
                <Form.Label>Type</Form.Label>
                <Form.Control
                  as='select'
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value=''>--Select--</option>
                  {types.map((type) => (
                    <option value={type.name} key={type.id}>
                      {type.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </div>
            <div className='col-lg-4'>
              <Form.Group className='mb-3'>
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as='select'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value=''>--Select--</option>
                  {categories.map((category) => (
                    <option value={category.name} key={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3'>
              <Form.Group className='mb-3'>
                <Form.Label>Bedrooms</Form.Label>
                <Form.Control
                  as='select'
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                >
                  <option value=''>--Select--</option>
                  {numbers.map((number) => (
                    <option value={number} key={number}>
                      {number}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </div>
            <div className='col-lg-3'>
              <Form.Group className='mb-3'>
                <Form.Label>Bathrooms</Form.Label>
                <Form.Control
                  as='select'
                  value={bathrooms}
                  onChange={(e) => setBathrooms(e.target.value)}
                >
                  <option value=''>--Select--</option>
                  {numbers.map((number) => (
                    <option value={number} key={number}>
                      {number}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </div>
            <div className='col-lg-3'>
              <Form.Group className='mb-3'>
                <Form.Label>Toilets</Form.Label>
                <Form.Control
                  as='select'
                  value={toilets}
                  onChange={(e) => setToilets(e.target.value)}
                >
                  <option value=''>--Select--</option>
                  {numbers.map((number) => (
                    <option value={number} key={number}>
                      {number}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </div>
            <div className='col-lg-3'>
              <Form.Group className='mb-3'>
                <Form.Label>Size</Form.Label>
                <Form.Control
                  type='text'
                  name='size'
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  placeholder='1 sqm'
                  className='rounded-0'
                />
              </Form.Group>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4'>
              <Form.Group className='mb-3'>
                <Form.Label>State</Form.Label>
                <Form.Control
                  as='select'
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value=''>--Select--</option>
                  {states.map((location) => (
                    <option value={location.state.name} key={location.state.id}>
                      {location.state.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </div>
            <div className='col-lg-4'>
              <Form.Group className='mb-3'>
                <Form.Label>Town</Form.Label>
                <Form.Control
                  as='select'
                  value={town}
                  onChange={(e) => setTown(e.target.value)}
                >
                  <option value=''>--Select--</option>
                  {towns.map((town: { name: string; id: number }) => (
                    <option value={town.name} key={town.id}>
                      {town.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </div>
          </div>
          <Form.Group className='mb-3'>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type='text'
              name='location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder='Enter property location'
              className='rounded-0'
            />
          </Form.Group>
          <div className='row'>
            <div className='col-lg-4'>
              <Form.Group className='mb-3'>
                <Form.Label>Price</Form.Label>
                <CurrencyInput
                  id='input-example'
                  name='price'
                  prefix='₦'
                  placeholder='Property price'
                  defaultValue={0}
                  decimalsLimit={2}
                  onValueChange={(value) => {
                    setPrice(value);
                    console.log(value);
                  }}
                  className='p-2 border'
                />
              </Form.Group>
            </div>
            <div className='col-lg-8'>
              <Form.Group className='mb-3'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as='textarea'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder='Description of property'
                ></Form.Control>
              </Form.Group>
            </div>
          </div>

          <p className='text-secondary m-0'>
            Add special features e.g security, parking space e.t.c
          </p>
          {features.length &&
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
                  onChange={(e) => {
                    if (e.target.value === "") return;
                    setFeature(e.target.value);
                  }}
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
              checked={furnished}
              onChange={(e) => setFurnished((val) => !val)}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Check
              key='condition'
              id='condition'
              type='checkbox'
              label='Newly-built'
              checked={newlyBuilt}
              onChange={(e) => setNewlyBuilt((val) => !val)}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Upload images</Form.Label>
            <Form.Control
              type='file'
              name='image'
              className='rounded-0'
              accept='image/*'
              multiple
              onChange={(e: any) => setImages(e.target.files)}
            />
          </Form.Group>

          <div className='mt-5 text-center'>
            <Button
              title='upload property'
              handleClick={(e) => handleSubmit(e)}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </AgentLayout>
  );
};

export default AgentPost;
