// ===================================
// UTILIDADES
// Funciones pequeñas que no pertenecen a ninguna clase.
// ===================================

/**
 * Número entero aleatorio entre min y max (ambos incluidos)
 */
export function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
