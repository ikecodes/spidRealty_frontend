/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
import Loader from "../shared/Loader";
import ImageGallery from "react-image-gallery";
import colors from "../constants/colors";
import styled from "styled-components";
import { BsClock } from "react-icons/bs";
import { MdOutlineBathroom, MdOutlineBedroomParent } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import Button from "../shared/Button";
import Tip from "../shared/Tip";
import { getProperty, getSimilarProperty } from "../slices/propertySlice";
import { PropertyState } from "../constants/interfaces";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { currencyFormat } from "../utils/Helpers";
import PropertyCard from "../components/PropertyCard";
// import ShareButton from "../shared/ShareButton";

const MarketplaceView = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { property, similarProperties, loading } = useSelector(
    (state: PropertyState) => state.property
  );
  useEffect(() => {
    dispatch(getProperty(location.state));
  }, [location.state]);
  useEffect(() => {
    let stateSlug = property?.stateSlug || "x";
    let categorySlug = property?.categorySlug || "x";
    dispatch(getSimilarProperty({ stateSlug, categorySlug }));
  }, [property]);
  if (loading) return <Loader />;
  return (
    <Layout>
      <Section>
        <div className='mb-5 d-flex align-items-center justify-content-between border-bottom flex-wrap'>
          <div>
            <h6 className='text-uppercase fw-bold'>for {property?.type}</h6>
            <h4 className='text-capitalize text-dark'>{property?.title}</h4>
            <Container className='d-flex gap-3 text-secondary mb-2'>
              {property?.isPromoted && (
                <span className='border p-1 text-capitalize'>promoted</span>
              )}

              <div className='d-flex align-items-center'>
                <BsClock size={15} className='me-1' />
                <span>
                  Posted {moment(property?.createdAt).startOf("hour").fromNow()}
                </span>
              </div>
              <div className='d-flex align-items-center'>
                <MdLocationPin size={15} />
                <span className='text-capitalize'>
                  {property?.region}, {property?.state}
                </span>
              </div>
            </Container>
          </div>
          <h2>{currencyFormat(property?.price)}</h2>
        </div>

        <div className='row'>
          <div className='col-lg-8'>
            <div
              style={{
                display: "block",
                minHeight: "1px",
                overflow: "auto",
                background: `${colors.grey}`,
              }}
            >
              {property?.images && (
                <ImageGallery
                  items={property?.images}
                  thumbnailPosition='bottom'
                  showPlayButton={false}
                  showBullets={true}
                  showIndex={true}
                />
              )}
            </div>
            <Tip
              title='disclaimer'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium repellendus perferendis odit nisi, dolores voluptas
                mollitia aut. Praesentium placeat eligend'
            />
          </div>
          <div className='col-lg-4'>
            <DescriptionHeader className='mb-3 p-2'>
              description
            </DescriptionHeader>
            <p className='text-secondary'>{property?.description}</p>

            <div className='text-dark d-flex my-3 py-2 justify-content-around text-capitalize border-bottom border-top'>
              {property?.category !== "Lands & Plots" && (
                <>
                  <div className='d-flex flex-column'>
                    <span>
                      {property?.newlyBuilt ? "newly-built" : "fairly used"}
                    </span>
                    <span className='text-secondary'>condition</span>
                  </div>
                  <div className='d-flex flex-column'>
                    <span>
                      {property?.furnished ? "furnished" : "unfurnished"}
                    </span>
                    <span className='text-secondary'>furnishing</span>
                  </div>
                </>
              )}

              {property?.size && (
                <div className='d-flex flex-column'>
                  <span>{property?.size} sqm</span>
                  <span className='text-secondary'>size</span>
                </div>
              )}
            </div>

            {property?.category !== "Lands & Plots" && (
              <div className='text-dark d-flex my-3 gap-3'>
                <div>
                  <MdOutlineBedroomParent size={25} />
                  <span className='ms-1'>{property?.bedrooms} bedrooms</span>
                </div>
                <div>
                  <MdOutlineBathroom size={25} />
                  <span className='ms-1'>{property?.bathrooms} bathroom</span>
                </div>
              </div>
            )}

            {property?.specialFeatures.length > 0 && (
              <h6 className='text-dark mb-3 bg-light p-2 text-center'>
                key features
              </h6>
            )}

            <ul>
              {property?.specialFeatures.map((feature: string) => (
                <li className='my-1 text-capitalize' key={feature}>
                  {feature}
                </li>
              ))}
            </ul>
            <div className='d-flex justify-content-between mt-3'>
              <Link to='/purchase-form' state={property}>
                <Button title='purchase property' />
              </Link>
              {/* <BsBookmarkHeart size={25} role='button' color={colors.primary} /> */}
            </div>
            <div className='d-flex align-items-center border-bottom py-2 my-3 '>
              {/* <ShareButton url={property?.shareUrl} /> */}
              {/* <a
                href={property?.socialShare[0]}
                target='_blank'
                rel='noreferrer'
              >
                <BsTwitter color='#00acee' size={20} className='me-3' />
              </a>
              <a
                href={property?.socialShare[1]}
                target='_blank'
                rel='noreferrer'
              >
                <BsLinkedin color='#0e76a8' size={20} className='me-3' />
              </a>
              <a
                href={property?.socialShare[2]}
                target='_blank'
                rel='noreferrer'
              >
                <BsFacebook color='#3b5998' size={20} className='me-3' />
              </a> */}
            </div>
          </div>
        </div>
        {/* // similar posts */}
        <div className='row mt-5'>
          {similarProperties.length > 0 && (
            <h4 className='text-capitalize text dark mb-3'>similar posts</h4>
          )}

          {similarProperties.length > 0 &&
            similarProperties
              .slice(0, 3)
              .map((property: any) => (
                <PropertyCard
                  key={property._id}
                  id={property._id}
                  title={property.title}
                  state={property.state}
                  region={property.region}
                  price={property.price}
                  image={property.images[0].original}
                  slug={property.slug}
                />
              ))}
        </div>
      </Section>
    </Layout>
  );
};

const DescriptionHeader = styled.h6`
  background-color: ${colors.primary};
  color: ${colors.white};
  text-transform: capitalize;
  text-align: center;
`;

const Container = styled.div`
  & span {
    font-size: 0.8rem;
  }
`;

export default MarketplaceView;
