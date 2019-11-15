import React, { Component } from "react";
import { get } from "lodash";
import PropTypes from "prop-types";
import HideTranscriptBanner from "../common/HideTranscriptBanner";
import ObfuscatableValue from "../../../TemplateCommon/Privacy/ObfuscatableValue";
import { format } from 'date-fns'

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
	  //const serial = p_Cert.additionalData.studentid
	  // also OK: get(p_Cert, "additionalData.studentid");
	  return (
	  <div className="container">
		<div className="row h3 my-4">
		  <div className="col font-weight-bold text-lg-center">
			ACADEMIC TRANSCRIPT
		  </div>
		</div>
		<div className="row h5">
		 
	  <div className="col text-lg-right">
        Date of Issue: &nbsp; {format(p_Cert.issuedOn, 'D MMM YYYY')} </div>
	</div>
    <div className="row h5">
      <div className="col-2"> Admission No: </div>
	  <div className="col"> {p_Cert.additionalData.studentid} </div>
	</div>
    <div className="row h5">
      <div className="col-2"> Name: </div>
	  <div className="col"> {p_Cert.recipient.name} </div>
		</div>
		{/*<hr className="mb-1" />
		<hr className="my-0" /> */}
	  </div>
	  )
	};

const renderFooter = p_Cert => (
 <div className="container">
  <div className="row" style={{height:'20px'}} ></div>
  <div className="row">
    <div className="col-8" />
    <div className="col-3">
	    <div className="ml-5"><img src={get(p_Cert, 'additionalData.transcriptSignatories[0].signature')} style={{width:'160px'}} /></div>
        <div style={{borderBottomWidth:'1px', borderTopWidth:'0px', borderStyle:'solid', borderColor:'#333'}} ></div>
        <div className="text-center font-weight-bold"
		style={{fontFamily:'Times', fontSize:'12px'}} > {document.additionalData.transcriptSignatories[0].position} </div>
    </div>
    <div className="col-1" />
  </div>
  <div className="row" style={{height:'20px'}} ></div>
    
  <div className="row" style={{ fontSize: '0.68rem' }}>
    <div className="col-4">
      <table>
        <tbody className="align-top">
          <tr>
            <th>GRADE &nbsp;</th>
            <th>DESCRIPTION</th>
            <th>GRADE <br />POINT</th>
          </tr>
          <tr>
            <td>DIST</td>
            <td>DISTINCTION</td>
            <td className="text-center">4.0</td>
          </tr>
          <tr>
            <td>A</td>
            <td>EXCELLENT (80%-100%)</td>
            <td className="text-center">4.0</td>
          </tr>
          <tr>
            <td>B+</td>
            <td>VERY GOOD (75%-79%)</td>
            <td className="text-center">3.5</td>
          </tr>
          <tr>
            <td>B</td>
            <td>GOOD (70%-74%)</td>
            <td className="text-center">3.0</td>
          </tr>
          <tr>
            <td>C+</td>
            <td>GOOD CREDIT (65%-69%)</td>
            <td className="text-center">2.5</td>
          </tr>
          <tr>
            <td>C</td>
            <td>CREDIT (60%-64%)</td>
            <td className="text-center">2.0</td>
          </tr>
          <tr>
            <td>D+</td>
            <td>GOOD PASS (55%-59%)</td>
            <td className="text-center">1.5</td>
          </tr>
          <tr>
            <td> D </td>
            <td>PASS (50%-54%)</td>
            <td className="text-center">1.0</td>
          </tr>
          <tr>
            <td> D- </td>
            <td>SUBSIDIARY PASS </td>
            <td className="text-center">0.5</td>
          </tr>
          <tr>
            <td>F</td>
            <td>FAIL</td>
            <td className="text-center">0.0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="col-4">
      <table>
        <tbody className="align-top">
          <tr>
            <th>GRADE &nbsp;</th>
            <th>DESCRIPTION</th>
            <th>GRADE <br />POINT</th>
          </tr>
          <tr>
            <td>P</td>
            <td>NON-GRADED PASS</td>
            <td className="text-center">0.5</td>
          </tr>
          <tr>
            <td>UG</td>
            <td>NON-GRADED PASS</td>
            <td className="text-center">NA</td>
          </tr>
          <tr>
            <td>UP</td>
            <td>PASS IN MODULE WHICH <br />HAS NO GRADE POINT</td>
            <td className="text-center">NA</td>
          </tr>
          <tr>
            <td>UF</td>
            <td>FAIL IN MODULE WHICH <br /> HAS NO GRADE POINT</td>
            <td className="text-center">NA</td>
          </tr>
          <tr>
            <td>EX</td>
            <td>EXEMPTED</td>
            <td className="text-center">NA</td>
          </tr>
          <tr>
            <td>ABS</td>
            <td>ABSENT</td>
            <td className="text-center">0.0</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="col" />
  </div>
  
 </div>
)

const renderEachModule = (p_objMod,iSn) => {
  return (
  <div className="row">
      <div className="col-1" style={{minWidth:'60px'}}> {p_objMod.name} </div>
      <div className="col-8"> {p_objMod.description} </div>
      <div className="col-1"> {p_objMod.grade} </div>
      <div className="col-1"> {p_objMod.courseCredit} </div> 
      <div className="col" />
  </div>
  )
}

      //<div className="col-2">{objOthItems && `oth:${xoth}`}</div>
const renderTermTranscript = (p_ObjTranscript,iSn) => {
  var xs = get(p_ObjTranscript, 'name')
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
  {/*<div className="col-6" style={{ fontSize: '0.8rem'}}>
<div className="row">
      <div className="col-9">debug: for obj {iSn} </div>
  </div> */}
    <div className="row mt-2">
      <div className="col-9">{get(p_ObjTranscript, 'name')} </div>
    </div>
    <div className="row">
      <div className="col-9">{get(p_ObjTranscript, 'course')} </div>
    </div>
    <div className="row">
      <div className="col-9">{get(p_ObjTranscript, 'stage')} </div>
    </div>
	
    <div className="row mt-3">
      <div className="col-1" style={{minWidth:'60px'}} >Module Code</div>
      <div className="col-8">Module Name</div>
      <div className="col-1">Exam Grade</div>
      <div className="col-1">Credit Units</div>
      <div className="col" />
    </div>
    {renderModules}
    <div className="row">
      <div className="col mt-3">{get(p_ObjTranscript, 'description')} </div>
    </div>
	
    <div className="row mt-2">
      <div className="col-3">Semester GPA:</div>
      <div className="col">{get(p_ObjTranscript, 'semGPA')}</div>
    </div>
    <div className="row mb-2">
      <div className="col-3">Cumulative GPA:</div>
      <div className="col">{get(p_ObjTranscript, 'cumGPA')}</div>
    </div>
	{dispOthItems}
    {/*<hr className="mb-0" /> */}
  </div>  
  )
};
  

  const renderTranscripts = transcriptData.map((objTerm,i) => (
   <div className="col-12">
	<div className="row">
	 <div className="col-1" />
	 <div className="col-10 border">
	  {renderTermTranscript(objTerm,i)}
	 </div>
	</div>
   </div>
  ));

return (
document.transcript ? (
<div className="container" style={{maxWidth:'1100px', backgroundColor:'rgb(248,248,255)', fontFamily:'Times', fontSize: "1.0rem", borderStyle:'solid', borderColor:'rgb(204,204,170)' }}>
  <HideTranscriptBanner
    hideTranscript={() => handleObfuscation("transcript")}
  />
  <div className="row">
  {renderHeader(document)}
  </div>
  <div className="row" style={{ fontSize: '1.0rem'}}>
  {renderTranscripts}
  </div>
  <div className="row">
  {renderFooter(document)}
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
