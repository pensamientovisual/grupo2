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
        $('#Pais_referenciado').text(this.id)
        
    


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
        indice: 0
    },
    Albania: {
        psiquiatras: 1.83,
        suicidios: 6.3,
        indice: 0
    },
    Algeria: {
        psiquiatras: 1.55,
        suicidios: 3.2,
        indice: 0
    },
    Andorra: {
        psiquiatras: 6.92,
        suicidios: 4.7,
        indice: 0
    },
    AntiguayBarbuda: {
        psiquiatras: 1.13,
        suicidios: 0.5,
        indice: 0
    },
    Armenia: {
        psiquiatras: 4.04,  
        suicidios: 6.6,
        indice: 0
    },
    Australia: {
        psiquiatras: 12.76,
        suicidios: 13.2,
        indice: 182.37
    },
    Austria: {
        psiquiatras: 19.71,
        suicidios: 15.6,
        indice: 181.52
    },
    Azerbaijan: {
        psiquiatras: 5.08,
        suicidios: 2.6,
        indice: 102.88
    },
    Barein: {
        psiquiatras: 8.18,
        suicidios: 5.9,
        indice: 0
    },
    Banglades: {
        psiquiatras: 0.07,
        suicidios: 5.9,
        indice: 65.27
    },
    Barbados: {
        psiquiatras: 4.29,
        suicidios: 0.8,
        indice: 0
    },
    Bielorussia: {
        psiquiatras: 8.77,
        suicidios: 26.2,
        indice: 0
    },
    Belice: {
        psiquiatras: 0.96,
        suicidios: 26.2,
        indice: 0
    },
    Benin: {
        psiquiatras: 0.14,
        suicidios: 9.9,
        indice: 0
    },
    Butan: {
        psiquiatras: 0.28,
        suicidios: 11.4,
        indice: 0
    },
    Bolivia: {
        psiquiatras: 1.06,
        suicidios: 12.2,
        indice: 0
    },
    BosniayHerzegovina: {
        psiquiatras: 4.95,
        suicidios: 8.8,
        indice: 125.71
    },
    Botsuana: {
        psiquiatras: 0.25,
        suicidios: 9.3,
        indice: 0
    },
    Brasil: {
        psiquiatras: 3.07,
        suicidios: 6.5,
        indice: 104.75
    },
    Brunei: {
        psiquiatras: 0.98,
        suicidios: 4.6,
        indice: 0.83
    },
    Bulgaria: {
        psiquiatras: 6.75,
        suicidios: 4.6,
        indice: 0.83
    },
    Burkina_Faso: {
        psiquiatras: 0.04,
        suicidios: 7.7,
        indice: 0
    },
    Burundi: {
        psiquiatras: 0.01,
        suicidios: 9.1,
        indice: 0
    },
    Cabo_verde: {
        psiquiatras: 1.37,
        suicidios: 11.3,
        indice: 0
    },
    Cambodia: {
        psiquiatras: 0.23,
        suicidios: 5.3,
        indice: 0
    },
    Camerun: {
        psiquiatras: 0.03,
        suicidios: 12.2,
        indice: 0
    }


}


// llamar objeto const en paises.js, buscar .Pais nombre y darme las caracterizticas de ese pais       

