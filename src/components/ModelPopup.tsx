import { CheckCircle2, XCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: {
    title: string;
    content: string;
  };
}

function Modal({ isOpen, onClose, message }: ModalProps) {
  if (!isOpen) return null;

  const isSuccess = message.title.toLowerCase() === 'success';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 text-white flex items-center justify-center bg-black bg-opacity-70 z-50"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className={`rounded-[20px] p-6 shadow-lg w-full max-w-md mx-4 relative
            ${isSuccess 
            ? 
            "bg-gradient-to-r from-green-500 to-green-600 " 
            : 
            "bg-gradient-to-r from-red-500 to-red-600 "}
            `}
        >
          {/* Close button */}
          {/* <button
            onClick={onClose}
            className="absolute right-4 top-4 text-white hover:text-white/90 transition-colors"
          >
            <X size={20} />
          </button> */}

          {/* Icon and content */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              {isSuccess ? (
                <CheckCircle2 
                  size={48} 
                  className="text-white" 
                />
              ) : (
                <XCircle 
                  size={48} 
                  className="text-white" 
                />
              )}
            </div>
            
            <h2 className="text-2xl font-bold mb-2">
              {message.title}
            </h2>
            
            <p className="text-white mb-6">
              {message.content}
            </p>

            <button
              onClick={onClose}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                isSuccess 
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              {isSuccess ? 'Great!' : 'Try Again'}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Modal;