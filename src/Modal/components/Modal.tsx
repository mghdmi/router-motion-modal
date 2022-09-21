import React from 'react';
import { createPortal } from 'react-dom';

import ModalBackdrop from './ModalBackdrop';
import ModalContainer from './ModalContainer';
import ModalContent from './ModalContent';
import ModalHeader from './ModalHeader';

const modalRoot = document.getElementById('modal-root');
const ModalContext = React.createContext({ snapPoint: 0 });
export const useModalContext = () => React.useContext(ModalContext);

function Modal({ modalName, snapPoint, children }) {
	const value = React.useMemo(() => ({ snapPoint }), [snapPoint]);

	const modal = (
		<ModalContext.Provider value={value}>
			<div className='modal' modal-name={modalName}>
				{children}
			</div>
		</ModalContext.Provider>
	);

	if (!modalRoot) return null;

	return createPortal(modal, modalRoot);
}

export default Object.assign(Modal, {
	Header: ModalHeader,
	Container: ModalContainer,
	Content: ModalContent,
	Backdrop: ModalBackdrop,
});
