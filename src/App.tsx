import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SearchPage from "./stocks-search/pages/SearchPage";
import BuySellPage from "./stocks-search/pages/BuySellPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
          <ToastContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
