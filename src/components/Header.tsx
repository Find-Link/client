import React, { ReactElement, memo } from 'react';
import {
  Navbar, Nav, Form, FormControl, Button,
} from 'react-bootstrap';
import Link from 'next/link';

function Header(): ReactElement {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Find Links</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/" passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link href="/create" passHref>
            <Nav.Link>Create</Nav.Link>
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default memo(Header);
