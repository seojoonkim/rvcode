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
  detailDescription: string;
  installCmd: string;
  verifyCmd: string;
  verifyExpect: string;
}

const installSteps: InstallStep[] = [
  {
    id: "homebrew",
    title: "1. Homebrew 설치",
    description: "맥북용 프로그램 자동 설치 도구",
    detailDescription: "Homebrew는 맥북에서 프로그램을 명령어 한 줄로 설치할 수 있게 해주는 도구입니다. 앱스토어처럼 프로그램을 설치하는데, 터미널(맥북의 명령어 입력 프로그램)에서 텍스트로 합니다.",
    installCmd: '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
    verifyCmd: "brew --version",
    verifyExpect: "Homebrew 4.x.x 같은 버전 번호가 나오면 성공!",
  },
  {
    id: "nodejs",
    title: "2. Node.js 설치",
    description: "웹사이트를 만들기 위한 기본 엔진",
    detailDescription: "Node.js는 웹사이트와 웹 도구를 만들 때 필요한 기본 프로그램입니다. 자동차의 엔진 같은 역할이에요. v20 이상 버전이 필요합니다.",
    installCmd: "brew install node",
    verifyCmd: "node --version",
    verifyExpect: "v20.x.x 이상의 숫자가 나오면 성공!",
  },
  {
    id: "github",
    title: "3. GitHub 계정 만들기 + 명령줄 도구 설치",
    description: "내가 만든 코드를 저장하는 온라인 저장소",
    detailDescription: "GitHub은 코드를 안전하게 저장하고 관리하는 온라인 서비스입니다. 구글 드라이브가 파일을 저장하듯이, GitHub은 코드를 저장합니다. 먼저 github.com에서 계정을 만든 후, 아래 명령어로 맥북에서 바로 접속할 수 있게 설정합니다.",
    installCmd: "brew install gh\ngh auth login",
    verifyCmd: "gh auth status",
    verifyExpect: "\"Logged in to github.com\" 메시지가 나오면 성공!",
  },
  {
    id: "claude",
    title: "4. Claude Code 설치 (핵심 도구! ⭐)",
    description: "AI가 코드를 대신 작성해주는 핵심 도구",
    detailDescription: "Claude Code는 오늘 세션의 핵심 도구입니다! 한국어로 \"이런 웹사이트 만들어줘\"라고 말하면 AI가 코드를 자동으로 작성해줍니다. 설치 후 claude 명령어를 입력하면 처음 사용자를 위한 안내(온보딩)가 시작됩니다.",
    installCmd: "npm install -g @anthropic-ai/claude-code\nclaude",
    verifyCmd: "claude --version",
    verifyExpect: "claude x.x.x 같은 버전 번호가 나오면 성공!",
  },
  {
    id: "vercel",
    title: "5. Vercel 계정 만들기",
    description: "만든 웹사이트를 인터넷에 올려주는 서비스",
    detailDescription: "Vercel은 내가 만든 웹사이트를 인터넷에 공개(배포)해주는 무료 서비스입니다. 버튼 한 번이면 전 세계 누구나 볼 수 있는 웹사이트가 됩니다! vercel.com에서 GitHub 계정으로 가입하면 됩니다.",
    installCmd: "npm install -g vercel\nvercel login",
    verifyCmd: "vercel whoami",
    verifyExpect: "내 사용자 이름이 나오면 성공!",
  },
  {
    id: "vscode",
    title: "6. VS Code 설치 (선택사항)",
    description: "코드를 보고 편집할 수 있는 프로그램",
    detailDescription: "VS Code는 코드를 보기 좋게 표시해주고 편집할 수 있는 프로그램입니다. 메모장의 고급 버전이라고 생각하시면 됩니다. 꼭 필요하진 않지만, 있으면 코드가 어떻게 생겼는지 구경하기 좋습니다.",
    installCmd: "brew install --cask visual-studio-code",
    verifyCmd: "code --version",
    verifyExpect: "1.x.x 같은 버전 번호가 나오면 성공!",
  },
];

const checklist = [
  "Homebrew 설치 완료",
  "Node.js v20+ 설치 완료",
  "GitHub 계정 생성 & gh CLI 로그인",
  "Claude Code 설치 & 온보딩 완료",
  "Vercel 계정 생성 & 로그인",
  "VS Code 설치 (선택사항)",
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
      className="absolute top-2 right-2 px-3 py-1.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md bg-gray-700/50 hover:bg-gray-700 text-xs text-gray-400 hover:text-white transition-colors"
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
        className="w-full flex items-center justify-between p-4 sm:p-5 min-h-[56px] hover:bg-gray-800/50 transition-colors text-left"
      >
        <div>
          <h4 className="font-bold text-base text-white">{step.title}</h4>
          <p className="text-sm text-gray-400">{step.description}</p>
        </div>
        <span
          className={`text-gray-400 transition-transform duration-200 ml-3 flex-shrink-0 ${
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
              {/* Detailed description for beginners */}
              <p className="text-sm text-gray-300 leading-relaxed bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                💡 {step.detailDescription}
              </p>

              {/* Install command */}
              <div>
                <p className="text-xs text-gray-400 mb-2">
                  📦 설치 명령어 — 터미널(맥북의 명령어 입력 프로그램)을 열고 아래를 복사해서 붙여넣으세요
                </p>
                <div className="relative">
                  <pre className="bg-black border border-gray-700 rounded-lg p-3 sm:p-4 pr-16 text-sm font-mono text-neon-lime overflow-x-auto">
                    {step.installCmd}
                  </pre>
                  <CopyButton text={step.installCmd} />
                </div>
              </div>

              {/* Verify command */}
              <div>
                <p className="text-xs text-gray-400 mb-2">
                  ✅ 확인 명령어 — 설치가 잘 됐는지 확인하려면 아래를 입력하세요
                </p>
                <div className="relative">
                  <pre className="bg-black border border-gray-700 rounded-lg p-3 sm:p-4 pr-16 text-sm font-mono text-neon-blue overflow-x-auto">
                    {step.verifyCmd}
                  </pre>
                  <CopyButton text={step.verifyCmd} />
                </div>
                <p className="text-xs text-gray-400 mt-1.5">
                  👉 예상 결과: <code className="text-neon-lime">{step.verifyExpect}</code>
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
    <label className="flex items-center gap-3 p-3 min-h-[48px] rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="w-5 h-5 rounded border-gray-700 accent-neon-lime"
      />
      <span
        className={`text-sm sm:text-base transition-colors ${
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
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            ⭐ <span className="highlight-block">사전 준비</span>
          </h2>
          <p className="text-lg text-gray-400">
            세션 전에 미리 준비해주세요 (약 20분 소요)
          </p>
          <p className="text-sm text-gray-600 mt-2">
            어려운 단어가 나와도 걱정 마세요 — 각 단계마다 쉽게 설명해놨어요!
          </p>
        </motion.div>

        {/* Terminal explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 p-5 rounded-xl border border-neon-blue/20 bg-neon-blue/5"
        >
          <h3 className="text-base font-bold mb-2 text-neon-blue">💻 터미널 여는 법</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            아래 설치를 하려면 먼저 <strong className="text-white">터미널</strong>을 열어야 합니다.
            터미널은 맥북에서 명령어를 입력하는 프로그램이에요.{" "}
            <strong className="text-white">Spotlight 검색(⌘ + Space)</strong>에서 &quot;터미널&quot; 또는 &quot;Terminal&quot;을 검색하면 바로 찾을 수 있습니다.
          </p>
        </motion.div>

        {/* Supplies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold mb-4 text-white">📦 준비물</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {supplies.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 p-4 min-h-[48px] rounded-xl border border-gray-700 bg-gray-800/30"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm sm:text-base text-gray-300">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Install Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold mb-2 text-white">🛠 설치 가이드</h3>
          <p className="text-sm text-gray-400 mb-4">
            위에서부터 순서대로 진행하세요. 각 항목을 누르면 자세한 설명이 나옵니다.
          </p>
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
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">✅ 최종 체크리스트</h3>
          <p className="text-sm text-gray-400 mb-3">
            모두 완료했으면 하나씩 체크해보세요!
          </p>
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
