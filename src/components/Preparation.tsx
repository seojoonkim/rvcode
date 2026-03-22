"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const supplies = [
  { icon: "💻", text: "맥북 (macOS)" },
  { icon: "🔌", text: "충전기" },
  { icon: "📸", text: "프로필 사진 1장" },
  { icon: "📝", text: "간단한 자기소개 (한/영)" },
  { icon: "📄", text: "이력서 또는 LinkedIn 프로필" },
];

interface InstallStep {
  id: string;
  title: string;
  description: string;
  installCmd: string;
  verifyCmd: string;
  verifyExpect: string;
}

const installSteps: InstallStep[] = [
  {
    id: "homebrew",
    title: "1. Homebrew",
    description: "macOS 패키지 매니저",
    installCmd: '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
    verifyCmd: "brew --version",
    verifyExpect: "Homebrew 4.x.x",
  },
  {
    id: "nodejs",
    title: "2. Node.js",
    description: "JavaScript 런타임 (v20 이상)",
    installCmd: "brew install node",
    verifyCmd: "node --version",
    verifyExpect: "v20.x.x 이상",
  },
  {
    id: "github",
    title: "3. GitHub 계정 + CLI",
    description: "코드 저장소 & 명령줄 도구",
    installCmd: "brew install gh\ngh auth login",
    verifyCmd: "gh auth status",
    verifyExpect: "Logged in to github.com",
  },
  {
    id: "claude",
    title: "4. Claude Code + 온보딩",
    description: "AI 코딩 어시스턴트 (핵심 도구!)",
    installCmd: "npm install -g @anthropic-ai/claude-code\nclaude",
    verifyCmd: "claude --version",
    verifyExpect: "claude x.x.x",
  },
  {
    id: "vercel",
    title: "5. Vercel 계정",
    description: "웹사이트 배포 플랫폼",
    installCmd: "npm install -g vercel\nvercel login",
    verifyCmd: "vercel whoami",
    verifyExpect: "your-username",
  },
  {
    id: "vscode",
    title: "6. VS Code (권장)",
    description: "코드 에디터",
    installCmd: "brew install --cask visual-studio-code",
    verifyCmd: "code --version",
    verifyExpect: "1.x.x",
  },
];

const checklist = [
  "Homebrew 설치 완료",
  "Node.js v20+ 설치 완료",
  "GitHub 계정 생성 & gh CLI 로그인",
  "Claude Code 설치 & 온보딩 완료",
  "Vercel 계정 생성 & 로그인",
  "VS Code 설치 (권장)",
  "프로필 사진 준비",
  "자기소개 텍스트 준비",
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 px-2 py-1 rounded-md bg-gray-700/50 hover:bg-gray-700 text-xs text-gray-400 hover:text-white transition-colors"
    >
      {copied ? "✓ 복사됨" : "복사"}
    </button>
  );
}

function AccordionItem({ step }: { step: InstallStep }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-700 rounded-xl overflow-hidden bg-gray-800/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-gray-800/50 transition-colors text-left"
      >
        <div>
          <h4 className="font-bold text-base text-white">{step.title}</h4>
          <p className="text-sm text-gray-400">{step.description}</p>
        </div>
        <span
          className={`text-gray-400 transition-transform duration-200 ${
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
            <div className="px-4 sm:px-5 pb-5 space-y-4">
              {/* Install command */}
              <div>
                <p className="text-xs text-gray-400 mb-2">📦 설치 명령어</p>
                <div className="relative">
                  <pre className="bg-black border border-gray-700 rounded-lg p-3 sm:p-4 text-sm font-mono text-neon-lime overflow-x-auto">
                    {step.installCmd}
                  </pre>
                  <CopyButton text={step.installCmd} />
                </div>
              </div>

              {/* Verify command */}
              <div>
                <p className="text-xs text-gray-400 mb-2">✅ 확인 명령어</p>
                <div className="relative">
                  <pre className="bg-black border border-gray-700 rounded-lg p-3 sm:p-4 text-sm font-mono text-neon-blue overflow-x-auto">
                    {step.verifyCmd}
                  </pre>
                  <CopyButton text={step.verifyCmd} />
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  예상 결과: <code className="text-neon-lime">{step.verifyExpect}</code>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ChecklistItem({ label }: { label: string }) {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="w-5 h-5 rounded border-gray-700 accent-neon-lime"
      />
      <span
        className={`text-sm transition-colors ${
          checked ? "text-gray-600 line-through" : "text-white"
        }`}
      >
        {label}
      </span>
    </label>
  );
}

export default function Preparation() {
  return (
    <section id="preparation" className="py-32 md:py-40 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            ⭐ <span className="highlight-block">사전 준비</span>
          </h2>
          <p className="text-lg text-gray-400">
            세션 전에 미리 준비해주세요 (약 20분 소요)
          </p>
        </motion.div>

        {/* Supplies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold mb-4 text-white">📦 준비물</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {supplies.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 p-3 rounded-xl border border-gray-700 bg-gray-800/30"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm text-gray-300">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Install Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold mb-4 text-white">🛠 설치 가이드</h3>
          <div className="space-y-3">
            {installSteps.map((step) => (
              <AccordionItem key={step.id} step={step} />
            ))}
          </div>
        </motion.div>

        {/* Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">✅ 최종 체크리스트</h3>
          <div className="border border-gray-700 rounded-xl bg-gray-800/30 p-4">
            <div className="space-y-1">
              {checklist.map((item) => (
                <ChecklistItem key={item} label={item} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
