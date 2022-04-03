import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from '../shared/Button';
import Image from '../shared/Image';
import StaffImage from '../assets/images/p2.jpg';
import TeamCardModal from '../utils/TeamCardModal';
const TeamCard = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className='col-lg-3 col-md-6 mb-5'>
      <TeamCardModal
        show={modalShow}
        image={StaffImage}
        alt='Ike'
        onHide={() => setModalShow(false)}
        name='Onuoraj Ike'
        position='Lead developer'
        about='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ex tempora eligendi vel iure distinctio veritatis rerum! Consectetur tempore cupiditate cumque repudiandae vitae. Ducimus alias ipsa asperiores aperiam, velit enim?'
      />
      <Card className='border-0 text-center shadow '>
        <Image src={StaffImage} h={15} unit='rem' alt='staff' />
        <Card.Body>
          <Card.Title>Onuorah Ike</Card.Title>
          <Card.Text>Lead developer</Card.Text>
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
