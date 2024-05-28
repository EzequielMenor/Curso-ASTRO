/* empty css                          */
import { d as createComponent, r as renderTemplate, h as renderComponent, u as unescapeHTML } from '../astro_u5l-3x4W.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_vrLpK2K-.mjs';

const html = "<h1 id=\"esto-es-un-ejemplo-de-articulo\">Esto es un ejemplo de articulo</h1>\n<p>Hola esto es un ejemplo</p>";

				const frontmatter = {"title":"Contenido de la página","layout":"../layouts/Layout.astro"};
				const file = "/Users/ezequielmenor/Proyectos-VsCode/prueba-Astro/src/pages/content.md";
				const url = "/content";
				function rawContent() {
					return "\n\n  # Esto es un ejemplo de articulo\n  Hola esto es un ejemplo \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"esto-es-un-ejemplo-de-articulo","text":"Esto es un ejemplo de articulo"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Layout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
