import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCut } from "@fortawesome/free-solid-svg-icons";

const HideTranscriptBanner = ({ hideTranscript }) => (
  <div id="banner-privacy-filter" className="screen-only">
    <div className="row"
      style={{backgroundColor: "whitesmoke", padding: 20, marginBottom: 20 }}
    >
      <div className="h4" style={{ display: "inline-block" }}>OpenCerts Transcript hiding Enabled</div>
      <div className="ml-auto h3 pointer" style={{ display: "inline-block" }} onClick={hideTranscript} >
        <FontAwesomeIcon icon={faCut} cursor="pointer" />
      </div>
      <div>
          click on the "Scissors ICON" to remove your transcript if you wish to email your "opencert" file,
		  without your transcript, to the recipient
      </div>
    </div>
  </div>
);

HideTranscriptBanner.propTypes = {
  hideTranscript: PropTypes.func
};

export default HideTranscriptBanner;
