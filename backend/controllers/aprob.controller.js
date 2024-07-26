import { Aprobados } from "./models/aprob.model.js";

export const test1 = () => {
    console.log("Llamando la función desde el controlador");
};

Aprobados.create({
    nombre: 'Marco',
    apepat: 'Lozano',
    apemat: 'Gonzalez',
    promedio: 9.0
});
