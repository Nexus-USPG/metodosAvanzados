require("colors");
const inquirer = require('inquirer');

function logoInicio() {
    console.clear();  // Limpiar
    const asciiArt = String.raw`
   __   __  __      _            _
  / /  |  \/  | ___| |_ ___   __| | ___  ___
< <    | |\/| |/ _ \ __/ _ \ / _\`|/ _ \/ __|
 | |   | |  | |  __/ || (_) | (_| | (_) \__ \
  \_\  |_|  |_|\___|\__\___/ \__,_|\___/|___/          __ 
         / \__   ____ _ _ __  ______ _  __| | ___  ___  \ \  
        / _ \ \ / / _\`| '_ \|_  / _\`|/ _\`|/ _ \/ __|  | |
       / ___ \ V / (_| | | | |/ / (_| | (_| | (_) \__ \   > >
      /_/   \_\_/ \__,_|_| |_/___\__,_|\__,_|\___/|___/  | | 
                                                        /_/ `;
    console.log(asciiArt.cyan);
}

// --- Opciones del Menú Principal ---
const opciones = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué ejercicio deseas ejecutar?',
        choices: [
            { value: '01', name: '01. map      - IVA' },
            { value: '02', name: '02. filter   - Aprobados' },
            { value: '03', name: '03. reduce   - Contar OK' },
            { value: '04', name: '04. reduce   - Frase' },
            { value: '05', name: '05. sort     - Catálogo ↑' },
            { value: '06', name: '06. push     - Añadir P.' },
            { value: '07', name: '07. unshift  - Priorizar' },
            { value: '08', name: '08. sort     - Inv ↑' },
            { value: '09', name: '09. pop      - Último Out' },
            { value: '10', name: '10. shift    - Prim Out' },
            { value: '11', name: '11. from     - A Letras' },
            { value: '12', name: '12. concat   - Unir List' },
            { value: '13', name: '13. slice    - Recorte' },
            { value: '14', name: '14. splice   - Gestor E.' },
            { value: '15', name: '15. indexOf  - Ubicar P.' },
            { value: '16', name: '16. includes - Tesoro' },
            { value: '17', name: '17. some     - Descuentos' },
            { value: '18', name: '18. forEach  - Emails' },
            new inquirer.Separator(),
            { value: '0', name: '0. Salir' },
        ]
    }
];

// --- Función de Confirmación ---
async function confirmarContinuar() {
    const pregunta = [{
        type: 'confirm',
        name: 'confirmacion',
        message: '¿Deseas volver al menú principal?'.yellow,
        default: true
    }];
    const { confirmacion } = await inquirer.prompt(pregunta);
    return confirmacion;
}

// --- Función Principal del Menú ---
async function mostrarMenu() {
    let continuarEnMenu = true;

    while (continuarEnMenu) {
        logoInicio();

        const { opcion: seleccion } = await inquirer.prompt(opciones);
        logoInicio();
        switch (seleccion) {
            case '01':
                console.log('Ejecutando lógica para MAP (IVA)...'.cyan);
                // --- Aquí iría tu lógica real para map ---
                continuarEnMenu = await confirmarContinuar();
                break;

            case '02':
                console.log('Ejecutando lógica para FILTER (Aprobados)...'.cyan);
                // --- Aquí iría tu lógica real para filter ---
                continuarEnMenu = await confirmarContinuar();
                break;

            case '18':
                console.log('Ejecutando lógica para forEach (Emails)...'.cyan);
                // --- Aquí iría tu lógica real para forEach ---
                continuarEnMenu = await confirmarContinuar();
                break;

            case '0': // Salir
                console.log('\n¡Hasta luego! Gracias por usar el menú.'.yellow);
                continuarEnMenu = false; // Termina el bucle while
                break; // Sale del switch

            default: // Opción no válida (si inquirer permitiera alguna)
                console.log('Opción no reconocida.'.red);
                continuarEnMenu = await confirmarContinuar(); // Pregunta si quiere reintentar
                break;
        }
    }
    logoInicio()
    console.log('                                       powered by Nexus USPG'.red);
}

// --- Inicia la aplicación ---
mostrarMenu();