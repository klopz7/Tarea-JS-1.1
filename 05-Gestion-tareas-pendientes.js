// EJERCICIO 5: Gestión de Tareas Pendientes
// ============================================================
 
const tareas = [];
 
function agregarTarea(descripcion) {
  tareas.push({ descripcion, completada: false });
  console.log(`Tarea agregada: "${descripcion}"`);
}
 
function marcarTareaComoCompletada(descripcion) {
  const tarea = tareas.find((t) => t.descripcion === descripcion);
 
  if (tarea) {
    tarea.completada = true;
    console.log(`Tarea completada: "${descripcion}"`);
  } else {
    console.log(`Tarea no encontrada: "${descripcion}"`);
  }
}
 
function listarTareasPendientes() {
  const pendientes = tareas.filter((t) => !t.completada);
  console.log("\n--- Tareas Pendientes ---");
 
  if (pendientes.length === 0) {
    console.log("No hay tareas pendientes.");
  } else {
    pendientes.forEach((t) => console.log(`• ${t.descripcion}`));
  }
}
 
function listarTareasCompletadas() {
  const completadas = tareas.filter((t) => t.completada);
  console.log("\n--- Tareas Completadas ---");
 
  if (completadas.length === 0) {
    console.log("No hay tareas completadas.");
  } else {
    completadas.forEach((t) => console.log(` ${t.descripcion}`));
  }
}
 
// Uso
agregarTarea("Comprar leche");
agregarTarea("Llamar al médico");
agregarTarea("Estudiar JavaScript");
agregarTarea("Terminar la tarea de la universidad");
 
marcarTareaComoCompletada("Comprar leche");
marcarTareaComoCompletada("Estudiar JavaScript");
 
listarTareasPendientes();
listarTareasCompletadas();