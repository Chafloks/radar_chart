

// Submit Button handler
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input value from the form
    var pokemon1 = d3.select("#Pokemon1").node().value;
    console.log(pokemon1);
    var pokemon2 = d3.select("#Pokemon2").node().value;
    console.log(pokemon2);
    // clear the input value
    d3.select("#Pokemon1").node().value = "";
    d3.select("#Pokemon2").node().value = "";
    // Build the plot with the new stock
    buildPlot(pokemon1,pokemon2);
}

function buildPlot(pokemon1,pokemon2) {
    var url1 = `https://pokeapi.co/api/v2/pokemon-species/${pokemon1}`;
    var url2 = `https://pokeapi.co/api/v2/pokemon-species/${pokemon2}`;
    var obj;

    fetch(url1)
    .then(res => res.json())
    .then(data => obj = data)
    .then(() => console.log(obj))

    console.log(obj)



    
    // var data = d3.json(url1,function(data1) { 
    //     var growth_url = data1.growth_rate.url;
    //     return growth_url
    // });
    // console.log(data)
    // data.then(function(data_growth){
    //     var levels = data_growth.levels
    //     var experience = []
    //     var numbs = []
    //     for (i=0;i<levels.length;i++){
    //         experience.push(levels[i].experience)
    //         numbs.push(i+1)
    //     };
    //     console.log(experience)
    // });
};

// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);