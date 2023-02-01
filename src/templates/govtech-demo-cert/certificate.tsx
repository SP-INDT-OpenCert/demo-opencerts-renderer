import { format } from "date-fns";
import { get } from "lodash";
import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./common/demo-styles.css";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { GovtechOpencertsTemplateCertificate } from "../samples";
import { PrintWatermark } from "./common/print-watermark";
import mainLogo from "./common/opencerts-logo.svg";
import logo from "./common/govtech-logo.png";
import certificateBg from "./common/certificate-background.png";

const Page = styled("div")<{ certificateBg: string }>`
  max-width: 297mm;
  margin: 0 auto;

  position: relative;
  background-image: ${props => props.certificateBg};
  background-position: center;
  background-size: cover;
  border: 10px solid #324353;

  .logo-oc {
    width: 320px;
    @media (min-width: 1024px) {
      width: 600px;
    }
  }

  .logo-gt {
    width: 200px;
    @media (min-width: 1024px) {
      width: 300px;
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

    .logo-oc {
      width: 320px;
    }

    .logo-gt {
      width: 200px;
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
      <div className="spacer">
        <img src={mainLogo} className="img-fluid logo-oc" alt="OpenCerts Logo" />
      </div>
      <div className="spacer text-md">
        <i>This is to certify that</i>
      </div>
      <div className="spacer text-lg">
        <b>{document.recipient.name}</b>
      </div>
      <div className="spacer text-md">
        <i>has successfully completed the</i>
      </div>
      <div className="spacer text-lg">OpenCerts Demo</div>
      <div className="spacer text-md">
        <i>certification through training administered by</i>
      </div>
      <img className="img-fluid logo-gt" src={logo} alt="Govtech Logo" />
    </section>
    <section>
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
              {get(document, "additionalData.certSignatories[0].position")},{" "}
              {get(document, "additionalData.certSignatories[0].organisation")}
            </div>
          </div>
        </div>
        <div className="col" />
        <div className="col">
          <div className="text-sm text-right">Dated {format(document.issuedOn, "DD/MM/YYYY")}</div>
        </div>
      </div>
    </section>
  </Page>
);
