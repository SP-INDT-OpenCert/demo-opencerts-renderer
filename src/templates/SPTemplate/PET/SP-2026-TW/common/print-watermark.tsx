import React, { FunctionComponent } from "react";
import { css } from "@emotion/core";

export const PrintWatermark: FunctionComponent = () => (
  <div
    css={css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.6;
      display: none;
      background-image: url("/static/images/watermark.svg");
      background-repeat: repeat;

      @media print {
        display: block;
      }
    `}
  />
);
