/**
  * basic drawing with d3
  **/

//sample D3 array
var data = [1, 5, 10, 15, 20];

//set title
d3.select('#test-container').append('h5').text('Basic drawing - add text');	
//append p element, add some text, and set css class with attr
d3.select('#test-container').append('p').text('genius is 1% inspiration, 99% perspiration').attr('class', 'text');
	
//set title 2
d3.select('#test-container2').append('h5').text('Basic drawing - add circles');
//create svg variable for #test2 - acts as a reference to the svg object
var svg = d3.select('#test-container2').append('svg');
//width and height
var w = 750;
var h = 200;

//set width and height for svg
svg.attr('width', w).attr('height', h);
//create some test circles from data
var circles = svg.selectAll('circle').data(data).enter().append('circle');

//set positions and sizes for circles
circles.attr('cx', function(d, i) {//in svg, cx is the x position value of the centre of the circle
	return (i * 50) + 25;//i is the numeric index value from the data loop
}).attr('cy', h/2)//cy is the y position value in the centre of the circle
   .attr('r', function (d) {//r is the radius of the circle
		return d;
	});

//add some colour to the circles...
circles.attr('fill', 'navy')
		.attr('stroke', 'pink')
		.attr('stroke-width', function (d) {
			return d/2;
		});
		
//set title 3
d3.select('#test-container3').append('h5').text('Basic drawing - add rectangles');
//create svg variable for #test2 - acts as a reference to the svg object
var svg2 = d3.select('#test-container3').append('svg');
//width and height
var w = 750;
var h = 200;

//set width and height for svg
svg2.attr('width', w).attr('height', h);
//create some test rectangles from data
var rects = svg2.selectAll('rect').data(data).enter().append('rect');

//set positions and sizes for rectangles
rects.attr('x', function(d, i) {
		return (i * 50) + 35;
		})
		.attr ('y',  h/2)
		.attr('width', 20
		
		)
		.attr('height', 40
		
		);

//add some colour to the circles...
rects.attr('fill', 'navy')
		.attr('stroke', 'pink')
		.attr('stroke-width', function (d) {
			return d/2;
		});