export const languages = {
  vi: 'Tiếng Việt',
  en: 'English',
};

export function toNonAccentString(str: string) {  
  return str
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/đ/g, "d")
  .replace(/Đ/g, "D")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)+/g, "");
}