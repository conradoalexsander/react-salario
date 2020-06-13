import React, { Component } from 'react';
import { TextInput } from 'react-materialize';
import { calculateSalaryFrom } from '../../util/salary';

export default class InputReadOnly extends Component {
	handleValue(id, fullSalary) {
		let {
			baseINSS,
			baseIRPF,
			discountINSS,
			discountIRPF,
			netSalary,
		} = calculateSalaryFrom(fullSalary);
		switch (id) {
			case 'base-inss':
				return fullSalary === null ? 0 : this.brlCurrency(baseINSS);

			case 'discount-inss':
				return `${this.brlCurrency(discountINSS)} (${this.percentTwoDecimals(
					discountINSS,
					fullSalary
				)})`;

			case 'base-irpf':
				return this.brlCurrency(baseIRPF);

			case 'discount-irpf':
				return `${this.brlCurrency(discountIRPF)} (${this.percentTwoDecimals(
					discountIRPF,
					fullSalary
				)})`;

			case 'net-salary':
				return `${this.brlCurrency(netSalary)} (${this.percentTwoDecimals(
					netSalary,
					fullSalary
				)})`;

			default:
				return;
		}
	}

	brlCurrency(value) {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}).format(value);
	}

	percentTwoDecimals(n1, n2) {
		return `${n1 !== 0 ? ((n1 / n2) * 100).toFixed(2) : 0.0} %`;
	}

	render() {
		const { label, id, className, fullSalary } = this.props;
		return (
			<div>
				<TextInput
					disabled
					label={label}
					value={this.handleValue(id, Number(fullSalary))}
					id={id}
					className={className}
				/>
			</div>
		);
	}
}
