// # Namaste React 🚀

/*
# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles
*/

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
