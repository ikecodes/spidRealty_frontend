import React from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import Image from '../shared/Image';
import colors from '../constants/colors';

interface TeamProps {
  alt: string;
  image: string;
  name: string;
  position: string;
  about: string;
  show: boolean;
  onHide: () => void;
}
const TeamCardModal: React.FC<TeamProps> = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className='d-flex gap-3 flex-wrap flex-md-nowrap'>
          <Image alt={props.alt} src={props.image} h={15} unit='rem' />
          <ContentBox>
            <h4>{props?.name}</h4>
            <h5>{props?.position}</h5>
            <p>{props?.about}</p>
          </ContentBox>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const ContentBox = styled.div`
  color: ${colors.textColor};
  & h5 {
    color: ${colors.primary};
  }
`;

export default TeamCardModal;
