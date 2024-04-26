/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { BiChevronLeft, BiChevronRight, BiTrash } from 'react-icons/bi';
import { arrowClick, deleteItem } from '../../redux/taskSlice';

const ListCard = ({ item }) => {
	const dispatch = useDispatch();

	const arrowClickHandler = (direction) => {
		dispatch(arrowClick(item, direction));
	};

	const handleDelete = () => {
		dispatch(deleteItem(item._id));
	};

	return (
		<div>
			<ul className={`${item.status === 'done' ? 'completed menu' : 'menu'}`}>
				<li>
					<p>{item._id}</p>
				</li>
				<li>
					<p>{item.task}</p>
				</li>
				<li>
					<p>{item.status}</p>
				</li>
				<li>
					<button
						disabled={item.status === 'backlog'}
						onClick={() => arrowClickHandler('left')}
					>
						<BiChevronLeft />
					</button>
					<button
						disabled={item.status === 'done'}
						onClick={() => arrowClickHandler('right')}
					>
						<BiChevronRight />
					</button>
					<button onClick={handleDelete}>
						<BiTrash />
					</button>
				</li>
			</ul>
		</div>
	);
};

export default ListCard;
