//import { format } from "date-fns";
//import { get } from "lodash";
import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { GovtechOpencertsTemplateCertificate } from "../samples";
import certificateBg from "./common/certificate-background.png";
//import { IMG_CERT_SPLOGO, IMG_CERT_SEAL } from './Certimages';

const Page = styled("div")<{ certificateBg: string }>``;

export const ExplanatoryTemplate: FunctionComponent<TemplateProps<GovtechOpencertsTemplateCertificate>> = ({
  document
}) => (
  <Page certificateBg={`url('${certificateBg}')`} className="p-4">
    <div className="container" style={{width:'800px', backgroundColor:'rgb(255,255,238)', borderStyle:'solid', borderColor:'rgb(204,204,170)'}}>
      <div className="h5 mt-4 mb-0 justify-content-left font-weight-bold d-flex" style={{fontFamily:'Georgia italic'}}><u>Explanatory Notes</u></div>
      <br></br>
      <br></br>
      <div className="row my-0">
        <div className="col"></div>
        <div className="col-6 text-center">
          <table style={{border:'1px solid'}}>
            <th style={{border:'1px solid'}}>Award</th>
            <th style={{border:'1px solid'}}>Criteria for Award</th>
            <tr style={{text-align:'center'}}><td style={{border:'1px solid'}}>Outstanding</td><td style={{border:'1px solid'}}>Top 10%</td></tr>
            <tr style={{text-align:'center'}}><td style={{border:'1px solid'}}>Excellent</td><td style={{border:'1px solid'}}>Next 15%</td></tr>
            <tr style={{text-align:'center'}}><td style={{border:'1px solid'}}>Good</td><td style={{border:'1px solid'}}>Next 25%</td></tr>
          </table>
        </div>
        <div className="col"></div>
      </div>  
      <br></br>
      <br></br>
      All students in SP participate in 6 or more team-based project work in the course of their 3-year diploma programme. At the end of each project, a peer rating exercise using a common framework is conducted within each team to rank each student according to their teamwork behaviour. Students get a teamwork scored based on their rank.
      <br></br>
      <br></br>
      Upon graduation, an average score across all the projects for each student is determined. Based on their average score, students in the top 10% are awarded Outstanding, next 15% are awarded Excellent and next 25% are awarded Good.
      <br></br>
      <br></br>
      The common peer rating framework used is based on the validated Comprehensive Assessment of Team Member Effectiveness (CATME) system of Purdue University, USA. The tool evaluates teamwork skills through the following five dimensions:
      <br></br>
      <br></br>
      <table>
        <tr><td style={{width:'5%'}}>a.</td><td style={{width:'95%'}}>Contributing to the team's work - member makes important contributions to the team's work.</td></tr>
        <tr><td>b.</td><td>Interacting with teammates - member asks for and shows an interest in teammate's idea.</td></tr>
        <tr><td>c.</td><td>Keeping the team on track - member makes sure that teammates are making appropriate progress.</td></tr>
        <tr><td>d.</td><td>Expecting quality - member cares that the team does excellent work, even if there is no additional reward.</td></tr>
        <tr><td>e.</td><td>Having relevant knowledge, skills and abilities - member demonstrates the knowledge, skills and ability to do excellent work.</td></tr>
      </table>
      <br></br>
      <br></br>
    </div>
  </Page>
);
