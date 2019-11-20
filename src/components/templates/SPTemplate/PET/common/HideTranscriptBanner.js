import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCut } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

const HideTranscriptBanner = ({ hideTranscript }) => (
  <div id="banner-privacy-filter" className="screen-only">
    <div className="row"
      style={{backgroundColor: "whitesmoke", color: "steelblue", padding: 20, marginBottom: 20 }}
    >
      <div className="ml-1 h3 pointer" style={{ display: "inline-block" }} onClick={hideTranscript} >
        <FontAwesomeIcon icon={faCut} cursor="pointer" color="black" />
      </div>
      <div className="h5" style={{ display: "inline-block" }}>
        Click the above scissors icon if you wish to have a copy of this <i>opencert</i> file
		without your transcript. Then click on the &nbsp;
		<FontAwesomeIcon icon={faEnvelope} color="black" />
		&nbsp; button, at the top right above, to email the file to the recipient or the &nbsp;
		<FontAwesomeIcon icon={faFileDownload} color="black" />
		&nbsp; button to download it to your computer.
      </div>
    </div>
  </div>
);

HideTranscriptBanner.propTypes = {
  hideTranscript: PropTypes.func
};

export default HideTranscriptBanner;
