"use client";

import { Hand, Wrench, User, FileText, FileSignature, PartyPopper } from "lucide-react";
import type { ReactNode } from "react";

interface Step {
  time: string;
  duration: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const steps: Step[] = [
  {
    time: "0:00",
    duration: "10분",
    title: "오프닝 — 바이브코딩 맛보기",
    description: "바이브코딩이 뭔지 1분 만에 설명하고, 진행자가 눈앞에서 한국어 한 문장으로 웹사이트를 만드는 라이브 데모를 보여드립니다. \"진짜 이게 돼?\" 하는 순간을 직접 목격하세요!",
    icon: <Hand className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />,
  },
  {
    time: "0:10",
    duration: "10분",
    title: "환경 체크 — 내 맥북 준비 확인",
    description: "사전에 설치한 프로그램(Node.js, Claude Code 등)이 잘 작동하는지 함께 하나씩 확인합니다. 혹시 설치가 안 된 부분이 있어도 이 시간에 도와드리니 걱정 마세요.",
    icon: <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={1.5} />,
  },
  {
    time: "0:20",
    duration: "30분",
    title: "실습 1: 나만의 프로필 사이트 만들기",
    description: "AI에게 \"내 이름은 ○○이고, 이런 일을 해요\"라고 알려주면 4개국어 개인 프로필 웹사이트가 완성됩니다. 만든 사이트를 바로 인터넷에 올려서 링크로 공유해봐요!",
    icon: <User className="w-5 h-5 sm:w-6 sm:h-6 text-neon-lime" strokeWidth={1.5} />,
  },
  {
    time: "0:50",
    duration: "30분",
    title: "실습 2: AI 미팅 메모 정리기 만들기",
    description: "미팅 노트를 붙여넣으면 AI가 핵심 내용, 할 일, 결정 사항을 자동으로 정리해주는 나만의 도구를 만듭니다. 실습 1에서 배운 방법을 활용해서 한 단계 더 나아가요.",
    icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-neon-lime" strokeWidth={1.5} />,
  },
  {
    time: "1:20",
    duration: "30분",
    title: "실습 3: AI 딜 제안서 작성기 만들기",
    description: "회사 이름과 간단한 정보만 넣으면 투자 딜 제안서 초안을 AI가 써주는 도구를 만듭니다. 여기까지 오면 \"나도 진짜 만들 수 있구나!\" 하는 자신감이 생깁니다.",
    icon: <FileSignature className="w-5 h-5 sm:w-6 sm:h-6 text-neon-lime" strokeWidth={1.5} />,
  },
  {
    time: "1:50",
    duration: "10분",
    title: "쇼케이스 & 마무리 🎉",
    description: "각자 만든 결과물을 화면에 띄우고 서로 구경합니다. 질문도 자유롭게! 오늘 배운 걸 앞으로 어떻게 활용할 수 있는지 팁도 드려요.",
    icon: <PartyPopper className="w-5 h-5 sm:w-6 sm:h-6 text-neon-pink" strokeWidth={1.5} />,
  },
];

export default function Timeline() {
  return (
    <section className="py-32 md:py-40 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display mb-4 tracking-tight">
            <span className="highlight-block">2시간</span> 타임라인
          </h2>
          <p className="text-lg text-gray-300">
            빠르고 실전적인 핸즈온(직접 손으로 해보는) 세션이에요.
            <br />
            <span className="text-gray-400">막히는 부분은 진행자가 바로 도와드립니다.</span>
          </p>
        </div>

        <div className="relative animate-fade-in delay-200">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-lime via-neon-blue to-transparent" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative flex gap-4 sm:gap-6 animate-fade-in"
                style={{ animationDelay: `${0.3 + i * 0.08}s` }}
              >
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-[#0a0a0a] border border-[#1a1a1a] flex items-center justify-center">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono text-neon-lime font-bold">
                      {step.time}
                    </span>
                    <span className="text-sm font-emphasis text-gray-400 bg-[#0a0a0a] px-2 py-0.5 rounded-full border border-[#1a1a1a]">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-display mb-1 text-white">{step.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
