import React from 'react';
import { Modal, useModal } from '../../Modal';

export default function ModalTwo() {
	const { closeModal, openModal } = useModal();

	return (
		<Modal modalName='two' snapPoint={0.7}>
			<Modal.Container>
				<Modal.Header>Modal Two</Modal.Header>
				<Modal.Content>
					<button className='button' onClick={closeModal}>
						Close
					</button>{' '}
					<button className='button' onClick={() => openModal('three')}>
						Open modal three
					</button>
				</Modal.Content>
			</Modal.Container>
			<Modal.Backdrop onClick={closeModal} />
		</Modal>
	);
}
