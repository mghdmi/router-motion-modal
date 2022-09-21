import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useBlocker } from './useBlocker';
import { Location, Transition } from 'history';

export default function useHistoryBlock(when: boolean) {
	const navigate = useNavigate();
	const location = useLocation();
	const [isBlocked, setIsBlocked] = useState(false);
	const [confirmedNavigation, setConfirmedNavigation] = useState(false);
	const [lastLocation, setLastLocation] = useState<Location | null>(null);

	const cancelNavigation = useCallback(() => {
		setIsBlocked(false);
	}, []);

	const handleBlockedNavigation = useCallback(
		(transition: Transition) => {
			if (!confirmedNavigation && transition.location.pathname !== location.pathname) {
				setIsBlocked(true);
				setLastLocation(transition.location);
				return false;
			}
			return true;
		},
		[confirmedNavigation, location.pathname]
	);

	const confirmNavigation = useCallback(() => {
		setIsBlocked(false);
		setConfirmedNavigation(true);
	}, []);

	useEffect(() => {
		if (confirmedNavigation && lastLocation) {
			const state = lastLocation.state as { backgroundLocation?: Location };
			navigate(lastLocation.pathname, {
				state: {
					...state,
					backgroundLocation: state?.backgroundLocation ? state.backgroundLocation : lastLocation,
				},
			});
			setConfirmedNavigation(false);
		}
	}, [navigate, confirmedNavigation, lastLocation]);

	useBlocker(handleBlockedNavigation, when);

	return { isBlocked, confirmNavigation, cancelNavigation };
}
