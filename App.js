const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id: "child1"},
        [React.createElement("h1",{id:"heading"},"I'm a h1 Tag"),
         React.createElement("h2",{id:"heading"},"I'm a h2 Tag")]),
     React.createElement("div",{id: "child2"},
        [React.createElement("h1",{id:"heading"},"I'm a h1 Tag"),
         React.createElement("h2",{id:"heading"},"I'm a h2 Tag")])
    ])

console.log(parent);




const heading = React.createElement("h1", {id : "heading"}, "Hello World from React!!");

const rootEl = ReactDOM.createRoot(document.getElementById("root"));

rootEl.render(parent);