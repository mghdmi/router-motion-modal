import React from 'react';
import { useMatch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export default function Modals({ children }) {
	const match = useMatch('modals/*');
	const isKeyMatch = (path: string) => path && match?.params?.['*']?.includes(path);

	return (
		<AnimatePresence>
			{React.Children.map(children, modal => isKeyMatch(modal?.key) && modal)}
		</AnimatePresence>
	);
}
