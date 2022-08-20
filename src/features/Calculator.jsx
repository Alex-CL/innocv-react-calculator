import { useState } from 'react'
import { Button } from '../components'

export const Calculator = () => {
	
	const [expression, setExpression] = useState('')
	
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
	
	const handleExpression = (e) => {	
		if (e.key === 'Enter') {
			setExpression('' + Function(`'use strict'; return (${expression})`)())
			return
		}
		
		if ('0123456789'.includes(e.key)) {
			setExpression(expression.slice(0, e.target.selectionStart) + e.key + expression.slice(e.target.selectionStart))
			return
		}
		
		if ('+-*/'.includes(e.key)) {
			setExpression(expression.slice(0, e.target.selectionStart) + e.key + expression.slice(e.target.selectionStart))
			return
		}
	}
	
	const handleKeyDown = (e) => {
		if (e.key === 'Backspace') {
			setExpression(expression.slice(0, e.target.selectionStart - 1) + expression.slice(e.target.selectionStart))
			return
		}
		
		if (e.key === 'Delete') {
			setExpression(expression.slice(0, e.target.selectionStart) + expression.slice(e.target.selectionStart + 1))
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

	const expressionStyle = {
		width: '100%',
		textAlign: 'right',
		fontSize: '2rem',
		height: '60px',
		border: '1px solid #EEEEEE',
	}
	
	const buttonsContainer = {
		display: 'flex',
		justifyContent: 'space-between'
	}

	return (
		<div style={calculatorContainer}>
			<div>
				<input style={expressionStyle} type="text" value={expression} onKeyPress={handleExpression} onKeyDown={handleKeyDown} onChange={handleExpression}/>
			</div>
			<div style={buttonsContainer}>
				{buttonList.map((b) => <Button key={b.value} value={b.value} handleClick={valueClicked}/>)}
			</div>
		</div>
	)
}
