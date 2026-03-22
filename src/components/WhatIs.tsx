"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px", amount: 0.1 },
  transition: { duration: 0.5 },
};

const resources = [
  {
    title: "Andrej Karpathy의 \"Vibe Coding\" 트윗",
    description: "바이브코딩 개념을 처음 제안한 원조 트윗. AI에게 코딩을 맡기는 새로운 방식을 설명합니다.",
    url: "https://x.com/karpathy/status/1886192185538785606",
  },
  {
    title: "Anthropic Claude Code 공식 문서",
    description: "우리가 세션에서 사용할 Claude Code의 공식 가이드. 설치부터 활용법까지 모두 있습니다.",
    url: "https://docs.anthropic.com/en/docs/claude-code/overview",
  },
  {
    title: "Cursor — AI 코드 에디터",
    description: "AI가 내장된 코드 편집기. 바이브코딩을 위해 만들어진 대표적인 도구입니다.",
    url: "https://cursor.com",
  },
  {
    title: "GitHub Copilot 소개",
    description: "GitHub이 만든 AI 코딩 도우미. 코드를 자동으로 제안해주는 도구입니다.",
    url: "https://github.com/features/copilot",
  },
  {
    title: "Y Combinator — \"Vibe Coding is the Future\"",
    description: "실리콘밸리 최고의 스타트업 액셀러레이터가 바이브코딩의 미래를 분석합니다.",
    url: "https://www.ycombinator.com/library/ME-vibe-coding-is-the-future",
  },
];

export default function WhatIs() {
  return (
    <section id="what-is" className="py-32 md:py-40 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="highlight-block">바이브코딩</span>이란?
          </h2>
          <p className="text-lg text-gray-400">
            자연어(일상 대화)로 말하면 AI가 코드를 만들어줍니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
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
                <span>한국어로 원하는 것을 설명</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neon-lime font-bold">✓</span>
                <span>30분 만에 완성</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-neon-lime font-bold">✓</span>
                <span>거의 0원 (무료 도구 활용)</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">
            📚 더 알아보기
          </h3>
          <div className="space-y-3">
            {resources.map((resource, i) => (
              <motion.a
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px", amount: 0.1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="block p-4 sm:p-5 rounded-xl border border-gray-700 bg-gray-800/20 hover:border-neon-lime/30 hover:bg-gray-800/40 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-neon-lime transition-colors mb-1">
                      {resource.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                  <span className="text-gray-600 group-hover:text-neon-lime transition-colors flex-shrink-0 text-lg">
                    ↗
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
