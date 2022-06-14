import { MdDeleteForever } from 'react-icons/md';
import './App.css';

const Note = ({ id,title, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span><h1>{title}</h1></span>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;
