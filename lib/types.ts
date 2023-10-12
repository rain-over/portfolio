import { links } from './data';

export type SectionName = (typeof links)[number]['name'];

export type JustifyContentProperty = 'center' | 'space-around';
