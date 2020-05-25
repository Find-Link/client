import React, { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import GalleryLink from '../components/Gallery/GalleryLink';
import CardLink from '../components/Card/CardLink';
// import { LookUp, PropsRecord } from '../services/utils';
// import { PostSchema } from '../actions/post.type';
import CardLinkTitle from '../components/Card/CardLinkTitle';
import reduxStore, { withRedux } from '../services/withRedux';
import { getPosts } from '../actions/post';
import { RootState } from '../reducers';
import { PostSchema } from '../actions/post.type';

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

// type GetServerSideProps = PropsRecord<{ cardLinkData: PostSchema[] }>;

// type Props = LookUp<GetServerSideProps, 'props'>;

function Home(): ReactElement {
  const cardLinkData = useSelector<RootState, PostSchema[]>(({ posts }) => posts);

  console.log(cardLinkData);

  return (
    <>
      <Row>
        <Col>
          <GalleryLink data={data} />
        </Col>
      </Row>
      <Row>
        <CardLinkTitle />
        <CardLink category="application" data={cardLinkData} />
        <CardLink category="game" data={cardLinkData} />
        <CardLink category="manga" data={cardLinkData} />
        <CardLink category="movie" data={cardLinkData} />
      </Row>
    </>
  );
}

export const getServerSideProps = reduxStore.getServerSideProps(
  async ({ store }) => store.dispatch<any>(getPosts()),
);

export default withRedux(Home);
