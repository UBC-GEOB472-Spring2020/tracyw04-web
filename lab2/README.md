Lung and bronchus cancer mortality rate per state in the U.S.A. in 2016

Welcome to the README file for my lab 2 project!

Link to map: https://ubc-geob472-spring2020.github.io/tracyw04-web/lab2/cancers.html

Reflective analysis: My goal within this interactive map was to map out lung and bronchus cancer mortality rate per state in the U.S.A. in 2016.
The purpose of this map was to show if there are changes in total deaths in U.S.A. over different states, as well as point out the main states with the highest mortality rates. I hence normalized all total deaths by population to get the mortality rate. The purpose is to show the general audience, as well as state parties the states most affected, which can be beneficial when enacting state-specific 
health policies. The center of the map was based on the coordinates of the U.S. Hence, I took data from the CDC WONDER U.S.A. lung and bronchus cancer mortality for all genders for 2016. I then merged 
to a geojson file so that I could create a chloropleth map. The idea was that I would create a chloropleth map that could allow interactivity to show how many total deaths there were per state. 

The base map was chosen to be a simple grey for the background, as I wanted to highlight the area of the map (USA) and contrast the grey with the 
chloropleth parts. I decided to include a few context layers, namely state boundaries, waterbodies and names of country/states. The rest
were ommitted as they were irrelevant to the data I was plotting. These variables would provide insight on all the states of the USA (if
audience members were unfamiliar with the geography of the USA). Divisions were chosen based off of regular divisions, since the 
crude rates ranged from 15-60%. I wanted areas of higher values to be darker, and have a negative connotation (since the variable is death) so I 
picked a gradient from light yellow to dark red. Visual hierachy was accomplished by using these dark colors on top of the grey background and
in contrast with the lighter colors of the gradient. The effect came out nice, as it's quite easy to read. 
![Capture](https://user-images.githubusercontent.com/39570002/76267083-d7619f80-6226-11ea-9e62-832cf3fb880b.PNG) illustrates this concept well. 
Improvements to this map perhaps having a search engine, or listing the top states affected and by how much. 

Collaborations: Although I had a hovering thing to identify the Deaths, Crude Rate and State, my friend recommended that I still put a legend
as it could help for first glance. Additionally, my friend recommended I use a better font for my states, as the holo made it hard to read. 
I decided to put a legend in, but it was very hard and it was glitching quite a bit. I finally managed to get it working :)
 Data source: https://wonder.cdc.gov/cancer.html