$(document).ready(function(){
    var Pais = $(".Pais");
    var mapa = $("#mapa");
    var boton1 = $("#boton1");
    var boton2 = $("#boton2");
    var boton3 = $("#boton3");

    Pais.mouseenter(function(){
      $(this).fadeTo("fast", 0.5);
    
    });
    
    Pais.mouseleave(function(){
        $(this).fadeTo("fast", 1);
    });

    boton1.click(function(){
        $(mapa).css({fill:"#B04756"})
    });
    boton2.click(function(){
        $(mapa).css({fill:"#4B58A8"}) 
    });
    boton3.click(function(){
        $(mapa).css({fill:"#3E8C51"})  
    });
    $(function(){
        $(Pais).on('click',function(){

        $('#span1').text(info_paises[this.id].suicidios)
        $('#span2').text(info_paises[this.id].psiquiatras)
        $('#span3').text(info_paises[this.id].indice)
        $('#span_Pais').text(this.id)
        
    


        });
        
        console.log('funciono');   
    });


    

});
const info_paises = {

    Chile: {
        psiquiatras: 0.99,
        suicidios: 10.6,
        indice: 99.9
    }, 
    Afghanistan: {
        psiquiatras: 0.16,
        suicidios: 4.7,
        Indice: 0
    },
    Albania: {
        psiquiatras: 1.83,
        Suicidios: 6.3,
        indice: 0
    },
    Algeria: {
        psiquiatras: 1.55,
        Suicidios: 3.2,
        Indice: 0
    },
    Andorra: {
        psiquiatras: 6.92,
        Suicidios: 4.7,
        Indice: 0
    },
    AntiguayBarbuda: {
        psiquiatras: 1.13,
        Suicidios: 0.5,
        Indice: 0
    },

}


// llamar objeto const en paises.js, buscar .Pais nombre y darme las caracterizticas de ese pais       

