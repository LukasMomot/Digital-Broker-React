import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SearchPage from "./stocks-search/pages/SearchPage";
import BuySellPage from "./stocks-search/pages/BuySellPage";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Router>
            <Switch>
              <Route path="/buysell/:symbol" component={BuySellPage} />
              <Route path="/" component={SearchPage} />
            </Switch>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
