import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

function App() {
  return (
    <div className="selam">
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row>
          <Col xs="3">
            <ProductList title="Product List"></ProductList>
          </Col>
          <Col xs="3">
            <CategoryList title="Category List"> </CategoryList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
