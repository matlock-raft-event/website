import type { AboutQueryResult } from "~/lib/sanity.types";

type Bio = NonNullable<NonNullable<AboutQueryResult>["bio"]>;
export type BioBlock = Bio[number];

export type StorySection = {
  /** The h4 that opened the section. The intro has none. */
  title?: string;
  body: BioBlock[];
};

export type Story = {
  sections: StorySection[];
  /** The sign-off after the last section. Shown without a photo. */
  closing: BioBlock[];
  /** False when the bio has no headings, so there is nothing to split. */
  split: boolean;
};

const textOf = (block: BioBlock) => (block.children ?? []).map(child => child.text ?? "").join("").trim();

const isBlank = (block: BioBlock) => block.style === "normal" && !block.listItem && textOf(block) === "";

/* Editors leave stray empty paragraphs around; they only ever add gaps. */
const trimBlanks = (blocks: BioBlock[]) => {
  let start = 0;
  let end = blocks.length;
  while (start < end && isBlank(blocks[start])) start++;
  while (end > start && isBlank(blocks[end - 1])) end--;
  return blocks.slice(start, end);
};

/**
 * Cuts the bio into story sections at each h4. The text before the first h4 is
 * the intro. In the last section, whatever follows an empty paragraph is the
 * closing sign-off and gets no photo.
 */
export const splitStory = (bio: Bio | null | undefined): Story => {
  const blocks = bio ?? [];
  if (!blocks.some(block => block.style === "h4")) {
    return { sections: [{ body: blocks }], closing: [], split: false };
  }

  const raw: StorySection[] = [{ body: [] }];
  for (const block of blocks) {
    if (block.style === "h4") raw.push({ title: textOf(block), body: [] });
    else raw[raw.length - 1].body.push(block);
  }

  const sections = raw
    .map(section => ({ ...section, body: trimBlanks(section.body) }))
    .filter(section => section.title || section.body.length > 0);

  let closing: BioBlock[] = [];
  const last = sections[sections.length - 1];
  const gap = last.body.findIndex(isBlank);
  if (gap > 0) {
    closing = trimBlanks(last.body.slice(gap));
    last.body = last.body.slice(0, gap);
  }

  return { sections, closing, split: true };
};
