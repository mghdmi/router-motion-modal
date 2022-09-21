import { motion } from 'framer-motion';

export default function ModalBackdrop({ onClick }) {
	return (
		<motion.div
			onClick={onClick}
			className='modal-backdrop'
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] },
			}}
			exit={{
				opacity: 0,
				transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
			}}
		/>
	);
}
