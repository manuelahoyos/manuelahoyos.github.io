# Natural Disasters Analysis
Group project in which data about natural disasters around the globe were analyzed and results were visualized using Python, Pandas, Matplotlib, JavaScript, D3 and HTML/CSS.
The objective was to analyze if the change in average land temperature has an effect the on number of tsunamis, number of volcanic eruptions, number of earthquakes with magnitude of 5.5 and higher, and magnitude of earthquakes.

## Average Land Temperature Change Over the Years:

The dataset 'GlobalLandTemperatures_ByCountry.csv' was cleaned using Python and Pandas, to extract the average land temperature of specific countries during the years 1960 - 2013 using Matplotlib. 

<img src="images/land_tempIndex.png" width="900">

## Number of Tsunamis Over the Years:

The dataset 'Historical_Tsunami_Event_Locations.csv' was cleaned using Python and Pandas, to extract the number of tsunamis during the years 1990 - 2014 for several countries around the globe using Matplotlib. 

<img src="images/Tsunami.png" width="900">

## Number of Volcanic Eruptions Over the Years:

The dataset 'volcanoes.csv' was cleaned using Python and Pandas, to extract the number of volcanic eruptions during the years 1990 - 2013 for several countries around the globe using Matplotlib. 

<img src="images/volcanos.png" width="900">


## Number of Earthquakes Over the Years:

The dataset 'earthquakes.csv' was cleaned using Python and Pandas, to extract the number of earthquakes with a minimum magnitude of 5.5 during the years 2000 - 2013 for several countries around the globe using Matplotlib. 

<img src="images/earthquakes.png" width="900">

## Comparison:

The change in land temperature was compared to the number of tsunamis, number of volcanic eruptions and number of earthquakes with magnitudes of 5.5 and higher during specific years found in the previous analyses. 

- Comparison of number of tsunamis during the years 1990 - 2014 to the change in land temperature during the years 1990-2013, using Matplotlib. 

<img src="images/landTsunamis.png" width="800">

- Comparison of number of volcanic eruptions during the years 1990 - 2013 to the change in land temperature during the years 1990-2013, using Matplotlib. 

<img src="images/landVolcano.png" width="800">

- Comparison of the number of earthquakes with a minimum magnitude of 5.5 during the years 2000 - 2013 to the change in land temperature during the years 2000-2013, using Matplotlib. 

<img src="images/landEarthquakes.png" width="800">


## Comparison of Average Land Temperature and Earthquake Magnitude Using JavaScript and D3:

The datasets ‘GlobalLandTemperatures.csv’and ‘Earthquakes.csv’ were cleaned using Python and Pandas to calculate the average land temperature and the average magnitude of earthquakes during the years 2000 - 2012. This data was selected for the countries Turkey, Iran, Greece and Pakistan and the finalized DataFrames were exported as csv files. 

The comparison between average land temperature and average magnitude of earthquakes was plotted using JavaScript and D3. A scatterplot was created within the temp.js file using JavaScript and D3. The data was pulled from the csv files and the d3.select() function was used to append the graph into the HTML file. CSS was used for both the HTML page styling and the scatterplot styling. D3 was used for animations, transitions, click events on the y labels, and tooltips when the cursor hovers over the circles.

<img src="images/D3graphs.png" width="900">

