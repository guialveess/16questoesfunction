function converterMinutos(minutos) {
    const minutosPorHora = 60;
    const horasPorDia = 24;

    let horas = minutos / minutosPorHora;
    let dias = horas / horasPorDia;

    return { horas: horas, dias: dias };
}

let minutos = 6000;
let resultado = converterMinutos(minutos);
console.log(minutos + " minutos equivalem a " + resultado.horas.toFixed(2) + " horas e " + resultado.dias.toFixed(3) + " dias.");
