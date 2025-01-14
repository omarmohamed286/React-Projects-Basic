import React, { useState } from "react";
import { Row, Navbar, Container, Nav, Form, Button } from "react-bootstrap";

const NavBar = ({ filterBySearch }) => {
  const [searchValue, setsearchValue] = useState("");

  const onSearch = () => {
    filterBySearch(searchValue);
    setsearchValue("");
  };
  return (
    <Row>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">مطعم جديد</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="ابحث"
                className="mx-2"
                onChange={(e) => setsearchValue(e.target.value)}
                value={searchValue}
              />
              <Button onClick={() => onSearch()} className="btn-search">
                بحث
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
