import { format } from "date-fns";
import { get } from "lodash";
import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./common/demo-styles.css";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { GovtechOpencertsTemplateCertificate } from "../samples";
import { PrintWatermark } from "./common/print-watermark";
//import mainLogo from "./common/opencerts-logo.svg";
//import logo from "./common/govtech-logo.png";
//import certificateBg from "./common/certificate-background.png";
import { IMG_CERT_SPLOGO, IMG_CERT_SEAL } from './Certimages';

const Page = styled("div")<{ certificateBg: string }>`
  // max-width: 297mm;
  // margin: 0 auto;
  width:800px;

  position: relative;
  // background-position: center;
  // background-size: cover;
  background-color: rgb(255,255,238);
  border-style: solid;
  border-color: rgb(204,204,170);

  .logo {
    width: 100px;
    @media (min-width: 1024px) {
      width: 100px;
    }
  }

  .seal {
    width: 140px;
    @media (min-width: 1024px) {
      width: 140px;
    }
  }

  .signature {
    width: 160px;
    @media (min-width: 1024px) {
      width: 230px;
    }
  }

  .text-sm {
    font-size: 12px;
    @media (min-width: 1024px) {
      font-size: 21px;
    }
  }

  .text-md {
    font-size: 16px;
    @media (min-width: 1024px) {
      font-size: 26px;
    }
  }

  .text-lg {
    font-size: 24px;
    font-family:Georgia italic;
    justify-content-center;
    @media (min-width: 1024px) {
      font-size: 34px;
    }
  }

  .spacer {
    margin: 24px;

    @media (min-width: 1024px) {
      margin: 48px;
    }
  }

  footer {
    max-width: 960px;
    margin: 0 auto;
    padding: 64px 24px;

    @media (min-width: 1024px) {
      padding: 96px;
    }
  }

  @media print {
    .logo {
      width: 100px;
    }

    .seal {
      width: 140px;
    }

    .signature {
      width: 160px;
    }

    .text-sm {
      font-size: 12px;
    }

    .text-md {
      font-size: 16px;
    }

    .text-lg {
      font-size: 24px;
      font-family:Georgia italic;
    }

    .spacer {
      margin: 24px;
    }

    footer {
      padding: 64px 24px;
    }
  }
`; 

export const CertificateTemplate: FunctionComponent<TemplateProps<GovtechOpencertsTemplateCertificate>> = ({
  document
}) => (
  <Page certificateBg={`url('${certificateBg}')`} className="p-4">
    <section className="text-center">
      <img className="img-fluid logo" src={IMG_CERT_SPLOGO} alt="SP Logo" />
      
      <div className="spacer text-lg">
        <b>{document.name}</b>
      </div>

      <div className="spacer text-sm">
        <i>It is hereby certified that</i>
      </div>
  </Page>
);
