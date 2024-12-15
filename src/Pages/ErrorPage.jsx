// eslint-disable-next-line no-unused-vars
import React from "react"
import "../App.css"

import {useRouteError,NavLink} from "react-router-dom";

export default function ErrorPage() {
    const error =  useRouteError()
    return <div>
        <h1>Oops! An Error Occurred</h1>
        {error && <p>{error.data}</p>}
        {console.log(error)}
        {console.log(error)}
        <NavLink to={"/"}><button>Go Home</button></NavLink>
    </div>
}