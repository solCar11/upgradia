type Props = { height?: number }

export default function WaveSection({ height = 50 }: Props) {
  return (
    <div style={{ position: 'relative', width: '100%', lineHeight: 0 }}>
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, transform: 'scaleX(-1) scaleY(-1)' }}>
        <style>{`
          @keyframes move-forever {
            0%   { transform: translate3d(-90px, 0, 0); }
            100% { transform: translate3d(85px, 0, 0); }
          }
          .wave-parallax > use {
            animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
          }
          .wave-parallax > use:nth-child(1) { animation-delay: -2s; animation-duration: 7s; }
          .wave-parallax > use:nth-child(2) { animation-delay: -3s; animation-duration: 10s; }
          .wave-parallax > use:nth-child(3) { animation-delay: -4s; animation-duration: 13s; }
          .wave-parallax > use:nth-child(4) { animation-delay: -5s; animation-duration: 20s; }
        `}</style>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
          style={{ display: 'block', width: '100%', height: `${height}px` }}
        >
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="wave-parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(95,250,59,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(95,250,59,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(95,250,59,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#5FFA3B" />
          </g>
        </svg>
      </div>
    </div>
  )
}
