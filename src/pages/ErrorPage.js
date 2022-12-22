import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError();
    return (
        <div>
            <NavBar/>
            <h1 >404 Error Page</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}