import React, { memo, ReactElement } from 'react';
import {
  Row, Col, Form, FormControl, Button,
} from 'react-bootstrap';

function CardLinkTitle(): ReactElement {
  return (
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
  );
}

export default memo(CardLinkTitle);
