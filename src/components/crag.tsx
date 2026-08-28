/* Edinburgh's crag and tail: the volcanic plug the Castle sits on, the long
   glacial ridge of the Royal Mile running east off it down to Holyrood, then
   Arthur's Seat rising behind. It is the shape of the ground the whole city is
   arranged on, and it is the only drawn thing on the site — one signature in
   one place, rather than a motif repeated on every band.

   The viewBox is deliberately tall and the amplitude exaggerated: the band
   stretches this with preserveAspectRatio="none", which flattens vertical
   detail, so the summits are drawn oversized to survive it. */
export default function Crag({ className = "" }: { className?: string }) {
  const ridge =
    "M0 300 C40 296 90 292 140 286 " +
    "L196 268 L214 96 L236 62 L262 88 L280 254 " +      /* Castle Rock */
    "C340 268 420 282 520 292 " +                        /* Royal Mile, sloping east */
    "L604 300 L648 292 " +                               /* Holyrood */
    "C700 282 742 250 786 196 " +
    "L858 74 L892 34 L926 78 " +                         /* Arthur's Seat */
    "C968 150 1012 220 1064 258 " +
    "L1112 276 C1150 286 1178 294 1200 298";

  return (
    <svg viewBox="0 0 1200 320" preserveAspectRatio="none" aria-hidden="true" focusable="false" className={className}>
      {/* Haar — the same ridge set back and faint, the way the far profile sits
          behind the near one on a grey day off the Forth. */}
      <path d={`${ridge} L1200 320 L0 320 Z`} fill="currentColor" opacity="0.13" transform="translate(30 26)" />
      <path
        d={ridge}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        opacity="0.9"
      />
      {/* One tick per summit — the two hills the profile exists to show. */}
      <g stroke="currentColor" strokeWidth="1.25" vectorEffect="non-scaling-stroke" opacity="0.55">
        <path d="M225 62 L225 12" />
        <path d="M892 34 L892 8" />
      </g>
    </svg>
  );
}
