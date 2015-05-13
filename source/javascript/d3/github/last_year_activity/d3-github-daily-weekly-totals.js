/**
 * last year of commit data including daily and weekly - output as bar chart using d3
 **/

//test data from github
var json_obj = [{"days":[6,18,11,5,12,2,10],"total":64,"week":1400371200},{"days":[7,6,9,9,11,2,2],"total":46,"week":1400976000},{"days":[3,5,4,2,9,17,15],"total":55,"week":1401580800},{"days":[9,11,9,11,10,1,10],"total":61,"week":1402185600},{"days":[10,20,10,3,8,7,6],"total":64,"week":1402790400},{"days":[4,13,5,6,6,2,1],"total":37,"week":1403395200},{"days":[2,10,8,8,2,4,10],"total":44,"week":1404000000},{"days":[3,6,4,5,8,6,5],"total":37,"week":1404604800},{"days":[10,10,7,9,1,0,0],"total":37,"week":1405209600},{"days":[0,9,4,5,11,12,17],"total":58,"week":1405814400},{"days":[8,5,16,6,3,6,8],"total":52,"week":1406419200},{"days":[9,12,5,1,11,9,4],"total":51,"week":1407024000},{"days":[4,7,8,11,11,10,2],"total":53,"week":1407628800},{"days":[2,9,16,6,7,8,10],"total":58,"week":1408233600},{"days":[3,3,14,10,6,11,4],"total":51,"week":1408838400},{"days":[3,3,9,2,8,18,12],"total":55,"week":1409443200},{"days":[4,14,7,10,2,8,3],"total":48,"week":1410048000},{"days":[3,4,8,10,6,7,4],"total":42,"week":1410652800},{"days":[10,5,9,12,4,5,6],"total":51,"week":1411257600},{"days":[1,8,3,1,5,1,10],"total":29,"week":1411862400},{"days":[2,5,6,8,9,5,8],"total":43,"week":1412467200},{"days":[3,4,8,12,4,6,5],"total":42,"week":1413072000},{"days":[10,8,7,9,7,7,2],"total":50,"week":1413676800},{"days":[1,10,5,4,13,11,1],"total":45,"week":1414281600},{"days":[0,10,8,9,3,2,1],"total":33,"week":1414886400},{"days":[4,10,10,10,10,3,40],"total":87,"week":1415491200},{"days":[11,17,21,14,13,11,16],"total":103,"week":1416096000},{"days":[5,13,12,7,12,9,13],"total":71,"week":1416700800},{"days":[3,13,8,11,11,7,11],"total":64,"week":1417305600},{"days":[3,6,6,0,10,3,8],"total":36,"week":1417910400},{"days":[11,10,3,12,6,7,3],"total":52,"week":1418515200},{"days":[5,3,14,11,2,16,9],"total":60,"week":1419120000},{"days":[3,9,10,8,8,12,14],"total":64,"week":1419724800},{"days":[1,8,8,6,10,12,16],"total":61,"week":1420329600},{"days":[10,12,10,8,7,12,32],"total":91,"week":1420934400},{"days":[22,10,6,4,3,6,1],"total":52,"week":1421539200},{"days":[3,7,9,8,8,11,2],"total":48,"week":1422144000},{"days":[4,2,13,9,12,10,9],"total":59,"week":1422748800},{"days":[9,15,15,12,11,6,15],"total":83,"week":1423353600},{"days":[7,17,7,7,5,9,16],"total":68,"week":1423958400},{"days":[16,7,4,7,4,6,5],"total":49,"week":1424563200},{"days":[1,5,6,10,9,4,12],"total":47,"week":1425168000},{"days":[8,8,7,7,11,8,1],"total":50,"week":1425772800},{"days":[5,8,9,6,3,11,8],"total":50,"week":1426377600},{"days":[15,2,2,2,6,4,8],"total":39,"week":1426982400},{"days":[1,6,8,19,9,5,7],"total":55,"week":1427587200},{"days":[1,4,4,6,4,0,3],"total":22,"week":1428192000},{"days":[0,14,12,2,5,3,3],"total":39,"week":1428796800},{"days":[5,8,5,2,3,15,4],"total":42,"week":1429401600},{"days":[1,6,4,5,5,4,6],"total":31,"week":1430006400},{"days":[2,3,5,3,5,3,5],"total":26,"week":1430611200},{"days":[0,3,0,0,0,0,0],"total":3,"week":1431216000}];

var weekly_totals = [];
var daily_totals = [];

for (var i = 0; i < json_obj.length; i++) {
    var obj = json_obj[i];
    var days = obj.days;
    for (var j = 0; j < days.length; j++) {
    	var obj2 = days[j];
    	daily_totals.push(obj2);
    }
    var total = obj.total;
    weekly_totals.push(total);
    var week_date = new Date(obj.week*1000);
} 

//width, height & bar padding
var w = 1000;
var h = 250;

//set initial scales...
var xScale = d3.scale.ordinal()
	.domain(d3.range(daily_totals.length))
	.rangeRoundBands([0, w], 0.1);
var yScale = d3.scale.linear()
	.domain([0, d3.max(daily_totals)])
	.range([0, h]);

//build the bars for the bar chart	
function buildBars(gitData, container) {
//set svg for visuals - add to chosen div etc...
var svg = d3.select(container)
	.append("svg")
	.attr("width", w)
	.attr("height", h);	

//Update scale domains
xScale.domain(d3.range(gitData.length));	
yScale.domain([0, d3.max(gitData)]);

var bars = svg.selectAll("rect").data(gitData);

//Enter…
bars.enter()								
	.append("rect")							
	.attr("x", w)							
	.attr("y", function(d) {				
	})
	//Sets the width value, based on the updated xScale
	.attr("width", xScale.rangeBand())		
	//Sets the height value, based on the updated yScale
	.attr("height", function(d) {			
		return yScale(d);
	})
	.attr("fill", function(d) {		
	//	return "rgb(" + (d * 3) + "," + (d * 2) + ", " + (d * 4) + ")";
	return "rgb(" + (d * 2) + "," + (d * 1) + ", " + (d * 7) + ")";
	});//end of enter	

//Update…
bars.transition()	
	.duration(1000)
	//Set new x position, based on the updated xScale
	.attr("x", function(d, i) {				
		return xScale(i);
	})
	//Set new y position, based on the updated yScale
	.attr("y", function(d) {				
		return h - yScale(d);
	})
	//Set new width value, based on the updated xScale
	.attr("width", xScale.rangeBand())
	//Set new height value, based on the updated yScale
	.attr("height", function(d) {			
		return yScale(d);
	});//end of update	
						
	bars.exit()
	.transition()
	.duration(1000)
	.attr("x", w)
	.remove();	
}

//create text for output	
function buildText(gitData, container) {
	//Create labels
	d3.select(container + " svg").selectAll("text")
	.data(gitData)
	.enter()
	.append("text")
	.text(function(d) {
		return d;
	})
	.attr("text-anchor", "middle")
	.attr("x", function(d, i) {
		return xScale(i) + xScale.rangeBand() / 2;
	})
	.attr("y", function(d) {
		return h - yScale(d) +8; //push numbers into bar
	})
	.attr("font-family", "sans-serif")
	.attr("font-size", "9px")
	.attr("fill", "white");
}

//output text	
function outputText(text, container) {
	d3.select(container + " h5").remove();
	d3.select(container).append("h5").text(text); 
}

//build the bar chart - daily totals		
outputText("Total commits per day", "#test-container");
buildBars(daily_totals, "#test-container");
	
//build the bar chart - daily totals		
outputText("Total commits per week", "#test-container2");
buildBars(weekly_totals, "#test-container2");
//append the data labels
buildText(weekly_totals, "#test-container2");
	
 
