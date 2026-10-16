import React from 'react';
import { GarmentId } from './garments';

interface GarmentArtworkProps {
  id: GarmentId;
  selected?: boolean;
  className?: string;
  ariaHidden?: boolean;
}

export function GarmentArtwork({ id, selected = false, className = '', ariaHidden = true }: GarmentArtworkProps) {
  const primaryStroke = '#202421';
  const accentRed = selected ? '#e0483a' : '#b73329';
  const neutralFill = selected ? '#ffffff' : '#f7f7f3';
  const secondaryFill = selected ? '#f0f2eb' : '#ededE8';

  return (
    <svg
      viewBox="0 0 320 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`garment-svg ${selected ? 'garment-svg-selected' : ''} ${className}`}
      aria-hidden={ariaHidden}
      focusable="false"
    >
      {id === 'corporate' && (
        <g className="garment-group-corporate">
          {/* Inner Collared Shirt */}
          <path
            d="M 125 50 L 160 115 L 195 50 L 160 40 Z"
            fill="#ffffff"
            stroke={primaryStroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Shirt Collar Points */}
          <path
            d="M 125 50 L 140 105 L 160 75 L 180 105 L 195 50"
            fill="#ffffff"
            stroke={primaryStroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Shirt Placket & Inner Tie/Seam */}
          <line x1="160" y1="75" x2="160" y2="240" stroke={primaryStroke} strokeWidth="1.8" strokeDasharray="4 2" />
          <circle cx="160" cy="130" r="3" fill="#ffffff" stroke={primaryStroke} strokeWidth="1.5" />
          <circle cx="160" cy="170" r="3" fill="#ffffff" stroke={primaryStroke} strokeWidth="1.5" />
          <circle cx="160" cy="210" r="3" fill="#ffffff" stroke={primaryStroke} strokeWidth="1.5" />

          {/* Blazer Silhouette & Body */}
          <path
            d="M 125 50 L 55 95 L 40 260 L 75 255 L 85 145 L 75 350 L 160 370 L 245 350 L 235 145 L 245 255 L 280 260 L 265 95 L 195 50 Z"
            fill={neutralFill}
            stroke={primaryStroke}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Blazer Sleeves & Seams */}
          <path d="M 85 145 L 55 95" stroke={primaryStroke} strokeWidth="2" />
          <path d="M 235 145 L 265 95" stroke={primaryStroke} strokeWidth="2" />

          {/* Tailored Lapels (Notch Lapel) */}
          <path
            d="M 125 50 L 100 135 L 122 150 L 104 195 L 160 250 L 216 195 L 198 150 L 220 135 L 195 50 Z"
            fill={secondaryFill}
            stroke={primaryStroke}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Lapel Roll Seams */}
          <line x1="125" y1="50" x2="160" y2="250" stroke={primaryStroke} strokeWidth="1.8" />
          <line x1="195" y1="50" x2="160" y2="250" stroke={primaryStroke} strokeWidth="1.8" />

          {/* Lapel Buttonhole Brand Red Accent */}
          <line x1="108" y1="110" x2="118" y2="114" stroke={accentRed} strokeWidth="3" strokeLinecap="round" />

          {/* Breast Welt Pocket with Red Pocket Square Accent */}
          <rect x="86" y="170" width="32" height="6" fill="#ffffff" stroke={primaryStroke} strokeWidth="1.8" />
          <path d="M 94 170 L 102 160 L 110 170 Z" fill={accentRed} stroke={accentRed} strokeWidth="1" />

          {/* Lower Flap Pockets */}
          <rect x="74" y="275" width="46" height="12" fill={secondaryFill} stroke={primaryStroke} strokeWidth="2" />
          <rect x="200" y="275" width="46" height="12" fill={secondaryFill} stroke={primaryStroke} strokeWidth="2" />

          {/* Front Horn Buttons */}
          <circle cx="160" cy="265" r="5" fill="#202421" stroke={primaryStroke} strokeWidth="1.5" />
          <circle cx="160" cy="305" r="5" fill="#202421" stroke={primaryStroke} strokeWidth="1.5" />

          {/* Subtle Pick-Stitching Detail */}
          <path d="M 72 342 L 160 362 L 248 342" stroke={primaryStroke} strokeWidth="1.2" strokeDasharray="3 3" />
        </g>
      )}

      {id === 'hospitality' && (
        <g className="garment-group-hospitality">
          {/* Chef Stand / Mandarin Collar */}
          <path
            d="M 125 45 C 142 38 178 38 195 45 L 195 68 C 178 62 142 62 125 68 Z"
            fill={neutralFill}
            stroke={primaryStroke}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Apron Neck Strap */}
          <path
            d="M 120 60 C 110 20 210 20 200 60"
            fill="none"
            stroke={accentRed}
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Chef Double-Breasted Jacket Sleeves and Silhouette */}
          <path
            d="M 125 68 L 50 110 L 35 250 L 70 245 L 80 150 L 75 350 L 245 350 L 240 150 L 250 245 L 285 250 L 270 110 L 195 68 Z"
            fill={neutralFill}
            stroke={primaryStroke}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Apron Body (Hanging Bib & Skirt) */}
          <path
            d="M 112 140 L 208 140 L 226 360 L 94 360 Z"
            fill={secondaryFill}
            stroke={primaryStroke}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Apron Waist Webbing Ties */}
          <path d="M 94 220 L 55 235" stroke={primaryStroke} strokeWidth="3" strokeLinecap="round" />
          <path d="M 226 220 L 265 235" stroke={primaryStroke} strokeWidth="3" strokeLinecap="round" />

          {/* Double-Breasted Knot Buttons (Visible above and beside bib) */}
          <circle cx="140" cy="90" r="4" fill="#202421" />
          <circle cx="180" cy="90" r="4" fill="#202421" />
          <circle cx="140" cy="118" r="4" fill="#202421" />
          <circle cx="180" cy="118" r="4" fill="#202421" />

          {/* Apron Chest Pocket with Pen Divider */}
          <rect x="135" y="155" width="50" height="40" fill={neutralFill} stroke={primaryStroke} strokeWidth="1.8" />
          <line x1="155" y1="155" x2="155" y2="195" stroke={primaryStroke} strokeWidth="1.5" strokeDasharray="2 2" />

          {/* Pocket Bar-Tack Reinforcements in Brand Red */}
          <line x1="133" y1="157" x2="141" y2="157" stroke={accentRed} strokeWidth="3" strokeLinecap="round" />
          <line x1="177" y1="157" x2="185" y2="157" stroke={accentRed} strokeWidth="3" strokeLinecap="round" />

          {/* Kangaroo Waist Pocket */}
          <path
            d="M 108 245 L 212 245 L 216 325 L 104 325 Z"
            fill={neutralFill}
            stroke={primaryStroke}
            strokeWidth="2"
          />
          <line x1="160" y1="245" x2="160" y2="325" stroke={primaryStroke} strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Red bar-tacks on waist pocket */}
          <line x1="106" y1="248" x2="114" y2="248" stroke={accentRed} strokeWidth="3" strokeLinecap="round" />
          <line x1="206" y1="248" x2="214" y2="248" stroke={accentRed} strokeWidth="3" strokeLinecap="round" />
        </g>
      )}

      {id === 'industrial' && (
        <g className="garment-group-industrial">
          {/* Heavy Work Jacket Collar */}
          <path
            d="M 120 55 L 90 90 L 135 95 L 160 100 L 185 95 L 230 90 L 200 55 Z"
            fill={secondaryFill}
            stroke={primaryStroke}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Main Heavy Drill Body & Sleeves */}
          <path
            d="M 120 55 L 45 105 L 30 265 L 68 260 L 80 160 L 70 355 L 250 355 L 240 160 L 252 260 L 290 265 L 275 105 L 200 55 Z"
            fill={neutralFill}
            stroke={primaryStroke}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Reinforced Yoke Across Chest */}
          <path d="M 45 105 L 160 120 L 275 105" stroke={primaryStroke} strokeWidth="2" fill="none" />

          {/* Upper High-Vis Reflective Band */}
          <polygon
            points="68,145 252,145 250,175 70,175"
            fill={selected ? '#e8ec98' : '#e0e470'}
            stroke={primaryStroke}
            strokeWidth="2"
          />
          {/* Micro-Prismatic Silver Reflective Stripe */}
          <polygon points="69,153 251,153 250,167 70,167" fill="#ffffff" stroke={primaryStroke} strokeWidth="1.2" />

          {/* Lower High-Vis Reflective Band */}
          <polygon
            points="70,270 250,270 250,300 70,300"
            fill={selected ? '#e8ec98' : '#e0e470'}
            stroke={primaryStroke}
            strokeWidth="2"
          />
          <polygon points="70,278 250,278 250,292 70,292" fill="#ffffff" stroke={primaryStroke} strokeWidth="1.2" />

          {/* Center Heavy Brass Zipper */}
          <line x1="160" y1="100" x2="160" y2="355" stroke={primaryStroke} strokeWidth="4" />
          <rect x="156" y="115" width="8" height="14" fill={accentRed} stroke={primaryStroke} strokeWidth="1.5" />

          {/* Dual Chest Bellows Utility Pockets */}
          <rect x="85" y="190" width="50" height="55" fill={secondaryFill} stroke={primaryStroke} strokeWidth="2" />
          <polygon points="85,190 110,202 135,190" fill={neutralFill} stroke={primaryStroke} strokeWidth="1.8" />
          <circle cx="110" cy="210" r="3" fill="#202421" />

          <rect x="185" y="190" width="50" height="55" fill={secondaryFill} stroke={primaryStroke} strokeWidth="2" />
          <polygon points="185,190 210,202 235,190" fill={neutralFill} stroke={primaryStroke} strokeWidth="1.8" />
          <circle cx="210" cy="210" r="3" fill="#202421" />

          {/* Red Bar-Tack Stress Reinforcements */}
          <line x1="83" y1="192" x2="91" y2="192" stroke={accentRed} strokeWidth="3" strokeLinecap="round" />
          <line x1="129" y1="192" x2="137" y2="192" stroke={accentRed} strokeWidth="3" strokeLinecap="round" />
          <line x1="183" y1="192" x2="191" y2="192" stroke={accentRed} strokeWidth="3" strokeLinecap="round" />
          <line x1="229" y1="192" x2="237" y2="192" stroke={accentRed} strokeWidth="3" strokeLinecap="round" />
        </g>
      )}

      {id === 'branded' && (
        <g className="garment-group-branded">
          {/* Piqué Polo Shirt Body & Sleeves */}
          <path
            d="M 115 65 L 45 110 L 30 220 L 70 215 L 75 145 L 70 345 L 210 345 L 205 145 L 210 215 L 250 220 L 235 110 L 165 65 Z"
            fill={neutralFill}
            stroke={primaryStroke}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Ribbed Polo Collar with Brand Red Tipping */}
          <path
            d="M 115 65 L 98 120 L 140 120 L 140 78 L 165 65 Z"
            fill={secondaryFill}
            stroke={primaryStroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M 165 65 L 182 120 L 140 120 L 140 78 Z"
            fill={secondaryFill}
            stroke={primaryStroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Collar edge accent tipping */}
          <path d="M 98 120 L 140 120" stroke={accentRed} strokeWidth="2.5" />
          <path d="M 140 120 L 182 120" stroke={accentRed} strokeWidth="2.5" />

          {/* Front Button Box Placket */}
          <rect x="130" y="78" width="20" height="65" fill="#ffffff" stroke={primaryStroke} strokeWidth="2" />
          <circle cx="140" cy="94" r="3" fill="#202421" />
          <circle cx="140" cy="116" r="3" fill="#202421" />
          <circle cx="140" cy="134" r="3" fill="#202421" />

          {/* Left Chest 3D Puff Embroidery Badge */}
          <circle cx="95" cy="165" r="14" fill={accentRed} stroke={primaryStroke} strokeWidth="1.8" />
          <path
            d="M 95 158 C 91 158 88 161 88 165 C 88 169 91 172 95 172 C 99 172 102 169 102 165 Z M 98 168 L 102 172"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Structured 6-Panel Cap (Lower Right) */}
          <g transform="translate(190, 220)">
            {/* Cap Crown */}
            <path
              d="M 10 75 C 10 30 55 10 85 20 C 105 28 115 50 115 75 Z"
              fill={neutralFill}
              stroke={primaryStroke}
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            {/* Crown Seam Lines converging at top button */}
            <path d="M 60 15 L 10 75" stroke={primaryStroke} strokeWidth="1.5" />
            <path d="M 60 15 L 60 75" stroke={primaryStroke} strokeWidth="1.5" />
            <path d="M 60 15 L 110 75" stroke={primaryStroke} strokeWidth="1.5" />

            {/* Top Eyelet Button */}
            <circle cx="60" cy="15" r="4" fill={accentRed} stroke={primaryStroke} strokeWidth="1.5" />

            {/* Embroidered Eyelets on Crown */}
            <circle cx="35" cy="45" r="2" fill="#202421" />
            <circle cx="85" cy="45" r="2" fill="#202421" />

            {/* Front Crown Brand Patch */}
            <rect x="42" y="42" width="36" height="22" fill={secondaryFill} stroke={accentRed} strokeWidth="1.8" />
            <circle cx="60" cy="53" r="6" fill={accentRed} />

            {/* Curved Visor / Brim with Red Sandwich Accent */}
            <path
              d="M 5 75 C 30 95 90 95 125 75 C 115 88 85 100 45 100 C 15 100 0 88 5 75 Z"
              fill={secondaryFill}
              stroke={primaryStroke}
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            <path d="M 10 84 C 40 98 85 96 115 80" stroke={accentRed} strokeWidth="2.5" />
          </g>
        </g>
      )}
    </svg>
  );
}
