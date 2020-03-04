import PropTypes from "prop-types";
import { format } from "date-fns";
import { get } from "lodash";
import React from "react";
import { IMG_CERT_SPLOGO, IMG_CERT_PACELOGO} from './Certimages'
import { transform } from "@babel/core";





const Template = ({ document }) => {

const addOnDisp = get(document,'additionalData.diplomaAddOn').map((txtArr,i) => (
  <div className="my-0 font-weight-bold d-flex justify-content-center" style={{fontFamily:'Times', fontVariant:'small-caps',fontSize:'37px',textAlign:'center'}} >
    {txtArr} </div>)
)

const VarCOCCompletion = get(document,'additionalData.COCCompletion');
const VarCOCMonth12 = get(document,'additionalData.COCMonth12'); 
const VarCOCMonth18 = get(document,'additionalData.COCMonth18'); 

function VadlidateCOCText({COCmonth18},{COCmonth12})
{
return(
<div>
  {VarCOCMonth18?
  <div>
    <div className="mt-2 d-flex justify-content-center"	style={{fontFamily:'Times',fontSize:'20px'}} >
    {VarCOCMonth18} </div>
    <div className="mt-2 d-flex justify-content-center"	style={{fontFamily:'Times',fontSize:'20px',textAlign:'center'}} >
    <b>{document.additionalData.diplomaFullDescr} </b></div>
  </div>
  :
  <div>
  <div className="mt-2 d-flex justify-content-center"	style={{fontFamily:'Times',fontSize:'20px',textAlign:'center'}} >
  {VarCOCMonth12} </div>
  <div className="mt-2 d-flex justify-content-center"	style={{fontFamily:'Times',fontSize:'20px',textAlign:'center'}} >
  <b>{document.additionalData.diplomaFullDescr} </b></div>
  </div>
}
</div>
  );
}

return (
<div className="container" style={{width:'800px', backgroundColor:'rgb(255,255,255)', borderStyle:'solid', borderColor:'rgb(204,204,170)'}}>
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
	//addOnDisp
  }

  <div className="row" style={{height:'25px'}} ></div>

  {/*<div className="h5 mt-4 d-flex justify-content-center" style={{fontFamily:'Times'}}>*/}
  <div className="mt-2 d-flex justify-content-center" style={{fontFamily:'Times',fontSize:'20px'}}>
    It is hereby certified that </div>

  {/* <div className="h3 mt-4 mb-0 justify-content-center font-weight-bold font-italic d-flex" style={{fontFamily:'Garamond'}} > */}
   <div className="my-2 d-flex justify-content-center " 
   style={{fontFamily:'Monotype Corsiva',fontSize:'40px',textTransform:'uppercase',textAlign:'center'}} >
  {document.recipient.name} </div>
  {/*{addOnDisp} */}

  {/*<div className="row my-0"><div className="col"></div>
    <div className="col-11" style={{borderBottomWidth:'1px', borderTopWidth:'0px', borderStyle:'solid', borderColor:'#333'}} ></div>
<div className="col"></div></div>*/}
  {/*<div className="h5 mt-4 d-flex justify-content-center"	style={{fontFamily:'Times'}} >*/}
  <div className="mt-2 d-flex justify-content-center"	style={{fontFamily:'Times',fontSize:'20px'}} >
    has completed a {document.additionalData.COCMonth}</div>

  <div className="mt-2 d-flex justify-content-center"	style={{fontFamily:'Times',fontSize:'20px'}} >
    <b>{document.additionalData.COCSubTitle}</b> </div>
    
    {/*<div className="mt-2 d-flex justify-content-center"	style={{fontFamily:'Times',fontSize:'20px'}} >
    in </div>
  <div className="mt-2 d-flex justify-content-center"	style={{fontFamily:'Times',fontSize:'20px'}} >
<b>{document.additionalData.diplomaFullDescr} </b></div>*/}

    {VadlidateCOCText({VarCOCMonth18},{VarCOCMonth12})} 
    {/*{VadlidateCOCMonth({COCMonth12},{COCMonth18})}*/}

    <div className="mt-2 d-flex justify-content-center"	style={{fontFamily:'Times',fontSize:'20px'}} > 
  on {format(document.additionalData.COCCompletion, 'DD MMMM YYYY')} </div>


  <div className="row" style={{height:'100px'}} ></div>
  <div className="row">
	<div className="col-2"></div>
    {/*<div className="col-3 mt-0"><img src={IMG_CERT_SEAL} alt="Seal" style={{width:'140px'}} /></div>*/}
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
        <div className="text-center"><img src={IMG_CERT_PACELOGO} alt="Seal" style={{width:'160px'}} /></div>
    </div>
  </div>

  <div className="row" style={{height:'25px'}} ></div>
  <div className="row">
  <div className="col-1"></div>
   <div className="col my-5 ml-3 d-flex" style={{fontFamily:'Times', fontSize:'13px'}} >
    {document.recipient.studentId}/{document.additionalData.CertNumber} </div>
  </div>
</div>
)
};

Template.propTypes = {
  document: PropTypes.object.isRequired,
  updateParentHeight: PropTypes.func
};
export default Template;
