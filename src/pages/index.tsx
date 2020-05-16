import React, { ReactElement } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GalleryLink from '../components/Gallery/GalleryLink';
import CardLink, { CardLinkData, fetchCardLinkData } from '../components/Card/CardLink';
import { LookUp, PropsRecord } from '../services/utils';

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

type GetStaticProps = PropsRecord<{ cardLinkData: CardLinkData }>;

type Props = LookUp<GetStaticProps, 'props'>;

function Home({ cardLinkData }: Props): ReactElement {
  return (
    <Container>
      <Row>
        <Col>
          <GalleryLink data={data} />
        </Col>
      </Row>
      <Row>
        <CardLink data={cardLinkData} />
      </Row>
    </Container>
  );
}


export async function getStaticProps(): Promise<GetStaticProps> {
  const cardLinkData = fetchCardLinkData();

  return {
    props: {
      cardLinkData,
    },
  };
}

export default Home;
