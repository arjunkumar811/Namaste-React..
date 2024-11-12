import React from "react";
import ReactDOM from "react-dom/client";

// creating heading element using React.createElement

// React.createElement => ReactElement (JS Object) => HTMLElement (render) => DOM (Browser)


// const heading = React.createElement("h1", { id: "heading" }, "Namasate React 🚀");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// Create heading element using JSX

// const jsxHeading = <h1 id="heading" > Namasate react asfd  </h1>

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);


/**
 * React Component
 * Functional component - new way of writeing component
 * Calss component - old way of writeing compoent
 * React component is a function or class that return a React element (JS object)
 */

// React Component
const elem = "Arjun"
// const Title = () => {
// return <h1 className="head" id="heading">
//     <h1>{elem}</h1> Namasate React
// </h1>
// }

const Title = () => (
<h1 className="head" id="heading">
    <h1 style={{color: "red"}}>{elem}</h1>
    Namasate React
</h1>
);

// React Fragment: Behaves like an empty tag
// Components Composition - multiple components can be composed together to create a new component

const HeadingComponent = () => (
    <>
    <Title/>
     {/* {Title()} */}
      {/* <Title></Title> */}
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/> );