import React from 'react'

export const SpinningCircle = props => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <g transform="rotate(72.0756 50 50)">
      <path
        d="M90 50 A40 40 0 0 1 74.93959207434935 81.2732592987212"
        fill="none"
        stroke="#0072bc"
        strokeWidth="6"
      />
      <path
        d="M74.93959207434935 81.2732592987212 A40 40 0 0 1 41.09916264174743 88.99711648727295"
        fill="none"
        stroke="#0072bc"
        strokeWidth="6"
      />
      <path
        d="M41.09916264174743 88.99711648727295 A40 40 0 0 1 13.961245283903239 67.35534956470232"
        fill="none"
        stroke="#a0a9b9"
        strokeWidth="6"
      />
      <path
        d="M13.961245283903239 67.35534956470232 A40 40 0 0 1 13.961245283903231 32.64465043529768"
        fill="none"
        stroke="#a0a9b9"
        strokeWidth="6"
      />
      <path
        d="M13.961245283903231 32.64465043529768 A40 40 0 0 1 41.09916264174741 11.002883512727053"
        fill="none"
        stroke="#a0a9b9"
        strokeWidth="6"
      />
      <path
        d="M41.09916264174741 11.002883512727053 A40 40 0 0 1 74.93959207434933 18.726740701278803"
        fill="none"
        stroke="#0072bc"
        strokeWidth="6"
      />
      <path
        d="M74.93959207434933 18.726740701278803 A40 40 0 0 1 90 49.99999999999999"
        fill="none"
        stroke="#0072bc"
        strokeWidth="6"
      />
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="0 50 50;360 50 50"
        times="0;1"
        dur="0.5"
        repeatCount="indefinite"
      />
    </g>
  </svg>
);