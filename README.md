# bed2013_3dvis

Elevation data from the Bed2013 elevation product with 3D visualisation

Need to add more to this...

## Things to note

webgl doesn't work on phone browsers....

## Other things to try:

[   ] remove no data values from the array 

[   ] set axis limits

[   ] add inset map

[   ] remove zoom buttons (or at least place them specifically)

[   ] centre the colorbar zero (i.e. for diverging, have 0 as white)

[   ] 2d density plots with slider to show differences between DEMs: [https://plot.ly/javascript/2d-density-plots/](https://plot.ly/javascript/2d-density-plots/)



## Selectable drainage basins (JavaScript)

Original data: CSV file: 
	E:/CHRIS_WILLIAMS/data/drainage_basins/zwally2012_drainage_basins

Polygon conversion: 
	~\GitHub\Bristol_data\Bristol_data\drainage_basins\create_drainage_basin_polys_and_raster.py

Polygons: 
	O:\Documents\CHRIS_Bristol\greenland_drainage_basin\polygons_from_zwalley_xyz\*.shp

Convert to geojson - open polygons in qgis and save as geojson there: 
	O:\Documents\CHRIS_Bristol\greenland_drainage_basin\polygons_from_zwalley_xyz\all_basins_composite.geojson
	~\GitHub\bed2013_3dvis\data\all_basins_composite.geojson

Implement the zoomable interface: https://bl.ocks.org/mbostock/4699541

On click, make window avaialble to view topography in 3D (then link to the code amended to view the specific area as in: C:\GitHub\bed2013_3dvis\js\vis3d.js)


### d3 help:

[http://www.recursion.org/d3-for-mere-mortals/](http://www.recursion.org/d3-for-mere-mortals/)
	
[https://d3js.org/](https://d3js.org/)
	
geojson: [http://geojson.io/#map=2/20.1/0.0](http://geojson.io/#map=2/20.1/0.0)