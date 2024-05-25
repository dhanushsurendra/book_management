import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { clearLoginToken } from '../../redux/store'

import NavigationItem from './NavigationItem/NavigationItem'
import Logo from '../Logo/logo'
import axios from 'axios'

import { RiMenu3Fill } from 'react-icons/ri'
import { IoMdClose } from 'react-icons/io'

import classes from './Navigation.module.css'
import { toast } from 'react-toastify'

const Navigation = () => {
	const [open, setOpen] = useState(false)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const loginToken = useSelector((state) => state.login.token)

	const logout = async (e) => {
		e.preventDefault()
		console.log('reached')
		try {
			const url = process.env.REACT_APP_API_URL + 'auth/logout'
			await axios.post(url, {
				headers: {
					Authorization: `Bearer ${loginToken}`
				}
			})
			dispatch(clearLoginToken())
			toast.success('Logged out successfully')
			navigate('/login', { replace: true })
		} catch (error) {
			console.log(error)
			toast.error(error.response.data.error)
		}
	}

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
						{loginToken ? (
							<>
								<NavigationItem link="/">Home</NavigationItem>
								<NavigationItem link="/books">
									My Books
								</NavigationItem>
								<NavigationItem onClick={logout} link="/logout">
									Logout
								</NavigationItem>
							</>
						) : null}
						{!loginToken ? (
							<NavigationItem link="/login">Login</NavigationItem>
						) : null}
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
