import { motion } from 'framer-motion';

const colorVariants = {
  primary: 'bg-blue-600',
  success: 'bg-green-500',
  warning: 'bg-amber-500',
  error: 'bg-red-500',
  accent: 'bg-amber-400',
};

const sizeVariants = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
  xl: 'h-4',
};

const ProgressBar = ({
  value = 0,
  max = 100,
  color = 'primary',
  size = 'md',
  showLabel = false,
  label = '',
  animate = true,
  className = '',
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={className}>
      {(showLabel || label) && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-gray-600">{label}</span>
          {showLabel && (
            <span className="text-sm font-medium text-gray-900">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div className={`bg-gray-200 rounded-full overflow-hidden ${sizeVariants[size]}`}>
        {animate ? (
          <motion.div
            className={`h-full rounded-full ${colorVariants[color]}`}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        ) : (
          <div
            className={`h-full rounded-full ${colorVariants[color]}`}
            style={{ width: `${percentage}%` }}
          />
        )}
      </div>
    </div>
  );
};

// Circular Progress variant
export const CircularProgress = ({
  value = 0,
  max = 100,
  size = 120,
  strokeWidth = 8,
  color = 'primary',
  showLabel = true,
  label = '',
  animate = true,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  const colors = {
    primary: '#0066CC',
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    accent: '#FFD700',
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        {animate ? (
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={colors[color]}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        ) : (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={colors[color]}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        )}
      </svg>
      {showLabel && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">
            {Math.round(percentage)}%
          </span>
          {label && (
            <span className="text-xs text-gray-500">{label}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
