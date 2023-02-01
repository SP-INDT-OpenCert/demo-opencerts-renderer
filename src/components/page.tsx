import styled from "@emotion/styled";
import { PrintWatermark } from "../templates/govtech-demo-cert/common/print-watermark";
import { css, Global } from "@emotion/core";
import React from "react";

export const pageHeight = "29.7cm";
export const pageWidth = "21cm";
export const Page = styled.div`
  background: rgb(255, 255, 255);
  width: ${pageWidth};
  min-height: ${pageHeight};
  margin: 1cm auto;
  border: 1px #d3d3d3 solid;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  @media print {
    margin: 3cm auto;
    page-break-after: always;
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
export const PageContainer: React.FunctionComponent = ({ children }) => {
  return (
    <Container>
      <PrintWatermark />
      <Global
        styles={css`
          @page {
            size: A4;
            margin: 0;
          }
        `}
      />
      {children}
    </Container>
  );
};
