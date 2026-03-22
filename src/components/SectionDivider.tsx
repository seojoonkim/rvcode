export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-12 px-4">
      <div className="flex items-center gap-3 text-gray-700 font-mono text-sm">
        <div className="w-16 h-px bg-gray-800" />
        <span className="text-gray-600">{"// ─────────────────"}</span>
        <div className="w-16 h-px bg-gray-800" />
      </div>
    </div>
  );
}
