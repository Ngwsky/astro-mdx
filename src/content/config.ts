import { defineCollection, z, CollectionEntry } from 'astro:content';

const docs = defineCollection({
	schema: z.object({
		title: z.string().default('Tailwind UI Sample'),
		description: z.string().default('UI collections for Tailwind CSS'),
		lang: z.literal('ja-jp').default('ja-jp'),
		dir: z.union([z.literal('ltr'), z.literal('rtl')]).default('ltr'),
		image: z
			.object({
				src: z.string(),
				alt: z.string(),
			})
			.optional(),
		ogLocale: z.string().optional(),
	}),
});

export const isJapaneseEntry = (entry: CollectionEntry<'docs'>): boolean => {
	return entry.slug.startsWith('ja/');
};

export const groupPagesByLang = <T extends CollectionEntry<'docs'>>(pages: T[]) =>
	pages.reduce((pages, page) => {
		const lang = page.slug.split('/')[0];
		if (!pages[lang]) pages[lang] = [];
		pages[lang].push(page);
		return pages;
	}, {} as { [lang: string]: T[] });

export const stripLangFromSlug = (slug: CollectionEntry<'docs'>['slug']) =>
slug.split('/').slice(1).join('/');

export const getLangFromSlug = (slug: CollectionEntry<'docs'>['slug']) => slug.split('/')[0];

export const collections = { docs };
