"use client";

import { User, FileText, FileSignature } from "lucide-react";

const projects = [
  {
    icon: <User className="w-8 h-8 text-neon-lime" strokeWidth={1.5} />,
    title: "개인 프로필 사이트",
    description: "나만의 프로필 웹페이지를 만듭니다. AI에게 자기소개를 알려주면 한국어·영어·일본어·중국어 4개국어로 된 멋진 사이트가 완성돼요. 만든 사이트는 링크 하나로 누구에게나 공유할 수 있습니다.",
    difficulty: 1,
    difficultyLabel: "입문 — 처음이라도 OK",
  },
  {
    icon: <FileText className="w-8 h-8 text-neon-lime" strokeWidth={1.5} />,
    title: "AI 미팅 메모 정리기",
    description: "미팅에서 메모한 내용을 붙여넣기만 하면, AI가 핵심 포인트·액션 아이템·참석자별 할 일을 깔끔하게 정리해줍니다. 매번 회의록 쓰느라 고생하던 시간을 확 줄여보세요.",
    difficulty: 2,
    difficultyLabel: "초급 — 조금 익숙해진 후",
  },
  {
    icon: <FileSignature className="w-8 h-8 text-neon-lime" strokeWidth={1.5} />,
    title: "AI 딜 제안서 작성기",
    description: "회사 이름과 간단한 정보만 넣으면 AI가 투자 딜 제안서 초안을 뚝딱 만들어줍니다. 매번 빈 문서 앞에서 막막했다면, 이 도구가 첫 문장부터 도와줘요.",
    difficulty: 3,
    difficultyLabel: "중급 — 자신감이 붙은 후",
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
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display mb-4 tracking-tight">
            오늘 만드는 것
          </h2>
          <p className="text-lg text-gray-300">
            2시간 안에 실제로 작동하는{" "}
            <span className="highlight-block">3가지 도구</span>를 직접 만들어요.
            <br />
            <span className="text-gray-400">하나씩 난이도가 올라가니까, 자연스럽게 실력이 쌓입니다.</span>
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group p-6 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] hover:border-neon-lime/40 hover:bg-[#0a0a0a]/80 transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4">{project.icon}</div>
              <h3 className="text-xl font-display mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300 font-emphasis">
                  {project.difficultyLabel}
                </span>
                <DifficultyDots level={project.difficulty} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
