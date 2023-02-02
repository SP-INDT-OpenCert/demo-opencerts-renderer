import { SPCertificate } from './certificate';
import SPTranscript from "./transcript";

const templates = [
  {
    id: 'certificate',
    label: 'CertificateTST',
    template: SPCertificate
  },
  {
    id: 'transcript',
    label: 'TranscriptTST',
    template: SPTranscript
  }
];

export default templates;
