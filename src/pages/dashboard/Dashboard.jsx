import Sidebar from '../../components/sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllTasks } from '../../redux/taskSlice';
const Dashboard = () => {
	const tasklist = useSelector((state) => state.task);
	const { AllTasks } = tasklist;
	const user = useSelector((state) => state.auth);
	const { currentUser } = user;

	let pendingTask = [];
	let completedTask = [];
	for (let i = 0; i < AllTasks.length; i++) {
		if (AllTasks[i].status === 'todo') {
			pendingTask.push(AllTasks[i]);
		} else if (AllTasks[i].status === 'done') {
			completedTask.push(AllTasks[i]);
		}
	}

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllTasks(currentUser.token, currentUser.id));
	}, [dispatch, currentUser.token, currentUser.id]);

	return (
		<>
			<div className=''>
				<div className=''>
					<Sidebar />
				</div>
				<div className=''>
					<div className=''>
						<h2>Task Status Dashboard</h2>
						<div className=''>
							<div className=''>Todo - {pendingTask.length}</div>
							<div className=''>Complete - {completedTask.length}</div>
						</div>
						<div className=''>
							<Link to='/taskmanager' className=''>
								Create Task
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
