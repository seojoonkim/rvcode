"use client";

import { motion } from "framer-motion";

const steps = [
  {
    time: "0:00",
    duration: "10분",
    title: "오프닝",
    description: "바이브코딩 소개 & 데모",
    icon: "👋",
  },
  {
    time: "0:10",
    duration: "10분",
    title: "환경 체크",
    description: "설치 확인 & 트러블슈팅",
    icon: "🔧",
  },
  {
    time: "0:20",
    duration: "30분",
    title: "실습 1: 프로필 사이트",
    description: "4개국어 개인 프로필 페이지 만들기",
    icon: "⭐",
  },
  {
    time: "0:50",
    duration: "30분",
    title: "실습 2: 미팅 메모 정리기",
    description: "AI로 미팅 노트를 자동 정리하는 도구",
    icon: "📝",
  },
  {
    time: "1:20",
    duration: "30분",
    title: "실습 3: 딜 제안서 작성기",
    description: "투자 딜 제안서를 생성하는 AI 도구",
    icon: "🤑",
  },
  {
    time: "1:50",
    duration: "10분",
    title: "쇼케이스 & 마무리",
    description: "결과물 공유 & Q&A",
    icon: "🎉",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            2시간 타임라인
          </h2>
          <p className="text-lg text-muted">
            빠르고 실전적인 핸즈온 세션
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative flex gap-4 sm:gap-6"
              >
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-card border border-card-border flex items-center justify-center text-xl sm:text-2xl">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono text-primary">
                      {step.time}
                    </span>
                    <span className="text-xs text-muted bg-card-border/50 px-2 py-0.5 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
