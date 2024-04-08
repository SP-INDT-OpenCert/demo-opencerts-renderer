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
import { templates as sp2023mainTemplate } from "./SPTemplate/PET/SP-2023-MAIN";
import { templates as sp2024mainTemplate } from "./SPTemplate/PET/SP-2024-MAIN";
import { templates as sp2024PFPTemplate } from "./SPTemplate/PET/SP-2024-PFP";
import { templates as sp2024DipPlusTemplate } from "./SPTemplate/PET/SP-2024-DPCERT";
import { templates as sp2023DipPlusTemplate } from "./SPTemplate/PET/SP-2023-DPCERT";
import { templates as spRyanTestTemplate } from "./SPTemplate/PET/SP-RYAN-TEST";
import { templates as SP_PACE_2019_DIPtemplate } from "./SPTemplate/CET/SP_PACE_2019_DIP";
import { templates as SP_PACE_2019_COCtemplate } from "./SPTemplate/CET/SP_PACE_2019_COC";
import { templates as SP_PACE_2019_PMCtemplate } from "./SPTemplate/CET/SP_PACE_2019_PMC";
import { templates as SP_PACE_2019_DIPNEWtemplate } from "./SPTemplate/CET/SP_PACE_2019_DIP_NEW";
import { templates as SP_PACE_2019_PMCNEWtemplate } from "./SPTemplate/CET/SP_PACE_2019_PMC_NEW";

import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";

export const registry: TemplateRegistry<any> = {
  default: govtechDemoTemplates,
  GOVTECH_DEMO: govtechDemoTemplates,
  TESTIMONIALS: testimonialsTemplates,
  TESTIMONIALS2: testimonialsTemplates2,
  CERTIFICATE_OF_AWARD: certificateOfAwardTemplates,
  SP_2019_MAIN: sp2019mainTemplate,
  SP_2023_MAIN: sp2023mainTemplate,
  SP_2019_DPCERT: sp2019DipPlusTemplate,
  SP_2023_DPCERT: sp2023DipPlusTemplate,
  SP_2019_PFP: sp2019PFPTemplate,
  SP_2019_MAIN_TR: sp2019mainTRTemplate,
  SP_2024_MAIN: sp2024mainTemplate,
  SP_2024_PFP: sp2024PFPTemplate,
  SP_2024_DPCERT: sp2024DipPlusTemplate,
  SP_RYAN_TEST: sp2019DipPlusTemplate,
  SP_PACE_2019_DIP: SP_PACE_2019_DIPtemplate,
  SP_PACE_2019_COC: SP_PACE_2019_COCtemplate,
  SP_PACE_2019_PMC: SP_PACE_2019_PMCtemplate,
  SP_PACE_2019_DIP_NEW: SP_PACE_2019_DIPNEWtemplate,
  SP_PACE_2019_PMC_NEW: SP_PACE_2019_PMCNEWtemplate
};
