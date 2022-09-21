import { Modal, useModal } from '../../Modal';

export default function ModalLogin() {
	const { closeModal } = useModal();

	return (
		<Modal modalName='login' snapPoint={0.5}>
			<Modal.Container>
				<Modal.Header>Modal Login</Modal.Header>
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
