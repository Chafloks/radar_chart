

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
    Promise.all([d3.json(url1),d3.json(url2)]).then(function(data){
        growth = data;
        var growth_url1 = data[0].growth_rate.url
        var growth_url2 = data[1].growth_rate.url
  
        Promise.all([d3.json(growth_url1),d3.json(growth_url2)]).then(function(data_growth){
          var levels1 = data_growth[0].levels
          var experience1 = [];
          var numbs = [];
          var levels2 = data_growth[1].levels
          var experience2 = [];
          for (i=0;i<levels1.length;i++){
            experience1.push(levels1[i].experience)
            numbs.push(i)
          };
          for (i=0;i<levels2.length;i++){
            experience2.push(levels2[i].experience)
          };
          var ctx = document.getElementById('myChart1').getContext('2d');
              var myLineChart = new Chart(ctx, {
                  type: 'line',
                  data: {
                      datasets: [{
                          label: `${pokemon1}`,
                          data: experience1,
                          borderColor: "#000080"
                      },
                      {
                        label: `${pokemon2}`,
                        data: experience2,
                        borderColor: "#FF0000"
                      }],
                      labels: numbs
                  }
              }).Line(data, {
                responsive: true,
                maintainAspectRatio: false
              });
        });
      });
};
// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);