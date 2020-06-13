import React, { Component } from 'react';
import { calculateSalaryFrom } from '../../util/salary';

import './styles.css';

export default class ProgressBarSalary extends Component {
	progressAreas() {
		const { fullSalary } = this.props;
		let { discountINSS, discountIRPF, netSalary } = calculateSalaryFrom(
			fullSalary
		);

		return {
			netArea: `${((netSalary / fullSalary) * 100).toFixed(2)}%`,
			irpfArea: `${((discountIRPF / fullSalary) * 100).toFixed(2)}%`,
			inssArea: `${((discountINSS / fullSalary) * 100).toFixed(2)}%`,
		};
	}

	render() {
		const { netArea, irpfArea, inssArea } = this.progressAreas();
		console.log({ netArea, irpfArea, inssArea });
		return (
			<div>
				<div class='my-progress-bar'>
					<div className='irpf-area' style={{ width: irpfArea }}></div>
					<div className='inss-area' style={{ width: inssArea }}></div>
					<div className='net-area' style={{ width: netArea }}></div>
				</div>
			</div>
		);
	}
}
