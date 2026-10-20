import React from 'react';
import { GarmentId } from './garments';

interface GarmentArtworkProps {
  id: GarmentId;
  selected?: boolean;
  className?: string;
  ariaHidden?: boolean;
}

export function GarmentArtwork({ id, selected = false, className = '', ariaHidden = true }: GarmentArtworkProps) {
  const outStroke = '#29333a';
  const lineStroke = '#42515b';
  const stitchStroke = '#88929a';
  const accentRed = selected ? '#c8372d' : '#b73329';
  const garmentFill = selected ? '#ffffff' : '#f2f1ed';
  const secondaryFill = selected ? '#f4e8d9' : '#ede4d7';

  return (
    <svg
      viewBox="12 36 256 334"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`garment-svg ${selected ? 'garment-svg-selected' : ''} ${className}`}
      aria-hidden={ariaHidden}
      focusable="false"
    >
      {id === 'corporate' && (
        <g className="garment-group-corporate">
          {/* Tailored collared dress shirt beneath blazer */}
          <path
            d="M111 73 L140 92 L169 73 L170 298 L110 298 Z"
            fill="#ffffff"
            stroke={outStroke}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Shirt collar stand & spread collar points */}
          <path
            d="M124 64 Q140 70 156 64 L169 73 L140 85 L111 73 Z"
            fill="#f7f7f4"
            stroke={outStroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M111 73 L124 64 L140 83 L122 111 Z M169 73 L156 64 L140 83 L158 111 Z"
            fill="#ffffff"
            stroke={outStroke}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Shirt center placket & buttons */}
          <path d="M140 85 V235" stroke={lineStroke} strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="140" cy="126" r="2.2" fill="#485461" />
          <circle cx="140" cy="166" r="2.2" fill="#485461" />
          <circle cx="140" cy="206" r="2.2" fill="#485461" />

          {/* Blazer outer silhouette: sloped shoulders, natural sleeves & curved front hem */}
          <path
            d="M107 75 C98 78 76 84 65 99 L47 145 L34 252 L60 261 L88 156 L86 311 Q140 322 194 311 L192 156 L220 261 L246 252 L233 145 L215 99 Q206 84 173 75 L155 90 L140 105 L125 90 Z"
            fill={garmentFill}
            stroke={outStroke}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Armhole scye seams & sleeve cuff vent lines */}
          <path
            d="M88 156 L65 99 M192 156 L215 99 M39 242 L62 250 M241 242 L218 250"
            stroke={lineStroke}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Tailored notch lapels */}
          <path
            d="M107 75 L89 115 L109 134 L96 153 L139 223 L140 233 L114 133 Z M173 75 L191 115 L171 134 L184 153 L141 223 L140 233 L166 133 Z"
            fill="#ffffff"
            stroke={outStroke}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Center closure, waist darts & tailored welt pockets */}
          <path
            d="M140 233 L139 315 M121 236 L108 298 M159 236 L172 298"
            stroke={lineStroke}
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle cx="141" cy="248" r="3.2" fill="#485461" />
          <circle cx="141" cy="282" r="3.2" fill="#485461" />
          <path
            d="M76 247 H102 V259 H76 Z M178 247 H204 V259 H178 Z M82 184 H103 V190 H82 Z"
            stroke={lineStroke}
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          {/* Pick-stitching along hem & restrained lapel buttonhole bar-tack */}
          <path d="M85 304 Q140 313 195 304" stroke={stitchStroke} strokeWidth="1.2" strokeDasharray="3 4" />
          <line x1="103" y1="122" x2="113" y2="125" stroke={accentRed} strokeWidth="2.2" strokeLinecap="round" />
        </g>
      )}

      {id === 'hospitality' && (
        <g className="garment-group-hospitality">
          {/* Double-breasted chef jacket (positioned upper-left as distinct garment) */}
          <path
            d="M75 78 L94 70 Q114 75 133 78 Q150 75 164 70 L186 82 L200 152 L183 160 L178 133 L177 288 Q128 299 79 288 L78 133 L72 160 L55 152 L65 82 Z"
            fill={garmentFill}
            stroke={outStroke}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Curved Mandarin stand collar */}
          <path
            d="M94 68 Q129 60 164 68 L166 84 Q129 77 92 84 Z"
            fill="#ffffff"
            stroke={outStroke}
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Armhole seams, turnback cuffs & double-breasted placket lines */}
          <path
            d="M78 133 L65 82 M178 133 L186 82 M58 143 L74 150 M197 143 L181 150 M126 83 L118 286 M148 83 L154 286"
            stroke={lineStroke}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Two columns of cloth knot buttons */}
          <g fill="#40494c">
            <circle cx="119" cy="110" r="3" />
            <circle cx="151" cy="110" r="3" />
            <circle cx="117" cy="144" r="3" />
            <circle cx="153" cy="144" r="3" />
            <circle cx="115" cy="178" r="3" />
            <circle cx="155" cy="178" r="3" />
          </g>
          {/* Sleeve thermometer/pen pocket on left arm */}
          <path d="M62 104 L71 106 L69 124 L60 122 Z" stroke={lineStroke} strokeWidth="1.4" />
          <path d="M80 279 Q128 290 176 279" stroke={stitchStroke} strokeWidth="1.2" strokeDasharray="3 4" />

          {/* Heavy canvas bib apron hanging separately (offset & slightly angled) */}
          <g transform="translate(132 152) rotate(6)">
            {/* Woven cotton neck loop */}
            <path d="M46 14 Q70 -16 94 14" stroke={lineStroke} strokeWidth="2.2" strokeLinecap="round" />
            {/* Apron bib & skirt body */}
            <path
              d="M40 14 L100 14 L116 162 L24 162 Z"
              fill={secondaryFill}
              stroke={outStroke}
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
            {/* Waist webbing ties */}
            <path d="M28 76 L-6 84 M110 76 L138 84" stroke={lineStroke} strokeWidth="2" strokeLinecap="round" />
            {/* Divided utility pouch pocket with brass corner rivets */}
            <path
              d="M44 106 H96 V140 H44 Z M70 106 V140"
              fill="#fbfaf7"
              stroke={lineStroke}
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <circle cx="47" cy="109" r="1.8" fill={accentRed} />
            <circle cx="93" cy="109" r="1.8" fill={accentRed} />
            <path d="M31 154 H109" stroke={stitchStroke} strokeWidth="1.2" strokeDasharray="3 4" />
            {/* Woven brand tab at upper bib corner */}
            <path d="M45 23 H59" stroke={accentRed} strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </g>
      )}

      {id === 'industrial' && (
        <g className="garment-group-industrial">
          {/* One-piece heavy twill coverall with integrated sleeves & two separate trouser legs */}
          <path
            d="M106 80 L67 102 L48 206 L67 216 L90 138 L90 286 L96 350 L133 350 L139 260 L147 260 L153 350 L188 350 L194 284 L194 138 L217 216 L236 206 L217 102 L174 80 L156 101 L140 112 L123 101 Z"
            fill={garmentFill}
            stroke={outStroke}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Spread workwear collar */}
          <path
            d="M118 67 Q140 73 162 67 L175 82 L160 103 L140 88 L120 103 L105 82 Z"
            fill="#ffffff"
            stroke={outStroke}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Raglan/set-in armhole seams, concealed brass zip placket & waistband */}
          <path
            d="M90 138 L67 102 M194 138 L217 102 M140 112 V260 M91 250 H193"
            stroke={lineStroke}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Dual chest utility pockets with pointed flaps */}
          <path
            d="M98 175 H133 V210 H98 Z M150 175 H185 V210 H150 Z"
            fill="#ffffff"
            stroke={lineStroke}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M98 175 L115.5 185 L133 175 M150 175 L167.5 185 L185 175"
            stroke={lineStroke}
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          {/* Stitched rectangular chest patch above pocket */}
          <rect
            x="153"
            y="153"
            width="28"
            height="14"
            rx="1.5"
            fill={secondaryFill}
            stroke={accentRed}
            strokeWidth="1.8"
          />
          {/* High-visibility reflective tape bands on sleeves, waist & legs */}
          <path
            d="M66 130 L88 135 L85 150 L63 145 Z M196 135 L218 130 L221 145 L199 150 Z M91 232 H193 V243 H91 Z M93 302 H135 V311 H93 Z M150 302 H191 V311 H150 Z"
            fill="#ece77d"
            stroke="#b7b36c"
            strokeWidth="1.2"
          />
          {/* Reinforced knee & hem stitching */}
          <path
            d="M98 344 H132 M154 344 H187 M91 284 H136 M148 284 H193"
            stroke={stitchStroke}
            strokeWidth="1.2"
            strokeDasharray="3 4"
          />
        </g>
      )}

      {id === 'branded' && (
        <g className="garment-group-branded">
          {/* Piqué polo shirt silhouette */}
          <path
            d="M102 87 Q112 83 123 81 L140 93 L157 81 Q166 83 178 87 L220 114 L236 167 L206 179 L184 137 L185 310 Q140 320 95 310 L96 137 L74 179 L44 167 L60 114 Z"
            fill={garmentFill}
            stroke={outStroke}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Armhole seams & ribbed sleeve cuffs */}
          <path d="M96 137 L60 114 M184 137 L220 114" stroke={lineStroke} strokeWidth="1.8" strokeLinecap="round" />
          {/* Ribbed polo collar with stand */}
          <path
            d="M123 81 Q140 87 157 81 L140 101 Z"
            fill="#f7f7f4"
            stroke={outStroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M123 81 L140 101 L125 124 L111 99 Z M157 81 L140 101 L155 124 L169 99 Z"
            fill="#ffffff"
            stroke={outStroke}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Front button box placket */}
          <rect
            x="133"
            y="101"
            width="14"
            height="58"
            rx="1"
            fill="#ffffff"
            stroke={lineStroke}
            strokeWidth="1.7"
          />
          <circle cx="140" cy="119" r="2.2" fill="#36424c" />
          <circle cx="140" cy="139" r="2.2" fill="#36424c" />
          {/* Twin-needle hem & cuff stitch lines */}
          <path
            d="M97 303 Q140 312 184 303 M48 162 L73 173 M207 173 L232 162"
            stroke={stitchStroke}
            strokeWidth="1.2"
            strokeDasharray="3 4"
          />
          {/* Restrained left-chest embroidery placement indicator (no fake vector logo) */}
          <rect x="155" y="146" width="18" height="12" rx="1.5" fill={accentRed} opacity="0.82" />

          {/* Separate structured 6-panel twill cap */}
          <g transform="translate(172 232) scale(0.64)">
            {/* Crown dome */}
            <path
              d="M10 67 Q20 15 75 13 Q128 18 137 67 Z"
              fill={secondaryFill}
              stroke={outStroke}
              strokeWidth="2.6"
              strokeLinejoin="round"
            />
            {/* Top squatchee button & panel seams */}
            <circle cx="75" cy="12" r="4" fill={outStroke} />
            <path
              d="M75 13 V67 M75 13 Q37 29 25 67 M75 13 Q112 31 122 67"
              stroke={lineStroke}
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Breathable stitched eyelets */}
            <circle cx="48" cy="36" r="2.2" fill={lineStroke} />
            <circle cx="101" cy="36" r="2.2" fill={lineStroke} />
            {/* Curved stitched visor */}
            <path
              d="M10 67 Q77 93 149 66 Q140 90 97 101 Q38 106 10 67 Z"
              fill={secondaryFill}
              stroke={outStroke}
              strokeWidth="2.6"
              strokeLinejoin="round"
            />
            <path d="M21 75 Q73 96 133 77" stroke={stitchStroke} strokeWidth="1.5" strokeDasharray="3 4" />
          </g>
        </g>
      )}
    </svg>
  );
}

