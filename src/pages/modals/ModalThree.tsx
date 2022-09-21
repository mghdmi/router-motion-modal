import React from 'react';
import { Modal, useModal } from '../../Modal';

export default function ModalThree() {
	const { closeModal } = useModal();

	return (
		<Modal modalName='three' snapPoint={0.9}>
			<Modal.Container>
				<Modal.Header>Modal Three</Modal.Header>
				<Modal.Content>
					<button className='button' onClick={closeModal}>
						Close
					</button>
				</Modal.Content>
			</Modal.Container>
			<Modal.Backdrop onClick={closeModal} />
		</Modal>
	);
}
