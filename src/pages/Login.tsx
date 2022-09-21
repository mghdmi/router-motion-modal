import React from 'react';
import { Modals, useModal } from '../Modal';
import ModalLogin from './modals/ModalLogin';

export default function Login() {
	const { openModal } = useModal();
	const [value, setValue] = React.useState('');

	return (
		<div>
			<input type='text' value={value} onChange={e => setValue(e.target.value)} />
			<br />
			<br />
			<button className='button' onClick={() => openModal('login')}>
				Open Login Modal
			</button>{' '}
			<Modals>
				<ModalLogin key='login' />
			</Modals>
		</div>
	);
}
