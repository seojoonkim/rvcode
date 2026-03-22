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
    <section id="what-is" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            바이브코딩이란?
          </h2>
          <p className="text-lg text-muted">
            자연어로 말하면 AI가 코드를 만들어줍니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Before */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative p-6 sm:p-8 rounded-2xl border border-red-500/20 bg-red-500/5"
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-medium">
              BEFORE
            </div>
            <div className="text-5xl mb-4">😩</div>
            <h3 className="text-xl font-bold mb-4 text-red-300">기존 방식</h3>
            <div className="space-y-3 text-muted">
              <div className="flex items-center gap-3">
                <span className="text-red-400">✕</span>
                <span>개발자 채용</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-400">✕</span>
                <span>3개월 개발 기간</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-400">✕</span>
                <span>500만원+ 비용</span>
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative p-6 sm:p-8 rounded-2xl border border-green-500/20 bg-green-500/5"
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium">
              AFTER
            </div>
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-4 text-green-300">
              바이브코딩
            </h3>
            <div className="space-y-3 text-muted">
              <div className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                <span>텍스트 입력</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                <span>30분 완성</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                <span>0원</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
