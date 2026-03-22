import Image from "next/image";

export default function Ending() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* 임팩트 문구 */}
        <h2 className="font-display text-4xl md:text-6xl text-white mb-4">
          오늘, 당신의 첫 번째 <span className="highlight-block">AI 도구</span>를 만듭니다
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-4">
          2시간 후, 이 자리에서 직접 만든 것을 화면에 띄웁니다.
        </p>
        <p className="text-gray-400 text-base mb-12">
          &ldquo;나는 코딩 못 해&rdquo;라고 생각했던 오늘의 나에게,<br />
          &ldquo;나도 만들 수 있었어&rdquo;라는 경험을 선물하세요.
        </p>

        {/* 이미지 — 전체 너비, 약간의 라운드 */}
        <div className="relative rounded-2xl overflow-hidden border border-neon-lime/20 shadow-2xl shadow-neon-lime/10">
          <Image
            src="/images/ending-anime.jpg"
            alt="RV Code 2026 완성의 순간"
            width={1200}
            height={675}
            className="w-full h-auto"
            priority
          />
          {/* 하단 그라데이션 오버레이 */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* 사노 텔레그램 문의 안내 */}
        <div className="text-center mt-16 mb-8">
          <p className="text-gray-300 text-base md:text-lg mb-3">
            준비하다가 막히는 게 있거나 궁금한 점이 있으면?
          </p>
          <p className="text-white font-bold text-lg md:text-xl mb-6">
            아래 링크에서{" "}
            <span className="text-neon-lime">&quot;사노야 xxx 설명해줘&quot;</span>
            {" "}라고 남겨주세요 🌱
          </p>
          <a
            href="https://t.me/+ZOvzFPzOkBFmOTc1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-neon-lime/40 bg-neon-lime/10 text-neon-lime font-bold text-lg hover:bg-neon-lime/20 hover:border-neon-lime transition-all"
          >
            💬 질문하러 가기
          </a>
          <p className="text-gray-500 text-sm mt-3">
            바이브코딩 세션 전용 채널 · 언제든 편하게
          </p>
        </div>
      </div>
    </section>
  );
}
