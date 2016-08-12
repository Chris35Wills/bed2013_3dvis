// the csv is literally just an ascii file... https://github.com/plotly/datasets/blob/master/api_docs/mt_bruno_elevation.csv
// e.g.
// 1 1 2 2 
// 1 1 2 2 
// 1 1 2 2 
// 1 1 2 2 


//Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv', function(err, rows){
Plotly.d3.csv('https://raw.githubusercontent.com/Chris35Wills/bed2013_3dvis/gh-pages/data/dem2012_5km.csv', function(err, rows){
function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}
  
var z_data=[ ]
for(i=0;i<24;i++)
{
  z_data.push(unpack(rows,i));
}

var data = [{
           z: z_data,
           type: 'surface'
        }];
  
var layout = {
  title: 'Bedmap 2013',
  autosize: false,
  width: 800,
  height: 800,
  margin: {
    l: 65,
    r: 50,
    b: 65,
    t: 90,
  }
};
  //},
  //xaxis: {
  //  title: 'Easting',
  //},
  //yaxis: {
  //  title: 'Northing',
  //}
//};
Plotly.newPlot('myDiv', data, layout);
});
