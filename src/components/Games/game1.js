var bucleInfinito = {
    id:null,
    finCliclo:0,//Fin del ciclo
    aps:0,//actuañizaciones por segundo
    fps:0,//frames por segundos
    bucle:function(tiempo){
        bucleInfinito.id = window.requestAnimationFrame(bucleInfinito.bucle);
        bucleInfinito.actulizar();
        bucleInfinito.refrescar();
        var diferencia = tiempo-bucleInfinito.finCliclo
        if(diferencia > 999){

            console.log(`
            Fin = ${bucleInfinito.finCliclo}\n
            Tienpo = ${tiempo}\n
            Diferencia = ${diferencia}\n
            Aps = ${bucleInfinito.aps}\n
            Fps = ${bucleInfinito.fps}\n
            Id = ${bucleInfinito.id}\n
            `)
            bucleInfinito.finCliclo=tiempo
            bucleInfinito.fps = 0
            bucleInfinito.aps = 0
        }
    },
    actulizar:function(){
        bucleInfinito.aps ++
    },
    refrescar:function(){
        bucleInfinito.fps++
    }
}