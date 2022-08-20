import { useState } from 'react'
import { Button } from '../components'

export const Calculator = () => {
	
	const [result, setResult] = useState('')
	
	const buttonList = [
		{
			value: '+'
		}, {
			value: '-'
		}, {
			value: 'x'
		}, {
			value: '÷'
		}
	]
	
	const handleResult = (e) => {	
		if (e.key === 'Enter') {
			setResult('enter')
			return
		}
		
		if ('0123456789'.includes(e.key)) {
			setResult(result.slice(0, e.target.selectionStart) + e.key + result.slice(e.target.selectionStart))
			return
		}
		
		if ('+-*/'.includes(e.key)) {
			setResult(result.slice(0, e.target.selectionStart) + e.key + result.slice(e.target.selectionStart))
			return
		}
	}
	
	const handleKeyDown = (e) => {
		if (e.key === 'Backspace') {
			setResult(result.slice(0, e.target.selectionStart - 1) + result.slice(e.target.selectionStart))
			return
		}
		
		if (e.key === 'Delete') {
			setResult(result.slice(0, e.target.selectionStart) + result.slice(e.target.selectionStart + 1))
			return	
		}
	}
	
	const valueClicked = (v) => console.log(v)
	
	const calculatorContainer = {
		background: '#edf7f9',
		border: '1px solid #241da3',
		borderRadius: '25px',
		padding: '20px',
		margin: '20px auto',
		width: '60%',
		height: '500px',
	}

	const resultStyle = {
		width: '100%',
		textAlign: 'right',
		fontSize: '2rem',
		height: '60px',
		border: '1px solid #EEEEEE',
	}

	return (
		<div style={calculatorContainer}>
			<div>
				<input style={resultStyle} type="text" value={result} onKeyPress={handleResult} onKeyDown={handleKeyDown} onChange={handleResult}/>
			</div>
			<div>
				{buttonList.map((b) => <Button key={b.value} value={b.value} handleClick={valueClicked}/>)}
			</div>
		</div>
	)
}
