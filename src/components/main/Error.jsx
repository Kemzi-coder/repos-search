import React from 'react'
import {useNavigate} from 'react-router-dom'

const Error = () => {
	const navigate = useNavigate()
	return (
		<div style={{textAlign: 'center'}}>
			<button onClick={() => navigate("/home")}>GO TO MAIN PAGE</button>
			ERROR
		</div>
	)
}

export default Error
