import { RemedialesPagados } from "./models/reme.model.js";

export const test2 = () => {
    console.log("Llamando la función desde el controlador");
};

RemedialesPagados.create({
    alumno: 'Marco Lozano Gonzalez',
    estatus: 'Pagado'
});
