import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useEffect, useState } from "react";
import { products } from "../utils/products";
import ShopList from "../components/ShopList";
import Banner from "../components/Banner/Banner";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { useLocation } from "react-router-dom";

const Shop = () => {
  const [filterList, setFilterList] = useState();
  // products.filter((item) => item.category === "floor")
  useWindowScrollToTop();
  const location = useLocation();
  const category = location?.state?.category;
  
  useEffect(() => {
    if (category !== "") {
      setFilterList(products.filter((item) => item.category === category));
    } else {
      setFilterList([]);
    }
  }, [category]);
  console.log("category", location, filterList);

  return (
    <Fragment>
      <Banner title="product" />
      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          <Row className="justify-content-center">
            <Col md={4}>
              <FilterSelect setFilterList={setFilterList} />
            </Col>
            <Col md={8}>
              <SearchBar setFilterList={setFilterList} />
            </Col>
          </Row>
        </Container>
        <Container>
          <ShopList productItems={filterList} />
        </Container>
      </section>
    </Fragment>
  );
};

export default Shop;
