import React from 'react';
import { motion } from 'framer-motion';

const StyledIconCard = ({ icon, color, tooltip }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        rotate: 1440,
        y: -5,
      }}
      transition={{
        duration: 0,
        ease: 'easeInOut',
        stiffness: 300,
      }}
      style={{
        background: 'radial-gradient(circle at center, rgba(255,255,255,0.1), transparent)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderRadius: '20%',
        width: 78,
        height: 78,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `0 4px 20px ${color}55`,
        border: `2px solid ${color}`,
        color,
        fontSize: 40,
        position: 'relative',
        transition: 'all 0.4s ease-in-out',
      }}
    >
      {icon}

      {/* Tooltip efekti */}
      {tooltip && (
        <span
          style={{
            position: 'absolute',
            bottom: -30,
            backgroundColor: '#000',
            color: '#fff',
            padding: '4px 8px',
            fontSize: 12,
            borderRadius: 4,
            whiteSpace: 'nowrap',
            opacity: 0.9,
            transform: 'translateY(0)',
          }}
        >
          {tooltip}
        </span>
      )}
    </motion.div>
  );
};

export default StyledIconCard;
