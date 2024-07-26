import { Schema, model } from 'mongoose';

const remedialesPagadosSchema = new Schema({
    alumno: {
        type: String,
        required: true
    },
    estatus: {
        type: String,
        required: true
    }
});

export const RemedialesPagados = model('RemedialesPagados', remedialesPagadosSchema);
