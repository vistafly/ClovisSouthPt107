import { createContext, useContext, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  X
} from 'lucide-react';

// Toast Context
const ToastContext = createContext(null);

// Toast types configuration
const toastTypes = {
  success: {
    icon: CheckCircle,
    className: 'bg-green-50 border-green-200 text-green-800',
    iconClass: 'text-green-500',
  },
  error: {
    icon: XCircle,
    className: 'bg-red-50 border-red-200 text-red-800',
    iconClass: 'text-red-500',
  },
  warning: {
    icon: AlertCircle,
    className: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    iconClass: 'text-yellow-500',
  },
  info: {
    icon: Info,
    className: 'bg-blue-50 border-blue-200 text-blue-800',
    iconClass: 'text-blue-500',
  },
};

// Individual Toast component
const ToastItem = ({ id, type, message, onClose }) => {
  const config = toastTypes[type] || toastTypes.info;
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg ${config.className}`}
    >
      <Icon className={`w-5 h-5 flex-shrink-0 ${config.iconClass}`} />
      <p className="text-sm font-medium flex-1">{message}</p>
      <button
        onClick={() => onClose(id)}
        className="p-1 rounded-lg hover:bg-black/5 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

// Toast Provider
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((type, message, duration = 5000) => {
    const id = Date.now() + Math.random();

    setToasts((prev) => [...prev, { id, type, message }]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }

    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const toast = {
    success: (message, duration) => addToast('success', message, duration),
    error: (message, duration) => addToast('error', message, duration),
    warning: (message, duration) => addToast('warning', message, duration),
    info: (message, duration) => addToast('info', message, duration),
    dismiss: removeToast,
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      {typeof document !== 'undefined' &&
        createPortal(
          <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 max-w-sm w-full pointer-events-none">
            <AnimatePresence>
              {toasts.map((t) => (
                <div key={t.id} className="pointer-events-auto">
                  <ToastItem
                    id={t.id}
                    type={t.type}
                    message={t.message}
                    onClose={removeToast}
                  />
                </div>
              ))}
            </AnimatePresence>
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  );
};

// Hook to use toast
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export default ToastProvider;
