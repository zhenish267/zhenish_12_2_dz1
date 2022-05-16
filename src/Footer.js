import React from "react";


export default function Footer({ contact, termsOfService, privacyPolicy }) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                position: "fixed",
                left: 0,
                bottom: 0,
                width: "100%"
            }}
        >
            <p>{contact}</p>
            <a href="termsOfService">{termsOfService}</a>
            <a href="privacyPolicy">{privacyPolicy}</a>
        </div>
    );
}