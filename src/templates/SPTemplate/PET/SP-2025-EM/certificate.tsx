import { format } from "date-fns";
import { get } from "lodash";
import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./common/demo-styles.css";
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
    <PrintWatermark />
    <section className="text-center">
      <img className="img-fluid logo" src={IMG_CERT_SPLOGO} alt="SP Logo" />
      
      <br />

      <div className="spacer text-lg">
        <b>{document.name}</b>
      </div>
      <div className="spacer text-sm">
        It is hereby certified that
      </div>
       <div className="spacer text-md">
        <i>{document.recipient.name}</i>
      </div>
      
      <namehr />
      {/* <div className="row my-0"><div className="col"></div>
          <div className="col-9" style={{borderBottomWidth:'1px', borderTopWidth:'0px', borderStyle:'solid', borderColor:'#333'}} ></div>
      <div className="col"></div></div> */}
      
      <div className="row my-0">
        <div className="col"></div>
        <div className="col-1 h5 mt-4 d-flex justify-content-center" style={{fontFamily:'Times'}} > on </div>
        <div className="col-3">
	      <div className="h5 mt-3 mb-0 d-flex justify-content-center font-italic" style={{fontFamily:'Georgia italic'}}> {format(document.graduationDate, 'D MMMM YYYY')} </div>
	      <div className="row my-0">
          <div className="col" style={{borderBottomWidth:'1px', borderTopWidth:'0px', borderStyle:'solid', borderColor:'#333'}} ></div>
        </div>
	  </div>

      {/* <div className="spacer text-sm">
        has successfully completed the <i>{document.name}</i>
      </div>
      <div className="spacer text-sm">on</div>
      <div className="spacer text-md">
      {format(document.graduationDate, 'D MMMM YYYY')}
      </div> */}

      <br />

      <div className="spacer">
        <img src={IMG_CERT_SEAL} className="img-fluid seal" alt="SP Seal" />
      </div>
      
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
