import React from 'react';
import { UNSAFE_NavigationContext } from 'react-router-dom';
import type { History, Blocker, Transition } from 'history';

export function useBlocker(blocker: Blocker, when: boolean): void {
	const navigator = React.useContext(UNSAFE_NavigationContext).navigator as History;

	React.useEffect(() => {
		if (!when) return;

		const unblock = navigator.block((transition: Transition) => {
			const autoUnblockingTx = {
				...transition,
				retry() {
					unblock();
					transition.retry();
				},
			};

			blocker(autoUnblockingTx);
		});

		return unblock;
	}, [navigator, blocker, when]);
}
