"use client";

import { motion } from "framer-motion";

const steps = [
  {
    time: "0:00",
    duration: "10분",
    title: "오프닝",
    description: "바이브코딩이 뭔지, 어떻게 작동하는지 라이브 데모로 보여드립니다",
    icon: "👋",
  },
  {
    time: "0:10",
    duration: "10분",
    title: "환경 체크",
    description: "미리 설치한 프로그램들이 잘 작동하는지 함께 확인합니다",
    icon: "🔧",
  },
  {
    time: "0:20",
    duration: "30분",
    title: "실습 1: 프로필 사이트",
    description: "AI에게 자기소개를 알려주고, 4개국어 개인 프로필 웹사이트를 만듭니다",
    icon: "⭐",
  },
  {
    time: "0:50",
    duration: "30분",
    title: "실습 2: 미팅 메모 정리기",
    description: "미팅 노트를 붙여넣으면 AI가 자동으로 정리해주는 도구를 만듭니다",
    icon: "📝",
  },
  {
    time: "1:20",
    duration: "30분",
    title: "실습 3: 딜 제안서 작성기",
    description: "회사 정보를 넣으면 투자 딜 제안서 초안을 AI가 써주는 도구를 만듭니다",
    icon: "🤑",
  },
  {
    time: "1:50",
    duration: "10분",
    title: "쇼케이스 & 마무리",
    description: "각자 만든 결과물을 공유하고 질의응답을 합니다",
    icon: "🎉",
  },
];

export default function Timeline() {
  return (
    <section className="py-32 md:py-40 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="highlight-block">2시간</span> 타임라인
          </h2>
          <p className="text-lg text-gray-400">
            빠르고 실전적인 핸즈온(직접 해보는) 세션
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-lime via-neon-blue to-transparent" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px", amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative flex gap-4 sm:gap-6"
              >
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-xl sm:text-2xl">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono text-neon-lime font-bold">
                      {step.time}
                    </span>
                    <span className="text-xs text-gray-400 bg-gray-800 px-2 py-0.5 rounded-full border border-gray-700">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-white">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
