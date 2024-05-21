import NavigationItem from './NavigationItem/NavigationItem'
import Logo from '../Logo/logo'
import classes from './Navigation.module.css'

const navigation = () => {
	return (
		<nav className={classes.nav}>
			<Logo />
			<div>
				<ul className={classes['nav-items']}>
					<NavigationItem link="/">Home</NavigationItem>
					<NavigationItem link="/books">My Books</NavigationItem>
					<NavigationItem link="/logout">Logout</NavigationItem>
				</ul>
			</div>
		</nav>
	)
}

export default navigation
