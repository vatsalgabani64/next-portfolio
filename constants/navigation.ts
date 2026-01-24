export type SectionId = 'portfolio' | 'projects';

export interface INavbarItem{
    label: string;
    href: string;
}
export const navbarItems: INavbarItem[]  = [
    {label: "Portfolio", href:"/"},
    {label: "Projects", href:"/projects"}
];
