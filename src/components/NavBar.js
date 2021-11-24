import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const elements = links.map(x => {
    return <a key={x} href={"#" + x}> {x} </a>  //the #home is not correct
  })

  return (<nav> {elements} </nav>)
}

export default NavBar;
