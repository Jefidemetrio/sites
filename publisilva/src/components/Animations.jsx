import { motion, useAnimation, stagger } from 'framer-motion';

export const StaggeredContainer = ({ children, delay = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: delay,
            stagger: delay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggeredItem = ({ children, direction = 'up' }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  return (
    <motion.div variants={variants}>
      {children}
    </motion.div>
  );
};

export const NeonText = ({ children, color = 'cyan' }) => {
  const colors = {
    cyan: 'text-cyan-400',
    blue: 'text-blue-400',
    pink: 'text-pink-400',
    purple: 'text-purple-400'
  };

  return (
    <motion.span
      className={`${colors[color]} font-bold relative`}
      initial={{ opacity: 0, textShadow: '0 0 0px rgba(0,0,0,0)' }}
      animate={{ 
        opacity: 1, 
        textShadow: [
          `0 0 5px var(${colors[color].replace('text-', '')})`,
          `0 0 15px var(${colors[color].replace('text-', '')})`,
          `0 0 30px var(${colors[color].replace('text-', '')})`,
          `0 0 15px var(${colors[color].replace('text-', '')})`,
          `0 0 5px var(${colors[color].replace('text-', '')})`
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.span>
  );
};

export const GlassCard = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 ${className}`}
      whileHover={{
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.37)'
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default { StaggeredContainer, StaggeredItem, NeonText, GlassCard };