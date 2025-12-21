export type SectionId = 'portfolio' | 'projects';

export interface INavbarItem{
    id: SectionId;
    title: string;
    href: string;
}
export const navbarItems: INavbarItem[]  = [
    {id: 'portfolio',title: "Portfolio", href:"/"},
    {id: 'projects',title: "Projects", href:"/projects"}
];