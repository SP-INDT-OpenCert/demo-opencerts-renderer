import { CertificateTemplate } from "./certificate";
import { ExplanatoryTemplate } from "./explanatory";

export const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: CertificateTemplate
  },
  {
    id: "transcript",
    label: "Explanatory Notes",
    template: ExplanatoryTemplate
  }
];
