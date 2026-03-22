"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "코딩 모르는데 괜찮을까요?",
    a: "네, 전혀 문제 없습니다! 바이브코딩의 핵심은 '코딩을 몰라도 된다'는 것입니다. 한국어로 원하는 것을 설명하면 AI가 코드를 대신 작성합니다. 마치 통역사에게 말하면 다른 언어로 번역해주는 것처럼요. 오늘 세션에서 그 과정을 직접 경험하게 됩니다.",
  },
  {
    q: "Claude Pro 꼭 사야 하나요?",
    a: "Claude Code를 사용하려면 Anthropic이라는 AI 회사의 API 크레딧(사용권) 또는 Claude Max 구독이 필요합니다. 세션 당일에는 무료 체험분으로 충분히 실습할 수 있습니다. 계속 사용하고 싶다면 구독을 권장합니다.",
  },
  {
    q: "윈도우 노트북은 안 되나요?",
    a: "현재 Claude Code는 맥(macOS)과 리눅스를 공식 지원합니다. 윈도우의 경우 WSL2라는 별도 설정이 필요해서, 이번 세션에서는 맥북 기준으로 진행됩니다. 윈도우를 쓰시는 분은 미리 말씀해주세요!",
  },
  {
    q: "비용은 얼마나 들나요?",
    a: "세션 자체는 무료입니다. 사용하는 도구들(GitHub, Vercel, VS Code)도 모두 무료입니다. Claude Code만 AI 사용량에 따른 소액 비용이 발생하지만, 세션 중 사용량은 약 $1~2 수준으로 미미합니다.",
  },
  {
    q: "내 정보가 유출될 걱정은 없나요?",
    a: "Claude Code는 내 맥북에서 직접 실행되고, 코드는 내 GitHub 저장소(온라인 코드 보관함)에 저장됩니다. 세션 중에 비밀번호나 API 키 같은 민감한 정보는 입력하지 않도록 안내드립니다.",
  },
  {
    q: "세션 끝나면 못 쓰나요?",
    a: "아닙니다! 세션에서 배운 모든 도구와 방법은 계속 사용할 수 있습니다. 만든 웹사이트도 Vercel에서 무료로 호스팅(인터넷에 올려두기)됩니다. Claude Code는 개인 프로젝트에도 얼마든지 활용할 수 있습니다.",
  },
  {
    q: "이력서/LinkedIn 준비해야 하나요?",
    a: "첫 번째 실습에서 개인 프로필 사이트를 만듭니다. 이력서나 LinkedIn 프로필이 있으면 AI가 더 풍성한 결과물을 만들 수 있습니다. 없어도 간단한 자기소개만으로 충분합니다.",
  },
  {
    q: "얼마나 걸리나요?",
    a: "세션은 총 2시간입니다. 3가지 도구를 순서대로 만들며, 각 도구당 약 30분 소요됩니다. 사전 준비(프로그램 설치)는 약 20분 정도 걸립니다.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#1a1a1a] rounded-xl overflow-hidden bg-[#0a0a0a]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between p-4 sm:p-5 min-h-[56px] hover:bg-gray-800/50 transition-colors text-left"
      >
        <span className="font-medium text-sm sm:text-base pr-4 text-white">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={1.5}
        />
      </button>

      {isOpen && (
        <div className="px-4 sm:px-5 pb-5">
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-32 md:py-40 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 md:w-10 md:h-10 text-neon-lime" strokeWidth={1.5} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              자주 묻는 질문
            </h2>
          </div>
          <p className="text-lg text-gray-400">궁금한 점을 확인해보세요</p>
        </div>

        <div className="space-y-3 animate-fade-in delay-200">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
