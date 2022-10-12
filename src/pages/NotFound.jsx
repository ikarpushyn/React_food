import React from 'react';
import { useHistory } from 'react-router-dom';

export const NotFound = () => {
	const { goBack } = useHistory();
	return (
		<>
			<button className="btn" onClick={goBack}>
				Go back
			</button>
			<h1>NotFound</h1>
		</>
	);
};
