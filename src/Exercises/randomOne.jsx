import React from "react";

function RandomOne() {
    return (
        <>  
            <h1>Test title</h1>
            <ol className="testList">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>
            <svg>
                <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
            </svg>
            <form><input type="text"/></form>
        </>
    )
}

export default RandomOne;