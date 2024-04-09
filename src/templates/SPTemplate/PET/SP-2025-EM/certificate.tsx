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

const Page = styled("div")<{ certificateBg: string }>``;

export const CertificateTemplate: FunctionComponent<TemplateProps<GovtechOpencertsTemplateCertificate>> = ({
  document
}) => (
  <Page certificateBg={`url('${certificateBg}')`} className="p-4">
    <div className="container" style={{width:'800px', backgroundColor:'rgb(255,255,238)', borderStyle:'solid', borderColor:'rgb(204,204,170)'}}>
      <div className="row">
        <div className="col"></div>
        <div className="col my-5 justify-content-center"><img src={IMG_CERT_SPLOGO} alt="SP Logo" width='396' height='128'/></div>
        <div className="col"></div>
      </div>

      <div className="h2 mt-5 mb-0 font-weight-bold d-flex justify-content-center" style={{fontFamily:'Times', fontVariant:'small-caps'}}>{document.name} </div>
      
      <div className="h5 mt-4 d-flex justify-content-center" style={{fontFamily:'Times'}}>It is hereby certified that</div>
      <div className="h5 mt-4 mb-0 justify-content-center font-weight-bold font-italic d-flex" style={{fontFamily:'Georgia italic'}}>	{document.recipient.name} </div>

      <div className="row my-0">
        <div className="col"></div>
        <div className="col-9" style={{borderBottomWidth:'1px', borderTopWidth:'0px', borderStyle:'solid', borderColor:'#333'}} ></div>
        <div className="col"></div>
      </div>

      <div className="h5 mt-4 d-flex justify-content-center" style={{fontFamily:'Times'}}>has successfully completed the {document.name}</div>
      
      <div className="row my-0">
        <div className="col"></div>
        <div className="col-1 h5 mt-4 d-flex justify-content-center" style={{fontFamily:'Times'}} > on </div>
        <div className="col-3">
	        <div className="h5 mt-3 mb-0 d-flex justify-content-center font-italic" style={{fontFamily:'Georgia italic'}} >{format(document.graduationDate, 'D MMMM YYYY')} </div>
          <div className="row my-0">
            <div className="col" style={{borderBottomWidth:'1px', borderTopWidth:'0px', borderStyle:'solid', borderColor:'#333'}} ></div>
	        </div>
	      </div>
	      <div className="col"></div>
      </div>

      <div className="row" style={{height:'100px'}} ></div>
      <div className="row">
	      <div className="col-2"></div>
        <div className="col-3 mt-0"><img src={IMG_CERT_SEAL} alt="Seal" style={{width:'140px'}} /></div>
        <div className="col-2"></div>
        <div className="col-4 mt-2">
	        <div className="text-center"><img src={get(document, 'additionalData.certSignatories[0].signature')} alt="Sign1" style={{width:'160px'}} /></div>
		      <div style={{borderBottomWidth:'1px', borderTopWidth:'0px', borderStyle:'solid', borderColor:'#333'}} ></div>
          <div className="text-center font-weight-bold" style={{fontFamily:'Times', fontSize:'12px'}} > {document.additionalData.certSignatories[0].position} </div>
          <div className="row" style={{height:'20px'}} ></div>
        </div>
	      <div className="col-1"></div>
      </div>
      
      <div className="row" style={{height:'100px'}} ></div>
      <div className="row">
        <div className="h6 my-5 ml-3 d-flex" style={{fontFamily:'Times'}} >{document.recipient.studentId} </div>
      </div>
    </div>
  </Page>
);
