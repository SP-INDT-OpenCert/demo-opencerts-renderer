import SPCertificate from './certificate';
import SPTranscript from './transcript';

const templates = [
  {
    id: 'certificate',
    label: 'CertificateTST',
    template: SPCertificate
  },
  {
    id: 'transcript',
    label: 'TranscriptTS4',
    template: SPTranscript
  }
];

export default templates;
