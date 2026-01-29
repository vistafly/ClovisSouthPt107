import { motion } from 'framer-motion';

const sizes = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
};

const LoadingSpinner = ({ size = 'md', className = '' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`border-2 border-gray-200 border-t-blue-600 rounded-full ${sizes[size]}`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};

// Full page loading
export const PageLoader = ({ message = 'Loading...' }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-gray-500 animate-pulse">{message}</p>
    </div>
  );
};

// Inline loading
export const InlineLoader = ({ message = '' }) => {
  return (
    <div className="flex items-center gap-2 text-gray-500">
      <LoadingSpinner size="sm" />
      {message && <span className="text-sm">{message}</span>}
    </div>
  );
};

export default LoadingSpinner;
