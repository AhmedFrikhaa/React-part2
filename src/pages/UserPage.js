
import {useParams} from "react-router-dom";

export default function UserPage(){

    const params= useParams();
    return (
        <div>
            <h1>User Page number {params.id} </h1>
        </div>
    )
}