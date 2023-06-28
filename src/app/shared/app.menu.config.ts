import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'homeadmin', name: 'HOME', icon: 'home', route: '/main/homeadmin' },
  { id: 'homeuser', name: 'HOME', icon: 'home', route: '/main/homeuser' },
  { id: 'products', name: 'PRODUCTS', icon: 'inventory', route: '/main/products' },
  { id: 'productsgrid', name: 'PRODUCTSGRID', icon: 'grid_on', route: '/main/products/grid' },
  { id: 'productschart', name: 'PRODUCTSCHART', icon: 'show_chart', route: '/main/products/chart' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
