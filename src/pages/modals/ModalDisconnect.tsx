import { Modal, useModal } from '../../Modal';

export default function ModalDisconnect() {
	const { closeModal } = useModal();

	return (
		<Modal modalName='disconnect' snapPoint={0.5}>
			<Modal.Container>
				<Modal.Header>Modal Disconnect</Modal.Header>
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
