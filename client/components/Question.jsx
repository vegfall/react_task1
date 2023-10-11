import React from "react";

export default function Question(props) {
    const answers = Object.entries(props.answers)
        .filter(value => value[1])
        .map((question) => {
            return <button key={question[0]}>{question[1]}</button>
        })

    return (
        <>
            <p>{props.question}</p>
            <p>{answers}</p>
        </>
    )
};