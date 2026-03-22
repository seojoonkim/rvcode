"use client";

import { useState } from "react";
import {
  Star,
  Terminal,
  Package,
  Wrench,
  CheckSquare,
  Laptop,
  Plug,
  Camera,
  FileText,
  File,
  Lightbulb,
  Copy,
  Check,
  ChevronDown,
  Search,
  FolderOpen,
  Rocket as RocketIcon,
  Keyboard,
} from "lucide-react";

const supplies = [
  { icon: <Laptop className="w-5 h-5 text-neon-lime" strokeWidth={1.5} />, text: "맥북 (macOS)" },
  { icon: <Plug className="w-5 h-5 text-neon-lime" strokeWidth={1.5} />, text: "충전기" },
  { icon: <Camera className="w-5 h-5 text-neon-lime" strokeWidth={1.5} />, text: "프로필 사진 1장" },
  { icon: <FileText className="w-5 h-5 text-neon-lime" strokeWidth={1.5} />, text: "간단한 자기소개 (한/영)" },
  { icon: <File className="w-5 h-5 text-neon-lime" strokeWidth={1.5} />, text: "이력서 또는 LinkedIn 프로필" },
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
    title: "4. Claude Code 설치 (핵심 도구!)",
    description: "AI가 코드를 대신 작성해주는 핵심 도구",
    detailDescription: "오늘 세션의 핵심 도구입니다! 터미널에서 한국어로 \"이런 웹사이트 만들어줘\"라고 입력하면 AI가 코드를 자동으로 작성합니다. 설치 후 터미널에 claude라고 입력하면 초기 설정 안내가 시작됩니다.",
    installCmd: "npm install -g @anthropic-ai/claude-code\nclaude",
    verifyCmd: "claude --version",
    verifyExpect: "claude x.x.x 같은 버전 번호가 나오면 성공!",
  },
  {
    id: "vercel",
    title: "5. Vercel 계정 만들기",
    description: "만든 웹사이트를 인터넷에 올려주는 서비스",
    detailDescription: "Vercel은 내가 만든 웹사이트를 인터넷에 공개해주는 무료 서비스입니다. 명령어 한 줄이면 전 세계 누구나 볼 수 있는 웹사이트가 됩니다! vercel.com에서 GitHub 계정으로 가입하면 됩니다.",
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
      className="absolute top-2 right-2 px-3 py-1.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md bg-gray-700/50 hover:bg-gray-700 text-sm text-gray-400 hover:text-white transition-colors gap-1"
    >
      {copied ? (
        <>
          <Check className="w-3 h-3" /> 복사됨
        </>
      ) : (
        <>
          <Copy className="w-3 h-3" /> 복사
        </>
      )}
    </button>
  );
}

function AccordionItem({ step }: { step: InstallStep }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#1a1a1a] rounded-xl overflow-hidden bg-[#0a0a0a]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-5 min-h-[56px] hover:bg-gray-800/50 transition-colors text-left"
      >
        <div>
          <h4 className="font-display text-base text-white">{step.title}</h4>
          <p className="text-sm text-gray-300">{step.description}</p>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ml-3 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={1.5}
        />
      </button>

      {isOpen && (
        <div className="px-4 sm:px-5 pb-5 space-y-4">
          {/* Detailed description */}
          <p className="text-sm text-gray-300 leading-relaxed bg-gray-800/50 p-3 rounded-lg border border-gray-700/50 flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-neon-lime flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <span>{step.detailDescription}</span>
          </p>

          {/* Install command */}
          <div>
            <p className="text-sm text-gray-300 mb-2 flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5" strokeWidth={1.5} />
              설치 명령어 — 터미널을 열고 아래를 복사해서 붙여넣으세요
            </p>
            <div className="relative">
              <pre className="bg-black border border-[#1a1a1a] rounded-lg p-3 sm:p-4 pr-16 text-sm font-mono text-neon-lime overflow-x-auto">
                {step.installCmd}
              </pre>
              <CopyButton text={step.installCmd} />
            </div>
          </div>

          {/* Verify command */}
          <div>
            <p className="text-sm text-gray-300 mb-2 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-neon-green" strokeWidth={1.5} />
              확인 명령어 — 설치가 잘 됐는지 확인하려면 아래를 입력하세요
            </p>
            <div className="relative">
              <pre className="bg-black border border-[#1a1a1a] rounded-lg p-3 sm:p-4 pr-16 text-sm font-mono text-neon-blue overflow-x-auto">
                {step.verifyCmd}
              </pre>
              <CopyButton text={step.verifyCmd} />
            </div>
            <p className="text-sm text-gray-300 mt-1.5">
              예상 결과: <code className="text-neon-lime">{step.verifyExpect}</code>
            </p>
          </div>
        </div>
      )}
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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display mb-4 tracking-tight flex items-center justify-center gap-3">
            <Star className="w-8 h-8 md:w-10 md:h-10 text-neon-lime" strokeWidth={1.5} />
            <span className="highlight-block">사전 준비</span>
          </h2>
          <p className="text-lg text-gray-300">
            세션 전에 미리 준비해주세요 (약 20분이면 끝나요!)
          </p>
          <p className="text-sm text-gray-400 mt-2">
            처음 보는 단어가 나와도 걱정 마세요 — 각 단계마다 왜 필요한지, 어떻게 하는지 쉽게 설명해놨어요!
          </p>
        </div>

        {/* Terminal Guide — 터미널이 뭔가요? */}
        <div className="mb-12 animate-fade-in delay-100">
          <div className="p-6 rounded-xl border border-neon-lime/20 bg-neon-lime/5">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-5 h-5 text-neon-lime" strokeWidth={1.5} />
              <h3 className="text-lg font-display text-neon-lime">터미널이 뭔가요?</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              맥북에서 명령어를 입력할 수 있는 프로그램입니다. 마우스로 클릭하는 대신, 키보드로 원하는 작업을 직접 지시할 수 있어요.
            </p>

            <h4 className="text-sm font-bold text-white mb-3">터미널 실행하는 방법 (3가지)</h4>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-lg bg-black/50 border border-[#1a1a1a]">
                <div className="flex items-center gap-2 mb-2">
                  <Search className="w-4 h-4 text-neon-lime" strokeWidth={1.5} />
                  <p className="text-sm font-bold text-neon-lime">방법 1 (가장 빠름)</p>
                </div>
                <ol className="text-sm text-gray-300 space-y-1 ml-6 list-decimal">
                  <li>키보드 왼쪽 아래 <code className="text-neon-lime bg-gray-800 px-1.5 py-0.5 rounded text-xs">Command(⌘)</code> 키와 <code className="text-neon-lime bg-gray-800 px-1.5 py-0.5 rounded text-xs">Space</code> 키를 동시에 누르기</li>
                  <li>검색창에 &quot;터미널&quot; 입력</li>
                  <li>Enter 키 누르기</li>
                </ol>
              </div>

              <div className="p-4 rounded-lg bg-black/50 border border-[#1a1a1a]">
                <div className="flex items-center gap-2 mb-2">
                  <FolderOpen className="w-4 h-4 text-white" strokeWidth={1.5} />
                  <p className="text-sm font-bold text-white">방법 2 (파인더로)</p>
                </div>
                <ol className="text-sm text-gray-300 space-y-1 ml-6 list-decimal">
                  <li>독(Dock, 화면 아래 아이콘 바)에서 파인더(웃는 얼굴 아이콘) 클릭</li>
                  <li>왼쪽 사이드바에서 &quot;응용 프로그램&quot; 클릭</li>
                  <li>&quot;유틸리티&quot; 폴더 찾기 → &quot;Terminal&quot; 더블클릭</li>
                </ol>
              </div>

              <div className="p-4 rounded-lg bg-black/50 border border-[#1a1a1a]">
                <div className="flex items-center gap-2 mb-2">
                  <RocketIcon className="w-4 h-4 text-white" strokeWidth={1.5} />
                  <p className="text-sm font-bold text-white">방법 3 (Launchpad로)</p>
                </div>
                <ol className="text-sm text-gray-300 space-y-1 ml-6 list-decimal">
                  <li>독에서 Launchpad(로켓 아이콘) 클릭</li>
                  <li>&quot;터미널&quot; 검색 → 클릭</li>
                </ol>
              </div>
            </div>

            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Keyboard className="w-4 h-4 text-neon-lime" strokeWidth={1.5} />
              터미널 사용 팁
            </h4>
            <div className="grid sm:grid-cols-2 gap-2">
              <div className="text-sm text-gray-300 flex items-center gap-2 p-2 rounded bg-black/30">
                <span className="text-neon-lime font-mono text-xs">⌘+V</span> 명령어 붙여넣기
              </div>
              <div className="text-sm text-gray-300 flex items-center gap-2 p-2 rounded bg-black/30">
                <span className="text-neon-lime font-mono text-xs">Enter</span> 실행하기
              </div>
              <div className="text-sm text-gray-300 flex items-center gap-2 p-2 rounded bg-black/30">
                <span className="text-neon-lime font-mono text-xs">Ctrl+C</span> 중단하기
              </div>
              <div className="text-sm text-gray-300 flex items-center gap-2 p-2 rounded bg-black/30">
                <span className="text-neon-lime font-mono text-xs">clear</span> 화면 깨끗이
              </div>
            </div>
          </div>
        </div>

        {/* Supplies */}
        <div className="mb-12 animate-fade-in delay-200">
          <div className="flex items-center gap-2 mb-4">
            <Package className="w-5 h-5 text-neon-lime" strokeWidth={1.5} />
            <h3 className="text-xl font-display text-white">준비물</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {supplies.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 p-4 min-h-[48px] rounded-xl border border-[#1a1a1a] bg-[#0a0a0a]"
              >
                {item.icon}
                <span className="text-sm sm:text-base text-gray-300">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Install Guide */}
        <div className="mb-12 animate-fade-in delay-300">
          <div className="flex items-center gap-2 mb-2">
            <Wrench className="w-5 h-5 text-neon-lime" strokeWidth={1.5} />
            <h3 className="text-xl font-display text-white">설치 가이드</h3>
          </div>
          <p className="text-sm text-gray-300 mb-4">
            위에서부터 순서대로 진행하세요. 각 항목을 탭하면 자세한 설명과 복사 가능한 명령어가 나옵니다.
          </p>
          <div className="space-y-3">
            {installSteps.map((step) => (
              <AccordionItem key={step.id} step={step} />
            ))}
          </div>
        </div>

        {/* Checklist */}
        <div className="animate-fade-in delay-400">
          <div className="flex items-center gap-2 mb-4">
            <CheckSquare className="w-5 h-5 text-neon-lime" strokeWidth={1.5} />
            <h3 className="text-xl font-display text-white">최종 체크리스트</h3>
          </div>
          <p className="text-sm text-gray-300 mb-3">
            모두 완료했으면 하나씩 체크해보세요! 전부 체크되면 세션 준비 완료입니다 🎉
          </p>
          <div className="border border-[#1a1a1a] rounded-xl bg-[#0a0a0a] p-4">
            <div className="space-y-1">
              {checklist.map((item) => (
                <ChecklistItem key={item} label={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
