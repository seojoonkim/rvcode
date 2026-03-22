"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "코딩 모르는데 괜찮을까요?",
    a: "네, 전혀 문제 없습니다! 바이브코딩의 핵심은 '코딩을 몰라도 된다'는 것입니다. 자연어(한국어)로 원하는 것을 설명하면 AI가 코드를 작성합니다. 오늘 세션에서 그 과정을 직접 경험하게 됩니다.",
  },
  {
    q: "Claude Pro 꼭 사야 하나요?",
    a: "Claude Code를 사용하려면 Anthropic API 크레딧 또는 Claude Max 구독이 필요합니다. 세션 당일에는 무료 체험분으로 충분히 실습할 수 있습니다. 지속적으로 사용하려면 구독을 권장합니다.",
  },
  {
    q: "윈도우는 안 되나요?",
    a: "현재 Claude Code는 macOS와 Linux를 공식 지원합니다. 윈도우의 경우 WSL2(Windows Subsystem for Linux)를 통해 사용할 수 있지만, 세션에서는 macOS 기준으로 진행됩니다.",
  },
  {
    q: "비용은 얼마나 들나요?",
    a: "세션 자체는 무료입니다. 사용하는 도구들(GitHub, Vercel, VS Code)도 모두 무료입니다. Claude Code만 API 사용량에 따른 비용이 발생하지만, 세션 중 사용량은 미미합니다 (약 $1~2 수준).",
  },
  {
    q: "개인정보 유출 걱정 없나요?",
    a: "Claude Code는 로컬에서 실행되며, 코드는 여러분의 GitHub 저장소에 저장됩니다. AI에 전달되는 내용은 Anthropic의 개인정보 보호 정책을 따릅니다. 민감한 정보(비밀번호, API키 등)는 입력하지 않도록 안내드립니다.",
  },
  {
    q: "세션 후에도 쓸 수 있나요?",
    a: "물론입니다! 세션에서 배운 모든 도구와 방법은 계속 사용할 수 있습니다. 만든 웹사이트도 Vercel에서 무료로 호스팅됩니다. Claude Code는 개인 프로젝트에도 활용할 수 있습니다.",
  },
  {
    q: "이력서/LinkedIn 준비해야 하나요?",
    a: "첫 번째 실습에서 개인 프로필 사이트를 만듭니다. 이력서나 LinkedIn 프로필이 있으면 더 풍성한 결과물을 만들 수 있습니다. 없어도 간단한 자기소개만으로 충분합니다.",
  },
  {
    q: "얼마나 걸리나요?",
    a: "세션은 총 2시간입니다. 3가지 프로젝트를 순서대로 진행하며, 각 프로젝트당 약 30분 소요됩니다. 사전 준비(소프트웨어 설치)는 약 20분 정도 걸립니다.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-card-border rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-card/50 transition-colors text-left"
      >
        <span className="font-medium text-sm sm:text-base pr-4">{q}</span>
        <span
          className={`text-muted flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-5">
              <p className="text-sm text-muted leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
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
            자주 묻는 질문
          </h2>
          <p className="text-lg text-muted">궁금한 점을 확인해보세요</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
