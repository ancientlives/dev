/**
 * build a scatterplot - adding axes with d3
 */

//sample D3 dataset
var dataset = [
	[110, 25], [182, 105], [23, 59], [70, 105], [14, 95], [140, 72], [63, 35], [122, 132], [260, 13], [21, 139], [222, 27]
];

//specify width and height
var w = 600;
var h = 600;
	
//define scales
var scaleX = d3.scale.linear()
	.domain([0, d3.max(dataset, function(d) { return d[0]; })])
	.range([0, w]);//set output range from 0 to width of svg
var scaleY = d3.scale.linear()
	.domain([0, d3.max(dataset, function(d) { return d[1]; })])
	.range([0, h]);//set output range from 0 to height of svg
	
//create svg and add to the DOM
var svg = d3.select('#test-container').append('svg').attr('width', w+70).attr('height', h+50);
	
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
		return scaleX(d[0])+(Math.sqrt(d[1]));//modify label x position to match new scale values
	})	
	.attr('y', function(d) {
		return scaleY(d[1]);//modify label y position to match new scale values
	})
	.attr('font-family', 'serif')
	.attr('font-size', '11px')
	.attr('fill', 'navy');
		
//define x axis for scatterplot
	var xAxis = d3.svg.axis()
		.scale(scaleX)
		.orient("bottom");
//call function to create the x axis & add styling attributes
svg.append("g")
		.attr("class", "axis")
		.call(xAxis);//in svg terms, 'g' elements can be used to contain (or 'group') other elements
		