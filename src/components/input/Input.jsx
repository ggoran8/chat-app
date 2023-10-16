import { Component } from 'react';
import React from 'react';

class Input extends Component {
	state = {
		text: '',
	};

	onChange(e) {
		this.setState({ text: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();
		this.setState({ text: '' });
		this.props.onSendMessage(this.state.text);
	}

	render() {
		return (
			<div className='Input'>
				<form className='inputForm' onSubmit={(e) => this.onSubmit(e)}>
					<input
						className='inputText'
						onChange={(e) => this.onChange(e)}
						value={this.state.text}
						type='text'
						placeholder='Enter your message and press ENTER/SEND'
						autoFocus={true}
					/>
					<button className='inputButton'>Send</button>
				</form>
			</div>
		);
	}
}

export default Input;
