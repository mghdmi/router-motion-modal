import { Modal } from '../../Modal';

export default function ModalConfirm({ onConfirm, onCancel }) {
	return (
		<Modal modalName='confirm' snapPoint={0.5}>
			<Modal.Container>
				<Modal.Header>Want to leave?</Modal.Header>
				<Modal.Content>
					<p>You will lost your unsaved changes!</p>
					<br />
					<button className='button' onClick={onCancel}>
						STAY
					</button>{' '}
					<button className='button' onClick={onConfirm}>
						LEAVE
					</button>
				</Modal.Content>
			</Modal.Container>
			<Modal.Backdrop onClick={onCancel} />
		</Modal>
	);
}
