import React from "react";

export default function Question(props) {
    let answers = "";

    console.log(props.answers)

    for (const [key, value] in Object.entries(props.answers)) {
        answers += " " + `${value}`;
    }


    return (
        <>
            <p>{props.question}</p>
            <p>{answers}</p>
        </>
    )
};