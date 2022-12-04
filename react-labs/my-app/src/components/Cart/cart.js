import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {useDispatch} from 'react-redux';
import { addCar, deleteCar } from "../../redux/slice";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cart.css"

function Cart(){
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const handleIncrement = (car) => dispatch(addCar(car));
    const handleDecrement = (car) => dispatch(deleteCar(car));
    const listItems = cart.cars;
    let total_price = 0;
    for(let i of listItems){
        total_price += i.price * i.amount;
    }
    let rendered_items_list = listItems.map((item) => (
        <div className="cart-card" key={item.id}>
            <img alt="car" src={item.image_uri}/>
            <h2>{item.producer}</h2>
            <div className="amount">
                <Button variant="outline-dark" style={{marginRight: 10}} onClick={() => handleDecrement(item)}>-</Button>
                <h1>{item.amount}</h1>
                <Button variant="dark" style={{marginLeft: 10}} onClick={() => handleIncrement(item)}>+</Button>
            </div>
            <h3 className="price">${item.price}</h3>
        </div>
    ));
    return(
        <div className="cart">
            <h1>Shopping cart</h1>
            {rendered_items_list}
            <div className="total-price">
                <h5>Total price:</h5>
                <h4>${total_price}</h4>
            </div>
            <div className="buttons">
                <Button as={Link} to="/catalog" variant="light">Back to catalog</Button>
                <Button as={Link} to="/acceptation_form" variant="dark">Continue</Button>
            </div>
        </div>
    )
}

export default Cart;