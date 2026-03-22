import Image from "next/image";

export default function Ending() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* 임팩트 문구 */}
        <h2 className="font-display text-4xl md:text-6xl text-white mb-4">
          오늘, 당신의 첫 번째 <span className="highlight-block">AI 도구</span>를 만듭니다
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          2시간 후, 이 자리에서 직접 만든 것을 화면에 띄웁니다.
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
      </div>
    </section>
  );
}
