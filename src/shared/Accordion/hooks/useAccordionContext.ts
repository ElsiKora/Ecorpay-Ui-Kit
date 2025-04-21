import { use } from "react";

import { AccordionContext } from "../lib/accordionContext";

export const useAccordionContext = () => {
 const accordionContext = use(AccordionContext);

 if (accordionContext == undefined)
  throw new Error("useAccordionContext must be used within a Accordion Provider");

 return accordionContext;
};
