/** How a title looks: aura (spinning ring), gold (metal glint), glitch (lag spikes), radiant (light rays), chill (pastel drift), tuff (steel slam). */
export type TagStyle = 'aura' | 'gold' | 'glitch' | 'radiant' | 'chill' | 'tuff'

export type Person = { name: string; role: string; note: string; title?: string; tag?: TagStyle }

export const people: Person[] = [
  { name: 'Jeremiah Kroesche', role: 'Mentor', note: 'He got me into real-world development.', title: 'Final boss', tag: 'gold' },
  { name: 'Emmanuel', role: 'aka yearnium', note: 'Larps a lot.', title: 'Aura farmer', tag: 'aura' },
  { name: 'Shazil', role: 'aka Tacos', note: 'needs better internet', title: 'Lord Of Lag', tag: 'glitch' },
  { name: 'stellaroni', role: 'aka stella', note: "doesn't take anything seriously.", title: 'Certified unserious', tag: 'chill' },
  { name: 'rin', role: 'aka 0t6a', note: "valorant aim god", title: 'Certified Radiant', tag: 'radiant' },
  { name: 'Glenden', role: 'Dev buddy', note: 'Soo tuff. No notes.', title: 'Built different', tag: 'tuff' },
]
