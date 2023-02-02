import { templates as govtechDemoTemplates } from "./govtech-demo-cert";
import { templates as testimonialsTemplates, templates2 as testimonialsTemplates2 } from "./testimonials";
import { templates as certificateOfAwardTemplates } from "./certificate-of-award";
import { templates as sp2019mainTemplate } from "./SPTemplate/PET/SP-2019-MAIN";
import { templates as sp2019mainTRTemplate } from "./SPTemplate/PET/SP-2019-MAIN-TR";
import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";

export const registry: TemplateRegistry<any> = {
  default: govtechDemoTemplates,
  GOVTECH_DEMO: govtechDemoTemplates,
  TESTIMONIALS: testimonialsTemplates,
  TESTIMONIALS2: testimonialsTemplates2,
  CERTIFICATE_OF_AWARD: certificateOfAwardTemplates,
  SP_2019_MAIN: sp2019mainTemplate,
  SP_2019_MAIN_TR: sp2019mainTRTemplate
};
