import { useLocation, useNavigate } from 'react-router-dom';
import type { Location } from 'history';

// TODO: open above last opened modals if there was any opened before going offline | ex: online/offline modal
// TODO: remove specific modal with modalName

export default function useModal() {
	const navigate = useNavigate();
	const location = useLocation();
	const state = location.state as { backgroundLocation?: Location };

	function openModal(modalName: string) {
		const prevModals =
			location.pathname.startsWith('/modals') &&
			location.pathname.replace('/modals/', '').split('/');
		const modalsRoute = prevModals
			? '/modals/' + prevModals.join('/') + `/${modalName}`
			: `/modals/${modalName}`;

		navigate(modalsRoute, {
			state: {
				...state,
				backgroundLocation: state?.backgroundLocation ? state.backgroundLocation : location,
			},
		});
	}

	function closeModal() {
		navigate(-1);
	}

	function isModalOpen(modalName: string) {
		return location.pathname.startsWith('/modals') && location.pathname.includes(modalName);
	}

	return {
		openModal,
		closeModal,
		isModalOpen,
	};
}
