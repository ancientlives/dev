/**
 * build a scatterplot - using scales with d3
 */

//sample D3 array
var dataset = [
		[110, 25], [142, 155], [203, 69], [180, 105], [14, 95], [75, 92], [63, 35], [72, 192], [312, 13], [21, 139], [222, 27]
	];
				  
//specify width and height
var w = 500;
var h = 500;
	
var scaleX = d3.scale.linear()
	.domain([0, d3.max(dataset, function(d) { return d[0]; })])
	.range([0, w-30]);//set output range from 0 to width of svg - minus 30 etc to ensure circles fit on svg
		
var scaleY = d3.scale.linear()
	.domain([0, d3.max(dataset, function(d) { return d[1]; })])
	.range([0, h-30]);//set output range from 0 to height of svg - minus 30 etc to ensure circles fit on svg
	
//create svg and add to the DOM
var svg = d3.select('#test-container').append('svg').attr('width', w).attr('height', h);
	
//add simple circles to the svg for our scatterplot
svg.selectAll('circle')
	.data(dataset)
	.enter()
	.append('circle')
	.attr('cx', function(d) {
		return scaleX(d[0]);
	})
	.attr('cy', function(d) {
		return scaleY(d[1]);
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
		return scaleX(d[0])+(Math.sqrt(d[1]));//modify label x position to match new scale values & set posn relative to r for circle...
	})	
	.attr('y', function(d) {
		return scaleY(d[1]);//modify label y position to match new scale values
	})
	.attr('font-family', 'serif')
	.attr('font-size', '11px')
	.attr('fill', 'black');