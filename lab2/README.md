Welcome to the README file for my lab 2 project!

Link to map: https://ubc-geob472-spring2020.github.io/tracyw04-web/lab2/cancers.html

Reflective analysis: My goal within this interactive map was to map out lung and bronchus cancer mortality per state in the U.S.A. in 2016.
The purpose of this map was to show if there are changes in total deaths in U.S.A. over different states, as well as point out the main states with the most number
of deaths. The purpose is to show the general audience, as well as state parties the states most affected, which can be beneficial when enacting state-specific 
health policies. The center of the map was based on the coordinates of the U.S. Hence, I took data from the CDC WONDER U.S.A. lung and bronchus cancer mortality for all genders for 2016. I then merged 
to a geojson file so that I could create a chloropleth map. The idea was that I would create a chloropleth map that could allow interactivity to show how many deaths
and crude rates per state. 

The base map was chosen to be a simple grey for the background, as I wanted to highlight the area of the map (USA) and contrast the grey with the 
chloropleth parts. I decided to include a few context layers, namely state boundaries, waterbodies and names of country/states. The rest
were ommitted as they were irrelevant to the data I was plotting. These variables would provide insight on all the states of the USA (if
audience members were unfamiliar with the geography of the USA). Divisions were chosen based off of regular divisions, since the 
crude rates ranged from 15-60%. I wanted areas of higher values to be darker, and have a negative connotation (since the variable is death) so I 
picked a gradient from light yellow to dark red. Visual hierachy was accomplished by using these dark colors on top of the grey background and
in contrast with the lighter colors of the gradient. The effect came out nice, as it's quite easy to read. 

Collaborations: 