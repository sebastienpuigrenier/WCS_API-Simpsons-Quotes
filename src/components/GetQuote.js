import React from "react";

const GetQuote = (props) => {
    const { quoteCard } = props;


console.log("test" + quoteCard)
    return(
        <div>
        <img src={quoteCard.image} alt={quoteCard.character} />
        <p>Name : {quoteCard.character}</p>
            <p>quote : {quoteCard.quote}</p>

        </div>
    )
}

export default GetQuote