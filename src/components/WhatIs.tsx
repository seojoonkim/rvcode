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
    title: "Hashed — 역삼각형 인재의 시대: 바이브 코딩이 창업과 투자의 문법을 바꾸다",
    description:
      "Hashed 대표 김서준이 직접 바이브코딩으로 만든 프로젝트 사례와 함께, 스타트업 창업·투자의 문법이 어떻게 바뀌고 있는지 분석합니다.",
    url: "https://medium.com/hashed-kr/vibe-founders-64f178fe5497",
    tag: "필독",
  },
  {
    title: "Hashed — AI 에이전트와 함께 20명이 1000명처럼 일하는 조직 만들기",
    description:
      "AI 에이전트를 '모더레이터'로 활용해 조직의 판단 밀도를 높이는 실험. CEO 병목 해소부터 실제 운영 사례까지 담았습니다.",
    url: "https://medium.com/hashed-kr/agentic-vc-a518ca24edba",
    tag: "필독",
  },
  {
    title: "삼성SDS — 바이브 코딩 이해와 활용 (한국어)",
    description:
      "삼성SDS가 정리한 바이브코딩 활용 가이드. 실제 업무에서 AI 코딩을 어떻게 쓸 수 있는지 실용적인 관점으로 설명합니다.",
    url: "https://www.samsungsds.com/kr/insights/understanding-and-applying-vibe-coding.html",
    tag: "한국어",
  },
  {
    title: "IBM Korea — 바이브 코딩이란? (한국어)",
    description:
      "바이브코딩의 개념, 작동 방식, 장단점을 한국어로 쉽게 정리한 글입니다. 처음 접하는 분에게 추천합니다.",
    url: "https://www.ibm.com/kr-ko/think/topics/vibe-coding",
    tag: "한국어",
  },
];

export default function WhatIs() {
  return (
    <section id="what-is" className="py-32 md:py-40 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-4 tracking-tight">
            <span className="highlight-block">바이브코딩</span>이란?
          </h2>
          <p className="text-lg text-gray-300">
            코딩을 몰라도 괜찮아요. 내가 원하는 걸 말로 설명하면, AI가 대신 코드를 짜서 만들어줍니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto">
          {/* Before */}
          <div
            className="relative p-6 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] animate-fade-in delay-100"
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm font-emphasis tracking-wider">
              BEFORE
            </div>
            <div className="mb-4">
              <XCircle className="w-10 h-10 text-red-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-display mb-3 text-red-400">기존 방식</h3>
            <p className="text-sm text-gray-400 mb-4">개발자 없이 뭔가 만들고 싶을 때, 이렇게 힘들었어요</p>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">✕</span>
                <span>개발자 채용 공고 → 면접 → 계약 (최소 2~4주 소요)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">✕</span>
                <span>요구사항 정리, 기획서 작성, 끝없는 커뮤니케이션</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">✕</span>
                <span>최소 기능(MVP)만 만드는 데도 3개월 이상</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">✕</span>
                <span>프리랜서 비용 500~2,000만원 이상</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">✕</span>
                <span>수정할 때마다 추가 비용과 시간 발생</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">✕</span>
                <span>내 머릿속 아이디어를 직접 만들 수 없는 답답함</span>
              </div>
            </div>
          </div>

          {/* After */}
          <div
            className="relative p-6 rounded-xl border border-neon-lime/20 bg-neon-lime/5 animate-fade-in delay-200"
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-neon-lime/10 text-neon-lime text-sm font-emphasis tracking-wider">
              AFTER
            </div>
            <div className="mb-4">
              <Rocket className="w-10 h-10 text-neon-lime" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-display mb-3 text-neon-lime">
              바이브코딩
            </h3>
            <p className="text-sm text-gray-400 mb-4">바이브코딩으로 시작하면 이렇게 달라져요</p>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-neon-lime font-bold mt-0.5">✓</span>
                <span>&ldquo;이런 기능 만들어줘&rdquo; 한국어 한 문장이면 시작</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neon-lime font-bold mt-0.5">✓</span>
                <span>AI가 코드를 작성하고, 나는 결과만 확인하면 끝</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neon-lime font-bold mt-0.5">✓</span>
                <span>오늘 떠오른 아이디어 → 오늘 바로 작동하는 버전 완성</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neon-lime font-bold mt-0.5">✓</span>
                <span>Claude Code 무료 체험분으로 충분히 실습 가능</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neon-lime font-bold mt-0.5">✓</span>
                <span>마음에 안 들면 &ldquo;이 부분 고쳐줘&rdquo; 한마디로 즉시 수정</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neon-lime font-bold mt-0.5">✓</span>
                <span>비전공자도 실제 서비스를 인터넷에 올릴 수 있음</span>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="text-center mb-20 animate-fade-in delay-250">
          <p className="text-lg sm:text-xl font-medium text-white/90 italic">
            &ldquo;오늘 이 자리에서 아이디어를 실제로 만들어봅니다.&rdquo;
          </p>
        </div>

        {/* Related Resources — 철학/방법론 */}
        <div className="max-w-4xl mx-auto animate-fade-in delay-300">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-neon-lime" strokeWidth={1.5} />
            <h3 className="text-xl sm:text-2xl font-display text-white">
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
                      <span className="flex-shrink-0 text-xs font-emphasis px-2 py-0.5 rounded-full bg-neon-lime/10 text-neon-lime border border-neon-lime/20">
                        {resource.tag}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
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
