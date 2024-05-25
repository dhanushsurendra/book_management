import { NavLink } from 'react-router-dom'

import classes from './NavigationItem.module.css'

const navigationItem = (props) => {
	return (
		<li className={classes['nav-item']} onClick={props.onClick}>
			<NavLink
				to={props.link}
				className={({ isActive }) =>
					classes['nav-link'] + " " + (isActive ? classes.active : '')
				}
			>
				{props.children}
			</NavLink>
		</li>
	)
}

export default navigationItem
