import React from "react";
 
const TextArea = ({typing}) => {
    return(
        <p id="textArea">
            <textarea id="demoAnalysis" cols="30" rows="10" placeholder="Ex: 1 Cup Milk" onChange={typing}>
            </textarea>
        </p>
    );
}

export default TextArea;