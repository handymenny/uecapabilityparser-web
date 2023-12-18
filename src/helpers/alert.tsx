import dompurify from 'dompurify';

export const markdownToHtml = (message: string) => {
  const regexMdLinks = /\[([^[]+)\]\((.*)\)/gm;

  const contentSanitized = dompurify.sanitize(message);

  const content = contentSanitized.replace(
    regexMdLinks,
    "<a class='underline' href='$2'>$1</a>",
  );

  return content;
};

export class AlertException extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}
