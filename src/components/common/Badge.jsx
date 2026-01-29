const variants = {
  primary: 'bg-blue-100 text-blue-700',
  secondary: 'bg-slate-100 text-slate-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
  error: 'bg-red-100 text-red-700',
  info: 'bg-blue-100 text-blue-700',
  gray: 'bg-gray-100 text-gray-700',
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-0.5 text-xs',
  lg: 'px-3 py-1 text-sm',
};

const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className = '',
}) => {
  return (
    <span
      className={`
        inline-flex items-center gap-1 rounded-full font-medium
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {Icon && <Icon className="w-3 h-3" />}
      {children}
    </span>
  );
};

// Difficulty Badge
export const DifficultyBadge = ({ difficulty }) => {
  const config = {
    easy: { variant: 'success', label: 'Easy' },
    medium: { variant: 'warning', label: 'Medium' },
    hard: { variant: 'error', label: 'Hard' },
  };

  const { variant, label } = config[difficulty] || config.medium;

  return <Badge variant={variant}>{label}</Badge>;
};

// Category Badge
export const CategoryBadge = ({ category, short = false }) => {
  const categories = {
    performance: { color: 'primary', name: 'Performance', short: 'Perf' },
    airspace: { color: 'info', name: 'Airspace', short: 'Air' },
    'airport-operations': { color: 'success', name: 'Airport Ops', short: 'Ops' },
    weather: { color: 'info', name: 'Weather', short: 'Wx' },
    'human-factors': { color: 'warning', name: 'Human Factors', short: 'HF' },
    regulations: { color: 'error', name: 'Regulations', short: 'Reg' },
  };

  const config = categories[category] || { color: 'gray', name: category, short: category };

  return (
    <Badge variant={config.color}>
      {short ? config.short : config.name}
    </Badge>
  );
};

export default Badge;
