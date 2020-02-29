function buildMetadata(sample) {

    d3.json('samples.json').then(function(sampleData) {
        
      metadata = sampleData.metadata;
      console.log(metadata);
      resultsArray = metadata.filter(sampleObject => sampleObject.id == sample);
      console.log(resultsArray);
      result = resultsArray[0];

      var panel = d3.select("#sample-metadata");
      panel.html("");
      console.log(result);
      Object.entries(result).forEach(([key, value]) => {
          panel.append('h6').text(`${key}: ${value}`);
        })

      })
}

function buildPlots(sample) {
    console.log(sample)  
    d3.json('samples.json').then(function (sampleData) {
        
        samples = sampleData.samples;
     
        resultsArray = samples.filter(sampleObject => sampleObject.id === sample);
        
        result = resultsArray[0];
        const otu_ids = result.otu_ids;
        const otu_labels = result.otu_labels;
        const sample_values = result.sample_values;


        // Bar Chart
        var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
    var barData = [
      {
        y: yticks,
        x: sample_values.slice(0, 10).reverse(),
        text: otu_labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h",
      }
    ];
    var barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      margin: { t: 50, l: 150 },
      xaxis: {title: 'OTU ID'},
    };
    
        // create the bar plot
        Plotly.newPlot("bar", barData, barLayout);


        // The bubble chart
        var bubbleData = [{
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
              size: sample_values,
              color: otu_ids,
            }
          }];      
    
          var bubbleLayout = {
            hovermode: 'closest',
            xaxis: {title: 'OTU ID'}
          };
    
          Plotly.newPlot('bubble', bubbleData, bubbleLayout);

        });
    }

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildPlots(firstSample);
    buildMetadata(firstSample)
    //buildPlots(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  
  buildPlots(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();

