import bookLogo from '../../assets/images/logo.png'

import classes from './logo.module.css'

const logo = () => {
	return (
		<div className={classes.logo}>
			<img src={bookLogo} alt="Company logo" />
		</div>
	)
}

export default logo;
