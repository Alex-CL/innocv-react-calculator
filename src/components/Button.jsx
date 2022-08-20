import { useState, useEffect } from 'react'

const color = '#352cdd'

export const Button = (props) => {

	const [isHover, setIsHover] = useState(false)
	
	const buttonStyle = {
		border: `1px solid ${color}`,
		borderRadius: '8px',
		height: '80px',
		width: '100px',
		marginTop: '15px'
	}
	
	const contentStyle = {
		borderRadius: 'inherit',
		margin: 'auto',
		display: 'flex',
		justifyContent: 'space-around',
		flexDirection: 'column',
		background: 'red',
		height: '100%',
		textAlign: 'center',
		backgroundColor: isHover ? '#C9C9C9' : '#EEEEEE',
		cursor: isHover ? 'pointer' : 'auto',
		color,
		
		'&:hover': {
			background: 'red'
		}
	}

	const handleClick = () => props.handleClick(props.value)

	return (
		<div 
			style={buttonStyle} 
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			onClick={handleClick}>
			<p style={contentStyle}>{props.value}</p>
		</div>
	)
}
