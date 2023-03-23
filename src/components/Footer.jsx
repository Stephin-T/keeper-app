import React from "react";


const date = new Date();
const currentYear = date.getFullYear();

function Footer(){

    return <div><footer><p>Copyright © Stephin T {currentYear}</p></footer></div>;
}


export default Footer;