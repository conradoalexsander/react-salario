import React, { Component } from 'react';
import { TextInput } from 'react-materialize';

export default class InputFullSalary extends Component {
	render() {
		return (
			<div>
				<TextInput
					width='100%'
					className='white'
					id={this.props.id}
					label={this.props.label}
					value={this.props.value}
					onChange={event => this.props.onChange(event)}
					type='number'
					min='1'
				/>
			</div>
		);
	}
}
