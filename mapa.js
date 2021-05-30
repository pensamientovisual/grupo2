$(document).ready(function(){
    var Pais = $(".Pais");
    var mapa = $("#mapa");
    var chile = $("#Chile");
    var boton1 = $("#boton1");
    var boton2 = $("#boton2");
    var boton3 = $("#boton3");

    Pais.mouseenter(function(){
      $(this).fadeTo("fast", 0.5);
    
    });
    
    Pais.mouseleave(function(){
        $(this).fadeTo("fast", 1);
    });



    $(function(){
        $(Pais).on('click',function(){

        $('#span1').text(info_paises[this.id].suicidios +" " + "Personas")
        $('#span2').text(info_paises[this.id].psiquiatras +" " + "Psiquiatras")
        $('#span3').text(info_paises[this.id].indice +" " + "ICV")
        $('#Pais_referenciado').text(this.id)
        
    


        });
        
    });

});

const info_paises = {

    Alemania: {
        psiquiatras: 15.23,
        suicidios: 13.6,
        indice: 176.76
    },
    Arabia_Saudita: {
        psiquiatras: 2.91,
        suicidios: 3.2,
        indice: 147.37
    },
    Argentina:{
        psiquiatras: 0,
        suicidios: 9.2,
        indice: 110.50
    },
    Australia: {
        psiquiatras: 12.76,
        suicidios: 13.2,
        indice: 181.52
    },
    Austria: {
        psiquiatras: 19.71,
        suicidios: 15.6,
        indice: 181.52
    },
    Azerbaiyan: {
        psiquiatras: 5.08,
        suicidios: 2.6,
        indice: 102.88
    },
    Banglades: {
        psiquiatras: 0.07,
        suicidios: 5.9,
        indice: 65.27
    },
    Bielorrusia: {
        psiquiatras: 8.77,
        suicidios: 26.2,
        indice: 107.35
    },
    Bosnia_y_Herzegovina: {
        psiquiatras: 4.95,
        suicidios: 8.8,
        indice: 125.71
    },
    Brasil: {
        psiquiatras: 3.07,
        suicidios: 6.5,
        indice: 104.75
    },
    Bulgaria: {
        psiquiatras: 6.75,
        suicidios: 4.6,
        indice: 0.83
    },
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
    Barein: {
        psiquiatras: 8.18,
        suicidios: 5.9,
        indice: 0
    },
    Barbados: {
        psiquiatras: 4.29,
        suicidios: 0.8,
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
    Botsuana: {
        psiquiatras: 0.25,
        suicidios: 9.3,
        indice: 0
    },
    Brunei: {
        psiquiatras: 0.98,
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
    },
    Belgica: {
        Psiquiatras: 18,
        suicidios: 20.7,
        indice:150.89
    },
    Canada: {
        psiquiatras: 12.61,
        suicidios: 12.5,
        indice: 159.99
    },
    Colombia: {
        psiquiatras: 2.5,
        suicidios: 7.2,
        indice: 101.33
    },
    Corea_del_Sur: {
        psiquiatras: 5.12,
        suicidios: 26.9,
        indice: 130.02
    },
    Republica_Checa: {
        psiquiatras: 11.85,
        suicidios: 13.1,
        indice: 156.33
    },
    Dinamarca: {
        psiquiatras: 14.12,
        suicidios: 12.6,
        indice: 190.41
    },
    Eslovaquia: {
        psiquiatras: 11.48,
        suicidios: 12.8,
        indice: 149.68
    },
    Eslovenia: {
        psiquiatras: 7.06,
        suicidios: 8.7,
        indice: 168.2
    },
    España: {
        psiquiatras: 8.59,
        suicidios: 8.7,
        indice: 164.48
    },
    Estados_Unidos: {
        psiquiatras: 7.79,
        suicidios: 15.3,
        indice: 166.98
    },
    Estonia: {
        psiquiatras: 13.5,
        suicidios: 17.8,
        indice: 173.56
    },
    Finlandia: {
        psiquiatras: 28.06,
        suicidios: 15.9,
        indice: 182.79
    },
    Francia: {
        psiquiatras:22.35,
        suicidios: 17.7,
        indice:150.73
    },
    Grecia: {
        psiquiatras: 12.88,
        suicidios: 5,
        indice: 129.86
    },
    Hungria: {
        psiquiatras: 6.52,
        suicidios: 19.1,
        indice: 134.01
    },
    Islandia: {
        psiquiatras: 19.74,
        suicidios: 14,
        indice: 179.1
    },
    Irlanda: {
        psiquiatras: 6.06,
        suicidios: 11.5,
        indice: 150.89
    },
    Israel: {
        psiquiatras: 8.24,
        suicidios: 5.4,
        indice: 144.14
    },
    Italia: {
        psiquiatras: 7.81,
        suicidios: 8.2,
        indice: 138.63
    },
    Japon: {
        psiquiatras: 10.1,
        suicidios: 18.5,
        indice: 162.32
    },
    Lituania: {
        psiquiatras: 17.76,
        suicidios: 39.9,
        indice: 160.02
    },
    Luxemburgo: {
        psiquiatras: 21.15,
        suicidios: 13.5,
        indice: 173.81
    },
    Letonia: {
        psiquiatras: 10.85,
        suicidios: 21.2,
        indice: 147.59
    },
    Mexico: {
        psiquiatras: 1.57,
        suicidios: 5.1,
        indice: 120.29
    },
    Noruega: {
        psiquiatras: 30.77,
        suicidios: 12.2,
        indice: 173.57
    },
    Nueva_Zelanda: {
        psiquiatras:9.76,
        suicidios: 12.1,
        indice:175.77
    },
    Paises_Bajos: {
        psiquiatras: 18.77,
        suicidios: 12.6,
        indice: 183.31
    },
    Polonia: {
        psiquiatras: 5.13,
        suicidios: 16.2,
        indice: 132.65
    },
    Portugal: {
        psiquiatras:6.14,
        suicidios: 14,
        indice: 161.91
    },
    Reino_Unido: {
        psiquiatras: 11,
        suicidios: 8.9,
        indice: 158.99
    },
    Suiza: {
        psiquiatras: 41.42,
        suicidios: 17.2,
        indice: 190.82
    },
    Suecia: {
        psiquiatras: 3.55,
        suicidios: 14.8,
        indice: 171.4
    },
    Turquia:{
        psiquiatras: 2.13,
        suicidios: 7.3,
        indice: 125.97
    }
    

}


// llamar objeto const en paises.js, buscar .Pais nombre y darme las caracterizticas de ese pais       

