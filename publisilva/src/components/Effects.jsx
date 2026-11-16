import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export const ParallaxSection = ({ children, speed = 0.5 }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100 * speed]);
  
  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
};

export const MorphingShape = () => {
  const [shape, setShape] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setShape(Math.random());
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.div
      className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-cyan-500/20 filter blur-3xl"
      animate={{
        borderRadius: ['50%', '50%', '50%', '50%'],
        scale: [1, 1.2, 0.8, 1],
        rotate: [0, shape * 360, 0]
      }}
      transition={{
        duration: 3,
        ease: 'easeInOut'
      }}
    />
  );
};

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 bg-cyan-500/z-index-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

// Custom cursor effect
export const CustomCursor = () => {
  const [mouseX, setMouseX] = React.useState(0);
  const [mouseY, setMouseY] = React.useState(0);
  
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div
      className="fixed w-12 h-12 rounded-full border-2 border-cyan-500/50 pointer-events-none z-50 mix-blend-difference"
      style={{
        transform: `translate(${mouseX - 24}px, ${mouseY - 24}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    />
  );
};

// 3D Effect on hover (from React Three Fiber concepts - CSS approximation)
export const Hover3DEffect = ({ children, intensity = 0.1 }) => {
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);
  
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateXValue = ((e.clientY - centerY) / rect.height) * 10 * intensity;
    const rotateYValue = ((e.clientX - centerX) / rect.width) * 10 * intensity;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };
  
  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        perspective: 1000
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

export default { ParallaxSection, MorphingShape, ScrollProgressBar, CustomCursor, Hover3DEffect };