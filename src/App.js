const Pet = ({name, animal, breed}) => { //using destructuring
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, name),
            React.createElement("h2", {}, animal),
            React.createElement("h2", {}, breed)
        ]
    );
}

// Our App Component; components are basically functions which return some markup
// Also called as Composite Component - a fancy word for the components that we create
const App = () => {
    return React.createElement(
        "div", // first param - what tag is it
        {}, // second param - attributes on the tag, e.g. {id: "container"}
        [ //third-param - children of the 'div', if we want multiple chidren, we can pass all in an Array
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                name: "Sniper",
                animal: "Dog",
                breed: "Retriever"
            }),
            React.createElement(Pet, {
                name: "Pepper",
                animal: "Bird",
                breed: "Cockatiel"
            }),
            React.createElement(Pet, {
                name: "Billa",
                animal: "Cat",
                breed: "Mixed"
            })
        ]
    );
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));