import React, { memo, ReactElement } from 'react';
import {
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from 'react-bootstrap';

import CardLinkItem from './CardLinkItem';

function CardLink(): ReactElement {
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
        <CardLinkItem />
      </Row>
    </div>
  );
}

export default memo(CardLink);
