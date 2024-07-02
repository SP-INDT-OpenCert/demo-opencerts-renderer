import PropTypes from "prop-types";
import { format } from "date-fns";
import { get } from "lodash";
import React from "react";
import { IMG_CERT_SPLOGO, IMG_CERT_SEAL } from './Certimages'

const Template = ({ document }) => {
const addOnDisp = get(document,'additionalData.diplomaAddOn').map((txtArr,i) => (
  <div className="h2 my-0 font-weight-bold d-flex justify-content-center"
    style={{fontFamily:'Times', fontVariant:'small-caps'}} >
    {txtArr} </div>)
)

/* diplomaFullDescr is a string
const DipDescrDisp = p_FullDescr => { return (
  <div className="h5 mt-3 d-flex justify-content-center"
	style={{fontFamily:'Times'}} >
    {p_FullDescr} </div>
 )
}
*/

/* diplomaFullDescr is a list */
const DipDescrDisp = get(document,'additionalData.diplomaFullDescr').map((txtArr,i) => (
  <div className="h5 mt-3 d-flex justify-content-center"
	style={{fontFamily:'Times'}} >
    {txtArr} </div>)
)


return (
<div className="container" style={{width:'800px', backgroundColor:'rgb(255,255,238)', borderStyle:'solid', borderColor:'rgb(204,204,170)'}}>
  <div className="row">
    <div className="col"></div>
    <div className="col my-5 justify-content-center"><img src={IMG_CERT_SPLOGO} alt="SP Logo" width='396' height='128'/></div>
    <div className="col"></div>
  </div>

  <div className="h2 mt-5 mb-0 font-weight-bold d-flex justify-content-center text-center"
    style={{fontFamily:'Times', fontVariant:'small-caps'}} >
    {document.additionalData.diplomaName} </div>
	
  {
   /* tested:
   ok: { dispRow (get(document, 'additionalData.diplomaAddOn.length')) }
   // ok: { dispRow (get(document, 'additionalData.diplomaAddOn.[0]')) }
  
  // ok: { dispRow (get(document, 'additionalData.diplomaAddOn.[0]')) }
  // <div className="h3"> plain:  <br/>{ infoAdd(addOn)  } </div>
  // <div className="h4"> join with format: <br/>{ infoAdd(addOn) && `info: ${infoAdd(addOn)}`  }  </div>
  // <div className="h4"> formatted only: <br/> { `info: ${infoAdd(addOn)}`  }  </div>
  */
	  addOnDisp
  }

  <div className="h5 mt-4 d-flex justify-content-center"
    style={{fontFamily:'Times'}}>
    It is hereby certified that</div>
  <div className="h5 mt-4 mb-0 justify-content-center font-weight-bold font-italic d-flex"
	style={{fontFamily:'Georgia italic'}} >
	{document.recipient.name} </div>

  <div className="row my-0"><div className="col"></div>
    <div className="col-9" style={{borderBottomWidth:'1px', borderTopWidth:'0px', borderStyle:'solid', borderColor:'#333'}} ></div>
    <div className="col"></div></div>
  <div className="h5 mt-4 d-flex justify-content-center"
	style={{fontFamily:'Times'}} >
    having successfully completed the course of study was awarded the</div>
	
  { /* is string use: DipDescrDisp(document.additionalData.diplomaFullDescr) */ }
  { DipDescrDisp /* to process the list in document.additionalData.diplomaFullDescr */ }


  <div className="row my-0">
    <div className="col"></div>
    <div className="col-1 h5 mt-4 d-flex justify-content-center"
	style={{fontFamily:'Times'}} > on </div>
    <div className="col-3">
	  <div className="h5 mt-3 mb-0 d-flex justify-content-center font-italic"
		style={{fontFamily:'Georgia italic'}} >
		{format(document.graduationDate, 'D MMMM YYYY')} </div>
	  <div className="row my-0">
        <div className="col" style={{borderBottomWidth:'1px', borderTopWidth:'0px', borderStyle:'solid', borderColor:'#333'}} ></div>
        
	  </div>
	</div>
	<div className="col"></div>
  </div>
 
  <div className="row" style={{height:'100px'}} ></div>
  <div className="row">
	<div className="col-2"></div>
    <div className="col-3 mt-5"><img src={IMG_CERT_SEAL} alt="Seal" style={{width:'168px'}} /></div>
	<div className="col-2"></div>
    <div className="col-4">
	    <div className="text-center"><img src={get(document, 'additionalData.certSignatories[0].signature')} alt="Sign1" style={{width:'160px'}} /></div>
		<div style={{borderBottomWidth:'1px', borderTopWidth:'0px', borderStyle:'solid', borderColor:'#333'}} ></div>
        <div className="text-center font-weight-bold"
		style={{fontFamily:'Times', fontSize:'12px'}} > {document.additionalData.certSignatories[0].position} </div>

		<div className="row" style={{height:'20px'}} ></div>

        <div className="text-center"><img src={get(document, 'additionalData.certSignatories[1].signature')} alt="Sign2" style={{width:'120px'}} /></div>
		<div style={{borderBottomWidth:'1px', borderTopWidth:'0px', borderStyle:'solid', borderColor:'#333'}} ></div>
        <div className="text-center font-weight-bold"
		style={{fontFamily:'Times', fontSize:'12px'}} > {document.additionalData.certSignatories[1].position} </div>
		{//<div className="text-center font-weight-bold"
		//style={{fontFamily:'Times', fontSize:'12px'}} > Chief Executive Officer </div>
		}

    </div>
	<div className="col-1"></div>
  </div>
  <div className="row" style={{height:'100px'}} ></div>
  <div className="row">
  <div className="h6 my-5 ml-3 d-flex"
	style={{fontFamily:'Times'}} >
    {document.recipient.studentId} </div>
  </div>

</div>
)
};

Template.propTypes = {
  document: PropTypes.object.isRequired,
  updateParentHeight: PropTypes.func
};
export default Template;
