import React, { memo, ReactElement } from 'react';
import {
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from 'react-bootstrap';
import faker from 'faker';

import CardLinkItem, { Props as CardLinkItemProps } from './CardLinkItem';
import { WithId } from '../../services/utils';

export type CardLinkData = (CardLinkItemProps & WithId)[];

interface Props {
  category?: string;
  data: CardLinkData;
}

function CardLink({ data }: Props): ReactElement {
  const renderItems = data.map(({
    _id, title, thumbnail, listLinks, sources, tags, editable,
  }) => (
    <CardLinkItem
      key={_id}
      title={title}
      thumbnail={thumbnail}
      listLinks={listLinks}
      sources={sources}
      tags={tags}
      editable={editable}
    />
  ));

  return (
    <div className="card-link">
      <Row className="card-link-search">
        <Col md={6} className="card-link-search-form">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="secondary">Search</Button>
          </Form>
        </Col>
        <Col md={6} className="card-link-search-filter">
          <Button variant="outline-secondary">Relevant</Button>
          <Button variant="outline-secondary">Popular</Button>
          <Button variant="outline-secondary">Date</Button>
        </Col>
      </Row>
      <Row>
        {renderItems}
      </Row>
    </div>
  );
}

const fetchCardLinkData = (): CardLinkData => {
  const res: CardLinkData = [...Array(5)].map(() => ({
    _id: faker.random.uuid(),
    title: faker.name.firstName(),
    thumbnail: faker.image.image(),
    listLinks: [...Array(2)].map(() => ({
      _id: faker.random.uuid(),
      title: faker.name.firstName(),
      links: [...Array(2)].map(() => ({
        _id: faker.random.uuid(),
        text: faker.name.firstName(),
        link: faker.internet.url(),
      })),
    })),
    sources: [],
    tags: [],
    editable: true,
  }));

  return res;
};

export { fetchCardLinkData };

export default memo(CardLink);
