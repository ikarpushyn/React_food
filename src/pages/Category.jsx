import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { MealList } from '../components/MealList';
import { Preloader } from '../components/Preloader';

export const Category = () => {
	const [meals, setMeals] = useState([]);
	const { name } = useParams();

	const { goBack } = useHistory();

	useEffect(() => {
		getFilteredCategory(name).then((data) => setMeals(data.meals));
	}, [name]);

	return (
		<>
			<button className="btn" onClick={goBack}>
				Go back
			</button>
			{!meals.length ? <Preloader /> : <MealList meals={meals} />}
		</>
	);
};
