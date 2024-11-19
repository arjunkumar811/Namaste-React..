import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    
    return (
        <div>
        <h1>Oops!!!</h1>
        <h2>Somthing went Wrong</h2>
        <h3>{err.status}</h3>
        <h3>{err.statusText}</h3>
        </div>
    )
}

export default Error;