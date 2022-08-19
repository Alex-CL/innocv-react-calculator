import { Button } from '../components'

export const Calculator = () => {
	
	const calculatorContainer = {
		background: '#edf7f9',
		border: '1px solid #241da3',
		borderRadius: '25px',
		padding: '20px',
		margin: '20px auto',
		width: '60%',
		height: '500px',
	}

	return (
		<div style={calculatorContainer}>
			<Button value={1}/>
		</div>
	)
}
