import { useEffect, useState } from "react";
import Card from "./Card"

export default function Store () {
    
    const [card, setCardList] = useState([]);

    const displayCard = () => {
        return card.map((ca, key) =>{
            return <Card key={key} ca={ca} />
        }) 
    };

   const getCard = () => {
        fetch('https://fakestoreapi.com/carts')
            .then(response => response.json())
            .then(response => setCardList(response))
    }
    useEffect(() => { 
        getCard();
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>UserId</th>
                    <th>Date</th>
                    <th>Porducts</th>
                    
                </tr>
            </thead>
            <tbody>
                {displayCard()}
            </tbody>
        </table>
    )
}