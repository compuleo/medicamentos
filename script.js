//Declaracion de inicializacion de variables.

let existenciaMedicamento1 = 0;
let existenciaMedicamento2 = 0;
let pacientesAtendidios = 0;
let pacientesMedicamento1 = 0;
let pacientesMedicamento2 = 0;

//Actualizar las existencias del medicamento
document.getElementById('actualizarExistencias').addEventListener('click', () =>{
    existenciaMedicamento1 = parseInt(document.getElementById('medicamento1').value);
    existenciaMedicamento2 = parseInt(document.getElementById('medicamento2').value); 

    if(existenciaMedicamento1 > 0 && existenciaMedicamento2 > 0 ){
        document.getElementById('mostrarExistencias').textContent = `Medicamento 1: ${existenciaMedicamento1} unidades, medicamento 2: ${existenciaMedicamento1} unidades`;
        document.getElementById('mensaje').textContent = '';
    }else{
        document.getElementById("mensaje").textContent = "Atencion: Valores no permitidos negativos o en 0 polluelo";
    }
});

// Validamos los valores de presiones , asignamos medicamentos tipo y realizamos deducciones

document.getElementById('procesarPaciente').addEventListener ('click', () => {
    let sistolica = parsetFloat(document.getElementById('sistolica').value);
    let diastolica = parsetFloat(document.getElementById('diastolica').value);
    let categoria = '';
    let medicamentoEntregado = 0;
    let dosis = 0;
    let mensaje = '';

// validando los rangos de presiones

    if(sistolica < 69 && diastolica < 48){
            categoria = 'Hipotension';
            medicamentoEntregado = 2;
            dosis = 6;
    }else if (sistolica >= 69 && sistolica < 98 && diastolica >= 48 && diastolica < 66 ){
            categoria = 'Optima';
    }else if (sistolica >= 98 && sistolica < 143 && diastolica >= 66 && diastolica < 92 ){
        categoria = 'Comun';
    }else if (sistolica >= 143 && sistolica < 177 && diastolica >= 92 && diastolica < 124 ){
        categoria = 'Pre-HTA';
        medicamentoEntregado = 1;
        dosis = 6;
    }



});