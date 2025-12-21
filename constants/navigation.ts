export type SectionId = 'introduction' | 'about' | 'experience' | 'projects' | 'contact';

export interface INavbarItem{
    id: SectionId;
    title: string;
}
export const navbarItems: INavbarItem[]  = [
    {id: 'about',title: "About"},
    {id: 'experience',title: "Experience"},
    {id: 'projects',title: "Projects"},
    {id: 'contact',title: "Contact"},
];