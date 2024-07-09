import React from "react";

function Card({book}){
    return(
        <div style={cardStyle}>
            <h2>{book.title}</h2>
            <p>Athor : {book.auther}</p>


        </div>
    );

}
const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
};
export default Card ;