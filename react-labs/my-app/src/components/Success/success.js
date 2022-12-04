import "./success.css"
import SuccessImage from "./assets/success.png"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Success (){
    return(
        <div className="success-container">
            <img className="success-image" alt="success" src={SuccessImage}/>
            <h1>Success!</h1>
            <p>Your order was sent to processing!</p>
            <p>Check your email box for further information</p>
            <Button className="go-back-button" as={Link} to="/catalog" variant="dark">Back to catalog</Button>
        </div>
    )
}

export default Success;