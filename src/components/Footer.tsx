import React, { ReactElement, memo } from 'react';
import {
  Row,
  Col,
  Container,
  Form,
  Button,
} from 'react-bootstrap';
import Link from 'next/link';

function Footer(): ReactElement {
  return (
    <footer className="footer">
      <Container fluid className="footer-container">
        <Row>
          <Col md={4}>
            <div className="footer-brand">
              <img src="/assets/img/logo.png" alt="Logo" />
              <p>
                Findlink la trang web ho tro tim link tong hop tu nhieu nguon. Giup toi uu thoi gian cho moi nguoi
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-link">
              <span>Quick link</span>
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/game">
                    <a>Game</a>
                  </Link>
                </li>
                <li>
                  <Link href="/application">
                    <a>Application</a>
                  </Link>
                </li>
                <li>
                  <Link href="/manga">
                    <a>Manga</a>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Your email" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <p className="footer-copyright">@Copyright 2020 Find Link</p>
    </footer>
  );
}

export default memo(Footer);
