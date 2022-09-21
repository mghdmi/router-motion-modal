import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useModal, Modals } from '../Modal';
import { useHistoryBlock } from '../Modal';
import ModalConfirm from './modals/ModalConfirm';
import ModalOne from './modals/ModalOne';
import ModalTwo from './modals/ModalTwo';
import ModalThree from './modals/ModalThree';

export default function Dashboard() {
	const [value, setValue] = React.useState('');
	const { openModal } = useModal();
	const isDirty = Boolean(value);
	const { isBlocked, confirmNavigation, cancelNavigation } = useHistoryBlock(isDirty);

	return (
		<div>
			<button className='button' onClick={() => openModal('one')}>
				open modal one
			</button>
			<div>
				<input type='text' value={value} onChange={e => setValue(e.target.value)} />
			</div>
			<br />
			Blocking?
			<br />
			<br />
			{isDirty ? 'Yes, open another modal or click/tab back button' : 'Nope'}
			<AnimatePresence>
				{isBlocked && (
					<ModalConfirm
						onCancel={cancelNavigation}
						onConfirm={() => {
							confirmNavigation();
							setValue('');
						}}
					/>
				)}
			</AnimatePresence>
			<Modals>
				<ModalOne key='one' />
				<ModalTwo key='two' />
			</Modals>
			<Modals>
				<ModalThree key='three' />
			</Modals>
		</div>
	);
}
