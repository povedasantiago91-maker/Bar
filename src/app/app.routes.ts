import { Routes } from '@angular/router';
import { About } from './page/about/about';
import { Products } from './page/products/products';
import { Contact } from './page/contact/contact';
import { Home } from './page/home/home';

export const routes: Routes = [

    {path:``,component:Home},
    {path:`Nosotros`,component:About},
    {path:`Productos`,component:Products},
    {path:`Contacto`,component:Contact},
    {path:`**`,redirectTo:``}

];
