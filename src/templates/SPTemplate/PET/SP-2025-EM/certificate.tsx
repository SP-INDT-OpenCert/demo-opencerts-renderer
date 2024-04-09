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
    width: 396px;
    @media (min-width: 1024px) {
      width: 128px;
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
    /* @page {
      size: A4 landscape;
    } */

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
    }

    .text-md {
      font-size: 16px;
    }

    .text-lg {
      font-size: 24px;
      font-family:'Georgia italic'
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
    <PrintWatermark />
    <section className="text-center">
      <img className="img-fluid logo" src={IMG_CERT_SPLOGO} alt="SP Logo" />
      <div className="spacer text-lg">
        <b>{document.name}</b>
      </div>
      <div className="spacer text-sm">
        <i>It is hereby certified that</i>
      </div>
      {/* <div className="spacer text-md">
        <b>{document.recipient.name}</b>
      </div>

      <div className="spacer text-sm">
        <i>has successfully completed the </i>
        {document.name}
      </div>
      <div className="spacer text-sm">on</div>
      <div className="spacer text-md">
      {format(document.graduationDate, 'D MMMM YYYY')}
      </div>
      <div className="spacer">
        <img src={IMG_CERT_SEAL} className="img-fluid seal" alt="SP Seal" />
      </div> */}
      
    </section>
    {/* <section>
      <div className="row align-items-center">
        <div className="col">
          <div className="text-center text-sm">
            <img
              className="img-fluid signature"
              src={get(document, "additionalData.certSignatories[0].signature")}
              alt="Signature"
            />
            <hr style={{ backgroundColor: "#333" }} />
            <div>
              <b>{get(document, "additionalData.certSignatories[0].name")}</b>
              <br />
              {get(document, "additionalData.certSignatories[0].position")}
            </div>
          </div>
        </div>
        <div className="col" />
        <div className="col">
          <div className="text-sm text-right">{document.recipient.studentId}/{document.recipient.nric}</div>
        </div>
      </div>
    </section> */}
  </Page>
);
