'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const PASSWORD = 'Aces2025';
const GROUP_LABELS = ['A', 'B', 'C', 'D', 'E', 'F'];
const MATCHUP_PAIRS: [number, number][] = [[0, 1], [0, 2], [1, 2]];

type Score = { a: string; b: string };
const emptyScore = (): Score => ({ a: '', b: '' });
const emptyGroups = (): string[][] => Array.from({ length: 6 }, () => ['', '', '']);
const emptyScores = (): Score[][][] =>
  Array.from({ length: 6 }, () => Array.from({ length: MATCHUP_PAIRS.length }, () => emptyScore()));

export default function BracketPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [players, setPlayers] = useState<string[][]>(emptyGroups());
  const [scores, setScores] = useState<Score[][][]>(emptyScores());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedPlayers = localStorage.getItem('bracketPlayers');
    const savedScores = localStorage.getItem('bracketScores');
    if (savedPlayers) setPlayers(JSON.parse(savedPlayers));
    if (savedScores) setScores(JSON.parse(savedScores));
    setMounted(true);
  }, []);

  const handleUnlock = () => {
    if (passwordInput === PASSWORD) {
      setIsAdmin(true);
      setShowModal(false);
      setPasswordInput('');
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const updatePlayer = (gi: number, pi: number, value: string) => {
    const updated = players.map((g, i) =>
      i === gi ? g.map((p, j) => (j === pi ? value : p)) : g
    );
    setPlayers(updated);
    localStorage.setItem('bracketPlayers', JSON.stringify(updated));
  };

  const updateScore = (gi: number, mi: number, side: 'a' | 'b', value: string) => {
    const num = value === '' ? '' : Math.min(6, Math.max(0, parseInt(value) || 0)).toString();
    const updated = scores.map((g, i) =>
      i === gi
        ? g.map((s, j) => (j === mi ? { ...s, [side]: num } : s))
        : g
    );
    setScores(updated);
    localStorage.setItem('bracketScores', JSON.stringify(updated));
  };

  const hasScore = (s: Score) => s.a !== '' && s.b !== '';

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <div className="bg-[#2D6A4F] pt-14 pb-12 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent 0px, transparent 24px, rgba(255,255,255,0.03) 24px, rgba(255,255,255,0.03) 25px)`,
          }}
        />
        <div className="relative max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-dm text-white/50 text-sm hover:text-white transition-colors mb-5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1
            className="font-bebas text-white tracking-wide leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
          >
            TOURNAMENT BRACKET
          </h1>
          <p className="font-dm text-white/60 mt-2 text-sm">
            18 Competitors · 6 Groups of 3 · 2 Matches Per Player · 6-Game Sets · June 6, 2025
          </p>
        </div>

        {/* Lock button */}
        <button
          onClick={() => isAdmin ? setIsAdmin(false) : setShowModal(true)}
          title={isAdmin ? 'Lock admin mode' : 'Admin login'}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          {isAdmin ? (
            <svg className="w-5 h-5 text-[#F4A623]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 11V7a5 5 0 0 1 9.9-1" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          )}
        </button>
      </div>

      {/* Admin banner */}
      <AnimatePresence>
        {isAdmin && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-[#F4A623] px-6 py-2.5 text-center"
          >
            <p className="font-dm text-white text-sm font-semibold">
              Admin mode — edit player names and scores below
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Groups */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GROUP_LABELS.map((label, gi) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: gi * 0.07 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Card header */}
              <div className="bg-[#2D6A4F] px-5 py-3 flex items-center justify-between">
                <span className="font-bebas text-xl text-white tracking-widest">GROUP {label}</span>
                <span className="font-dm text-white/50 text-xs uppercase tracking-widest">Round Robin</span>
              </div>

              {/* Players */}
              <div className="px-5 pt-5 pb-4">
                <p className="font-dm text-[10px] uppercase tracking-widest text-gray-400 mb-3">Players</p>
                <div className="flex flex-col gap-2.5">
                  {[0, 1, 2].map(pi => (
                    <div key={pi} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#2D6A4F] text-white font-dm font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {pi + 1}
                      </span>
                      {isAdmin ? (
                        <input
                          type="text"
                          value={players[gi][pi]}
                          onChange={e => updatePlayer(gi, pi, e.target.value)}
                          placeholder="Player name"
                          className="flex-1 font-dm text-sm text-[#1a1a1a] border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F]/20 transition-all"
                        />
                      ) : players[gi][pi] ? (
                        <span className="font-dm text-sm text-[#1a1a1a] font-medium">{players[gi][pi]}</span>
                      ) : (
                        <div className="flex-1 h-7 bg-gray-100 rounded-lg" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mx-5 border-t border-gray-100" />

              {/* Matchups */}
              <div className="px-5 pt-4 pb-5">
                <p className="font-dm text-[10px] uppercase tracking-widest text-gray-400 mb-3">Matchups</p>
                <div className="flex flex-col gap-2">
                  {MATCHUP_PAIRS.map(([a, b], mi) => {
                    const score = scores[gi][mi];
                    const nameA = players[gi][a];
                    const nameB = players[gi][b];
                    const scored = hasScore(score);

                    return (
                      <div key={mi} className="bg-[#FAF9F6] rounded-xl px-3 py-2.5">
                        {/* Player row */}
                        <div className="flex items-center gap-2">
                          {nameA ? (
                            <span className="font-dm text-sm text-[#1a1a1a] font-medium truncate flex-1">{nameA}</span>
                          ) : (
                            <div className="h-3.5 bg-gray-200 rounded flex-1" />
                          )}

                          {/* Score */}
                          {isAdmin ? (
                            <div className="flex items-center gap-1 flex-shrink-0">
                              <input
                                type="number"
                                min={0}
                                max={6}
                                value={score.a}
                                onChange={e => updateScore(gi, mi, 'a', e.target.value)}
                                placeholder="—"
                                className="w-9 text-center font-dm font-bold text-sm text-[#1a1a1a] border border-gray-200 rounded-lg py-1 focus:outline-none focus:border-[#2D6A4F] transition-all"
                              />
                              <span className="font-bebas text-gray-400 text-sm">:</span>
                              <input
                                type="number"
                                min={0}
                                max={6}
                                value={score.b}
                                onChange={e => updateScore(gi, mi, 'b', e.target.value)}
                                placeholder="—"
                                className="w-9 text-center font-dm font-bold text-sm text-[#1a1a1a] border border-gray-200 rounded-lg py-1 focus:outline-none focus:border-[#2D6A4F] transition-all"
                              />
                            </div>
                          ) : scored ? (
                            <div className="flex items-center gap-1.5 flex-shrink-0">
                              <span className={`font-bebas text-lg leading-none ${parseInt(score.a) > parseInt(score.b) ? 'text-[#2D6A4F]' : 'text-gray-400'}`}>
                                {score.a}
                              </span>
                              <span className="font-bebas text-gray-300 text-sm">:</span>
                              <span className={`font-bebas text-lg leading-none ${parseInt(score.b) > parseInt(score.a) ? 'text-[#2D6A4F]' : 'text-gray-400'}`}>
                                {score.b}
                              </span>
                            </div>
                          ) : (
                            <span className="font-dm text-gray-300 text-xs flex-shrink-0">— : —</span>
                          )}

                          {nameB ? (
                            <span className="font-dm text-sm text-[#1a1a1a] font-medium truncate flex-1 text-right">{nameB}</span>
                          ) : (
                            <div className="h-3.5 bg-gray-200 rounded flex-1" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Password modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            onClick={e => { if (e.target === e.currentTarget) { setShowModal(false); setPasswordInput(''); setPasswordError(false); } }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl"
            >
              <div className="w-12 h-12 bg-[#2D6A4F]/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#2D6A4F]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h2 className="font-bebas text-2xl text-[#1a1a1a] tracking-wide mb-1">ADMIN LOGIN</h2>
              <p className="font-dm text-gray-400 text-sm mb-5">Enter the password to edit the bracket.</p>
              <input
                type="password"
                value={passwordInput}
                onChange={e => { setPasswordInput(e.target.value); setPasswordError(false); }}
                onKeyDown={e => e.key === 'Enter' && handleUnlock()}
                placeholder="Password"
                autoFocus
                className="w-full font-dm text-sm border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F]/20 transition-all mb-2"
              />
              {passwordError && (
                <p className="font-dm text-red-500 text-xs mb-1">Incorrect password. Try again.</p>
              )}
              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => { setShowModal(false); setPasswordInput(''); setPasswordError(false); }}
                  className="flex-1 font-dm text-sm text-gray-500 border border-gray-200 rounded-xl py-2.5 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUnlock}
                  className="flex-1 font-dm text-sm font-semibold bg-[#2D6A4F] text-white rounded-xl py-2.5 hover:bg-[#245a42] transition-colors"
                >
                  Unlock
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
