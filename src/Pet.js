import React from "react";

export default function Pet({ name, animal, breed }) {
  //using destructuring
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
}
