import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Modal, useHistoryBlock, useModal } from '../../Modal';
import ModalConfirm from './ModalConfirm';

export default function ModalOne() {
	const { openModal, closeModal } = useModal();
	const [value, setValue] = React.useState('');
	const { isBlocked, cancelNavigation, confirmNavigation } = useHistoryBlock(!!value);

	return (
		<>
			<Modal modalName='one' snapPoint={0.5}>
				<Modal.Container>
					<Modal.Header>Modal One</Modal.Header>
					<Modal.Content>
						<button className='button' onClick={closeModal}>
							Close
						</button>{' '}
						<button className='button' onClick={() => openModal('two')}>
							Open Modal Two
						</button>
						<br />
						<div>
							<input type='text' value={value} onChange={e => setValue(e.target.value)} />
						</div>
					</Modal.Content>
				</Modal.Container>
				<Modal.Backdrop onClick={closeModal} />
			</Modal>

			<AnimatePresence>
				{isBlocked && (
					<ModalConfirm
						onCancel={cancelNavigation}
						onConfirm={() => {
							// setValue('');
							confirmNavigation();
						}}
					/>
				)}
			</AnimatePresence>
		</>
	);
}
