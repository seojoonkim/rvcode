"use client";

import { XCircle, Rocket, BookOpen, ExternalLink } from "lucide-react";

const resources = [
  {
    title: "Andrej Karpathy — \"Vibe Coding\" 원조 트윗 (2025)",
    description:
      "\"코드를 '보기만' 한다. AI가 다 알아서 짜주고, 나는 대충 괜찮은지만 본다\" — 바이브코딩이라는 말을 세상에 처음 알린 AI 연구자의 트윗입니다.",
    url: "https://x.com/karpathy/status/1886192185538785606",
    tag: "원조",
  },
  {
    title: "a16z — \"AI와 소프트웨어 개발의 미래\"",
    description:
      "실리콘밸리 최고의 투자사 a16z가 분석한 AI 코딩 도구의 현재와 미래. 바이브코딩이 개발자의 역할을 어떻게 바꾸고 있는지 살펴봅니다.",
    url: "https://a16z.com/podcast/whos-coding-now-ai-and-the-future-of-software-development/",
    tag: "인사이트",
  },
  {
    title: "IBM Korea — 바이브 코딩이란? (한국어)",
    description:
      "바이브코딩의 개념, 작동 방식, 장단점을 한국어로 쉽게 정리한 글입니다. 처음 접하는 분에게 추천합니다.",
    url: "https://www.ibm.com/kr-ko/think/topics/vibe-coding",
    tag: "한국어",
  },
  {
    title: "삼성SDS — 바이브 코딩 이해와 활용 (한국어)",
    description:
      "삼성SDS가 정리한 바이브코딩 활용 가이드. 실제 업무에서 AI 코딩을 어떻게 쓸 수 있는지 실용적인 관점으로 설명합니다.",
    url: "https://www.samsungsds.com/kr/insights/understanding-and-applying-vibe-coding.html",
    tag: "한국어",
  },
  {
    title: "위키백과 — 바이브 코딩 (한국어)",
    description:
      "바이브코딩의 역사, 도구, 장단점을 객관적으로 정리한 백과사전 문서. 전체적인 맥락을 빠르게 파악할 수 있습니다.",
    url: "https://ko.wikipedia.org/wiki/%EB%B0%94%EC%9D%B4%EB%B8%8C_%EC%BD%94%EB%94%A9",
    tag: "개요",
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
            코딩을 몰라도 괜찮아요. 말로 설명하면 AI가 대신 만들어줍니다
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
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-neon-lime transition-colors">
                        {resource.title}
                      </h4>
                      <span className="flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full bg-neon-lime/10 text-neon-lime border border-neon-lime/20">
                        {resource.tag}
                      </span>
                    </div>
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
