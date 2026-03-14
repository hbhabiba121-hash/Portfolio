import { motion } from "framer-motion"

export default function SignalWave() {
  return (
    <div className="relative w-full h-10 flex items-center justify-center overflow-hidden">

      {/* base gradient line */}
      <div className="relative w-full max-w-6xl h-[2px] bg-gradient-to-r from-black via-emerald-500/60 to-black" />

      {/* moving glow pulse */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
        animate={{ x: ["-50%", "105%"] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* soft ambient glow */}
      <div className="absolute w-full max-w-6xl h-6 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent blur-xl opacity-60" />

    </div>
  )
}