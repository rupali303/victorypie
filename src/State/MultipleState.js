import React, { useState } from 'react'

function MultipleState() {

    const [cards, setCards] = useState([
        {id : 1, count: 0 },
        {id : 2, count: 0 }
    ])


const handleIncrement = (id)=>{
setCards(
    cards.map((card)=>{
return card.id === id ? {...card,count:card.count + 1} : {...card}
    })
)
}
const handleDecrement = (id)=>{
    setCards(
        cards.map((card)=>{
    return card.id === id ? {...card,count:card.count - 1} : {...card}
        })
    )
}

const total = cards.reduce((a,b)=> a + b.count,0)
    return (
        <div >

            {cards.map((card) => {
                return

                <div style={{ height: "400px", width: "400px", border: "1px solid red" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "400px", width: "400px" }}>
                        <div>{card.count}</div>

                        <button onClick={()=>handleIncrement(card.id)}> + </button>
                        <button onClick={()=>handleDecrement(card.id)}> - </button>
                    </div>
                </div>
            })}
        </div>
    )
}

export default MultipleState