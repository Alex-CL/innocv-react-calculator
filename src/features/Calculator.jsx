import { useState, useEffect } from 'react'
import { evaluate } from 'mathjs'
import { Button } from '../components'

const validSymbols = '0123456789+-*/.'

export const Calculator = () => {
	
	const [expression, setExpression] = useState('')
	const [errorMessage, setErrorMessage] = useState('')
	
	const buttonList = [
		{	
			value: 7
		}, {	
			value: 8
		}, {	
			value: 9
		}, {
			value: '('
		}, {
			value: ')',
		}, {
			value: 4
		}, {
			value: 5
		}, {
			value: 6
		}, {
			value: 'x',
			realValue: '*',
		}, {
			value: '÷',
			realValue: '/',
		}, {
			value: 3
		}, {
			value: 2
		}, {
			value: 1
		}, {
			value: '+'
		}, {
			value: '-'
		}, {
			value: '←',
			triggerEvent: removeLastElement,
		}, {
			value: 0
		}, {
			value: 'CE',
			triggerEvent: clear,
		}, {
			value: '.',
		}, {	
			value: '=',
			triggerEvent: calculate,
		},
	]
	
	useEffect(() => {
		setErrorMessage('')
	}, [expression])
	
	function calculate() {
		try {
			const result = '' + evaluate(expression)
			setExpression(result)
		} catch (e) {
			setErrorMessage('Expression is not valid')
			return
		}
	}
	
	function removeLastElement() {
		setExpression(expression.slice(0, expression.length - 1))
	}

	function clear() {
		setExpression('')
	}
	
	const handleExpression = (e) => {	
		if (e.key === 'Enter') {
			calculate()
			return
		}
		
		if (!validSymbols.includes(e.key)) {	
			return
		}
		
		if (e.target.selectionStart === 0 && e.target.selectionEnd === expression.length) {
			setExpression(e.key)
			return
		}
		
		setExpression(expression.slice(0, e.target.selectionStart) + e.key + expression.slice(e.target.selectionStart))
	}
	
	const handleKeyDown = (e) => {
		if (['Backspace', 'Delete'].includes(e.key) 
			&& e.target.selectionStart === 0 && e.target.selectionEnd === expression.length) {
	
			setExpression('')
			return
		}
	
		if (e.key === 'Backspace') {	setExpression(expression.slice(0, e.target.selectionStart - 1) + expression.slice(e.target.selectionStart))
			return
		}
		
		if (e.key === 'Delete') {	
			setExpression(expression.slice(0, e.target.selectionStart) + expression.slice(e.target.selectionStart + 1))
			return	
		}
	}
	
	const valueClicked = (v) => setExpression(expression + v)
	
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
		border: `1px solid ${errorMessage ? 'red' : '#EEEEEE'}`,
		borderRadius: '15px',
		width: '100%',
		textAlign: 'right',
		fontSize: '2rem',
		height: '60px',
	}
	
	const errorStyle = {
		marginTop: '10px',
		textAlign: 'right',
		color: 'red',
		height: '10px',
	}
	
	const buttonsContainer = {
		display: 'flex',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
		height: '400px',
		width: '80%',
		margin: 'auto',
	}

	return (
		<div style={calculatorContainer}>
			<div>
				<input 
					style={expressionStyle} 
					type="text"
					value={expression}
					onKeyPress={handleExpression}
					onKeyDown={handleKeyDown} 
					onChange={handleExpression}
					autoFocus
				/>
				<p style={errorStyle}>{errorMessage}</p>
			</div>
			<div style={buttonsContainer}>
				{buttonList.map((b) => <Button key={b.value} {...b} handleClick={valueClicked}/>)}
			</div>
		</div>
	)
}
