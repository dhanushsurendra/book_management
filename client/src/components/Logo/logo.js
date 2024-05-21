import { Link } from 'react-router-dom';
import bookLogo from '../../assets/images/logo.png'

import classes from './logo.module.css'

const logo = () => {
	return (
		<Link className={classes.logo} to="/">
			<img src={bookLogo} alt="Company logo" />
		</Link>
	)
}

export default logo;
