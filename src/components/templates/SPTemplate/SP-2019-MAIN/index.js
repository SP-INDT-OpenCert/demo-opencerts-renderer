//import PropTypes from 'prop-types';
import SPCertificate from './certificate';
import SPTranscript from './transcript';
/*import MultiCertificateRenderer from "template-utils/MultiCertificateRenderer";
import { MultiCertificateRenderer } from '../../../../MultiCertificateRenderer' */

const templates = [
  {
    id: 'certificate',
    label: 'Certificate',
    template: SPCertificate
  },
  {
    id: 'transcript',
    label: 'Transcript',
    template: SPTranscript
  }
];

export default templates;
