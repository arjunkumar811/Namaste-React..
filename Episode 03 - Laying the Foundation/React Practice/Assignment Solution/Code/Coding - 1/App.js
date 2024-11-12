import React from "react";
import ReactDOM from "react-dom/client";

//Q1: Create a Nested header Element using React.createElement(h1,h2,h3 inside a
// div with class “title”)

 /** const header = React.createElement("div", {className: "title"} ,  [
    React.createElement("h1", null, "hi there 1"),
    React.createElement("h2", null, "hi there 2"),
    React.createElement("h3", null, "hi there 3")
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header); */





// Q2): Create the same element using JSX

/* const header = (
<div ClassName: "title">
<h1>hi there 1 </h1>
<h2>hi there 2 </h2>
<h3>hi there 3 </h3>
</div>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header); */






//Q3: Create a functional component of the same with JSX

/* const Header = () => (
    <div>
    <h1>hi there 1</h1>
    <h2>hi there 2</h2>
    <h3>hi there 3</h3>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>); */





// Q4): Pass attribute into the tag in JSX

/* const Header = () => (
    <div style={{background: "red"}}>
        <h1 id="h1">hi there 1</h1>
        <h2 id="h2">hi there 2</h2>
        <h3 id="h3">hi there 3</h3>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>); */




// Q5): Composition of Component (Add a component inside another)

/* const App = () => (
<>
<div style={{background: "yellow"}}>
 <Header1/ >
 <Header2/ >
 <Header3/ >
 </div>
 </>
);

const Header1 = () => (
    <h1>iam H1 tag</h1>
);


const Header2 = () => (
    <h1>iam H2 tag</h1>
);


const Header3 = () => (
    <h1>iam H3 tag</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>) */

// Q6): {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

const element = <h1 style={{color: "red"}}>This a React element</h1>


const AnotherComponent = () => (
<h1 style={{color: "yellow"}}>Hi iam AnotherComponent </h1>
);


const App = () => (
    <>
    <div style={{background: "lightblue"}}>
    {element}
    {<AnotherComponent />}
    {AnotherComponent()}
    <AnotherComponent/>
  <AnotherComponent></AnotherComponent>
  </div>  
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)
