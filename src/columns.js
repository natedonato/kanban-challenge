import React from 'react';
import Column from './singleColumn';
import './columnStyle.css';

class Columns extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            columns: JSON.parse(localStorage.getItem('columns')) || [
                {name: "Winnie", cards: ["Card1", "Card2"], color: '#8E6E95'},
                {name: "Bob", cards: ["card3", "card4"], color: '#39A59C' },
                {name: "Thomas", cards: ["Card5", "card6"], color: '#344759' },
                {name: "George", cards: ["Card7", "Card8"], color: '#E87413' },
            ]
        };
        this.addCard = this.addCard.bind(this);
        this.moveCard = this.moveCard.bind(this);
    }

    addCard(idx){
        let newCard = window.prompt("Please enter card text: ");
        let columns = this.state.columns;
        columns[idx].cards.push(newCard);
        this.setState({columns}, () => {
            localStorage.setItem('columns', JSON.stringify(this.state.columns));
        });
    }

    moveCard(idx, cardIdx, direction){
        let columns = this.state.columns;
        let card = columns[idx].cards[cardIdx];
        columns[idx].cards.splice(cardIdx, 1);

        if(direction === "left"){
            columns[idx - 1].cards.push(card);
        }else{
            columns[idx+1].cards.push(card);
        }

        this.setState({
            columns
        }, () => {
            localStorage.setItem('columns', JSON.stringify(this.state.columns));
        });
    }

    render(){
        

        return(
            <div className="ColumnContainer">
                {this.state.columns.map((col, idx) => 
                    <Column moveCard={this.moveCard} addCard={this.addCard} idx={idx} name={col.name} cards={col.cards} key={idx} color={col.color}/>
                )}
            </div>
        )
    }
}



export default Columns;