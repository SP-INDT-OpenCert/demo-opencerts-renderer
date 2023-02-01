import { templates as govtechDemoTemplates } from "./govtech-demo-cert";
import { templates as testimonialsTemplates, templates2 as testimonialsTemplates2 } from "./testimonials";
import { templates as certificateOfAwardTemplates } from "./certificate-of-award";
import { templates as SP_2019_MAIN } from "./SPTemplate/PET/SP-2019-MAIN";
import { templates as SP_2019_DPCERT } from "./SPTemplate/PET/SP-2019-DPCERT";
import { templates as SP_2019_PFP } from "./SPTemplate/PET/SP-2019-PFP";
import { templates as SP_2019_MAIN_TR } from "./SPTemplate/PET/SP-2019-MAIN-TR";
import { templates as SP_PACE_2019_DIP } from "./SPTemplate/CET/SP_PACE_2019_DIP";
import { templates as SP_PACE_2019_COC } from "./SPTemplate/CET/SP_PACE_2019_COC";
import { templates as SP_PACE_2019_PMC } from "./SPTemplate/CET/SP_PACE_2019_PMC";


import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";

export const registry: TemplateRegistry<any> = {
  default: govtechDemoTemplates,
  GOVTECH_DEMO: govtechDemoTemplates,
  TESTIMONIALS: testimonialsTemplates,
  TESTIMONIALS2: testimonialsTemplates2,
  CERTIFICATE_OF_AWARD: certificateOfAwardTemplates,
  SP_2019_MAIN: SP_2019_MAIN,
  SP_2019_DPCERT: SP_2019_DPCERT,
  SP_2019_PFP: SP_2019_PFP,
  SP_2019_MAIN_TR: SP_2019_MAIN_TR,
  SP_PACE_2019_DIP: SP_PACE_2019_DIP,
  SP_PACE_2019_COC: SP_PACE_2019_COC,
  SP_PACE_2019_PMC: SP_PACE_2019_PMC
};
