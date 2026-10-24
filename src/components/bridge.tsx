import type { CSSProperties } from 'react'

const at = (d: number, extra?: CSSProperties) => ({ '--d': d, ...extra }) as CSSProperties

/** Mira's 8x8 skin face, the way dmcl uses a player's head as the Discord avatar. */
function Head({ size = 28 }: { size?: number }) {
  const hair = '#4a2f1b'
  const skin = '#d9a77d'
  const px: [number, number, string][] = []
  for (let x = 0; x < 8; x++) for (let y = 0; y < 8; y++) px.push([x, y, y < 2 || (y < 4 && (x === 0 || x === 7)) ? hair : skin])
  const eyes: [number, number, string][] = [[1, 4, '#fff'], [2, 4, '#3b5fa8'], [5, 4, '#3b5fa8'], [6, 4, '#fff'], [3, 6, '#9b5e45'], [4, 6, '#9b5e45']]
  return (
    <svg width={size} height={size} viewBox="0 0 8 8" shapeRendering="crispEdges" aria-hidden className="shrink-0 rounded-[6px]">
      {[...px, ...eyes].map(([x, y, c]) => <rect key={`${x}${y}${c}`} x={x} y={y} width="1" height="1" fill={c} />)}
    </svg>
  )
}

/**
 * Illustration of what dmcl does: a Minecraft line crosses into Discord as the player,
 * and a Discord reply crosses back with the ping highlighted. Names are made up.
 */
export function Bridge({ intro }: { intro?: boolean }) {
  return (
    <figure className={`bridge relative ${intro ? "intro" : ""}`} aria-label="Illustration: a Minecraft chat message appears in Discord as the player, and a Discord reply pings them back in game.">
      <div className="rounded-xl border border-line-strong bg-[#151515] px-3.5 py-2.5 font-mono text-[12.5px] leading-[1.6] text-[#f2f2f2]" aria-hidden>
        <div className="mb-1 flex items-center justify-between font-sans text-[11px] text-[#9a9a9a]">
          <span>Minecraft · server chat</span>
        </div>
        <p data-step style={at(0)}>&lt;Mira&gt; anyone up for the nether?</p>
        <p data-step data-last style={at(2300)}>
          <span className="text-[#8c9eff]">[Discord]</span> &lt;Theo&gt; <span className="rounded-sm bg-[#3d3a14] px-0.5 text-[#ffe066]">@Mira</span> on in 5
        </p>
      </div>

      {/* the bridge itself */}
      <div className="relative mx-auto h-5 w-px bg-line-strong" aria-hidden>
        <span className="packet absolute -left-[3px] top-0 size-[7px] rounded-full bg-leaf" style={at(350, { '--from': '0px', '--to': '13px' } as CSSProperties)} />
        <span className="packet absolute -left-[3px] top-0 size-[7px] rounded-full bg-leaf" style={at(1850, { '--from': '13px', '--to': '0px' } as CSSProperties)} />
      </div>

      <div className="rounded-xl border border-line-strong bg-[#313338] px-3.5 py-2.5 text-[13px] leading-[1.45] text-[#dbdee1]" aria-hidden>
        <div className="mb-1.5 font-sans text-[11px] text-[#949ba4]"># minecraft-chat</div>
        <div data-step className="flex gap-2.5" style={at(800)}>
          <Head />
          <div>
            <p>
              <span className="font-[600] text-white">Mira</span>
              <span className="ml-1.5 rounded-[3px] bg-[#5865f2] px-1 py-px align-[1px] text-[10px] font-[600] text-white">APP</span>
            </p>
            <p>anyone up for the nether?</p>
          </div>
        </div>
        <div data-step className="mt-2 flex gap-2.5" style={at(1500)}>
          <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#2f6e4b] text-[12px] font-[650] text-white">T</span>
          <div>
            <p className="font-[600] text-white">Theo</p>
            <p><span className="rounded-[3px] bg-[#5865f2]/30 px-0.5 text-[#c9cdfb]">@Mira</span> on in 5</p>
          </div>
        </div>
      </div>
    </figure>
  )
}
