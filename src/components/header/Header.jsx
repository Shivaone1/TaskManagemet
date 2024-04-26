import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutSuccess } from '../../redux/authSlice';
// import history from '../../history';

const Header = () => {
	const dispatch = useDispatch();
	const { auth } = useSelector((state) => ({ ...state }));

	const handleClick = (e) => {
		e.preventDefault();
		dispatch(logoutSuccess());
		localStorage.removeItem('auth');
		// history.push('/signin');
		window.location.reload();
	};
	return (
		<div>
			<nav className=''>
				<div className=''>
					<h5>Task Manager</h5>
				</div>
				<div className=''>
					{auth.currentUser && auth.currentUser.token ? (
						<Link to='/signin' className='btn' onClick={handleClick}>
							SignOut
						</Link>
					) : (
						<>
							<Link to='/signin' className='btn'>
								SignIn
							</Link>
							<Link to='/signup' className='btn'>
								SignUp
							</Link>
						</>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Header;
