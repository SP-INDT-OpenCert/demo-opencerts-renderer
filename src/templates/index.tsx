// I found out:
// This file is the template registry serves as the template registry.
// When templates are loaded, their name will be compared to the keys of the
// exported object and that template will be used. If a template cannot be
// found, the default template will be used instead.

import { templates as govtechDemoTemplates } from "./govtech-demo-cert";
import { templates as testimonialsTemplates, templates2 as testimonialsTemplates2 } from "./testimonials";
import { templates as certificateOfAwardTemplates } from "./certificate-of-award";
import { templates as sp2019mainTemplate } from "./SPTemplate/PET/SP-2019-MAIN";
import { templates as sp2019DipPlusTemplate } from "./SPTemplate/PET/SP-2019-DPCERT";
import { templates as sp2019PFPTemplate } from "./SPTemplate/PET/SP-2019-PFP";
import { templates as sp2019mainTRTemplate } from "./SPTemplate/PET/SP-2019-MAIN-TR";
import { templates as SP_PACE_2019_DIPtemplate } from "./SPTemplate/CET/SP_PACE_2019_DIP";
import { templates as SP_PACE_2019_COCtemplate } from "./SPTemplate/CET/SP_PACE_2019_COC";
import { templates as SP_PACE_2019_PMCtemplate } from "./SPTemplate/CET/SP_PACE_2019_PMC";

import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";

export const registry: TemplateRegistry<any> = {
  default: govtechDemoTemplates,
  GOVTECH_DEMO: govtechDemoTemplates,
  TESTIMONIALS: testimonialsTemplates,
  TESTIMONIALS2: testimonialsTemplates2,
  CERTIFICATE_OF_AWARD: certificateOfAwardTemplates,
  SP_2019_MAIN: sp2019mainTemplate,
  SP_2019_DPCERT: sp2019DipPlusTemplate,
  SP_2019_PFP: sp2019PFPTemplate,
  SP_2019_MAIN_TR: sp2019mainTRTemplate,
  SP_PACE_2019_DIP: SP_PACE_2019_DIPtemplate,
  SP_PACE_2019_COC: SP_PACE_2019_COCtemplate,
  SP_PACE_2019_PMC: SP_PACE_2019_PMCtemplate
};
