import { Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
	const location = useLocation();
	const state = location.state as { backgroundLocation?: Location };

	return (
		<div className='App'>
			<aside>
				<ul>
					<li>
						<NavLink to='/dashboard'>dashboard</NavLink>
					</li>
					<li>
						<NavLink to='/login'>login</NavLink>
					</li>
				</ul>
			</aside>

			<main>
				<Routes location={state?.backgroundLocation || location}>
					<Route path='/' element={<Navigate to='/dashboard' />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</main>
		</div>
	);
}
