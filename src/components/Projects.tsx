"use client";

import { motion } from "framer-motion";

const projects = [
  {
    icon: "⭐",
    title: "개인 프로필 사이트",
    description: "4개국어 지원 나만의 프로필 페이지를 만들어보세요. AI에게 자기소개를 알려주면 멋진 웹사이트가 완성됩니다.",
    difficulty: 1,
    difficultyLabel: "입문",
  },
  {
    icon: "📝",
    title: "AI 미팅 메모 정리기",
    description: "미팅 노트를 붙여넣으면 AI가 자동으로 핵심 내용을 정리하고 요약해줍니다. 투자 미팅 정리에 딱!",
    difficulty: 2,
    difficultyLabel: "초급",
  },
  {
    icon: "🤑",
    title: "AI 딜 제안서 작성기",
    description: "회사 정보를 입력하면 AI가 투자 딜 제안서 초안을 작성해주는 도구를 직접 만듭니다.",
    difficulty: 3,
    difficultyLabel: "중급",
  },
];

function DifficultyDots({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i <= level ? "bg-neon-lime" : "bg-gray-700"
          }`}
        />
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="py-32 md:py-40 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            오늘 만드는 것
          </h2>
          <p className="text-lg text-gray-400">
            2시간 안에 실제로 작동하는{" "}
            <span className="highlight-block">3가지 도구</span>를 만듭니다
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px", amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl border border-gray-700 bg-gray-800/30 hover:border-neon-lime/40 hover:bg-gray-800/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{project.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium">
                  {project.difficultyLabel}
                </span>
                <DifficultyDots level={project.difficulty} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
