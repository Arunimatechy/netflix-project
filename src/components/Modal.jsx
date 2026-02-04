import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../features/ui/uiSlice";
import { motion, AnimatePresence } from "framer-motion";

const Modal = () => {
  const dispatch = useDispatch();
  const { isModalOpen, selectedMovie } = useSelector(
    (state) => state.ui
  );

  if (!isModalOpen || !selectedMovie) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-black rounded-lg max-w-3xl w-full p-6 relative"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
        >
          <button
            onClick={() => dispatch(closeModal())}
            className="absolute top-3 right-3 text-xl"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold mb-4">
            {selectedMovie.title}
          </h2>

          <iframe
            className="w-full h-80"
            src={selectedMovie.trailer}
            title={selectedMovie.title}
            allowFullScreen
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;



