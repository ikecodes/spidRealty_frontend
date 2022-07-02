import React from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import colors from "../constants/colors";
import ImageGallery from "react-image-gallery";
import { currencyFormat } from "./Helpers";
const PropertyModal = (props: any) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <ModalContainer>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <List>
            <li>
              <h6>title:</h6>
              <span>{props?.data?.title}</span>
            </li>
            <li>
              <h6>type:</h6>
              <span>{props?.data?.type}</span>
            </li>
            <li>
              <h6>category:</h6>
              <span>{props?.data?.category}</span>
            </li>
            <li>
              <h6>bathrooms:</h6>
              <span>{props?.data?.bathrooms}</span>
            </li>
            <li>
              <h6>bedrooms:</h6>
              <span>{props?.data?.bedrooms}</span>
            </li>
            <li>
              <h6>toilets:</h6>
              <span>{props?.data?.toilets}</span>
            </li>
            <li>
              <h6>state:</h6>
              <span>{props?.data?.state}</span>
            </li>
            <li>
              <h6>region:</h6>
              <span>{props?.data?.region}</span>
            </li>
            <li>
              <h6>location:</h6>
              <span>{props?.data?.location}</span>
            </li>
            <li>
              <h6>price:</h6>
              <span>{currencyFormat(props?.data?.price)}</span>
            </li>
            <li>
              <h6>description:</h6>
              <span>{props?.data?.description}</span>
            </li>
            <li>
              <h6>special features:</h6>
              {props?.data?.specialFeatures.map((feature: string) => (
                <span>
                  {feature}
                  &nbsp;
                </span>
              ))}
            </li>
            <li>
              <h6>furnished:</h6>
              <span>{props?.data?.furnished ? "Yes" : "No"}</span>
            </li>
            <li>
              <h6>Newly Built:</h6>
              <span>{props?.data?.newlyBuilt ? "Yes" : "No"}</span>
            </li>
          </List>
          {props?.data?.images && (
            <ImageGallery
              items={props?.data?.images}
              thumbnailPosition='bottom'
              showPlayButton={false}
              showBullets={true}
              showIndex={true}
            />
          )}
        </Modal.Body>
      </ModalContainer>
    </Modal>
  );
};

const ModalContainer = styled.div`
  background-color: ${colors.secondary};
`;
const List = styled.ul`
  & li {
    display: flex;
    & h6 {
      color: ${colors.primary};
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: capitalize;
      margin-right: 0.5rem;
    }
    & span {
      color: ${colors.grey2};
    }
  }
`;
export default PropertyModal;
