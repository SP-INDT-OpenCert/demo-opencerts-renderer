import React, { Component } from "react";
import * as react from "react";
import { get } from "lodash";
import PropTypes from "prop-types";
import HideTranscriptBanner from "../common/HideTranscriptBanner";
import ObfuscatableValue from "@govtechsg/decentralized-renderer-react-components";
import { format } from 'date-fns'
import { IMG_CERT_SPLOGO, IMG_CERT_SEAL } from './Certimages'

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = { editable: false };
  }

  render() {
    const { editable } = this.state;
    const { document, handleObfuscation } = this.props;
    const transcriptData = get(document, "transcript", []);
    const renderHeader = p_Cert => {
	  return (
	  <div className="container">
    <div className="row">
    <div className="col"></div>
    <div className="col"></div>
    <div className="col"></div>
    <div className="col my-5 justify-content-centre"><img src={IMG_CERT_SPLOGO} alt="SP Logo" width='200' height='75'/></div>
    </div>
    <div className="row" style={{ fontSize: '0.68rem',fontFamily:'Calibri' }}>
    <div className="col text-lg-right" style={{color:'red'}}>
      PROFESSIONAL & ADULT CONTINUING EDUCATION (PACE) ACADEMY<br/>
    </div>
    </div>
    <div className="row" style={{ fontSize: '0.68rem',fontFamily:'Calibri' }}>
    <div className="col text-lg-right">
      Singapore Polytechnic<br/>
      500 Dover Road Singapore 139651<br/>
      Tel: (65) 67721055<br/>
      www.sp.edu.sg
		</div>
    </div>
		<div className="row h4 my-4" style={{ fontSize: '18px',fontFamily:'Calibri'}}>
		  <div className="col font-weight-bold text-lg-center">
			ACADEMIC TRANSCRIPT
		  </div>
		</div>

<div className="col-15">
	<div className="row" style={{ fontSize: '15px',fontFamily:'Calibri' }}>
  <div className="col-1" />
      <div className="col-2 " ><b>Name:</b></div>
      <div className="col-5 " style={{textTransform: 'uppercase'}}  ><b>{p_Cert.recipient.name}</b></div>
</div>
</div>
<div className="col-15">
	<div className="row" style={{ fontSize: '15px',fontFamily:'Calibri' }}>
  <div className="col-1" />
      <div className="col-2 " ><b>Student ID:</b></div>
      <div className="col-5 " ><b>{p_Cert.recipient.studentId}</b></div>
</div>
</div>

<div className="col-15">
	<div className="row" style={{ fontSize: '15px',fontFamily:'Calibri' }}>
  <div className="col-1" />
      <div className="col-2 " ><b>Program:</b></div>
      <div className="col-9 " ><b>{p_Cert.name}</b></div>
</div>
</div>

<div className="col-15">
	<div className="row" style={{ fontSize: '15px',fontFamily:'Calibri' }}>
  <div className="col-1" />
      <div className="col-2 " ><b>Program Status:</b></div>
      <div className="col-4 " ><b>{document.additionalData.TransOverallStatus} (Part-Time)</b></div>
</div>
</div>

<div><br/></div>

{/*<div className="row h5">		 
	  <div className="col text-lg-right">
        Date of Issue: &nbsp; {format(p_Cert.issuedOn, 'D MMM YYYY')} </div>
	</div>
   <div className="row h5">
      <div className="col-2"> Admission No: </div>
	  <div className="col"> {p_Cert.recipient.studentId} </div>
	</div>
  <div className="row h5">
      <div className="col-2"> Name: </div>
	  <div className="col"> {p_Cert.recipient.name} </div>
    </div> */}
		{/*<hr className="mb-1" />
		<hr className="my-0" /> */}
	</div>
	  )
	};

const renderFooter = p_Cert => (
 <div className="container">
  <div className="row" style={{height:'20px'}} ></div>
  <div className="row">
    <div className="col-8"/>
    <div className="col-3">
	    <div className="text-center"><img src={get(p_Cert, 'additionalData.transcriptSignatories[0].signature')} alt="sign" style={{width:'260px'}} /></div>
        <div style={{borderBottomWidth:'1px', borderTopWidth:'0px', borderStyle:'solid', borderColor:'#333'}} ></div>
    </div>
    <div className="col-1" />
  </div>

 <div className="row" style={{fontSize: '15px',fontFamily:'Calibri' }}>
    <div className="col-3 text-center"><br/><br/><b>*Transfer Credit</b></div>
    <div className="col-5"></div>
    <div className="col-3">
	    <div className="text-left"><b>{document.additionalData.transcriptSignatories[0].position} </b></div>
		<div className="text-left"><b>Professional & Adult Continuing</b></div>
		<div className="text-left"><b>Education (PACE) Academy</b></div>		
    </div>
    <div className="col-1" />
  </div>

  <div className="row" style={{height:'10px'}} ></div>
  <div className="row">
  <div className="col-1"></div>
      <div className="col-10" style={{borderBottomWidth:'1px', borderTopWidth:'0px', borderStyle:'solid', borderColor:'#333',textAlign:'center'}} ></div>
  <div className="col"/>
  </div>

  <div className="row" style={{fontSize: '15px',fontFamily:'Calibri' }}>
  <div className="col-1"></div>
  <div className="col-4"><b>GRADING SYSTEM</b></div>
  </div>

  {/*<div className="row" style={{height:'5px'}} ></div>
  <div classname="row">
    <div classname="col-15">
      <div style={{borderBottomWidth:'1px', borderTopWidth:'0px', borderStyle:'solid', borderColor:'#333'}} ></div>
    </div>
</div>*/}

  <div className="row" style={{height:'5px'}} ></div>  
  <div className="row" style={{ fontSize: '15px',fontFamily:'Calibri' }}>
  <div className="col-1"></div>
    <div className="col-5">
      <table>
        <tbody className="align-top">
          <tr>
            <th width="70px"><u>GRADE</u>&nbsp;</th>
            <th width="25px" className="text-center">&nbsp;&nbsp;&nbsp;</th>
            <th width="200px"><u>GRADE DESCRIPTION</u></th>
            <th width="100px" className="text-center"><u>GRADE</u> <br /><u>POINTS</u></th>
          </tr>
          <tr>
            <td>DIS</td>
            <td className="text-center">-&nbsp;&nbsp;</td>
            <td>DISTINCTION</td>
            <td className="text-center">4.0</td>
          </tr>
          <tr>
            <td>A</td>
            <td className="text-center">-&nbsp;&nbsp;</td>
            <td>EXCELLENT (80% - 100%)</td>
            <td className="text-center">4.0</td>
          </tr>
          <tr>
            <td>B+</td>
            <td className="text-center">-&nbsp;&nbsp;</td>
            <td>VERY GOOD (75% - 79%)</td>
            <td className="text-center">3.5</td>
          </tr>
          <tr>
            <td>B</td>
            <td className="text-center">-&nbsp;&nbsp;</td>
            <td>GOOD (70% - 74%)</td>
            <td className="text-center">3.0</td>
          </tr>
          <tr>
            <td>C+</td>
            <td className="text-center">-&nbsp;&nbsp;</td>
            <td>GOOD CREDIT (65% - 69%)</td>
            <td className="text-center">2.5</td>
          </tr>
          <tr>
            <td>C</td>
            <td className="text-center">-&nbsp;&nbsp;</td>
            <td>CREDIT (60% - 64%)</td>
            <td className="text-center">2.0</td>
          </tr>
          <tr>
            <td>D+</td>
            <td className="text-center">-&nbsp;&nbsp;</td>
            <td>GOOD PASS (55% - 59%)</td>
            <td className="text-center">1.5</td>
          </tr>
          <tr>
            <td> D </td>
            <td className="text-center">-&nbsp;&nbsp;</td>
            <td>PASS (50% - 54%)</td>
            <td className="text-center">1.0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="col-5">
      <table>
        <tbody className="align-top">
          <tr>
            <th width="70px"><u>GRADE</u>&nbsp;</th>
            <td width="25px" className="text-center">&nbsp;&nbsp;&nbsp;</td>
            <th width="200px"><u>GRADE DESCRIPTION</u></th>
            <th width="100px" className="text-center"><u>GRADE</u> <br /><u>POINTS</u></th>
          </tr>
          <tr>
            <td>NGP</td>
            <td className="text-center">-&nbsp;&nbsp;</td>
            <td>NON-GRADED PASS</td>
            <td className="text-center">1.0</td>
          </tr>
          <tr>
            <td>F</td>
            <td className="text-center">-&nbsp;&nbsp;</td>
            <td>FAIL</td>
            <td className="text-center">0.0</td>
          </tr>
          <tr>
            <td>UP</td>
            <td className="text-center">-&nbsp;&nbsp;</td>
            <td>PASS IN MODULE THAT <br />HAS NO GRADE POINT</td>
            <td className="text-center">NA</td>
          </tr>
          <tr>
            <td>UF</td>
            <td className="text-center">-&nbsp;&nbsp;</td>
            <td>FAIL IN MODULE THAT <br /> HAS NO GRADE POINT</td>
            <td className="text-center">NA</td>
          </tr>
          <tr>
            <td>EX</td>
            <td className="text-center">-&nbsp;&nbsp;</td>
            <td>EXEMPTED</td>
            <td className="text-center">NA</td>
          </tr>
          <tr>
            <td>ABS</td>
            <td className="text-center">-&nbsp;&nbsp;</td>
            <td>ABSENT</td>
            <td className="text-center">0.0</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="col" />
  </div>

  <div className="row" style={{height:'50px'}} ></div> 

</div>
)

const renderEachModule = (p_objMod,iSn) => {
  return (
  <div className="row" style={{fontSize: '15px',fontFamily:'Calibri'}}>
      <div className="col-1 text-center" style={{minWidth:'80px'}}> {p_objMod.name} </div>
      <div className="col-8 "> {p_objMod.description} </div>
      <div className="col-1 text-center"> {p_objMod.grade} </div>
      <div className="col-1 text-center"> {p_objMod.courseCredit} </div> 
      <div className="col text-center" />
  </div>
  )
}

      //<div className="col-2">{objOthItems && `oth:${xoth}`}</div>
const renderTermTranscript = (p_ObjTranscript,iSn) => {
  //var xs = get(p_ObjTranscript, 'name')
  //ok: var xs = p_ObjTranscript.Xname
  const objOthItems = get(p_ObjTranscript, 'otherItems');
  // ok: const xoth = get(p_ObjTranscript, 'otherItems[0].name');
  const dispOthItems = objOthItems ? objOthItems.map((objItem,i) => (
      <div className="row">
        <div className="col-9" > {objItem.name } </div>
        <div className="col-2"> {objItem.remark} </div> 
        <div className="col" />
      </div>
	  )
    ) : "";
  const objModules = get(p_ObjTranscript, 'modules');
  const renderModules = objModules.map((objMod,i) => (
    <div>
	  {renderEachModule(objMod,i)}
    </div>
	  )
	);
  return (
     <div>
          <div className="row" style={{height:'25px'}} ></div> 
    <div className="row">
      <div className="col-9" style={{fontSize: '15px',fontFamily:'Calibri'}}>
        {get(p_ObjTranscript, 'name')} </div>
    </div>

    <div className="row" style={{fontSize: '15px',fontFamily:'Calibri'}}>
      <div className="col-1 text-center" style={{minWidth:'80px'}} ><b>Code</b></div>
      <div className="col-8"><b>Module Title</b></div>
      <div className="col-1 text-center"><b>Grade</b></div>
      <div className="col-1 text-center"><b>Units</b></div>
      <div className="col" />
    </div>
    {renderModules}

    <div className="row" style={{fontSize: '15px',fontFamily:'Calibri'}}>
      <div className="col-3"><b>Semester GPA:</b></div>
      <div className="col"><b>{get(p_ObjTranscript, 'semGPA')}</b></div>
    </div>
    <div className="row" style={{fontSize: '15px',fontFamily:'Calibri'}}>
      <div className="col-3"><b>Cumulative GPA:</b></div>
      <div className="col"><b>{get(p_ObjTranscript, 'cumGPA')}</b></div>
    </div>
    <div className="row" style={{fontSize: '15px',fontFamily:'Calibri'}}>
      <div className="col-3"><b>{get(p_ObjTranscript, 'description')}</b></div>
      <div className="col"><b>{get(p_ObjTranscript, 'course')}</b></div>
    </div>
		{dispOthItems}
  </div>  
  )
};
  

  const renderTranscripts = transcriptData.map((objTerm,i) => (
   <div className="col-12">
	<div className="row">
	 <div className="col-1" />
	 <div className="col-10">
	  {renderTermTranscript(objTerm,i)}
	 </div>
	</div>
   </div>
  ));

return (
  document.additionalData.TranscriptExists ? (
<div className="container">
    <HideTranscriptBanner
      hideTranscript={() => handleObfuscation("transcript")}
    />
  <div className="container" style={{maxWidth:'1100px', backgroundColor:'rgb(248,248,255)', fontFamily:'Times', fontSize: "1.0rem", borderStyle:'solid', borderColor:'rgb(204,204,170)' }}>
    <div className="row">
      {renderHeader(document)}
    </div>

    <div className="row" style={{ fontSize: '1.0rem',fontFamily:'Calibri'}}>
      {renderTranscripts}
    </div>
    <div className="row" style={{fontSize: '15px',fontFamily:'Calibri'}}>
        <div className="col-3"><b></b></div>
        <div className="col"><b>End of Academic Transcript</b></div>
    </div>
    <div className="row" style={{height:'50px'}} ></div> 
    <div className="row">
      {renderFooter(document)}
    </div>
  </div>  
</div>
): null
)

  }
}

Template.propTypes = {
  document: PropTypes.object.isRequired
}
export default Template
