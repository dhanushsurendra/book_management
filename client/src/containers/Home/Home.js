import { NavLink } from 'react-router-dom'

import Hero from '../../assets/images/hero.png'

import classes from './Home.module.css'

const Home = () => {
	return (
		<main className={classes.main}>
			<header className={classes.header}>
				<div className={classes['header-left']}>
					<h1>
						Welcome to <br />
						<span style={{ color: '#FFC537', fontSize: '4rem' }}>
							Book{' '}
						</span>
						<span style={{ color: '#0a74bb', fontSize: '4rem' }}>
							Realm
						</span>
					</h1>
					<p>
						Your ultimate destination for managing and exploring
						your book collection.
					</p>
					<NavLink to="/books" className={classes.btn}>
						Explore Now
					</NavLink>
				</div>
				<div className={classes['header-right']}>
					<img src={Hero} alt="Hero" />
				</div>
			</header>
		</main>
	)
}

export default Home
