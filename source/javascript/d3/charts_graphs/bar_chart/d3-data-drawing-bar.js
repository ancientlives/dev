/**
 * building basic bar charts with d3
 **/

//sample D3 array
var dataset = [10, 25, 42, 55, 23, 59, 30, 35, 14, 9, 50, 92, 63, 35, 72, 12, 32, 13, 21, 39, 22, 7];
	
//specify width and height
var w = 500;
var h = 200;
//add option for padding within the barchart
var padding = 1;	
	
/**
 * build a bar chart - 1
 */	
//set title
d3.select('#test-container').append('h5').text('Bar chart 1 - no correction');
//create svg and add to the DOM
var svg = d3.select('#test-container').append('svg').attr('width', w).attr('height', h);
	
svg.selectAll('rect')
	.data(dataset)
	.enter()
	.append('rect')
	.attr('x', function(d, i) {
		return i * (w / dataset.length); //works well for basic charts but D3 scales are better
	})
	.attr('y', 0)
	.attr('width', w / dataset.length - padding)//get width relative to size of data and svg width - padding
	.attr('height', function (d) {
		return d; //outputs bars from upper left corner (they grow down, not up) due to svg upper-left corner for x and y - origin is top left
	});

/**
 * build a bar chart - 2 (use existing width, height, padding, dataset...)
 */
 //set title
d3.select('#test-container2').append('h5').text('Bar chart 2 - correction');
//create svg2 and add to the DOM
var svg2 = d3.select('#test-container2').append('svg').attr('width', w).attr('height', h);
	
	svg2.selectAll('rect')
		.data(dataset)
		.enter()
		.append('rect')
		.attr('x', function(d, i) {
			return i * (w / dataset.length); //works well for basic charts but D3 scales are better
		})
		.attr('y', function (d) {
			return h - d;//set top of each bar relative to svg top left - get height minus the data value and then grow bar chart down with height
		})
		.attr('width', w / dataset.length - padding)//get width relative to size of data and svg width - padding
		.attr('height', function (d) {
			return d;
		});

/**
 * build a bar chart with colour - 3 (use existing width, height, padding, dataset...)
 */
 //set title
d3.select('#test-container3').append('h5').text('Bar chart 3 - colours');	
//create svg3 and add to the DOM
var svg3 = d3.select('#test-container3').append('svg').attr('width', w).attr('height', h);
	
svg3.selectAll('rect')
	.data(dataset)
	.enter()
	.append('rect')
	.attr('x', function(d, i) {
		return i * (w / dataset.length); //works well for basic charts but D3 scales are better
	})
	.attr('y', function (d) {
		return h - d;//set top of each bar relative to svg top left - get height minus the data value and then grow bar chart down with height
	})
	.attr('width', w / dataset.length - padding)//get width relative to size of data and svg width - padding
	.attr('height', function (d) {
		return d;
	})
	.attr('fill', function (d) {
		return 'rgb(0, 0, ' + (d * 5) + ')';//colour is set relative to data per bar
	});
	
/**
 * build a bar chart with labels - 4 (use existing width, height, padding, dataset...)
 */
 //set title
d3.select('#test-container4').append('h5').text('Bar chart 4 - values');		
//create svg4 and add to the DOM
var svg4 = d3.select('#test-container4').append('svg').attr('width', w).attr('height', h);
	
svg4.selectAll('rect')
	.data(dataset)
	.enter()
	.append('rect')
	.attr('x', function(d, i) {
		return i * (w / dataset.length); //works well for basic charts but D3 scales are better
	})
	.attr('y', function (d) {
		return h - d;//set top of each bar relative to svg top left - get height minus the data value and then grow bar chart down with height
	})
	.attr('width', w / dataset.length - padding)//get width relative to size of data and svg width - padding
	.attr('height', function (d) {
		return d;
	})
	.attr('fill', function (d) {
	return 'rgb(0, 0, ' + (d * 5) + ')';//colour is set relative to data per bar
	});
		
	//add text to bar chart
	svg4.selectAll('text')
		.data(dataset)
		.enter()
		.append('text')
		.text( function(d) {
			return d;
		})
		.attr('x', function(d, i) {
			return i * (w / dataset.length) + ((w / dataset.length) / 2) - 6; //set posn of text tp centred in bar... -6 for font-size / 2
		})
		.attr('y', function(d, i) {
			return h - (d) - 5;//set labels to the top of the bars with some taken off (-5) to move above bar itself
		})
		.attr('font-family', 'serif')
		.attr('font-size', '12px')
		.attr('fill', 'navy'); 
		
		