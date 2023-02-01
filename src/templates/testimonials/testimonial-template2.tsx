import React, { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { TestimonialCertificate } from "../samples";
import { css } from "@emotion/core";
import { Page, PageContainer, pageHeight, pageWidth } from "../../components/page";
import banner from "./testimonial-2-banner.jpg";

const headerHeight = "5cm";
const footerHeight = "2cm";
const contentHeight = `calc(${pageHeight} - ${headerHeight} - ${footerHeight})`;

export const TestimonialTemplate2: FunctionComponent<TemplateProps<TestimonialCertificate>> = ({ document }) => (
  <PageContainer>
    <Page>
      <div
        css={css`
          background: url(${banner});
          height: ${headerHeight};
          background-size: ${pageWidth} ${headerHeight};
        `}
      />
      <div
        css={css`
          padding: 1cm 2cm;
          height: ${contentHeight};
        `}
      >
        <p
          css={css`
            padding-bottom: 1cm;
            padding-top: 1cm;
          `}
        >
          {/* this is not correct, because of TZ, but it's a demo :)*/}
          {new Date(document.issuedOn).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </p>
        <div className="text-justify" dangerouslySetInnerHTML={{ __html: document.content }} />
        <div>
          <div>
            <img
              css={css`
                width: 100px;
              `}
              src={document.referee.signature}
            />
          </div>
          <div>{document.referee.name}</div>
          <div>{document.referee.designation}</div>
          <div>Mobile: {document.referee.mobile}</div>
          <div>Email: {document.referee.email}</div>
        </div>
      </div>
      <div
        css={css`
          height: ${footerHeight};
        `}
      >
        <div
          css={css`
            background-color: #0072c6;
            color: white;
            height: 1cm;
            margin-left: 1cm;
            margin-right: 1cm;
            padding-left: 1cm;
            padding-right: 1cm;
            display: flex;
            align-items: center;
          `}
        >
          {document.referee.address}
        </div>
      </div>
    </Page>
  </PageContainer>
);
