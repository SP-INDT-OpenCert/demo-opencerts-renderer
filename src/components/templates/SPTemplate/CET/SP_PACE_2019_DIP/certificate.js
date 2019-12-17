import PropTypes from "prop-types";
import { format } from "date-fns";
import { get } from "lodash";
import React from "react";
import { IMG_CERT_SPLOGO, IMG_CERT_SEAL } from './Certimages'

const Template = ({ document }) => {
const addOnDisp = get(document,'additionalData.diplomaAddOn').map((txtArr,i) => (
  <div className="my-0 font-weight-bold d-flex justify-content-center" style={{fontFamily:'Times', fontVariant:'small-caps',fontSize:'37px',textAlign:'center'}} >
    {txtArr} </div>)
)

return (
<div className="container" style={{width:'800px', backgroundColor:'rgb(255,255,238)', borderStyle:'solid', borderColor:'rgb(204,204,170)'}}>
  <div className="row">
    <div className="col"></div>
    <div className="col my-5 justify-content-center"><img src={IMG_CERT_SPLOGO} alt="SP Logo" width='396' height='128'/></div>
    <div className="col"></div>
  </div>

  {/*<div className="h2 mt-5 mb-0 font-weight-bold d-flex justify-content-center" style={{fontFamily:'Times', fontVariant:'small-caps'}} >*/}
  <div className="mt-5 mb-0 font-weight-bold d-flex justify-content-center" 
  style={{fontFamily:'Times', fontVariant:'small-caps',fontSize:'37px',textAlign:'center'}} stylefirst-letter={{fontSize:'48px'}} >
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

  {/*<div className="h5 mt-4 d-flex justify-content-center" style={{fontFamily:'Times'}}>*/}
  <div className="mt-4 d-flex justify-content-center" style={{fontFamily:'Times',fontSize:'20px'}}>
    It is hereby certified that</div>
  {/* <div className="h3 mt-4 mb-0 justify-content-center font-weight-bold font-italic d-flex" style={{fontFamily:'Garamond'}} > */}
	<div className="mt-4 mb-0 justify-content-center font-italic d-flex" style={{fontFamily:'Monotype Corsiva',fontSize:'32px',textAlign:'center'}} >
  {document.recipient.name} </div>

  <div className="row my-0"><div className="col"></div>
    <div className="col-11" style={{borderBottomWidth:'1px', borderTopWidth:'0px', borderStyle:'solid', borderColor:'#333'}} ></div>
    <div className="col"></div></div>
  {/*<div className="h5 mt-4 d-flex justify-content-center"	style={{fontFamily:'Times'}} >*/}
  <div className="mt-4 d-flex justify-content-center"	style={{fontFamily:'Times',fontSize:'20px',textAlign:'center'}} >
    having successfully completed the course of study was awarded the</div>
  {/*<div className="h5 mt-3 d-flex justify-content-center"	style={{fontFamily:'Times'}} >*/}
  <div className="mt-3 d-flex justify-content-center"	style={{fontFamily:'Times',fontSize:'20px',textAlign:'center'}} >
    {document.additionalData.diplomaFullDescr} </div>
  <div className="row my-0">
    <div className="col"></div>
    {/*<div className="col-1 h5 mt-4 d-flex justify-content-center"	style={{fontFamily:'Times'}} > */}
    <div className="col-1 mt-4 d-flex justify-content-center"	style={{fontFamily:'Times',fontSize:'20px',textAlign:'center'}} >
    on </div>
<div className="col-4">
	  {/*<div className="h4 mt-1 d-flex justify-content-center font-weight-bold font-italic"	style={{fontFamily:'Garamond'}} >*/}
    <div className="mt-1 mb-1 d-flex justify-content-center font-italic" style={{fontFamily:'Monotype Corsiva',fontSize:'26px',textAlign:'center'}} >
		{format(document.graduationDate, 'D MMMM YYYY')}</div>
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
        <div className="text-center font-weight-bold"	style={{fontFamily:'Times', fontSize:'12px'}} > 
        {document.additionalData.certSignatories[0].position} 
        </div>

		<div className="row" style={{height:'20px'}} ></div>

        <div className="text-center"><img src={get(document, 'additionalData.certSignatories[1].signature')} alt="Sign2" style={{width:'120px'}} /></div>
		<div style={{borderBottomWidth:'1px', borderTopWidth:'0px', borderStyle:'solid', borderColor:'#333'}} ></div>
    <div className="text-center font-weight-bold"	style={{fontFamily:'Times', fontSize:'12px'}}>Principal &</div>
        <div className="text-center font-weight-bold"	style={{fontFamily:'Times', fontSize:'12px'}} > 
        {document.additionalData.certSignatories[1].position} 
        </div>
		{//<div className="text-center font-weight-bold"
		//style={{fontFamily:'Times', fontSize:'12px'}} > Chief Executive Officer </div>
		}
    </div>
	<div className="col-1"></div>
  </div>
  <div className="row" style={{height:'25px'}} ></div>
  <div className="row">
  <div className="col-1"></div>
  {/*<div className="h6 my-5 ml-3 d-flex font-weight-bold" style={{fontFamily:'Times'}} >*/}
  <div className="my-5 ml-3 d-flex" style={{fontFamily:'Times', fontSize:'12px'}} >
    {document.recipient.studentId}</div>
  </div>

</div>
)
};

Template.propTypes = {
  document: PropTypes.object.isRequired,
  updateParentHeight: PropTypes.func
};
export default Template;