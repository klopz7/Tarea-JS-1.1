// EJERCICIO 4: Procesamiento de una Lista de Productos
// ============================================================
 
const productos = [
  { nombre: "Televisor",   precio: 500, categoria: "Electrónica" },
  { nombre: "Silla",       precio: 100, categoria: "Muebles"     },
  { nombre: "Laptop",      precio: 800, categoria: "Electrónica" },
  { nombre: "Mesa",        precio: 200, categoria: "Muebles"     },
  { nombre: "Auriculares", precio: 150, categoria: "Electrónica" },
];
 
const categoriaFiltro = "Muebles";
 
const productosFiltrados = productos.filter(
  (p) => p.categoria === categoriaFiltro
);
 
const nombresProductos = productosFiltrados.map((p) => p.nombre);
 
const precioTotal = productosFiltrados.reduce(
  (acumulador, p) => acumulador + p.precio,
  0
);
 
console.log(`Categoría: ${categoriaFiltro}`);
console.log("Productos:", nombresProductos);
console.log(`Precio total: $${precioTotal}`);