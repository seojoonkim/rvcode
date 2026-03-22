"use client";

import { XCircle, Rocket, BookOpen, ExternalLink } from "lucide-react";

const resources = [
  {
    title: "Andrej Karpathy — \"Vibe Coding\" 원조 트윗 (2025)",
    description:
      "\"나는 코드를 '보기만' 한다. LLM이 다 알아서 짜주고, 나는 '대충 괜찮은지'만 본다\" — 바이브코딩이라는 용어를 최초로 만든 Andrej Karpathy의 트윗. AI에게 코딩을 완전히 맡기는 새로운 패러다임을 선언했습니다.",
    url: "https://x.com/karpathy/status/1886192185538785606",
  },
  {
    title: "Ethan Mollick — \"The AI-Augmented Workforce\" (Wharton)",
    description:
      "AI와 인간의 협업 패턴을 '켄타우로스(역할 분담)'와 '사이보그(완전 융합)'로 분류한 연구. 바이브코딩은 사이보그 접근법의 대표 사례로, 인간과 AI의 경계가 사라지는 미래를 보여줍니다.",
    url: "https://www.oneusefulthing.org/p/centaur-and-cyborg-writing",
  },
  {
    title: "McKinsey — \"The economic potential of generative AI\" (2023)",
    description:
      "생성형 AI가 연간 2.6~4.4조 달러 경제적 가치를 창출할 것으로 전망. 소프트웨어 개발 부문에서 가장 큰 생산성 향상이 예상되며, 바이브코딩이 그 핵심 동력입니다.",
    url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier",
  },
  {
    title: "Paul Graham — \"Write Like You Talk\"",
    description:
      "\"글쓰기처럼 말하듯이 코딩하라\" — 프로그래밍이 자연어로 진화한다는 철학적 관점. 복잡한 문법 대신 일상 언어로 소프트웨어를 만드는 바이브코딩의 근본 철학과 맞닿아 있습니다.",
    url: "https://paulgraham.com/writes.html",
  },
  {
    title: "Chris Dixon — \"Read Write Own\" (웹3와 AI의 교차점)",
    description:
      "소프트웨어 제작의 민주화가 인터넷의 다음 단계. AI가 코딩의 진입장벽을 무너뜨리는 것이 Read-Write-Own 철학의 연장선이며, 누구나 만들고 소유하는 시대를 여는 핵심입니다.",
    url: "https://cdixon.org/",
  },
];

export default function WhatIs() {
  return (
    <section id="what-is" className="py-32 md:py-40 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="highlight-block">바이브코딩</span>이란?
          </h2>
          <p className="text-lg text-gray-400">
            자연어(일상 대화)로 말하면 AI가 코드를 만들어줍니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto">
          {/* Before */}
          <div
            className="relative p-6 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] animate-fade-in delay-100"
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold tracking-wider">
              BEFORE
            </div>
            <div className="mb-4">
              <XCircle className="w-10 h-10 text-red-400" strokeWidth={1.5} />
            </div>
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
          </div>

          {/* After */}
          <div
            className="relative p-6 rounded-xl border border-neon-lime/20 bg-neon-lime/5 animate-fade-in delay-200"
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-neon-lime/10 text-neon-lime text-xs font-bold tracking-wider">
              AFTER
            </div>
            <div className="mb-4">
              <Rocket className="w-10 h-10 text-neon-lime" strokeWidth={1.5} />
            </div>
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
          </div>
        </div>

        {/* Related Resources — 철학/방법론 */}
        <div className="max-w-4xl mx-auto animate-fade-in delay-300">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-neon-lime" strokeWidth={1.5} />
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              더 깊이 이해하기
            </h3>
          </div>
          <div className="space-y-3">
            {resources.map((resource) => (
              <a
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 sm:p-5 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] hover:border-neon-lime/30 hover:bg-[#0a0a0a]/80 transition-all duration-200 group"
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
                  <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-neon-lime transition-colors flex-shrink-0 mt-1" strokeWidth={1.5} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
