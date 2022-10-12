import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { getAllCategories } from '../api';
import { CategoryList } from '../components/CategoryList';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

export const Home = () => {
	const [catalog, setCatalog] = useState([]);
	const [filteredCatalog, setFilteredCatalog] = useState([]);

	const { pathname, search } = useLocation();
	const { push } = useHistory();
	// console.log(pathname, search);
	// console.log(push);

	const handleSearch = (str) => {
		setFilteredCatalog(
			catalog.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase()))
		);
		push({
			pathname,
			search: `?search=${str}`,
		});
	};

	useEffect(() => {
		getAllCategories().then((data) => {
			setCatalog(data.categories);
			setFilteredCatalog(
				search
					? data.categories.filter((item) =>
							item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())
					  )
					: data.categories
			);
		});
	}, [search]);

	return (
		<>
			<h1>Home</h1>

			<Search cb={handleSearch} />

			{!catalog.length ? <Preloader /> : <CategoryList catalog={filteredCatalog} />}
		</>
	);
};
