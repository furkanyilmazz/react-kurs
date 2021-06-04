import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

function App() {
  let productInfo = { title: "Product List" };
  let categoryInfo = { title: "Category List" };
  let naviInfo = { title: "Navi Component" };
  return (
    <div className="selam">
      <Container>
        <Row>
          <Navi info={naviInfo}></Navi>
        </Row>
        <Row>
          <Col xs="3">
            <ProductList info={productInfo}></ProductList>
          </Col>
          <Col xs="3">
            <CategoryList info={categoryInfo}> </CategoryList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
