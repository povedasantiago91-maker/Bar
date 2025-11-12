import { Injectable } from '@angular/core';

export interface Product1 {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class Productos {
  private productos: Product1[] = [
    {
      id: 1,
      nombre: 'Margarita Clásica',
      descripcion: 'Una combinación perfecta de frescura y carácter. Tequila, licor de naranja y jugo de lima recién exprimido se mezclan para crear un cóctel equilibrado, cítrico y ligeramente dulce, servido con su icónico borde de sal. Refrescante y elegante.',
      precio: 35000,
      imagen: 'assets/img/margarita_clasica.webp',
    },
    {
      id: 2,
      nombre: 'Margarita Azul',
      descripcion: 'Versión vibrante de la margarita clásica, preparada con tequila, curaçao azul y jugo de lima, que ofrece un sabor cítrico y un llamativo tono turquesa.',
      precio: 35000,
      imagen: 'assets/img/margarita_azul.webp',
    },
    {
      id: 3,
      nombre: 'Margarita de Mango',
      descripcion: 'Exótica y dulce combinación de tequila, licor de naranja y puré de mango natural, equilibrada con jugo de lima para un toque refrescante y tropical.',
      precio: 38000,
      imagen: 'assets/img/margarita_mango.webp',
    },
    {
      id: 4,
      nombre: 'Gin Tonic Tradicional',
      descripcion: 'Clásico y elegante cóctel preparado con ginebra premium y tónica bien fría, servido con hielo y una rodaja de limón para realzar su aroma botánico.',
      precio: 30000,
      imagen: 'assets/img/gin_tonic.webp',
    },
    {
      id: 5,
      nombre: 'Gin Rose',
      descripcion: 'Delicado y aromático cóctel elaborado con ginebra infusionada en frutos rojos, tónica rosada y un toque de limón, que ofrece un equilibrio entre frescura y dulzor floral.',
      precio: 38000,
      imagen: 'assets/img/gin_rose.webp',
    },
    {
      id: 6,
      nombre: 'Tequila Sonrise',
      descripcion: 'Colorido y refrescante cóctel elaborado con tequila, jugo de naranja y granadina, ideal para comenzar la noche.',
      precio: 42000,
      imagen: 'assets/img/tequila_sunrise.webp',
    },
    {
      id: 6,
      nombre: 'Old Fashioned',
      descripcion: 'Icónico cóctel clásico a base de whisky, azúcar, unas gotas de amargo y un toque de piel de naranja, que resalta la elegancia y el carácter del destilado.',
      precio: 42000,
      imagen: 'assets/img/tequila_sunrise.webp',
    },
  ];

  getProductos(): Product1[] {
    return this.productos;
  }
}
