import "./home.css"
import AutoRiaLogo from './assets/main.png'
import Glass from './assets/Glass-of-water.jpg'
import { Card, Button } from 'react-bootstrap'
import { useState } from "react"


function Home(){
    const [viewMoreClicks, setViewMoreClicks] = useState(1);

    let items = [
        {
            title: "SHOCK!!!",
            text: "To gain 200 kg of weight drink every night only one glass of...",
            buttonText: "Read further"
        },
        {
            title: "SHOCK!!!",
            text: "To gain 200 kg of weight drink every night only one glass of...",
            buttonText: "Read further"
        },
        {
            title: "SHOCK!!!",
            text: "To gain 200 kg of weight drink every night only one glass of...",
            buttonText: "Read further"
        },
        {
            title: "SHOCK!!!",
            text: "To gain 200 kg of weight drink every night only one glass of...",
            buttonText: "Read further"
        },
        {
            title: "SHOCK!!!",
            text: "To gain 200 kg of weight drink every night only one glass of...",
            buttonText: "Read further"
        },
        {
            title: "SHOCK!!!",
            text: "To gain 200 kg of weight drink every night only one glass of...",
            buttonText: "Read further"
        },
        {
            title: "SHOCK!!!",
            text: "To gain 200 kg of weight drink every night only one glass of...",
            buttonText: "Read further"
        },
        {
            title: "SHOCK!!!",
            text: "To gain 200 kg of weight drink every night only one glass of...",
            buttonText: "Read further"
        },
        {
            title: "SHOCK!!!",
            text: "To gain 200 kg of weight drink every night only one glass of...",
            buttonText: "Read further"
        }
    ]

    let itemsToRender = [];
    for(let i = 0; i < viewMoreClicks * 3; i++){
        itemsToRender.push(items[i]);
    }
    let renderedItems = itemsToRender.map(
        (item) => 
                <li>
                    <Card className="home-card">
                        <Card.Img src={Glass}/>
                        <Card.Title>{item.title}</Card.Title>
                        <p className="text">{item.text}</p>                    
                        <Button style={{margin: 10, borderRadius: 10}} variant="dark">{item.buttonText}</Button>
                    </Card>
                </li>
    );

    return(
        <div className="home">
            <div className="home__info">
                <img alt="logo" src={AutoRiaLogo}/>
                <div className="home__info__text">
                    <h1>Autoria</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            <ul>
                {renderedItems}
            </ul>
            <Button onClick={() => setViewMoreClicks(viewMoreClicks + 1)} style={{borderRadius: 10, width: 200, height: 50, margin: 80}} variant="light">View more</Button>
        </div>
    )
}

export default Home;