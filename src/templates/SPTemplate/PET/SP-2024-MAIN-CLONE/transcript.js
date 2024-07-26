import React, { Component } from "react";
import { get } from "lodash";
import PropTypes from "prop-types";
import HideTranscriptBanner from "../common/HideTranscriptBanner";
import ObfuscatableValue from "@govtechsg/decentralized-renderer-react-components";
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
	  return (
	  <div className="container">
		<div className="row h3 my-4">
		  <div className="col font-weight-bold text-lg-center">
			ACADEMIC TRANSCRIPT
		  </div>
		</div>
		{/* AS decision to omit date
		<div className="row h5">
		  <div className="col text-lg-right">
        Date of Issue: &nbsp; {format(p_Cert.issuedOn, 'D MMM YYYY')} </div>
		</div> */}
		<div className="row h5">
		  <div className="col-1" />
		  <div className="col-2"> Admission No: </div>
		  <div className="col"> {p_Cert.recipient.studentId} </div>
		</div>
		<div className="row h5">
		  <div className="col-1" />
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
   {/* SR-2023-8348 Start S10131508 17/07/2024 */} 
   {/* <div className="row" style={{height:'50px'}}> </div>
   <div className="row h5">
      <div className="col-1" />
	    <div className="col-2" style={{fontFamily:'Times', fontSize:'0.68rem'}} > {document.additionalData.transcriptSignatories[0].moduleexclude} </div>
	  </div>  */} 
   {/* SR-2023-8348 End S10131508 17/07/2024 */}
  <div className="row">
   {/* SR-2023-8348 Start S10131508 17/07/2024 */} 
	   {/*
  	<div className="col-8" />
    <div className="col-3">
	    <div className="text-center"><img src={get(p_Cert, 'additionalData.transcriptSignatories[0].signature')} alt="sign" style={{width:'160px'}} /></div>
        <div style={{borderBottomWidth:'1px', borderTopWidth:'0px', borderStyle:'solid', borderColor:'#333'}} ></div>
        <div className="text-center font-weight-bold"
		style={{fontFamily:'Times', fontSize:'12px'}} > {document.additionalData.transcriptSignatories[0].position} </div>
    </div>
	  <div className="col-1" /> SR-2023-8348 S10131508 25/07/2024 
	   */}
	<div className="col-1" />
	<div className="col-7">
	  <div className="row" />
	  <div className="row" />
      <div className="row">
	  {/*<div className="text-left" style={{fontFamily:'Times', fontSize:'0.68rem'}} > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{document.additionalData.transcriptSignatories[0].moduleexclude} </div>*/}
      </div>
	</div>
    <div className="col-3">
	  <div className="row">
	    <div className="text-center"><img src={get(p_Cert, 'additionalData.transcriptSignatories[0].signature')} alt="sign" style={{width:'160px'}} /></div>
	  </div>
	  <div className="row">
	     <div className="col-5" style={{borderBottomWidth:'1px', borderTopWidth:'0px', borderStyle:'solid', borderColor:'#333'}} ></div>
	  </div>
      <div className="row">
	  {/*<div className="text-center font-weight-bold"
	  style={{fontFamily:'Times', fontSize:'12px'}} > {document.additionalData.transcriptSignatories[0].position} </div>*/}
      </div>
	</div>
	{/* SR-2023-8348 End S10131508 17/07/2024 */} 
  </div>
  {/* SR-2023-8348 Start S10131508 17/07/2024 */} 
  <div className="row">
    <div className="col-1" />
	<div className="col-7">
	   <div className="text-left" style={{fontFamily:'Times', fontSize:'0.68rem'}} >&nbsp;&nbsp;&nbsp;{document.additionalData.transcriptSignatories[0].moduleexclude} </div>
	</div>
	<div className="col-3">
	   <div className="text-center font-weight-bold"
	   style={{fontFamily:'Times', fontSize:'12px'}} > {document.additionalData.transcriptSignatories[0].position} </div>
	</div>
  </div>
  {/* SR-2023-8348 End S10131508 17/07/2024 */} 
  <div className="row" style={{height:'48px'}} ></div>
    
  <div className="row" style={{ fontSize: '0.68rem' }}>
    <div className="col-1" />
    <div className="col-4">
      <div className="row">
        <div className="col-2"><u>GRADE</u> &nbsp;</div>
        <div className="col-6"><u>DESCRIPTION</u></div>
        <div className="col-2 text-center">GRADE <br /><u>POINT</u></div>
      </div>
      <div className="row">
        <div className="col-2">DIST</div>
        <div className="col-6">DISTINCTION</div>
        <div className="col-2 text-center">4.0</div>
      </div>
      <div className="row">
        <div className="col-2">A</div>
        <div className="col-6">EXCELLENT (80%-100%)</div>
        <div className="col-2 text-center">4.0</div>
      </div>
      <div className="row">
        <div className="col-2">B+</div>
        <div className="col-6">VERY GOOD (75%-79%)</div>
        <div className="col-2 text-center">3.5</div>
      </div>
      <div className="row">
        <div className="col-2">B</div>
        <div className="col-6">GOOD (70%-74%)</div>
        <div className="col-2 text-center">3.0</div>
      </div>
      <div className="row">
        <div className="col-2">C+</div>
        <div className="col-6">GOOD CREDIT (65%-69%)</div>
        <div className="col-2 text-center">2.5</div>
      </div>
      <div className="row">
        <div className="col-2">C</div>
        <div className="col-6">CREDIT (60%-64%)</div>
        <div className="col-2 text-center">2.0</div>
      </div>
      <div className="row">
        <div className="col-2">D+</div>
        <div className="col-6">GOOD PASS (55%-59%)</div>
        <div className="col-2 text-center">1.5</div>
      </div>
      <div className="row">
        <div className="col-2">D </div>
        <div className="col-6">PASS (50%-54%)</div>
        <div className="col-2 text-center">1.0</div>
      </div>
      <div className="row">
        <div className="col-2"> D- </div>
        <div className="col-6">SUBSIDIARY PASS </div>
        <div className="col-2 text-center">0.5</div>
      </div>
      <div className="row">
        <div className="col-2">F</div>
        <div className="col-6">FAIL</div>
        <div className="col-2 text-center">0.0</div>
      </div>
    </div>

    <div className="col-4">
      <div className="row">
        <div className="col-2"><u>GRADE</u> &nbsp;</div>
        <div className="col-7"><u>DESCRIPTION</u></div>
        <div className="col-2 text-center">GRADE <br /><u>POINT</u></div>
      </div>
      <div className="row">
        <div className="col-2">P</div>
        <div className="col-7">NON-GRADED PASS</div>
        <div className="col-2 text-center">0.5</div>
      </div>
      <div className="row">
        <div className="col-2">UG</div>
        <div className="col-7">NON-GRADED PASS</div>
        <div className="col-2 text-center">NA</div>
      </div>
      <div className="row">
        <div className="col-2">UP</div>
        <div className="col-7">PASS IN MODULE WHICH HAS NO GRADE POINT</div>
        <div className="col-2 text-center">NA</div>
      </div>
      <div className="row">
        <div className="col-2">UF</div>
        <div className="col-7">FAIL IN MODULE WHICH HAS NO GRADE POINT</div>
        <div className="col-2 text-center">NA</div>
      </div>
      <div className="row">
        <div className="col-2">EX</div>
        <div className="col-7">EXEMPTED</div>
        <div className="col-2 text-center">NA</div>
      </div>
      <div className="row">
        <div className="col-2">ABS</div>
        <div className="col-7">ABSENT</div>
        <div className="col-2 text-center">0.0</div>
      </div>
    </div>
    <div className="col" />
  </div>
  <div className="row" style={{height:'8px'}} ></div>
  <div className="row" style={{ fontSize: '0.68rem' }}>
    <div className="col-1" />
    <div className="col-8">
	  Semester and Cumulative GPA scores shown above (if any) do not include modules marked with an (*)
    </div>
  </div>
  <div className="row" style={{height:'18px'}} ></div>
  
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

  //Elective framework Cert
  const objEFWcerts = get(p_ObjTranscript, 'EFWcerts');
  const dispEFWcerts = objEFWcerts ? objEFWcerts.map((objItm,i) => (
     <div>
      {(i == 0) ? 
	    (objEFWcerts.length > 1) ?
		 (<div className="row">
           <div className="col-11 mt-2" > <u>CERTIFICATES AWARDED</u> </div> <div className="col" /></div> 
	     ) :
		 (<div className="row">
           <div className="col-11 mt-2" > <u>CERTIFICATE AWARDED</u> </div> <div className="col" /></div> 
	     ): ""
	  }
      <div className="row mt-0 pt-0 mb-0 pb-0">
        <div className="col-11" > {objItm.name } </div> <div className="col" />
      </div>
      <div className="row">
        <div className="col-11 mb-1" > {objItm.modList } </div> <div className="col" />
      </div>
     </div>
	  )
    ) : "";
	
 //Minor of the Diploma
  const objMinors = get(p_ObjTranscript, 'Minors');
  const dispMinors = objMinors ? objMinors.map((objItm,i) => (
     <div>
      {(i == 0) ? 
	    (objMinors.length > 1) ?
		 (<div className="row">
           <div className="col-11 mt-2" > <u>MINORS AWARDED</u> </div> <div className="col" /></div>
		 ) : 
		 (<div className="row">
           <div className="col-11 mt-2" > <u>MINOR AWARDED</u> </div> <div className="col" /></div>
		 ) : ""
	  }
      <div className="row">
        <div className="col-11" > {objItm.name } </div> <div className="col" />
      </div>
      <div className="row">
        <div className="col-11 mb-1" > {objItm.modList } </div> <div className="col" />
      </div>
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
    {dispEFWcerts}
	{dispMinors}
    <div className="row">
      <div className="col mt-3">{get(p_ObjTranscript, 'description')} </div>
    </div>
	
    <div className="row mt-2">
      <div className="col-3">Semester GPA:</div>
      <div className="col">{get(p_ObjTranscript, 'semGPA')}</div>
    </div>
    <div className="row mb-2">
	{/*SR-2023-8348 Start S10131508 12/07/2024 
	<div className="col-3">Cumulative GPA:</div> */}
	  <div className="col-3">Cumulative GPA<sub>{get(p_ObjTranscript, 'cumGPAExInd')}</sub>:</div>
	  {/*SR-2023-8348 End S10131508 12/07/2024 */}
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
<div className="container">
  <HideTranscriptBanner
      hideTranscript={() => handleObfuscation("transcript")}
  />
  <div className="container" style={{maxWidth:'1100px', backgroundColor:'rgb(248,248,255)', fontFamily:'Times',
      fontSize: "1.0rem", borderStyle:'solid', borderColor:'rgb(204,204,170)' }}>
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
</div>
): null
)

  }
}

Template.propTypes = {
  document: PropTypes.object.isRequired
}
export default Template
