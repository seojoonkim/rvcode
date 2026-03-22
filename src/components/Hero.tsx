"use client";

import Image from "next/image";
import { Calendar, MapPin, Zap, Users, Wrench, Laptop } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Pure black background with enhanced glow */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-lime/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-purple-500/3 rounded-full blur-[180px]" />
      </div>

      {/* Floating decorative code snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-[15%] left-[8%] text-gray-800/40 font-mono text-sm animate-float-slow hidden md:block">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-800/30 px-3 py-2">
            <span className="text-neon-lime/30">const</span> <span className="text-blue-400/30">tool</span> = <span className="text-orange-400/30">ai</span>.<span className="text-purple-400/30">create</span>()
          </div>
        </div>
        <div className="absolute top-[20%] right-[10%] text-gray-800/40 font-mono text-sm animate-float-delayed hidden md:block">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-800/30 px-3 py-2">
            <span className="text-green-400/30">✓</span> <span className="text-gray-600/40">deployed in 2min</span>
          </div>
        </div>
        <div className="absolute bottom-[25%] left-[12%] text-gray-800/40 font-mono text-sm animate-float-slow2 hidden lg:block">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-800/30 px-3 py-2">
            <span className="text-neon-lime/30">&gt;</span> <span className="text-gray-600/40">vibe coding magic_</span>
          </div>
        </div>
        <div className="absolute bottom-[30%] right-[8%] text-gray-800/40 font-mono text-sm animate-float-delayed2 hidden lg:block">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-800/30 px-3 py-2">
            <span className="text-yellow-400/30">⚡</span> <span className="text-gray-600/40">no code needed</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left column - Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-lime/30 bg-neon-lime/5 backdrop-blur-sm mb-8 text-sm text-neon-lime/80">
                <span className="w-2 h-2 rounded-full bg-neon-lime animate-pulse" />
                <span className="font-emphasis">참가자 모집 중</span>
              </div>
            </div>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display mb-6 leading-tight tracking-tight animate-fade-in delay-100"
            >
              Red Velvet{" "}
              <span className="highlight-block">Code 2026</span>
            </h1>

            {/* Enhanced subtitle */}
            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-2 leading-relaxed animate-fade-in delay-200"
            >
              코딩 경험 제로? 전혀 문제없어요.
            </p>
            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in delay-200"
            >
              오늘 <span className="text-white font-semibold">2시간 안에</span> 나만의 AI 도구를{" "}
              <span className="text-neon-lime font-semibold">직접 만들어봅니다</span>.
            </p>

            {/* Social proof stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 mb-8 animate-fade-in delay-300">
              <div className="flex items-center gap-1.5 text-sm text-gray-300">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>2시간 완성</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-700" />
              <div className="flex items-center gap-1.5 text-sm text-gray-300">
                <Users className="w-4 h-4 text-blue-400" />
                <span>소수 정예 (밀착 도움)</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-700" />
              <div className="flex items-center gap-1.5 text-sm text-gray-300">
                <Wrench className="w-4 h-4 text-neon-lime" />
                <span>진짜 작동하는 결과물</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-700" />
              <div className="flex items-center gap-1.5 text-sm text-gray-300">
                <Laptop className="w-4 h-4 text-purple-400" />
                <span>맥북 1대면 충분</span>
              </div>
            </div>

            {/* Date & location */}
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm mb-10 animate-fade-in delay-300"
            >
              <div className="flex items-center gap-1.5 text-sm text-gray-300">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>2026년 봄</span>
              </div>
              <div className="w-px h-4 bg-gray-700" />
              <div className="flex items-center gap-1.5 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>서울</span>
              </div>
              <div className="w-px h-4 bg-gray-700" />
              <span className="text-sm font-emphasis text-neon-lime/80 bg-neon-lime/10 px-2 py-0.5 rounded-full">
                신청 마감 임박
              </span>
            </div>

            <div
              className="flex flex-row gap-3 w-full max-w-sm mx-auto sm:max-w-none sm:w-auto sm:justify-center lg:justify-start animate-fade-in delay-400"
            >
              <a
                href="#preparation"
                className="flex-1 sm:flex-none group px-8 py-4 min-h-[48px] flex items-center justify-center rounded-xl bg-neon-lime text-black font-bold text-lg hover:brightness-110 hover:scale-[1.02] transition-all shadow-lg shadow-neon-lime/20 text-center"
              >
                준비물 보기
              </a>
              <a
                href="#what-is"
                className="flex-1 sm:flex-none px-8 py-4 min-h-[48px] flex items-center justify-center rounded-xl border border-gray-700 text-white font-medium text-lg hover:bg-gray-800/50 hover:border-gray-600 transition-all text-center"
              >
                바이브코딩이란?
              </a>
            </div>
          </div>

          {/* Right column - Anime image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none animate-fade-in delay-300">
            <div className="relative">
              <Image
                src="/images/hero-anime.jpg"
                alt="RV 바이브코딩 2026"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full shadow-2xl shadow-neon-lime/10"
                priority
              />
              {/* Gradient overlay for seamless left edge blend */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />
              {/* Bottom gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              {/* Neon glow border effect */}
              <div className="absolute -inset-px rounded-2xl border border-neon-lime/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-gray-600" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-1deg); }
        }
        @keyframes float-slow2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-delayed2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out 1s infinite; }
        .animate-float-slow2 { animation: float-slow2 8s ease-in-out 0.5s infinite; }
        .animate-float-delayed2 { animation: float-delayed2 5s ease-in-out 2s infinite; }
      `}</style>
    </section>
  );
}
