import { Schema, model } from 'mongoose';

const aprobadosSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apepat: {
        type: String,
        required: true
    },
    apemat: {
        type: String,
        required: true
    },
    promedio: {
        type: Number,
        required: true
    }
});

export const Aprobados = model('Aprobados', aprobadosSchema);
