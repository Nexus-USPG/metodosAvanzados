require("colors");
const inquirer = require('inquirer');

// --- Importación de Módulos de Ejercicios ---
const { ejecutarEjercicioIVA } = require('./01-actualizarPrecios');
const { ejecutarEjercicioFiltro } = require('./02-estudiantesAprobados');
const { ejecutarEjercicioContar } = require('./03-cantidadEstudiantesAprobados');
const { ejecutarEjercicio04 } = require('./04-unirFrase');
const { ejecutarEjercicio05 } = require('./05-ordenarCatalogo');
const { ejecutarEjercicio06 } = require('./06-agregarProducto');
const { ejecutarEjercicio07 } = require('./07-priorizarTarea');
const { ejecutarEjercicio08 } = require('./08-ordenarPorPrecio');
const { ejecutarEjercicio09 } = require('./09-removerUltimoCliente');
const { ejecutarEjercicio10 } = require('./10-empezarConCancionDestacada');
const { ejecutarEjercicio11 } = require('./11-convertirRespuestaEnArreglo');
const { ejecutarEjercicio12 } = require('./12-combinarListasDeCompra');
const { ejecutarEjercicio13 } = require('./13-recortarImagen');
const { ejecutarEjercicio14 } = require('./14-gestionarEmpleados');
const { ejecutarEjercicio15 } = require('./15-ubicacionDelPaquete');
const { ejecutarEjercicio16 } = require('./16-verificarTesoro');
const { ejecutarEjercicio17 } = require('./17-verificarDescuento');
const { ejecutarEjercicio18 } = require('./18-enviarCorreoConfirmacion');

function logoInicio() {
    console.clear();
    const asciiArt = String.raw`
   __   __  __      _            _
  / /  |  \/  | ___| |_ ___   __| | ___  ___
< <    | |\/| |/ _ \ __/ _ \ / _\`|/ _ \/ __|
 | |   | |  | |  __/ || (_) | (_| | (_) \__ \
  \_\  |_|  |_|\___|\__\___/ \__,_|\___/|___/           __
         / \__   ____ _ _ __  ______ _  __| | ___  ___  \ \
        / _ \ \ / / _\`| '_ \|_  / _\`|/ _\`|/ _ \/ __|  | |
       / ___ \ V / (_| | | | |/ / (_| | (_| | (_) \__ \   > >
      /_/   \_\_/ \__,_|_| |_/___\__,_|\__,_|\___/|___/  | |
                                                        /_/ `;
    console.log(asciiArt.cyan);
}

const opciones = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué ejercicio deseas ejecutar?',
        choices: [
            { value: '01', name: `${'01.'.yellow} map      - Actualizar Precios con IVA` },
            { value: '02', name: `${'02.'.yellow} filter   - Filtrar Estudiantes Aprobados` },
            { value: '03', name: `${'03.'.yellow} reduce   - Contar Estudiantes Aprobados` },
            { value: '04', name: `${'04.'.yellow} join     - Unir Palabras en Frase` }, // o reduce si se implementó así
            { value: '05', name: `${'05.'.yellow} sort     - Ordenar Catálogo por Precio Asc` },
            { value: '06', name: `${'06.'.yellow} push     - Añadir Producto al Final` },
            { value: '07', name: `${'07.'.yellow} unshift  - Añadir Tarea Prioritaria al Inicio` },
            { value: '08', name: `${'08.'.yellow} sort     - Ordenar Inventario por Precio Asc` },
            { value: '09', name: `${'09.'.yellow} pop      - Remover Último Cliente/Elemento` },
            { value: '10', name: `${'10.'.yellow} shift    - Remover Primera Canción/Elemento` },
            { value: '11', name: `${'11.'.yellow} from     - A Letras` },
            { value: '12', name: `${'12.'.yellow} concat   - Unir List` },
            { value: '13', name: `${'13.'.yellow} slice    - Recorte` },
            { value: '14', name: `${'14.'.yellow} splice   - Gestor E.` },
            { value: '15', name: `${'15.'.yellow} indexOf  - Ubicar Estado del Paquete` },
            { value: '16', name: `${'16.'.yellow} includes - Verificar si Existe Tesoro` },
            { value: '17', name: `${'17.'.yellow} some     - Verificar si Hay Descuentos` },
            { value: '18', name: `${'18.'.yellow} forEach  - "Enviar" Correos a Asistentes` },
            new inquirer.Separator(),
            { value: '0', name: `${'0.'.red} Salir` },
        ]
    }
];

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

async function mostrarMenu() {
    let continuarEnMenu = true;
    while (continuarEnMenu) {
        logoInicio();
        const { opcion: seleccion } = await inquirer.prompt(opciones);
        console.clear();
        switch (seleccion) {
            case '01':
                ejecutarEjercicioIVA();
                break;
            case '02':
                ejecutarEjercicioFiltro();
                break;
            case '03':
                ejecutarEjercicioContar();
                break;
            case '04':
                ejecutarEjercicio04();
                break;
            case '05':
                ejecutarEjercicio05();
                break;
            case '06':
                ejecutarEjercicio06();
                break;
            case '07':
                ejecutarEjercicio07();
                break;
            case '08':
                ejecutarEjercicio08();
                break;
            case '09':
                ejecutarEjercicio09();
                break;
            case '10':
                ejecutarEjercicio10();
                break;
            case '11':
                ejecutarEjercicio11();
                break;
            case '12':
                ejecutarEjercicio12();
                break;
            case '13':
                ejecutarEjercicio13();
                break;
            case '14':
                ejecutarEjercicio14();
                break;
            case '15':
                ejecutarEjercicio15();
                break;
            case '16':
                ejecutarEjercicio16();
                break;
            case '17':
                ejecutarEjercicio17();
                break;
            case '18':
                ejecutarEjercicio18();
                break;

            case '0':
                continuarEnMenu = false;
                break;

            default:
                console.log('Opción no reconocida.'.red);
                break;
        }
        if (continuarEnMenu) {
            continuarEnMenu = await confirmarContinuar();
        }
    }
    logoInicio();
    console.log('\n                                       powered by Nexus USPG'.red);
}

mostrarMenu();