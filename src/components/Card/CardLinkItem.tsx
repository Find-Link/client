import React, { memo, ReactElement } from 'react';
import {
  Col,
  Card,
  Tab,
  Row,
  Nav,
  ListGroup,
} from 'react-bootstrap';

type Link = Record<'text' | 'link', string>;

export interface ListLink {
  title: string;
  links: Link[];
}

export interface Props {
  title: string;
  thumbnail: string;
  listLinks: ListLink[];
  sources: Link[];
  tags: Link[];
  editable: boolean;
}

function CardLinkItem({
  title, thumbnail, listLinks, sources, tags,
}: Props): ReactElement {
  const renderLinks = (links: Link[]): ReactElement[] => links.map(({ text, link }) => <a key={link} href={link} target="_blank" rel="noopener noreferrer">{text}</a>);

  const { keyElements: renderKeyElements, itemElements: renderItemElements, firstKey } = ((): Record<'keyElements' | 'itemElements', ReactElement[]> & { firstKey: string } => {
    const keyElements = listLinks.map(({ title: listLinkTitle }) => (
      <Nav.Item key={listLinkTitle}>
        <Nav.Link eventKey={listLinkTitle}>{listLinkTitle}</Nav.Link>
      </Nav.Item>
    ));

    const itemElements = listLinks.map(({ title: listLinkTitle, links }) => (
      <Tab.Pane key={listLinkTitle} eventKey={listLinkTitle}>
        <ListGroup className="card-link-item-right-list">
          {links.map(({ text, link }) => (
            <ListGroup.Item key={link} as="a" href={link} target="_blank" rel="noopener noreferrer">
              {text}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Tab.Pane>
    ));

    const firstKeyTitle = listLinks.length > 0 ? listLinks[0].title : '';

    return { keyElements, itemElements, firstKey: firstKeyTitle };
  })();

  return (
    <Col md={6} className="card-link-item">
      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Row>
            <Col lg={4} className="card-link-item-left mb-4 mb-lg-0">
              <img src={thumbnail} alt="Thumbnail" />
            </Col>
            <Col lg={8} className="card-link-item-right">
              <Tab.Container id="left-tabs-example" defaultActiveKey={firstKey}>
                <Row>
                  <Col sm={4}>
                    <Nav variant="pills" className="flex-column card-link-item-right-navigation">
                      {renderKeyElements}
                    </Nav>
                  </Col>
                  <Col sm={8}>
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
