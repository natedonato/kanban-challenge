import React from 'react';

function Column(props){
    return(
        <div className="singleColumn">
            <div className="name" style={{backgroundColor: props.color}}><div>{props.name}</div></div>

            {props.cards.map((card, idx)=>
                <div className="card">
                    {props.idx === 0 ? <div className="leftArrow" /> : <div className="leftArrow" onClick={()=>props.moveCard(props.idx, idx, "left")}> {'<'} </div>}
                    <div className="cardText">{card}</div>
                    {props.idx === 3 ? "" : <div className="rightArrow" onClick={()=>props.moveCard(props.idx, idx, "right")}> {'>'} </div>}
                </div>
            )}

            <div className="addCard" onClick={()=>props.addCard(props.idx)}> +Add a card</div>
        </div>
    );
}
    

export default Column;