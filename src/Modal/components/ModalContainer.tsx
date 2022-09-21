import { motion } from 'framer-motion';
import { useModalContext } from './Modal';

export default function ModalContainer({ children }) {
	const { snapPoint } = useModalContext();

	function getHeight() {
		if (snapPoint > 0 && snapPoint <= 1) {
			return snapPoint * window.innerHeight;
		}

		const percentage = (snapPoint / window.innerHeight) * 100;
		const height = snapPoint ? `${percentage}%` : '50%';

		return height;
	}

	return (
		<motion.div
			className='modal-container'
			style={{
				height: getHeight(),
			}}
			variants={{
				initial: { y: '100%' },
				animate: {
					y: 0,
					transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] },
				},
				exit: {
					y: '100%',
					transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
				},
			}}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			{children}
		</motion.div>
	);
}
