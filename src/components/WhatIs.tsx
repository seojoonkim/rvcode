"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

export default function WhatIs() {
  return (
    <section id="what-is" className="py-32 md:py-40 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="highlight-block">바이브코딩</span>이란?
          </h2>
          <p className="text-lg text-gray-400">
            자연어로 말하면 AI가 코드를 만들어줍니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Before */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative p-6 sm:p-8 rounded-2xl border border-gray-700 bg-gray-800/30"
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold tracking-wider">
              BEFORE
            </div>
            <div className="text-5xl mb-4">😩</div>
            <h3 className="text-xl font-bold mb-4 text-red-400">기존 방식</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <span className="text-red-400 font-bold">✕</span>
                <span>개발자 채용</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-400 font-bold">✕</span>
                <span>3개월 개발 기간</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-400 font-bold">✕</span>
                <span>500만원+ 비용</span>
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative p-6 sm:p-8 rounded-2xl border border-neon-lime/20 bg-neon-lime/5"
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-neon-lime/10 text-neon-lime text-xs font-bold tracking-wider">
              AFTER
            </div>
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-4 text-neon-lime">
              바이브코딩
            </h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <span className="text-neon-lime font-bold">✓</span>
                <span>텍스트 입력</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neon-lime font-bold">✓</span>
                <span>30분 완성</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neon-lime font-bold">✓</span>
                <span>0원</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
