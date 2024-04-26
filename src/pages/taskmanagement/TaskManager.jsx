import Sidebar from '../../components/sidebar/Sidebar';
import AddTask from '../../components/taskmanager/AddTask';
import TaskList from '../../components/taskmanager/TaskList';

const TaskManager = () => {
	return (
		<>
			<div className=''>
				<div className=''>
					<Sidebar />
				</div>
				<div className=''>
					<div className=''>
						<AddTask />
					</div>
					<div className=''>
						<TaskList />
					</div>
				</div>
			</div>
		</>
	);
};

export default TaskManager;
