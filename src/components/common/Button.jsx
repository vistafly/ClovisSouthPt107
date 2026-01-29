import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-navy-800 text-white hover:bg-navy-900 focus-visible:ring-navy-600',
  secondary: 'bg-navy-600 text-white hover:bg-navy-700 focus-visible:ring-navy-500',
  accent: 'bg-rust-500 text-white hover:bg-rust-600 focus-visible:ring-rust-500',
  success: 'bg-green-500 text-white hover:bg-green-600 focus-visible:ring-green-500',
  danger: 'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500',
  outline: 'border-2 border-navy-700 text-navy-700 hover:bg-navy-50 focus-visible:ring-navy-600',
  ghost: 'text-gray-600 hover:bg-gray-100 focus-visible:ring-gray-500',
  'outline-gray': 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-500',
  'outline-white': 'border-2 border-white text-white hover:bg-white/10 focus-visible:ring-white',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
  xl: 'px-8 py-4 text-lg',
};

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  as: Component = 'button',
  animate = true,
  ...props
}, ref) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    rounded-xl font-medium
    transition-all duration-200
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const ButtonComponent = animate ? motion.button : Component;

  const motionProps = animate ? {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
  } : {};

  return (
    <ButtonComponent
      ref={ref}
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled || loading}
      {...motionProps}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Loading...</span>
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
        </>
      )}
    </ButtonComponent>
  );
});

Button.displayName = 'Button';

export default Button;
