import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	const { auth } = useSelector((state) => ({ ...state }));
	const { currentUser } = auth;

	return (
		<div>
			<ul className=''>
				<li className=''>
					<h5>{currentUser.username}</h5>
				</li>
				<li className=''>
					<Link to='/dashboard'>Dashboard</Link>
				</li>
				<li className=''>
					<Link to='/settings'>Settings</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
