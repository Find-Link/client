import React, { ReactElement } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GalleryLink from '../components/Gallery/GalleryLink';
import CardLink from '../components/Card/CardLink';

const data = [
  {
    image: 'https://lumiere-a.akamaihd.net/v1/images/b_thelionking2019_header_poststreet_mobile_18276_8dd5ba33.jpeg?region=0,0,640,430',
    link: '/movie/lion-king',
  },
  {
    image: 'https://lumiere-a.akamaihd.net/v1/images/b_thelionking2019_header_poststreet_mobile_18276_8dd5ba33.jpeg?region=0,0,640,430',
    link: '/movie/lion-king',
  },
  {
    image: 'https://lumiere-a.akamaihd.net/v1/images/b_thelionking2019_header_poststreet_mobile_18276_8dd5ba33.jpeg?region=0,0,640,430',
    link: '/movie/lion-king',
  },
  {
    image: 'https://lumiere-a.akamaihd.net/v1/images/b_thelionking2019_header_poststreet_mobile_18276_8dd5ba33.jpeg?region=0,0,640,430',
    link: '/movie/lion-king',
  },
];

function Home(): ReactElement {
  return (
    <Container>
      <Row>
        <Col>
          <GalleryLink data={data} />
          <CardLink />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
