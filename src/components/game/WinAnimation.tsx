import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WinAnimationProps {
  subject: 'apush' | 'apworld';
  onComplete: () => void;
}

// Simple sound effect using Web Audio API
function playWinSound(subject: 'apush' | 'apworld') {
  try {
    const ctx = new AudioContext();
    const now = ctx.currentTime;

    // Victory fanfare
    const notes = subject === 'apush'
      ? [523.25, 659.25, 783.99, 1046.5, 783.99, 1046.5, 1318.5]  // C5-E5-G5-C6 triumphant
      : [392, 493.88, 587.33, 783.99, 587.33, 783.99, 1046.5];    // G4-B4-D5-G5 majestic

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = i < 4 ? 'triangle' : 'sawtooth';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, now + i * 0.15);
      gain.gain.linearRampToValueAtTime(0.25, now + i * 0.15 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.15 + 0.6);
      osc.start(now + i * 0.15);
      osc.stop(now + i * 0.15 + 0.6);
    });

    // Bass drum hits
    [0, 0.8, 1.6, 2.4].forEach(t => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(150, now + t);
      osc.frequency.exponentialRampToValueAtTime(30, now + t + 0.2);
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.5, now + t);
      gain.gain.exponentialRampToValueAtTime(0.001, now + t + 0.3);
      osc.start(now + t);
      osc.stop(now + t + 0.3);
    });

    // Cymbal crash
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) output[i] = Math.random() * 2 - 1;
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseGain = ctx.createGain();
    noise.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noiseGain.gain.setValueAtTime(0.15, now + 0.8);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 3);
    noise.start(now + 0.8);
    noise.stop(now + 3);

    // Jackpot coin sounds
    for (let i = 0; i < 12; i++) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 2000 + Math.random() * 3000;
      osc.type = 'sine';
      const t = 1.5 + Math.random() * 3;
      gain.gain.setValueAtTime(0, now + t);
      gain.gain.linearRampToValueAtTime(0.08, now + t + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, now + t + 0.15);
      osc.start(now + t);
      osc.stop(now + t + 0.15);
    }
  } catch (e) {
    console.warn('Audio not supported:', e);
  }
}

// Sparkle particles
function Sparkles({ count = 40 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: '50%',
            y: '50%',
            scale: 0,
            opacity: 1,
          }}
          animate={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: [0, 1.5, 0],
            opacity: [1, 1, 0],
            rotate: Math.random() * 720,
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 1.5,
            ease: 'easeOut',
          }}
          style={{
            width: 4 + Math.random() * 8,
            height: 4 + Math.random() * 8,
          }}
        >
          <div className="w-full h-full rounded-full" style={{
            background: `radial-gradient(circle, ${['#FFD700', '#FF6B00', '#FF0040', '#00FF88', '#00BFFF', '#FF00FF'][Math.floor(Math.random() * 6)]}, transparent)`,
            boxShadow: `0 0 10px currentColor`,
          }} />
        </motion.div>
      ))}
    </>
  );
}

export function APUSHWinAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);
  const played = useRef(false);

  useEffect(() => {
    if (!played.current) {
      played.current = true;
      playWinSound('apush');
    }
    const t1 = setTimeout(() => setPhase(1), 500);
    const t2 = setTimeout(() => setPhase(2), 1500);
    const t3 = setTimeout(() => setPhase(3), 2500);
    const t4 = setTimeout(() => setPhase(4), 4000);
    const t5 = setTimeout(onComplete, 6500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'radial-gradient(ellipse at center, #0a1628 0%, #000 100%)' }}
    >
      <Sparkles count={50} />

      {/* American flag stripes background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 1 ? 0.15 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {Array.from({ length: 13 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-full"
            style={{
              height: '7.7%',
              background: i % 2 === 0 ? '#B22234' : '#FFFFFF',
            }}
            initial={{ x: i % 2 === 0 ? '-100%' : '100%' }}
            animate={{ x: '0%' }}
            transition={{ delay: 0.3 + i * 0.05, duration: 0.4, ease: 'easeOut' }}
          />
        ))}
      </motion.div>

      {/* Stars field */}
      <motion.div
        className="absolute top-0 left-0 w-[40%] h-[54%]"
        style={{ background: '#3C3B6E' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={phase >= 1 ? { scale: 1, opacity: 0.2 } : {}}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-white text-xs"
            style={{ left: `${10 + (i % 5) * 20}%`, top: `${10 + Math.floor(i / 5) * 25}%` }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
          >
            ★
          </motion.span>
        ))}
      </motion.div>

      {/* F-16 jets flying across */}
      {phase >= 2 && (
        <>
          {[0, 1, 2].map(i => (
            <motion.div
              key={`jet-${i}`}
              className="absolute text-4xl"
              initial={{ x: '-15%', y: `${20 + i * 15}%` }}
              animate={{ x: '120%' }}
              transition={{ duration: 2, delay: i * 0.3, ease: 'easeIn' }}
              style={{ filter: 'drop-shadow(0 0 20px rgba(255,100,0,0.8))' }}
            >
              ✈️
            </motion.div>
          ))}
          {/* Contrails */}
          {[0, 1, 2].map(i => (
            <motion.div
              key={`trail-${i}`}
              className="absolute h-1 rounded-full"
              style={{
                top: `${23 + i * 15}%`,
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
              }}
              initial={{ left: '-10%', width: 0 }}
              animate={{ left: '0%', width: '100%' }}
              transition={{ duration: 2.5, delay: i * 0.3 + 0.2, ease: 'easeIn' }}
            />
          ))}
        </>
      )}

      {/* Muzzle flash / gun firing effects */}
      {phase >= 3 && (
        <>
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`flash-${i}`}
              className="absolute rounded-full"
              style={{
                width: 30 + Math.random() * 40,
                height: 30 + Math.random() * 40,
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                background: 'radial-gradient(circle, #FFD700, #FF4500, transparent)',
              }}
              animate={{
                scale: [0, 2, 0],
                opacity: [1, 0.8, 0],
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.15,
                repeat: 2,
                repeatDelay: 0.2,
              }}
            />
          ))}
        </>
      )}

      {/* LETHAL PRECISION text */}
      <AnimatePresence>
        {phase >= 2 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
          >
            <div className="text-center">
              <motion.h1
                className="font-display text-5xl md:text-7xl font-black tracking-wider"
                style={{
                  background: 'linear-gradient(135deg, #FFD700, #FF6B00, #FF0040)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: 'none',
                  filter: 'drop-shadow(0 0 30px rgba(255,107,0,0.5))',
                }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                LETHAL
              </motion.h1>
              <motion.h1
                className="font-display text-5xl md:text-7xl font-black tracking-[0.3em]"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF, #C0C0C0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))',
                }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                PRECISION
              </motion.h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Score reveal */}
      {phase >= 4 && (
        <motion.div
          className="absolute bottom-12 left-0 right-0 text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-display text-2xl font-bold text-primary">
            🏆 PERFECT CLEAR 🏆
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

export function APWorldWinAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);
  const played = useRef(false);

  useEffect(() => {
    if (!played.current) {
      played.current = true;
      playWinSound('apworld');
    }
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1200);
    const t3 = setTimeout(() => setPhase(3), 2800);
    const t4 = setTimeout(() => setPhase(4), 4500);
    const t5 = setTimeout(onComplete, 7000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-hidden flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'radial-gradient(ellipse at center, #0a1a2e 0%, #000 100%)' }}
    >
      <Sparkles count={60} />

      {/* Globe */}
      <motion.div
        className="relative"
        style={{ width: 200, height: 200 }}
        animate={phase >= 1 ? {
          rotate: [0, 360, 720, 1440, 2160, 3600],
        } : {}}
        transition={{ duration: 5, ease: [0.2, 0.8, 0.4, 1] }}
      >
        <motion.div
          className="w-full h-full rounded-full flex items-center justify-center text-[120px]"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #4488ff, #1a3a6e, #0a1a3e)',
            boxShadow: '0 0 60px rgba(68,136,255,0.4), inset 0 0 40px rgba(0,0,0,0.5)',
          }}
          animate={phase >= 2 ? { scale: [1, 1.1, 0.9, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          🌍
        </motion.div>

        {/* Glow ring */}
        <motion.div
          className="absolute inset-[-20px] rounded-full"
          style={{
            border: '2px solid rgba(68,136,255,0.3)',
            boxShadow: '0 0 40px rgba(68,136,255,0.2)',
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Eurofighter jets zooming in */}
      {phase >= 2 && (
        <>
          {[0, 1].map(i => (
            <motion.div
              key={`euro-${i}`}
              className="absolute text-3xl"
              initial={{
                x: i === 0 ? '-20%' : '120%',
                y: '45%',
              }}
              animate={{
                x: i === 0 ? '120%' : '-20%',
              }}
              transition={{ duration: 1.8, delay: i * 0.4, ease: 'easeIn' }}
              style={{ filter: 'drop-shadow(0 0 15px rgba(100,200,255,0.8))' }}
            >
              {i === 0 ? '✈️' : '✈️'}
            </motion.div>
          ))}
          {/* Sonic boom ring */}
          <motion.div
            className="absolute rounded-full border-2 border-white/30"
            style={{ left: '50%', top: '50%', marginLeft: -50, marginTop: -50 }}
            initial={{ width: 100, height: 100, opacity: 1 }}
            animate={{ width: 600, height: 600, opacity: 0, marginLeft: -300, marginTop: -300 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </>
      )}

      {/* ACED text */}
      {phase >= 3 && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.5 }}
        >
          <motion.h1
            className="font-display text-7xl md:text-9xl font-black tracking-[0.2em]"
            style={{
              background: 'linear-gradient(135deg, #00BFFF, #7B68EE, #FF69B4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 40px rgba(0,191,255,0.5))',
            }}
            animate={{
              scale: [1, 1.08, 1],
              filter: [
                'drop-shadow(0 0 40px rgba(0,191,255,0.5))',
                'drop-shadow(0 0 60px rgba(123,104,238,0.8))',
                'drop-shadow(0 0 40px rgba(0,191,255,0.5))',
              ],
            }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ACED
          </motion.h1>
        </motion.div>
      )}

      {/* Score reveal */}
      {phase >= 4 && (
        <motion.div
          className="absolute bottom-12 left-0 right-0 text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <p className="font-display text-2xl font-bold text-primary">
            🌐 PERFECT CLEAR 🌐
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

export function WinAnimation({ subject, onComplete }: WinAnimationProps) {
  if (subject === 'apush') return <APUSHWinAnimation onComplete={onComplete} />;
  return <APWorldWinAnimation onComplete={onComplete} />;
}
