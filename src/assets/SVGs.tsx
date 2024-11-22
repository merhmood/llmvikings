import React from "react";

export const quoteIcon = (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width="100" height="100" fill="url(#pattern0_59_7)" />
    <defs>
      <pattern
        id="pattern0_59_7"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_59_7" transform="scale(0.0078125)" />
      </pattern>
      <image
        id="image0_59_7"
        width="128"
        height="128"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
