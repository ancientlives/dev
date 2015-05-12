/**
 * build a scatterplot with d3
 */

//sample D3 dataset
var dataset = [
	[110, 25], [142, 155], [223, 89], [130, 125], [154, 95], [50, 92], [93, 52], [72, 192], [312, 13], [21, 139], [222, 27]
];
	 
//specify width and height
var w = 500;
var h = 400;
	
//create svg and add to the DOM
var svg = d3.select('#test-container').append('svg').attr('width', w).attr('height', h);
	
//add simple circles to the svg for our scatterplot
svg.selectAll('circle')
	.data(dataset)
	.enter()
	.append('circle')
	.attr('cx', function(d) {
		return d[0];
	})
	.attr('cy', function(d) {
		return d[1];
	})
	.attr('r', function(d) {
		return Math.sqrt(d[1]);
	}
	)
	.attr('fill', function (d) {
	return 'rgb(125,' + (d[1]) + ', ' + (d[1] * 2) + ')';//colour is set relative to data per circle
	});
		
//add labels for each circle
svg.selectAll('text')
	.data(dataset)
	.enter()
	.append('text')
	.text(function(d) {
		return d[0] + ', ' + d[1];//set each data point on the text label
	})
	.attr('x', function(d) {
		return d[0]+(Math.sqrt(d[1]));//set label x position relative to r for each circle (label always on right edge of circle)
	})	
	.attr('y', function(d) {
		return d[1];
	})
	.attr('font-family', 'serif')
	.attr('font-size', '11px')
	.attr('fill', 'black');