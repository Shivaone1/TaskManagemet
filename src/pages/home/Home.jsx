import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Home = () => {
	const { auth } = useSelector((state) => ({ ...state }));
	const { currentUser } = auth;
	return (
		<>
			<div className=''>
				<h2>Organize it all</h2>
				<p>With TaskManager</p>

				{currentUser && currentUser.token ? (
					<Link to='/dashboard' className=''>
						Get Started
					</Link>
				) : (
					<Link to='/signin' className=''>
						Get Started
					</Link>
				)}
			</div>
		</>
	);
};

export default Home;
