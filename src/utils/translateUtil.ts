import i18n from 'i18next';

export const translate = ({ value }: { value: string }) => i18n.t(value);
