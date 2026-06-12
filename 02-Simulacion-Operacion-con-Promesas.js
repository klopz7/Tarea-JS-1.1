// EJERCICIO 2: Simulación de Operación Asíncrona con Promesas
// ============================================================
 
export function consultarBaseDeDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numero = Math.floor(Math.random() * 100);
 
      if (numero % 2 === 0) {
        resolve("Consulta exitosa");
      } else {
        reject("Error en la consulta");
      }
    }, 3000);
  });
}
 
