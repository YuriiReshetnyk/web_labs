import "./items.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Items(props) {
  let rendered_items_list = [];

  if (props.cars.length > 0) {
    let items_to_render = props.cars.filter(car => car.producer.search(props.searchValue) !== -1);
    rendered_items_list = items_to_render.map((item) => (
      <Card key={item.id} className="card">
        <Card.Img
          style={{ objectFit: "cover", minHeight: 200, paddingBottom: 20 }}
          variant="top"
          src={item.image_uri}
        />
        <Card.Title>{item.producer}</Card.Title>
        <Card.Text>{item.horsepower} hp</Card.Text>
        <div className="price">
          <Card.Text style={{ fontWeight: 500 }}>Price:</Card.Text>
          <Card.Text>$ {item.price}</Card.Text>
        </div>
        <Link
          to="/item"
          state={{
            id: item.id
          }}
        >
          <Button
            style={{ margin: 10, borderRadius: 10, width: 200 }}
            variant="dark"
          >
            View more
          </Button>
        </Link>
      </Card>
    ));
  }

  return <div className="items">
    {rendered_items_list}
    </div>
}

export default Items;
