import React from "react";
import Response from "./Response";

export default function Question(props) {
    const answer = Object.entries(props.answers)
        .filter(question => question[1])
        .map((question) => {
            return <Response {...question}/>
        });

    return (
        <>
            <p>{props.question}</p>
            <p>{answer}</p>
        </>
    )
};