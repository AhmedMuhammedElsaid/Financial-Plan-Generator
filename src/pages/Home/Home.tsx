import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Wrapper>
            <Link to={"/questionnaire"}>
              <Button size="lg" color=" bg-danger" className="mx-2  text-light text-capitalize">
                generate business plan
              </Button>
            </Link>
          </Wrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
