import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#f4f4f4] text-center">
      <motion.div
        className="w-[50px] h-[50px] border-[5px] border-gray-300 border-t-[#3a3a3a] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <p className="mt-4 text-[1.2rem] text-[#3a3a3a] font-bold">Loading, please wait...</p>
    </div>
  );
};

export default LoadingSpinner;
