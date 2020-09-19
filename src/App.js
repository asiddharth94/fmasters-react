import React from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";

// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";

// Our App Component; components are basically functions which return some markup
// Also called as Composite Component - a fancy word for the components that we create
const App = () => {
  //   return React.createElement(
  //     "div", // first param - what tag is it
  //     {}, // second param - attributes on the tag, e.g. {id: "container"}
  //     [
  //       //third-param - children of the 'div', if we want multiple chidren, we can pass all in an Array
  //       React.createElement("h1", {}, "Adopt Me!"),
  //       React.createElement(Pet, {
  //         name: "Sniper",
  //         animal: "Dog",
  //         breed: "Retriever",
  //       }),
  //       React.createElement(Pet, {
  //         name: "Pepper",
  //         animal: "Bird",
  //         breed: "Cockatiel",
  //       }),
  //       React.createElement(Pet, {
  //         name: "Billa",
  //         animal: "Cat",
  //         breed: "Mixed",
  //       }),
  //     ]
  //   );
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        {/* <Pet name="Sniper" animal="Dog" breed="Retriever" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Billa" animal="Cat" breed="Mixed" /> */}
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
