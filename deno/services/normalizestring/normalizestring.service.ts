export function normalizeString(str: string): string {
    return str
            .toLowerCase()
            .trim()
            .split('')
            .join('')
            .replace(/ç/g, 'c')
            .replace(/[á,à,ã,â]/g, 'a')
            .replace(/[é,è,ê]/g, 'e')
            .replace(/[í,î,ì]/g, 'i')
            .replace(/[ó,ò,ô,õ]/g, 'o')
            .replace(/[ú,ù]/g, 'u');
}
