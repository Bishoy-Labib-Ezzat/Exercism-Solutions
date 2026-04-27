type DNA = 'G' | 'C' | 'T' | 'A';
const MAP: Record<DNA, string> = { G: 'C', C: 'G', T: 'A', A: 'U' };

export function toRna(dna: string): string {
  if (/[^GCTA]/.test(dna)) throw new Error('Invalid input DNA.');
  
  return dna.replace(/[GCTA]/g, (char) => MAP[char as DNA])
}
