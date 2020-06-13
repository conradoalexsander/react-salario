import React, { Component } from 'react';
import { Container, Row, Col, CardPanel } from 'react-materialize';

import './App.css';

import InputFullSalary from './components/inputFullSalary';
import InputReadOnly from './components/InputReadOnly';
import ProgressBarSalary from './components/progressBarSalary';

export default class App extends Component {
	state = { fullSalary: '' };

	render() {
		return (
			<div>
				<Container>
					<Col className='my-content' m={6} s={12}>
						<CardPanel className='my-card white'>
							<h2>
								<span class='card-title'>React Salário</span>
							</h2>
							<Row>
								<Col className='white' s={12}>
									<InputFullSalary
										id='salario-bruto'
										onChange={event => {
											this.setState({ fullSalary: event.target.value });
										}}
										value={this.state.fullSalary}
										label='Salário Bruto'
									/>
								</Col>
							</Row>

							<Row>
								<Col className='white' s={3}>
									<InputReadOnly
										id='base-inss'
										fullSalary={this.state.fullSalary}
										label='Base INSS'
										className='black-text bold'
									/>
								</Col>

								<Col className='white' s={3}>
									<InputReadOnly
										id='discount-inss'
										fullSalary={this.state.fullSalary}
										label='Desconto INSS'
										className='orange-text bold'
									/>
								</Col>
								<Col className='white' s={3}>
									<InputReadOnly
										id='base-irpf'
										calc='BaseIRPF'
										fullSalary={this.state.fullSalary}
										label='Base IRPF'
										className='black-text bold'
									/>
								</Col>

								<Col className='white' s={3}>
									<InputReadOnly
										id='discount-irpf'
										calc='DescontoIRPF'
										fullSalary={this.state.fullSalary}
										label='Desconto IRPF'
										className='red-text bold'
									/>
								</Col>
							</Row>

							<Row>
								<InputReadOnly
									calc='SalarioLiquido'
									fullSalary={this.state.fullSalary}
									label='Salário líquido'
									id='net-salary'
									className='teal-text bold'
								/>
							</Row>

							<Row>
								<Col className='white' s={12}>
									<ProgressBarSalary fullSalary={this.state.fullSalary} />
								</Col>
							</Row>
						</CardPanel>
					</Col>
				</Container>
			</div>
		);
	}
}
