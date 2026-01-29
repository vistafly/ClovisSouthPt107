import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Card = forwardRef(({
  children,
  className = '',
  hover = false,
  padding = 'md',
  as: Component = 'div',
  animate = false,
  ...props
}, ref) => {
  const paddingSizes = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const CardComponent = animate ? motion.div : Component;

  const motionProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
    whileHover: hover ? { y: -4 } : {},
  } : {};

  return (
    <CardComponent
      ref={ref}
      className={`
        bg-white rounded-2xl shadow-card
        ${hover ? 'transition-all duration-200 hover:shadow-card-hover cursor-pointer' : ''}
        ${paddingSizes[padding]}
        ${className}
      `}
      {...motionProps}
      {...props}
    >
      {children}
    </CardComponent>
  );
});

Card.displayName = 'Card';

// Card Header
export const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

// Card Title
export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>
    {children}
  </h3>
);

// Card Description
export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-sm text-gray-500 mt-1 ${className}`}>
    {children}
  </p>
);

// Card Content
export const CardContent = ({ children, className = '' }) => (
  <div className={className}>
    {children}
  </div>
);

// Card Footer
export const CardFooter = ({ children, className = '' }) => (
  <div className={`mt-4 pt-4 border-t border-gray-100 ${className}`}>
    {children}
  </div>
);

export default Card;
