export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto text-center animate-fade-in">
        <p className="text-sm text-gray-300 mb-2">
          진행자:{" "}
          <span className="text-white font-emphasis">Simon Kim (서준)</span>
          {" · "}
          <span className="text-gray-400">Hashed 대표</span>
        </p>
        <p className="text-sm text-gray-400 mb-3">
          질문이나 문의사항이 있으면 편하게 연락주세요.
        </p>
        <p className="text-sm text-gray-500">
          Powered by Claude Code + GitHub + Vercel
        </p>
      </div>
    </footer>
  );
}
