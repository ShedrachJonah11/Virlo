/**
 * Play a short tone via the Web Audio API. We use this for the
 * "warm-up task complete" check sound. Falls back to a no-op when
 * audio isn't available (SSR, locked-down browsers).
 */
export function playTone(
  frequency: number = 880,
  durationMs: number = 120
): void {
  if (typeof window === "undefined") return;
  const Ctx =
    (window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext })
      .AudioContext ??
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return;
  try {
    const ctx = new Ctx();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.frequency.value = frequency;
    gain.gain.value = 0.04;
    oscillator.start();
    setTimeout(() => {
      oscillator.stop();
      ctx.close();
    }, durationMs);
  } catch {
    // No-op on autoplay/permission errors.
  }
}
