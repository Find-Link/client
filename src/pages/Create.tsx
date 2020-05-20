import React, {
  ReactElement, useState, ChangeEvent, FormEvent,
} from 'react';
import {
  Form,
  Button,
  Col,
} from 'react-bootstrap';
import Select, { ValueType } from 'react-select';
import _ from 'lodash';

import { useDispatch } from 'react-redux';
import CardLinkItem, { imagePlaceHolder, State as CardState } from '../components/Card/CardLinkItem';
import { mutateState } from '../services/utils';
import withApollo from '../services/withApollo';
import { withRedux } from '../services/withRedux';
import { addPost } from '../actions/post';

type Option = Record<'label' | 'value', string>;

export interface State {
  description: string;
  category: Option;
}

const categories: Option[] = [
  {
    label: 'Movie',
    value: 'movie',
  },
  {
    label: 'Game',
    value: 'game',
  },
  {
    label: 'Application',
    value: 'application',
  },
  {
    label: 'Manga',
    value: 'manga',
  },
];

function Create(): ReactElement {
  const [{
    title, thumbnail, thumbnailFile, listLinks, sources, tags, editable,
  }, setCardState] = useState<CardState>({
    title: '',
    thumbnail: imagePlaceHolder,
    thumbnailFile: null,
    listLinks: [],
    sources: [],
    tags: [],
    editable: true,
  });
  const dispatch = useDispatch();

  const [{ description, category }, setState] = useState<State>({
    description: '',
    category: _.first(categories)!,
  });

  const onInputChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    const { name, value } = e.target;

    mutateState({ [name]: value }, setState);
  };

  const onSelectChange = (value: ValueType<Option>): void => {
    mutateState({ category: value }, setState);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const serializePost = {
      title,
      thumbnail: thumbnailFile,
      listLinks: listLinks.map(({ title: listLinksTitle, links }) => ({ title: listLinksTitle, links: links.map(({ text, link }) => ({ text, link })) })),
      sources: sources.map(({ text, link }) => ({ text, link })),
      tags: tags.map(({ text }) => text),
      description,
      category: category.value,
    };

    dispatch(addPost(serializePost));
  };

  return (
    <Form className="row mt-4 mb-4" onSubmit={onSubmit}>
      <CardLinkItem
        title={title}
        thumbnail={thumbnail}
        listLinks={listLinks}
        sources={sources}
        tags={tags}
        editable={editable}
        parentSetState={setCardState}
      />

      <Col md={12}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" as="textarea" rows={3} onChange={onInputChange} />
        </Form.Group>
      </Col>

      <Col md={12}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Category</Form.Label>
          <Select instanceId="react-select" options={categories} value={category} onChange={onSelectChange} />
        </Form.Group>
      </Col>

      <Col md={12}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Col>
    </Form>
  );
}

export default withRedux(withApollo(Create));
