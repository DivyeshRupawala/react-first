import React, { Component} from 'react';
import Note from './Note';
import Plus from 'react-icons/lib/fa/plus';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes : []
		};

		this.eachNote = this.eachNote.bind(this);
		this.nextId = this.nextId.bind(this);

		this.update = this.update.bind(this);
		this.remove = this.remove.bind(this);
		this.add = this.add.bind(this);
	}

	nextId() {
		this.uniqueId = this.uniqueId || 0;
		return this.uniqueId++;
	}

	add(text) {
		this.setState(prevState => ({
			notes : [
						...prevState.notes,
						{
							id:this.nextId(),
							note: text
						}
					]
		}))
	}

	update(newText, i) {
		console.log("Updating New text "+newText+i);
		this.setState(prevState => ({
			notes : prevState.notes.map(
				note => (note.id !== i) ? note : {...note, note: newText}
			)
		}))
	}

	remove(id) {
		console.log("Removing id "+id);
		this.setState(prevState => ({
			notes : prevState.notes.filter(
				note => (note.id !== id) 
			)
		}))
	}

	eachNote(note, i) {
		return (
			<Note 
				key={i} 
				index={i}
				onChange={this.update}
				onRemove={this.remove}>
				{note.note} {note.id}
			</Note>
		)
	}

	render() {
		return (
			<div className="board">
				This is Board Component <br/>

				{this.state.notes.map(this.eachNote)}<br/>
				
				<button 
					id="add"
					onClick={this.add.bind(null, "New Note")}> 
					<Plus />
				</button>
			</div>
		)
	}
}

export default Board;
		