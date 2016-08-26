//Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv', function(err, rows){
Plotly.d3.csv('https://raw.githubusercontent.com/Chris35Wills/bed2013_3dvis/gh-pages/data/dem2012_5km.csv', function(err, rows){
function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}
  
var z_data=[ ]
for(i=0;i<rows.length;i++) // for dem2015_5km --> need to remove hardwiring
{
  z_data.push(unpack(rows,i)); // push appends things
}

//remove no data values from array
no_data=-9999.0

for(i=0;i<z_data.length;i++) // for dem2015_5km --> need to remove hardwiring
{
  if(z_data[i]==no_data){
  	z_data[i]=' '
  }
}

var data = [{
           z: z_data,
           type: 'surface'
        }];

var layout = {
  title: 'Bedmap 2013c',
  xaxis: {
    title: 'Year',
  },
  yaxis: {
    title: 'Percent',
  },
  zaxis: {
    title: 'Elevation',
  }
};

Plotly.newPlot('mydiv', data, layout);

});

