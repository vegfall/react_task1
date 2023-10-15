import React from "react";

export default function AnswerButton({buttonValue, clickAnswer}) {
    return (
        <button className="questionButton" onClick={clickAnswer}>{buttonValue[1]}</button>
    );
};