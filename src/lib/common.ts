
export type element = Element | null
export type input_element = HTMLInputElement | null
export type link_element = HTMLAnchorElement | null
export type grade_elements = {
  nothing: input_element;
  something: input_element;
  hard: input_element;
  okay: input_element;
  easy: input_element;
  blacklist: input_element;
  never_forget: input_element;
}

type result = element | input_element | link_element


export const get_element = (selector: string, log: boolean = true): result => {
  const element = document.querySelector(selector);
  if (element) return element;

  if (log) console.error(`element with selector: ${selector} not found`);

  return null
}
