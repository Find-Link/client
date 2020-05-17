import React, {
  memo, ReactElement, useState, ChangeEvent,
} from 'react';
import {
  Col,
  Card,
  Tab,
  Row,
  Nav,
  ListGroup,
  Form,
  Button,
} from 'react-bootstrap';
import _ from 'lodash';

import { alternateRendering } from '../../services/utils';

type Link = Record<'_id' | 'text' | 'link', string>;

export interface ListLink {
  _id: string;
  title: string;
  links: Link[];
}

export interface Props {
  title: string;
  thumbnail: string;
  listLinks: ListLink[];
  sources: Link[];
  tags: Link[];
  editable?: boolean;
}

function CardLinkItem({
  title: titleProps, thumbnail: thumbnailProp, listLinks: listLinksProp, sources: sourcesProp, tags: tagsProp, editable = false,
}: Props): ReactElement {
  const [{
    title, thumbnail, listLinks, sources, tags,
  }, setState] = useState({
    title: titleProps, thumbnail: thumbnailProp, listLinks: listLinksProp, sources: sourcesProp, tags: tagsProp,
  });

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onListLinksTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      listLinks: listLinks.map((listLinksData) => (id === listLinksData._id ? { ...listLinksData, title: value } : listLinksData)),
    }));
  };

  const onListLinksTitleDelete = (id: string) => (): void => {
    const filterListLinks = listLinks.filter(({ _id }) => id !== _id);

    setState((prevState) => ({
      ...prevState,
      listLinks: filterListLinks,
    }));
  };

  const onListLinksItemChange = (id: string, linkId: string) => (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    const listLinkIndex = listLinks.findIndex(({ _id }) => id === _id);
    const linkIndex = listLinkIndex !== -1 ? listLinks[listLinkIndex].links.findIndex(({ _id }) => linkId === _id) : -1;

    if (listLinkIndex !== -1 && linkIndex !== -1) {
      listLinks[listLinkIndex].links[linkIndex] = { ...listLinks[listLinkIndex].links[linkIndex], [name]: value };

      setState((prevState) => ({
        ...prevState,
        listLinks: [...listLinks],
      }));
    }
  };

  const onListLinksItemDelete = (id: string, linkId: string) => (): void => {
    const listLinkIndex = listLinks.findIndex(({ _id }) => id === _id);
    const linkIndex = listLinkIndex !== -1 ? listLinks[listLinkIndex].links.findIndex(({ _id }) => linkId === _id) : -1;

    if (listLinkIndex !== -1 && linkIndex !== -1) {
      listLinks[listLinkIndex].links = listLinks[listLinkIndex].links.filter(({ _id }) => linkId !== _id);

      setState((prevState) => ({
        ...prevState,
        listLinks: [...listLinks],
      }));
    }
  };

  const renderLinks = (links: Link[]): ReactElement[] => links.map(({ text, link }) => <a key={link} href={link} target="_blank" rel="noopener noreferrer">{text}</a>);

  const { keyElements: renderKeyElements, itemElements: renderItemElements, firstKey } = ((): Record<'keyElements' | 'itemElements', ReactElement[]> & { firstKey: string } => {
    const keyElements = listLinks.map(({ _id, title: listLinkTitle }) => (
      <div key={_id} className="mb-1 card-link-item-right-navigation-item">
        <Nav.Item className="card-link-item-right-navigation-item-link">
          <Nav.Link eventKey={_id}>
            {alternateRendering(
              editable,
              <Form.Control key={_id} type="text" value={listLinkTitle} id={_id} onChange={onListLinksTitleChange} />,
              listLinkTitle,
            )}
          </Nav.Link>
        </Nav.Item>
        <Button variant="danger" onClick={onListLinksTitleDelete(_id)} className="card-link-item-right-navigation-item-button">
          <i className="fas fa-trash-alt" />
        </Button>
      </div>
    ));

    const itemElements = listLinks.map(({ _id, links }) => (
      <Tab.Pane key={_id} eventKey={_id}>
        <ListGroup className="card-link-item-right-list">
          {links.map(({ _id: linkId, text, link }) => alternateRendering(
            editable,
            <div className="d-flex mb-2" key={linkId}>
              <Form.Control className="mr-2" type="text" value={link} name="link" onChange={onListLinksItemChange(_id, linkId)} />
              <Form.Control className="mr-4" type="text" value={text} name="text" onChange={onListLinksItemChange(_id, linkId)} />
              <Button variant="danger" onClick={onListLinksItemDelete(_id, linkId)}>
                <i className="fas fa-trash-alt" />
              </Button>
            </div>,
            <ListGroup.Item key={linkId} as="a" href={link} target="_blank" rel="noopener noreferrer">
              {text}
            </ListGroup.Item>,
          ))}
        </ListGroup>
      </Tab.Pane>
    ));

    const firstKeyTitle = listLinks.length > 0 ? _.first(listLinks)._id : '';

    return { keyElements, itemElements, firstKey: firstKeyTitle };
  })();

  return (
    <Col md={editable ? 12 : 6} className="card-link-item">
      <Card>
        <Card.Header>
          {alternateRendering(editable, <Form.Control type="text" value={title} name="title" onChange={onInputChange} />, title)}
        </Card.Header>
        <Card.Body>
          <Row>
            <Col lg={4} className="card-link-item-left mb-4 mb-lg-0">
              <img src={thumbnail} alt="Thumbnail" />
            </Col>
            <Col lg={8} className="card-link-item-right">
              <Tab.Container id="left-tabs-example" defaultActiveKey={firstKey}>
                <Row>
                  <Col md={editable ? 12 : 4}>
                    <Nav variant="pills" className="card-link-item-right-navigation">
                      {renderKeyElements}
                    </Nav>
                  </Col>
                  <Col md={editable ? 12 : 8}>
                    <Tab.Content>
                      {renderItemElements}
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Row>
          <Row>
            <Col className="card-link-item-source">
              <span>Source: </span>
              {renderLinks(sources)}
            </Col>
          </Row>
          <Row>
            <Col className="card-link-item-tag">
              <span>Tags: </span>
              {renderLinks(tags)}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default memo(CardLinkItem);
