import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import colors from "../../constants/colors";
import { PropertyState } from "../../constants/interfaces";
import { states, categories, numbers, types } from "../../constants/selectors";
import Button from "../../shared/Button";
import { postProperty } from "../../slices/propertySlice";
import Toast from "../../utils/Toast";
import AgentLayout from "./AgentLayout";
const AgentPost = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: PropertyState) => state.property);
  const [regions, setRegions] = useState<any>([]);
  const [feature, setFeature] = useState("");

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [toilets, setToilets] = useState("");
  const [size, setSize] = useState("");
  const [state, setState] = useState("");
  const [region, setRegion] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState<string | undefined>("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState<any>([]);
  const [furnished, setFurnished] = useState<any>(false);
  const [newlyBuilt, setNewlyBuilt] = useState<any>(false);
  const [images, setImages] = useState<any>("");

  const handleFeature = () => {
    if (!feature) return;
    setFeatures([...features, feature]);
    setFeature("");
  };
  useEffect(() => {
    setRegions([]);
    const arr = states.find((location) => location.state.name === state);
    if (arr) setRegions(arr?.state.locals);
  }, [state]);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (
      !title ||
      !type ||
      !category ||
      !state ||
      !region ||
      !location ||
      !price ||
      !description ||
      !images
    )
      return Toast("Please input all required fields", "info");
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("type", type);
    formdata.append("category", category);
    formdata.append("bedrooms", bedrooms);
    formdata.append("bathrooms", bathrooms);
    formdata.append("toilets", toilets);
    formdata.append("size", size);
    formdata.append("state", state);
    formdata.append("region", region);
    formdata.append("location", location);
    formdata.append("price", price);
    formdata.append("description", description);
    if (features.length > 0) {
      for (let i = 0; i < features.length; i++) {
        formdata.append("specialFeatures", features[i]);
      }
    }
    formdata.append("features", features);
    formdata.append("furnished", furnished);
    formdata.append("newlyBuilt", newlyBuilt);
    for (let i = 0; i < images.length; i++) {
      formdata.append("images", images[i]);
    }

    await dispatch(postProperty(formdata));

    setTitle("");
    setType("");
    setCategory("");
    setBedrooms("");
    setBathrooms("");
    setToilets("");
    setSize("");
    setState("");
    setRegion("");
    setLocation("");
    setPrice("");
    setDescription("");
    setFeatures([]);
    setFurnished("");
    setNewlyBuilt("");
  };
  return (
    <AgentLayout>
      <div className='row justify-content-center'>
        <div className='col-lg-8'>
          <Form.Group className='mb-3'>
            <Form.Label>
              Title <Text>required</Text>
            </Form.Label>
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
                <Form.Label>
                  Type <Text>required</Text>
                </Form.Label>
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
                <Form.Label>
                  Category <Text>required</Text>
                </Form.Label>
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
                <Form.Label>
                  State <Text>required</Text>
                </Form.Label>
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
                <Form.Label>
                  Region <Text>required</Text>
                </Form.Label>
                <Form.Control
                  as='select'
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                >
                  <option value=''>--Select--</option>
                  {regions.map((region: { name: string; id: number }) => (
                    <option value={region.name} key={region.id}>
                      {region.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </div>
          </div>
          <Form.Group className='mb-3'>
            <Form.Label>
              Location <Text>required</Text>
            </Form.Label>
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
                <Form.Label>
                  Price <Text>required</Text>
                </Form.Label>
                <CurrencyInput
                  id='input-example'
                  name='price'
                  prefix='₦'
                  placeholder='Property price'
                  defaultValue={0}
                  decimalsLimit={2}
                  onValueChange={(value) => setPrice(value)}
                  className='p-2 border'
                />
              </Form.Group>
            </div>
            <div className='col-lg-8'>
              <Form.Group className='mb-3'>
                <Form.Label>
                  Description <Text>required</Text>
                </Form.Label>
                <Form.Control
                  as='textarea'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder='Description of property'
                ></Form.Control>
              </Form.Group>
            </div>
          </div>

          <p className='text-secondary m-0 mb-2'>
            Add special features e.g security, parking space e.t.c
          </p>
          {features.length > 0 &&
            features.map((item: any) => (
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
              checked={furnished}
              onChange={(e) => setFurnished((val: any) => !val)}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Check
              key='condition'
              id='condition'
              type='checkbox'
              label='Newly-built'
              checked={newlyBuilt}
              onChange={(e) => setNewlyBuilt((val: any) => !val)}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>
              Upload images <Text>required</Text>
            </Form.Label>
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

const Text = styled.span`
  color: ${colors.tertiary};
`;
export default AgentPost;
