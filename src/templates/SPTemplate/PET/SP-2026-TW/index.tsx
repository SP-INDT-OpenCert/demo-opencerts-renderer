import { CertificateTemplate } from "./certificate";
//import { ExplanatoryTemplate } from "./explanatory";
import { TranscriptTemplate } from "./explanatory";

export const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: CertificateTemplate
  },
  {
    id: "explanatory",
    label: "Explanatory",
    template: ExplanatoryTemplate
  },
  {
    id: "transcript",
    label: "Explanatory Notes",
    template: TranscriptTemplate
  }
];
