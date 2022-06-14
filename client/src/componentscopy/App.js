import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from '../componentscopy/NotesList';
import Search from '../componentscopy/Search';
import Header from '../componentscopy/Header';
import './App.css';


const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			title:'random',
			text: 'Blogging',
			date: '11/06/2022',
		},
		{
			id: nanoid(),
			title:'random',

			text: 'Hello',
			date: '21/04/2021',
		},
		{
			id: nanoid(),
			title:'random',

			text: 'this is it',
			date: '11/06/2022',
		},
		{
			id: nanoid(),
			title:'random',

			text: 'hmmm',
			date: '06/11/2022',
		},
	]);

	const [searchTitle, setSearchTitle] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (title,text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			title: title,
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchTitle} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchTitle)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;
