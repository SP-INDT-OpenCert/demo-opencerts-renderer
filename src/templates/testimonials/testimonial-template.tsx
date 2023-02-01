import React, { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { TestimonialCertificate } from "../samples";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import moeLogo from "./moe-ministry-of-education-singapore.png";
import { Page, PageContainer, pageHeight } from "../../components/page";

const header1Height = "8cm";
const footer1Height = "1cm";
const content1Height = `calc(${pageHeight} - ${header1Height} - ${footer1Height})`;

const header2Height = "4.5cm";
const footer2Height = "2cm";
const separatorHeight = "0.5cm";
const content2Height = `calc(${pageHeight} - ${header2Height} - ${footer2Height} - 2 * ${separatorHeight})`;

const Separator = styled.div`
  height: ${separatorHeight};
  background: rgb(164, 139, 97);
  background: radial-gradient(circle, rgba(164, 139, 97, 1) 0%, rgba(116, 100, 75, 1) 100%);
  color: white;
  overflow: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.5rem;
  white-space: nowrap;

  @media print {
    // for some reason this breaks the size of the page when printing ... :)
    white-space: normal;
  }
`;

const CustomPage = styled(Page)`
  background: linear-gradient(176deg, rgba(255, 255, 255, 1) 0%, rgba(240, 252, 255, 1) 100%);
`;

export const TestimonialTemplate: FunctionComponent<TemplateProps<TestimonialCertificate>> = ({ document }) => (
  <PageContainer>
    <CustomPage>
      <div
        css={css`
          background-color: white;
          height: ${header1Height};
          border-bottom: 1px solid #999c97;
          img {
            margin-top: 1cm;
            height: 4cm;
          }
          .title {
            font-size: 1.2rem;
            font-weight: bold;
          }
          .sub-title {
            font-size: 1.1rem;
            font-weight: bold;
          }}
        `}
      >
        <div className="text-center">
          <img src={moeLogo} />
        </div>
        <div className="text-center title">Ministry of Education</div>
        <div className="text-center sub-title">Republic of Singapore</div>
      </div>
      <div
        className="text-center"
        css={css`
          height: ${content1Height};
          .certificate {
            font-size: 2rem;
            font-weight: bold;
            color: #80764f;
            margin-top: 1.5cm;
            margin-bottom: 1.5cm;
          }
          .recipient {
            margin-top: 1.5cm;
          }
          .institute {
            margin-bottom: 0.75cm;
          }
          .year-of-graduation {
            margin-bottom: 1.5cm;
          }
          .information {
            margin-bottom: 1.5cm;
          }
          .seal img {
            width: 4cm;
          }
          .signature img {
            width: 6cm;
            border-bottom: 2px solid #b6b7b2;
            margin-bottom: 0.25cm;
          }
          .signature-container {
          }
        `}
      >
        <div className="certificate">School Graduate Certificate</div>
        <div className="text-uppercase">The certificate is awarded to</div>
        <div className="recipient">{document.recipient.name}</div>
        <div>Identification No: {document.recipient.studentId}</div>
        <div className="institute">{document.testimonial.instituteName}</div>
        <div className="year-of-graduation">
          Year of Graduation: {document.testimonial.achievementDate.split("-")[0]}
        </div>
        <div className="information">
          <div>This School Graduation Certificates provides a hlistic qualitative</div>
          <div>assessment of the student&apos;s personal qualities, academic and co-curricular</div>
          <div>development upon completion of the student&apos;s pre-university education.</div>
        </div>
        <div className="flex-row d-flex justify-content-around">
          <div className="seal w-50">
            <img src={document.referee.seal} />
          </div>
          <div className="signature w-50">
            <div className="signature-container">
              <img src={document.referee.signature} />
            </div>
            <div>{document.referee.designation}</div>
          </div>
        </div>
      </div>
      <div
        css={css`
          height: ${footer1Height};
          background: rgb(164, 139, 97);
          background: radial-gradient(circle, rgba(164, 139, 97, 1) 0%, rgba(116, 100, 75, 1) 100%);
        `}
      />
    </CustomPage>
    <CustomPage>
      <div
        className="header d-flex justify-content-between align-items-end"
        css={css`
          padding: 0 2cm 0.5cm;
          background-color: white;
          height: ${header2Height};
          .type {
            font-size: 1.2rem;
          }
          .institute {
            font-size: 0.9rem;
          }
          .title {
            font-size: 1.1rem;
            font-weight: bold;
          }
          .sub-title {
            font-size: 0.9rem;
            font-weight: bold;
          }
          img {
            width: 2.5cm;
          }
        `}
      >
        <div>
          <div className="type">Testimonial</div>
          <div className="institute">{document.testimonial.instituteName}</div>
        </div>
        <div className="text-center">
          <div>
            <img src={moeLogo} />
          </div>
          <div className="title">Ministry of Education</div>
          <div className="sub-title">Republic of Singapore</div>
        </div>
      </div>
      <Separator>
        MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION
        MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION
        MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION
        MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION
        MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION
      </Separator>
      <div
        css={css`
          height: ${content2Height};
          padding: 1cm 2cm;
        `}
        className="text-justify"
        dangerouslySetInnerHTML={{ __html: document.content }}
      />
      <Separator>
        MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION
        MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION
        MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION
        MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION
        MINISTRY OF EDUCATION MINISTRY OF EDUCATION MINISTRY OF EDUCATION
      </Separator>
      <div
        className="footer"
        css={css`
          background-color: white;
          height: ${footer2Height};
        `}
      />
    </CustomPage>
  </PageContainer>
);
