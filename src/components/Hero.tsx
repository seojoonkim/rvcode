"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Pure black background with subtle glow */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-lime/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm mb-8 text-sm text-gray-400">
            <span className="w-2 h-2 rounded-full bg-neon-lime animate-pulse" />
            참가자 모집 중
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          RV{" "}
          <span className="highlight-block">바이브코딩</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          텍스트 → 마법:{" "}
          <span className="text-white font-medium">AI로 나만의 도구 만들기</span>
        </motion.p>

        <motion.p
          className="text-base text-gray-600 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          📅 일시: TBD (추후 확정)
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#preparation"
            className="px-8 py-4 rounded-xl bg-neon-lime text-black font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-neon-lime/20"
          >
            사전 준비 시작하기 →
          </a>
          <a
            href="#what-is"
            className="px-8 py-4 rounded-xl border border-gray-700 text-white font-medium text-lg hover:bg-gray-800/50 transition-colors"
          >
            더 알아보기
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-gray-600" />
        </div>
      </motion.div>
    </section>
  );
}
