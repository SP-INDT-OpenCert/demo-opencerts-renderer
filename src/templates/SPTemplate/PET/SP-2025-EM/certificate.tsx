import { format } from "date-fns";
import { get } from "lodash";
import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.css";
//import "./common/demo-styles.css";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { GovtechOpencertsTemplateCertificate } from "../samples";
//import { PrintWatermark } from "./common/print-watermark";
//import mainLogo from "./common/opencerts-logo.svg";
//import logo from "./common/govtech-logo.png";
import certificateBg from "./common/certificate-background.png";
import { IMG_CERT_SPLOGO, IMG_CERT_SEAL } from './Certimages';

const Page = styled("div")<{ certificateBg: string }>`
  max-width: 297mm;
  margin: 0 auto;
  width:800px;

  position: relative;
  background-position: center;
  background-size: cover;
  background-color:rgb(255,255,238);
  border-style:solid;
  border-color:rgb(204,204,170);

  .logo {
    //width: 396px;
    width: 300px;
    //width: 296px;
    @media (min-width: 1024px) {
      //width: 396px;
      width: 300px;
    }
  }

  .seal {
    //width: 140px;
    width: 100px;
    //width: 50px;
    @media (min-width: 1024px) {
      //width: 140px;
      width: 50px;
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
    justify-content: center;
    font-family: Times;
    @media (min-width: 1024px) {
      font-size: 21px;
    }
  }

  .text-md-dt {
    font-size: 14px;
    font-family: Georgia italic;
    @media (min-width: 1024px) {
      font-size: 14px;
    }
  }

  .text-md-nm {
    font-size: 16px;
    font-family: Georgia italic;
    @media (min-width: 1024px) {
      font-size: 26px;
    }
  }

  .text-lg {
    font-size: 24px;
    justify-content: center;
    font-family: Times;
    font-variant: small-caps;
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
  
  namehr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em auto;
    padding: 0;
  }

  @media print {
    .logo {
      width: 396px;
    }

    .seal {
      width: 140px;
    }

    .signature {
      width: 160px;
    }

    .text-sm {
      font-size: 12px;
      justify-content: center;
      font-family: Times;
    }
    
    .text-md-nm {
      font-size: 16px;
      font-style: italic;
      justify-content: center;
      font-family: Times;
    }

    .text-md-dt {
      font-size: 14px;
      font-style: italic;
      justify-content: center;
      font-family: Times;
    }

    .text-lg {
      font-size: 24px;
    justify-content: center;
    font-family: Times;
    font-variant: small-caps;
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
    {/* <PrintWatermark /> */}

    <div className="container" style={{width:'800px', backgroundColor:'rgb(255,255,238)', borderStyle:'solid', borderColor:'rgb(204,204,170)'}}>
      <div className="row">
        <div className="col"></div>
        <div className="col my-5 justify-content-center"><img src={IMG_CERT_SPLOGO} alt="SP Logo" width='396' height='128'/></div>
        <div className="col"></div>
      </div>
    </div>
  </Page>
);
