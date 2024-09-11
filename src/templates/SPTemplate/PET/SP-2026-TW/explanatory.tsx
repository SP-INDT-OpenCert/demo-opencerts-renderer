//import { format } from "date-fns";
//import { get } from "lodash";
//import styled from "@emotion/styled";
//import React, { FunctionComponent } from "react";
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
      <div className="h5 mt-4 mb-0 justify-content-left font-weight-bold font-italic d-flex" style={{fontFamily:'Georgia italic'}}><u>Explanatory Notes</u></div>
      <br></br>
      <br></br>
        <table border=1 width=50%>
          <th>Award</th>
          <th>Criteria for Award</th>
          <tr><td>Outstanding</td><td>Top 10%</td></tr>
          <tr><td>Excellent</td><td>Next 15%</td></tr>
          <tr><td>Good</td><td>Next 25%</td></tr>
        </table>
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
        <tr><td width=10%>a.</td><td width=90%>Contributing to the team's work - member makes important contributions to the team's work.</td></tr>
        <tr><td width=10%>b.</td><td width=90%>Interacting with teammates - member asks for and shows an interest in teammate's idea.</td></tr>
        <tr><td width=10%>c.</td><td width=90%>Keeping the team on track - member makes sure that teammates are making appropriate progress.</td></tr>
        <tr><td width=10%>d.</td><td width=90%>Expecting quality - member cares that the team does excellent work, even if there is no additional reward.</td></tr>
        <tr><td width=10%>e.</td><td width=90%>Having relevant knowledge, skills and abilities - member demonstrates the knowledge, skills and ability to do excellent work.</td></tr>
      </table>
    </div>
  </Page>
);
