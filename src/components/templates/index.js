// This file is the template registry serves as the template registry.
// When templates are loaded, their name will be compared to the keys of the
// exported object and that template will be used. If a template cannot be
// found, the default template will be used instead.

// TODO: Use dynamic loading to prevent all templates to be loaded at once.
import DefaultTemplate from "./default";
import CustomTemplate from "./customTemplate";
import GovTechDemoCert from "./govtechDemoCert";
import SP_2019_MAIN from "./SPTemplate/PET/SP-2019-MAIN";
import SP_2019_DPCERT from "./SPTemplate/PET/SP-2019-DPCERT";
import SP_PACE_2019_DIP from "./SPTemplate/CET/SP_PACE_2019_DIP";
import SP_PACE_2019_COC from "./SPTemplate/CET/SP_PACE_2019_COC";
import SP_PACE_2019_PMC from "./SPTemplate/CET/SP_PACE_2019_PMC";

export default {
  default: DefaultTemplate,
  CUSTOM_TEMPLATE: CustomTemplate,
  GOVTECH_DEMO: GovTechDemoCert,
  SP_2019_MAIN: SP_2019_MAIN,
  SP_2019_DPCERT: SP_2019_DPCERT,
  SP_PACE_2019_DIP: SP_PACE_2019_DIP,
  SP_PACE_2019_COC: SP_PACE_2019_COC,
  SP_PACE_2019_PMC: SP_PACE_2019_PMC,
  NULL: []
};
