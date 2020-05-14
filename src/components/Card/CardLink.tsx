import React, { memo, ReactElement } from 'react';
import {
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from 'react-bootstrap';

function CardLink(): ReactElement {
  return (
    <div className="card-link">
      <Row className="card-link-search">
        <Col md={6}>
          <Form inline className="card-link-search-form">
            <Form.Label>Search something</Form.Label>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Col>
        <Col md={6} className="card-link-search-filter">
          <span>Filter</span>
          <div className="card-link-search-filter-button">
            <Button variant="outline-success">Relevant</Button>
            <Button variant="outline-success">Popular</Button>
            <Button variant="outline-success">Date</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default memo(CardLink);
