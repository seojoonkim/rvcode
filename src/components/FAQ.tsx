"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "코딩을 하나도 모르는데 정말 괜찮을까요?",
    a: "네, 100% 괜찮습니다! 이 세션은 코딩 경험이 전혀 없는 분을 위해 설계됐어요. 바이브코딩의 핵심은 '코딩을 몰라도 된다'는 것입니다. 한국어로 \"이런 웹사이트 만들어줘\"라고 입력하면 AI가 코드를 대신 작성합니다. 마치 통역사에게 말하면 외국어로 번역해주는 것처럼요. 진행자가 옆에서 하나하나 안내하니까, 그냥 따라오기만 하면 됩니다.",
  },
  {
    q: "Claude Pro 꼭 사야 하나요? 비용이 걱정돼요.",
    a: "세션 당일에는 무료 체험분으로 충분히 실습할 수 있으니 걱정 마세요! Claude Code를 계속 사용하려면 Anthropic(앤트로픽, Claude를 만든 AI 회사)의 유료 구독이 필요한데, 넷플릭스처럼 월정액 방식이에요. 우선 세션에서 무료로 체험해보고, 마음에 들면 그때 결정해도 됩니다.",
  },
  {
    q: "윈도우 노트북은 안 되나요?",
    a: "현재 Claude Code는 맥(macOS)에서 가장 잘 작동합니다. 윈도우의 경우 추가 설정이 필요해서, 이번 세션에서는 맥북 기준으로 진행됩니다. 윈도우를 쓰시는 분은 미리 말씀해주시면 도와드릴게요!",
  },
  {
    q: "비용은 얼마나 들나요?",
    a: "세션 자체는 무료입니다. 사용하는 도구들도 모두 무료예요. Claude Code만 AI 사용량에 따라 소액 비용(세션 전체 약 1,500~3,000원 수준)이 발생할 수 있지만, 거의 부담 없는 수준입니다.",
  },
  {
    q: "내 정보가 유출될 걱정은 없나요?",
    a: "Claude Code는 내 맥북 안에서 직접 실행되고, 만든 결과물은 GitHub(코드 전용 클라우드 저장소)에 안전하게 보관됩니다. 세션 중에 비밀번호 같은 개인 정보는 입력하지 않으니 안심하세요.",
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
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{a}</p>
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display tracking-tight">
              자주 묻는 질문
            </h2>
          </div>
          <p className="text-lg text-gray-300">궁금한 점이 있다면 여기서 확인해보세요. 없는 질문은 편하게 물어주세요!</p>
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
