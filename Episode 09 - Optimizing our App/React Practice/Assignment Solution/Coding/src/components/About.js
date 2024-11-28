import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
constructor(props){
super(props);



}

componentDidMount() {
    
}

    render() {

       
        return (
            <div>
                <UserClass />
            </div>
        )
    }
}




// const About = () => {
//     return (
//         <div>
//             <UserClass name={"Arjun"} />
//         </div>
//     )
// }



// life cycle of react //////////////////

// -perent Constructor
// -perent render
// -firstchild Constructor
// -first child Render
// -secoundchild Constructor
// -secound child Render
// -firstChild component did mount
// -secoundChild component did mount
// -parent component did mount


export default About;