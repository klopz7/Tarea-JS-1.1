// EJERCICIO 3: Uso de async/await para Manejar Promesas
// ============================================================
 import { consultarBaseDeDatos } from "./02-Simulacion-Operacion-con-Promesas.js";
 
async function ejecutarConsulta() {
  try {
    const resultado = await consultarBaseDeDatos();
    console.log(resultado);
  } catch (error) {
    console.error(error);
  }
}
 
ejecutarConsulta();