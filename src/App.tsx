import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  // return <h2 className={styles.heading}>Home - Digital Broker</h2>;

  return (
    <Container>
      <Row>
        <Col>
          <h2 className={styles.heading}>Home - Digital Broker</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
