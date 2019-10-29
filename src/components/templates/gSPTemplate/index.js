import SPCert from "./certificate";
import SPTranscript from "./transcript";
import SPMedia from "./media";

const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: SPCert
  },
  {
    id: "transcript",
    label: "Transcript",
    template: SPTranscript
  },
  {
    id: "media",
    label: "Media",
    template: SPMedia
  }
];

export default templates;
