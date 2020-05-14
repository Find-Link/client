import React, { memo, ReactElement } from 'react';
import {
  Col,
  Card,
  Tab,
  Row,
  Nav,
  ListGroup,
} from 'react-bootstrap';

function CardLinkItem(): ReactElement {
  return (
    <Col md={6} className="card-link-item">
      <Card>
        <Card.Header>Finding Nemo</Card.Header>
        <Card.Body>
          <Row>
            <Col lg={4} className="card-link-item-left mb-4 mb-lg-0">
              <img src="https://cdn-ssl.s7.disneystore.com/is/image/ShopDisney/mb_story-finding-nemo_launch_2x?$xlargeFull$&fit=constrain&cropN=0,0,1,1" alt="Thumbnail" />
            </Col>
            <Col lg={8} className="card-link-item-right">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={4}>
                    <Nav variant="pills" className="flex-column card-link-item-right-navigation">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Phimmoi</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">FPT TV</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={8}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <ListGroup className="card-link-item-right-list">
                          <ListGroup.Item as="a" href="http://www.phimmoi.net/phim/di-tim-nemo-273/">
                            720p
                          </ListGroup.Item>
                          <ListGroup.Item as="a" href="http://www.phimmoi.net/phim/di-tim-nemo-273/">
                            1080p
                          </ListGroup.Item>
                          <ListGroup.Item as="a" href="http://www.phimmoi.net/phim/di-tim-nemo-273/">
                            720p
                          </ListGroup.Item>
                          <ListGroup.Item as="a" href="http://www.phimmoi.net/phim/di-tim-nemo-273/">
                            1080p
                          </ListGroup.Item>
                          <ListGroup.Item as="a" href="http://www.phimmoi.net/phim/di-tim-nemo-273/">
                            720p
                          </ListGroup.Item>
                          <ListGroup.Item as="a" href="http://www.phimmoi.net/phim/di-tim-nemo-273/">
                            1080p
                          </ListGroup.Item>
                        </ListGroup>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <ListGroup className="card-link-item-right-list">
                          <ListGroup.Item as="a" href="http://www.phimmoi.net/phim/di-tim-nemo-273/">
                            720p
                          </ListGroup.Item>
                          <ListGroup.Item as="a" href="http://www.phimmoi.net/phim/di-tim-nemo-273/">
                            1080p
                          </ListGroup.Item>
                          <ListGroup.Item as="a" href="http://www.phimmoi.net/phim/di-tim-nemo-273/">
                            720p
                          </ListGroup.Item>
                          <ListGroup.Item as="a" href="http://www.phimmoi.net/phim/di-tim-nemo-273/">
                            1080p
                          </ListGroup.Item>
                          <ListGroup.Item as="a" href="http://www.phimmoi.net/phim/di-tim-nemo-273/">
                            720p
                          </ListGroup.Item>
                          <ListGroup.Item as="a" href="http://www.phimmoi.net/phim/di-tim-nemo-273/">
                            1080p
                          </ListGroup.Item>
                        </ListGroup>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Row>
          <Row>
            <Col className="card-link-item-source">
              <span>Source: </span>
              <a href="#" target="_blank">Phimmoi</a>
            </Col>
          </Row>
          <Row>
            <Col className="card-link-item-tag">
              <span>Tags: </span>
              <a href="#" target="_blank">Movie</a>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default memo(CardLinkItem);
