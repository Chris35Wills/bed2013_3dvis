
//Plotly.d3.csv('https://raw.githubusercontent.com/Chris35Wills/bed2013_3dvis/gh-pages/data/dem2012_5km.csv', function(err, rows){
//
//function unpack(rows, key) {
//  return rows.map(function(row) { return row[key]; });
//}
//  
//var z_data=[ ]
////for(i=0;i<24;i++) // as test.csv
////for(i=0;i<599;i++) // for dem2015_5km --> need to remove hardwiring
//for(i=0;i<rows.length;i++) // for dem2015_5km --> need to remove hardwiring
//{
//  z_data.push(unpack(rows,i));
//}
//
//var data = [{
//           z: z_data,
//           type: 'surface'
//        }];
//
//}
//
//Plotly.newPlot('mydiv', data, {title:'Bedmap 2013b'});
//var plotDiv = document.getElementById('mydiv');
//var plotData = plotDiv.data;

/////////////////////////////////

//Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv', function(err, rows){
Plotly.d3.csv('https://raw.githubusercontent.com/Chris35Wills/bed2013_3dvis/gh-pages/data/dem2012_5km.csv', function(err, rows){
function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}
  
var z_data=[ ]
for(i=0;i<rows.length;i++) // for dem2015_5km --> need to remove hardwiring
{
  z_data.push(unpack(rows,i));
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

//var plotDiv = document.getElementById('mydiv');
//var plotData = plotDiv.data;
//
//var axis = {
//    xaxis: {
//        title: 'x Axis',
//        titlefont: {
//          family: 'Courier New, monospace',
//          size: 18,
//          color: '#7f7f7f'
//        }
//    },
//    yaxis: {
//        title: 'y Axis',
//        titlefont: {
//          family: 'Courier New, monospace',
//          size: 18,
//          color: '#7f7f7f'
//        }
//    }
//  }
//
//Plotly.restyle('mydiv', axis)

});

