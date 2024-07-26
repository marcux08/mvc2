import { Reprobados } from "./models/repro.model.js";

export const test3 = () => {
    console.log("Llamando la función desde el controlador");
};

Reprobados.create({
    nombre: 'Marco',
    apepat: 'Lozano',
    apemat: 'Gonzalez',
    promedio: 5.5
});
