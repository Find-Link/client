import React, { ReactElement, useState } from 'react';
import {
  Form,
  Button,
} from 'react-bootstrap';
import Select from 'react-select';

import CardLinkItem, { imagePlaceHolder, State as CardState } from '../components/Card/CardLinkItem';

type Category = 'movie' | 'game' | 'application' | 'manga';

interface State {
  description: string;
}

function Create(): ReactElement {
  const [{
    title, thumbnail, listLinks, sources, tags, editable,
  }, setCardState] = useState<CardState>({
    title: '',
    thumbnail: imagePlaceHolder,
    listLinks: [],
    sources: [],
    tags: [],
    editable: true,
  });
  const [{ description }, setState] = useState<State>({
    description: '',
  });

  return (
    <Form>
      <CardLinkItem
        title={title}
        thumbnail={thumbnail}
        listLinks={listLinks}
        sources={sources}
        tags={tags}
        editable={editable}
        parentSetState={setCardState}
      />
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Create;
