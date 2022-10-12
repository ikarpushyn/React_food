import { Switch, Route } from 'react-router-dom';

import React from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';

function App() {
	return (
		<>
			<Header />

			<main className="container content">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route path="/Category/:name">
						<Category />
					</Route>

					<Route path="/meal/:id">
						<Recipe />
					</Route>

					<Route path="/About">
						<About />
					</Route>

					<Route path="/Contact">
						<Contact />
					</Route>

					<Route>
						<NotFound />
					</Route>
				</Switch>
			</main>

			<Footer />
		</>
	);
}

export default App;
