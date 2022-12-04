import './header.css'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../redux/slice';

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return(
        <div className="header">
            <Navbar variant='dark'>
                <Container>
                        <div className="logo-and-name">
                            <img alt="logo" src="https://dec-mkt.imgix.net/font-awesome_4-7-0_car_256_0_ffffff_none.png?v=1595523505&auto=format,compress"/>
                            Autoria
                        </div>
                        <Nav style={{fontSize: 25, marginLeft: 400}}>
                            <Nav.Link as={Link} to="/" style={{marginRight: 50}}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/catalog" style={{marginRight: 50}}>Catalog</Nav.Link>
                            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                        </Nav>
                        <Button style={{marginLeft: 320}} onClick={() => {
                            localStorage.clear()
                            dispatch(setLoggedIn(false))
                            navigate("/")}} 
                            variant='light'>Sign out</Button>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;