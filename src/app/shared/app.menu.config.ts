import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'homeadmin', name: 'HOME', icon: 'home', route: '/main/homeadmin' },
  { id: 'homeuser', name: 'HOME', icon: 'home', route: '/main/homeuser' },
  { id: 'products', name: 'PRODUCTS', icon: 'inventory', route: '/main/products' },
  { id: 'productsgrid', name: 'PRODUCTSGRID', icon: 'inventory', route: '/main/products/grid' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
