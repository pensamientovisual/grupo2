// seleccionar el mapa, seleccionar cada pais(select all(pais)),  .attr('fill',d => {(funcion que busca el dato segun el pais)})
// var palet1 = {"#662932", "#B04756", "#CC5264", "#E65C70", "#F26177"};


// var minDocCount = 0, quantiles = {};
d3.csv('psiquiatras.csv', function(data){
    var pais = d3.map(data, function(d){return d.Country;}).keys()
    var psiqui = d3.map(data, function(d){return d.Value;}).keys()
    
    var Mycolor = d3.scaleSequential().interpolator(d3.interpolateInferno).domain([1,100])  

    svg.selectAll()
        .data(data, function(d) {return d.Country+ ':' +d.Value;})
        .enter()
        .style('fill',function(d) {return Mycolor(d.Country)})
})  
