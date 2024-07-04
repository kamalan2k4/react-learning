const heading = React.createElement(
    "div",{ id:"heading"},
    React.createElement(
        "div",{ id:"heading_1"},
        [React.createElement(
            "h1",
            { id:"heading_2"},
            "Hello World from react!"),
            React.createElement(
                "h2",
                { id:"heading_3"},
                "Hello World from react!")
        ]));
console.log(heading);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);