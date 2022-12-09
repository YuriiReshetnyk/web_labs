import "./catalog.css";
import Items from "./Items/items";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getSortedCars } from "../../API/api";

function Catalog() {
  const [sortBy, setSortBy] = useState("Sort by: ");
  const [sortingOrder, setSortingOrder] = useState("Sorting order: ");
  const [searchValue, setSearchValue] = useState("");

  const [cars, setCars] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    getSortedCars(sortBy, sortingOrder,
      (res) => {
        setCars(res.data);
      },
      (err) => {
        console.log(err);
        alert(err);
      }
    );
  }, [sortBy, sortingOrder]);

  return (
    <div className="catalog">
      <div className="filter-bar">
        <div className="filters">
          <DropdownButton
            className="dropdown"
            as={ButtonGroup}
            variant="secondary"
            title={sortBy}
          >
            <Dropdown.Item onClick={() => setSortBy("price")} eventKey="1">
              Price
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSortBy("horsepower")} eventKey="2">
              Horsepower
            </Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            className="dropdown"
            as={ButtonGroup}
            variant="secondary"
            title={sortingOrder}
          >
            <Dropdown.Item onClick={() => setSortingOrder("asc")} eventKey="1">
              Ascending
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSortingOrder("desc")} eventKey="2">
              Descending
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search..."
            className="me-2"
            aria-label="Search"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Form>
      </div>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <Items
          cars={cars}
          searchValue={searchValue}
        />
      )}
    </div>
  );
}

export default Catalog;
