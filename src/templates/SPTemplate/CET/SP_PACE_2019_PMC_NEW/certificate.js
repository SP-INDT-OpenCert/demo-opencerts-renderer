import PropTypes from "prop-types";
import { format } from "date-fns";
import { get } from "lodash";
import React from "react";
import { IMG_CERT_SPLOGO, IMG_CERT_PACELOGO} from './Certimages'
// import { transform } from "@babel/core";

const Template = ({ document }) => {

const addOnDisp = get(document,'additionalData.diplomaAddOn').map((txtArr,i) => (
  <div className="my-0 font-weight-bold d-flex justify-content-center" style={{fontFamily:'Times', fontVariant:'small-caps',fontSize:'37px'}} >
    {txtArr} </div>)
)

return (
<div className="container" style={{width:'800px', backgroundColor:'rgb(255,255,255)', borderStyle:'solid', borderColor:'rgb(204,204,170)'}}>
  <div className="row">
    <div className="col"></div>
    <div className="col my-5 justify-content-center"><img src={IMG_CERT_SPLOGO} alt="SP Logo" width='396' height='128'/></div>
    <div className="col"></div>
  </div>

  {/*<div className="h2 mt-5 mb-0 font-weight-bold d-flex justify-content-center" style={{fontFamily:'Times', fontVariant:'small-caps'}} >*/}
  <div className="mt-5 mb-0 font-weight-bold d-flex justify-content-center"
  style={{fontFamily:'Gill Sans,Gill Sans MT,Calibri,sans-serif', fontSize:'37px',textTransform:'uppercase',textAlign:'center'}} >
    {document.recipient.name} </div>
   
  {
   /* tested:
   ok: { dispRow (get(document, 'additionalData.diplomaAddOn.length')) }
   // ok: { dispRow (get(document, 'additionalData.diplomaAddOn.[0]')) }
  
  // ok: { dispRow (get(document, 'additionalData.diplomaAddOn.[0]')) }
  // <div className="h3"> plain:  <br/>{ infoAdd(addOn)  } </div>
  // <div className="h4"> join with format: <br/>{ infoAdd(addOn) && `info: ${infoAdd(addOn)}`  }  </div>
  // <div className="h4"> formatted only: <br/> { `info: ${infoAdd(addOn)}`  }  </div>
  */
	//addOnDisp
  }
  
  <div className="mt-2 d-flex justify-content-center" style={{fontFamily:'Gill Sans,Gill Sans MT,Calibri,sans-serif',fontSize:'21px',textAlign:'center'}}>
    having passed all required assessments </div>

    <div className="mt-2 d-flex justify-content-center" style={{fontFamily:'Gill Sans,Gill Sans MT,Calibri,sans-serif',fontSize:'21px',textAlign:'center'}}>
    was awarded the </div>

   <div className="my-2 d-flex justify-content-center"    style={{fontFamily:'Gill Sans,Gill Sans MT,Calibri,sans-serif',fontSize:'24px',textAlign:'center'}} >
  <b>Certificate</b> </div>
  {/*{addOnDisp} */}

  <div className="mt-2 d-flex justify-content-center"	style={{fontFamily:'Gill Sans,Gill Sans MT,Calibri,sans-serif',fontSize:'21px',textAlign:'center'}} >
    in </div>

  <div className="mt-2 d-flex justify-content-center"	style={{fontFamily:'Gill Sans,Gill Sans MT,Calibri,sans-serif',fontSize:'24px',textAlign:'center'}} >
    <b>{document.additionalData.ModulerCertDescr}</b> </div>
    
  <div className="mt-2 d-flex justify-content-center" > 
       <text style={{fontFamily:'Gill Sans,Gill Sans MT,Calibri,sans-serif',fontSize:'21px',textAlign:'center'}}> conducted by the&nbsp;</text> 
       <text style={{fontFamily:'Gill Sans,Gill Sans MT,Calibri,sans-serif',fontSize:'22px',textAlign:'center'}}>{document.additionalData.SchoolDescr}</text>
  </div>
  
  <div className="mt-2 d-flex justify-content-center" style={{fontFamily:'Gill Sans,Gill Sans MT,Calibri,sans-serif',fontSize:'21px',textAlign:'center'}}>
    leading to the </div>

  <div className="mt-2 d-flex justify-content-center"	style={{fontFamily:'Gill Sans,Gill Sans MT,Calibri,sans-serif',fontSize:'24px',textAlign:'center'}} > 
  {document.additionalData.diplomaFullDescr} </div>

  <div className="mt-2 d-flex justify-content-center" style={{fontFamily:'Gill Sans,Gill Sans MT,Calibri,sans-serif',fontSize:'21px',textAlign:'center'}}>
  on &nbsp;<b>{format(document.graduationDate, 'D MMMM YYYY')}</b>
  </div>       

  <div className="row" style={{height:'100px'}} ></div>
  <div className="row">
	<div className="col-2"></div>
    <div className="col-3 mt-0"></div>
	<div className="col-2"></div>
    <div className="col-4 mt-2">
	    <div className="text-center"><img src={get(document, 'additionalData.certSignatories[0].signature')} alt="Sign1" style={{width:'160px'}} /></div>
      <div style={{borderBottomWidth:'1px', borderTopWidth:'0px', borderStyle:'solid', borderColor:'#333'}} ></div>
        <div className="text-center font-weight-bold"	style={{fontFamily:'Times', fontSize:'12px'}} > 
        {document.additionalData.certSignatories[0].position} 
        </div>
        <div className="text-center font-weight-bold"	style={{fontFamily:'Times', fontSize:'12px'}} > 
        Professional & Adult Continuing Education 
        </div>
        <div className="text-center font-weight-bold"	style={{fontFamily:'Times', fontSize:'12px'}} > 
        (PACE) Academy 
        </div>
        <div className="text-center"><img src={IMG_CERT_PACELOGO} alt="Seal" style={{width:'250px',margin-top:'-15px'}} /></div>
    </div>
  </div>

  <div className="row" style={{height:'25px'}} ></div>
  <div className="row">
  <div className="col-1"></div>
  <div className="col my-5 ml-3 d-flex" style={{fontFamily:'Times', fontSize:'13px'}} >
    {document.recipient.studentId}/{document.additionalData.CertNumber}</div>
  </div>
</div>
)
};

Template.propTypes = {
  document: PropTypes.object.isRequired,
  updateParentHeight: PropTypes.func
};
export default Template;
