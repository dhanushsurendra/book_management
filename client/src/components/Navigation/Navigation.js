import { useState } from 'react'

import NavigationItem from './NavigationItem/NavigationItem'
import Logo from '../Logo/logo'

import { RiMenu3Fill } from 'react-icons/ri'
import { IoMdClose } from 'react-icons/io'

import classes from './Navigation.module.css'

const Navigation = () => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<nav className={classes.nav}>
				<Logo />
				<div>
					<RiMenu3Fill
						onClick={() => setOpen(true)}
						className={classes.icon}
						size={25}
					/>
					<ul className={classes['nav-items']}>
						<NavigationItem link="/">Home</NavigationItem>
						<NavigationItem link="/books">My Books</NavigationItem>
						<NavigationItem link="/logout">Logout</NavigationItem>
					</ul>
				</div>
			</nav>
			{open && (
				<div className={classes.mobile}>
					<IoMdClose
						onClick={() => setOpen(false)}
						className={classes.cancel}
					/>
					<NavigationItem link="/">Home</NavigationItem>
					<NavigationItem link="/books">My Books</NavigationItem>
					<NavigationItem link="/logout">Logout</NavigationItem>
				</div>
			)}
			<div onClick={() => setOpen(false)} className={classes.modal}></div>
		</>
	)
}

export default Navigation
