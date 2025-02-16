import AnimatedButtonStyles from './AnimatedButtonStyles.module.css'
import { motion } from 'framer-motion'
import PerspectiveText from '../PerspectiveText/PerspectiveText.tsx'

function AnimatedButton({ isActive, setIsActive }) {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
                console.log({ isActive }, 'toggle')
                setIsActive(!isActive)
            }}
            className={AnimatedButtonStyles.button}
        >
            <motion.div
                className={AnimatedButtonStyles.slider}
                animate={{
                    transform: isActive ? 'translateY(-50%)' : 'translateY(0%)',
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                <div className={AnimatedButtonStyles.el}>
                    <p>menu</p>
                </div>
                <div className={AnimatedButtonStyles.el}>
                    <p>close</p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default AnimatedButton
