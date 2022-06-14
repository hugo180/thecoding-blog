import { useState } from 'react';
import './App.css';


const AddNote = ({ handleAddNote }) => {
	const [noteTitle, setNoteTitle] = useState('');
	const [noteText, setNoteText] = useState('');
	const characterLimit = 1000;

	const handleTitle = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteTitle(event.target.value);
		}
	
	};

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	
	};



	const handleSaveClick = () => {
	
		if (noteText.trim().length > 0) {
			handleAddNote(noteTitle,noteText);
			setNoteText('');
			setNoteTitle('');
		}
	
	};


	return (
		<div className='note new'>

			
            <textarea className='title'
				rows='2'
				cols='10'
				placeholder='Type to add a Title'
				value={noteTitle}
				onChange={handleTitle}
			></textarea>
			
			<textarea
				rows='8'
				cols='10'
				placeholder='Start your blog '
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;
