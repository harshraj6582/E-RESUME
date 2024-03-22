import { extractResumeFromSections } from "./extract-resume";
import { groupLinesIntoSections } from "./group-lines-into-sections";
import { groupTextItemsIntoLines } from "./group-text-items-into-lines";
import { readPdf } from "./read-pdf";

export const parseResumeFromPdf = async (fileUrl: string) => {
  const textItems = await readPdf(fileUrl);
  const lines = groupTextItemsIntoLines(textItems);
  const sections = groupLinesIntoSections(lines);
  const resume = extractResumeFromSections(sections);
  return resume;
};
