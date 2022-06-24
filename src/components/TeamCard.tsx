import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "../shared/Button";
import Image from "../shared/Image";
import TeamCardModal from "../utils/TeamCardModal";

interface IProps {
  name: string;
  title: string;
  writeup: string;
  img: string;
}
const TeamCard: React.FC<IProps> = ({ name, title, writeup, img }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className='col-lg-3 col-md-6 mb-5'>
      <TeamCardModal
        show={modalShow}
        image={img}
        alt='Ike'
        onHide={() => setModalShow(false)}
        name={name}
        position={title}
        about={writeup}
      />
      <Card className='border-0 text-center shadow '>
        <Image src={img} h={15} unit='rem' alt='staff' />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{title}</Card.Text>
          <Button
            title='read bio'
            loading={false}
            handleClick={() => setModalShow(true)}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default TeamCard;
