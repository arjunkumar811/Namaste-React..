import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props); 

        this.state ={
            userInfo: {
            name: "Dummy",
            location: "Default",
            avatar_url: "https://dummy.photo.com",
            
            },
        };

        console.log(this.props.name +"child Constructor");
        
    }

    async componentDidMount() {
        console.log("Child component did mount");
        const data = await fetch ("https://api.github.com/users/arjunkumar811");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
        

    }
    
    componentDidUpdate() {
        console.log("Did update is called later");
        
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        
    }

    render() {
        const {name, location, avatar_url} = this.state.userInfo;
// const {count} = this.state;

console.log(" child Render");


        return <div className="user-card">

<img src={avatar_url} alt="User Avatar" />

        <h1>Name: {name}</h1>
        <h1>Location: {location}</h1>
        <h1>Contact:7676......</h1>
        <h1>Emain:ku....@gmail.com</h1>
           </div>
    }
}

export default UserClass;




// React LifeCycle Event
// - https://www.geeksforgeeks.org/reactjs-lifecycle-components/



/*
-Constructor
-Render (Dammy Data)
-<HTML Dummy Data render>
-ComponentDidMount is called
-API called
-this.setState()
- UPDate
- render(API Date)
-<HTML loaded... new api date> user will see the result
-ComponenetDidUpdate
*/