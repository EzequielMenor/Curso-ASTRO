/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_u5l-3x4W.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_D0CfvsPm.mjs';

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About the project" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>About the project</h1> <p>The SpacX Launches project is a demo for te Astro course</p> ` })}`;
}, "/Users/ezequielmenor/prueba-Astro/src/pages/about.astro", void 0);

const $$file = "/Users/ezequielmenor/prueba-Astro/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
