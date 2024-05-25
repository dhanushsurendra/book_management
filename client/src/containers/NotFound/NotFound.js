import { Link, Outlet } from "react-router-dom"
import { useSelector } from 'react-redux'

import classes from './NotFound.module.css'

const NotFound = () => {

    const loginToken = useSelector((state) => state.login.token)

    return (
        <div className={classes.container}>
            <h1>404</h1>
            <p>Sorry, we couldn't find this page</p>
            {loginToken ? <Link to="/">Back to homepage</Link> : <Outlet />}
        </div>
    )
}

export default NotFound