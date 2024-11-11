// steps to intial a app 
// 1.npm init -y
// 2.npm install -D parcel
// 3.npm install react react-dom
// 4.npx parcel index.html
// 5.make the type: "module"
// 6.remove the main in package.json (Entry point)
// npx parecl build index.html



import React from "react";
import ReactDOM from "react-dom/client";

{/* <div id="parent">
    
    <div id="child">
        <h1> hi there h1 </h1>
        <h2> hi there h2 </h2>
    </div>

    <div id="child">
        <h1> hi there h1 </h1>
        <h2> hi there h2 </h2>
    </div>

</div> */}


///////////////////////////////////////////////
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement("h1", null, "hi there"),
            React.createElement("h2", null, "hi there")
        ],
        React.createElement(
            "div",
            { id: "child2" },
            [
                React.createElement("h1", null, "h1 there"),
                React.createElement("h2", null, "hi there")
            ]
        )
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

    


   




// const name1 = React.createElement("h1",
//      { id: "heading" },
//       "hello world");

// const root = ReactDOM.createRoot(document.getElementById ("root"));

// root.render(name1);
