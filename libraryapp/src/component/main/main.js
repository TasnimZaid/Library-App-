import React from "react";
import initState from '../book';
import  Card from '../card'

function Main() {
    const arr = initState.books;

    return (
        <div style={containerStyle}>
           {

            arr.map((book, index) => (
                <Card key={index} book={book}/>

            ))

           }
        </div>
    );
}
const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
};

export default Main;