import React, { Component } from 'react';
import EditIcon from 'react-icons/lib/fa/pencil';
import DeleteIcon from 'react-icons/lib/fa/trash';
import Floppy from 'react-icons/lib/fa/floppy-o';


class Note extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editing : false
		};

		this.edit = this.edit.bind(this);
		this.remove = this.remove.bind(this);
		this.save = this.save.bind(this);
		this.renderForm = this.renderForm.bind(this);
		this.renderDisplay = this.renderDisplay.bind(this);
	}

	edit() {
		this.setState({
			editing : true
		});		
	}

	remove() {		
		this.props.onRemove(this.props.index);
		this.setState({
			editing : false
		});
	}

	save(e) {
		//alert(this._textVal.value);
		e.preventDefault();
		this.props.onChange(this._textVal.value, this.props.index);

		this.setState({
			editing : false
		});
	}

	renderForm() {
		return (
			<div>
				<form onSubmit={this.save}>
					<textarea ref={input => this._textVal = input}/>
					<button><Floppy /></button>
				</form>
			</div>
		)
	}

	renderDisplay() {
		return (
			<div className="note">
				<p> {this.props.children} </p>
				<span>
					<button onClick={this.edit} id="edit"><EditIcon/></button>
					<button onClick={this.remove} id="remove"><DeleteIcon /></button>
				</span>
			</div>
		)
	}

	render() {
		if (this.state.editing) {			
			return this.renderForm();
		} else {
			return this.renderDisplay();
		}
	}
};

export default Note;