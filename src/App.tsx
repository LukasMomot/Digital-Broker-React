import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SearchPage from "./stocks-search/SearchPage";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Router>
            <Switch>
              <Route path="/">
                <SearchPage />
              </Route>
            </Switch>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
