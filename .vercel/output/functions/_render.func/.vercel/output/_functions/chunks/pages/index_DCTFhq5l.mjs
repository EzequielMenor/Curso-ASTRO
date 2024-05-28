/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderComponent } from '../astro_u5l-3x4W.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_vrLpK2K-.mjs';
import 'clsx';
import { g as getLatestLaunches } from './_id__BPCq4zpq.mjs';

const $$Astro$2 = createAstro();
const $$CardLaunch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardLaunch;
  const { success, flightNumber, img, id, details } = Astro2.props;
  const launchStatus = success ? "Success" : "Failure";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/launch/${id}`, "href")} class="rounded-lg border shadow-md bg-gray-800 border-gray-700 hover:scale-105 hover:bg-gray-700 hover:border-gray-500 transition flex flex-col"> <picture class="flex justify-center p-4"> <img class="mb-5 rounded-lg"${addAttribute(img, "src")}${addAttribute(`Patch fo launch ${id}`, "alt")}> </picture> <header class="p-4 flex-grow"> <span${addAttribute([
    "text-xs font-semibold mr-2 px-2.5 py-0.5 rounded",
    {
      "bg-green-400 text-green-900": success,
      "bg-red-400 text-red-900": !success
    }
  ], "class:list")}>${launchStatus}</span> <h2 class="my-2 text-2xl font-bold tracking-tight text-white">
Flight #${flightNumber} </h2> <p class="mb-4 font-light text-gray-400"> ${details != null && details?.length > 100 ? details.slice(0, 100) + "..." : details} </p> </header> </a>`;
}, "/Users/ezequielmenor/Proyectos-VsCode/prueba-Astro/src/components/CardLaunch.astro", void 0);

const $$Astro$1 = createAstro();
const $$Launches = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Launches;
  const launches = await getLatestLaunches();
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"> ${launches.map(({ id, links, details, flight_number: flightNumber, success }) => renderTemplate`${renderComponent($$result, "CardLaunch", $$CardLaunch, { "id": id, "img": links.patch.small, "details": details, "flightNumber": flightNumber, "success": success })}`)} </div>`;
}, "/Users/ezequielmenor/Proyectos-VsCode/prueba-Astro/src/components/Launches.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Launches", $$Launches, {})} ` })}`;
}, "/Users/ezequielmenor/Proyectos-VsCode/prueba-Astro/src/pages/index.astro", void 0);

const $$file = "/Users/ezequielmenor/Proyectos-VsCode/prueba-Astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
