import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyLoad/pages";

export const routes = [
    {
        to:'/lazy1',
        path: 'lazy1',
        component: LazyPage1,
        name: 'lazy-1',
    }, 
    {
        to:'/lazy2',
        path: 'lazy2',
        component: LazyPage2,
        name: 'lazy-2',
    },
    {
        to:'/lazy3',
        path: 'lazy3',
        component: LazyPage3,
        name: 'lazy-3',
    },
];