import { ROUTES } from "./routes";

export type SectionId = 'portfolio' | 'projects';

export interface INavbarItem{
    label: string;
    href: string;
}
export const navbarItems: INavbarItem[]  = [
    {label: "Portfolio", href:ROUTES.Home},
    {label: "Projects", href:ROUTES.Projects},
    {label: "Resume", href:ROUTES.Resume}
];
