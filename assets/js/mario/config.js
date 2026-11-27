/**
 * @file Configuración del juego.
 *
 * Reúne en un único sitio los datos y los "números mágicos" que usa el resto
 * de archivos. Para cambiar algo del juego (más monedas, otra velocidad,
 * un personaje nuevo...) se edita aquí y no hace falta tocar las clases.
 *
 * @module config
 */

/**
 * Configuración global del juego.
 *
 * @type {Object}
 */
export const CONFIG = {
    /**
     * Carpeta donde están las imágenes de los personajes (relativa al HTML).
     * @type {string}
     */
    RUTA_IMG: "../assets/img/marioBros/",

    /**
     * Archivos de imagen, uno por personaje. Mismo orden que NOMBRES.
     * @type {string[]}
     */
    // prettier-ignore
    SPRITES: [
        "mario.webp",
        "luigi.webp",
        "yoshi.webp",
        "bowser.webp",
        "king-boo.webp",
        "lakitu.webp",
        "setaAzul.webp",
        "wario.webp"
    ],

    /**
     * Nombres de los personajes. Mismo orden y longitud que SPRITES.
     * @type {string[]}
     */
    NOMBRES: ["Mario", "Luigi", "Yoshi", "Bowser", "King-Boo", "Lakitu", "Seta Azul", "Wario"],

    /**
     * Monedas que aparecen en cada tanda.
     * @type {number}
     */
    CANTIDAD_MONEDAS: 8,

    /**
     * Duración (ms) de la transición al avanzar o retroceder.
     * @type {number}
     */
    VELOCIDAD: 800,

    /**
     * Vidas con las que empieza cada personaje.
     * @type {number}
     */
    VIDAS: 3,

    /**
     * Goombas que patrullan el escenario.
     * @type {number}
     */
    CANTIDAD_GOOMBAS: 3,

    /**
     * Tiempo (ms) que un personaje es invulnerable tras recibir un golpe.
     * Sin él, un solo choque restaría todas las vidas de golpe, porque la
     * colisión se comprueba en cada fotograma (unas 60 veces por segundo).
     * @type {number}
     */
    INVULNERABILIDAD: 1500,
};
