import { Link } from "react-router-dom"

import classes from './NotFound.module.css'

const NotFound = () => {
    return (
        <div className={classes.container}>
            <h1>404</h1>
            <p>Sorry, we couldn't find this page</p>
            <Link to="/">Back to homepage</Link>
        </div>
    )
}

export default NotFound