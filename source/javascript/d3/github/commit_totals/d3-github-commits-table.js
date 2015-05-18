/**
 * commit totals - monthly and cumulative table
 **/

//test data from github
var json_obj = [{"days":[6,18,11,5,12,2,10],"total":64,"week":1400371200},{"days":[7,6,9,9,11,2,2],"total":46,"week":1400976000},{"days":[3,5,4,2,9,17,15],"total":55,"week":1401580800},{"days":[9,11,9,11,10,1,10],"total":61,"week":1402185600},{"days":[10,20,10,3,8,7,6],"total":64,"week":1402790400},{"days":[4,13,5,6,6,2,1],"total":37,"week":1403395200},{"days":[2,10,8,8,2,4,10],"total":44,"week":1404000000},{"days":[3,6,4,5,8,6,5],"total":37,"week":1404604800},{"days":[10,10,7,9,1,0,0],"total":37,"week":1405209600},{"days":[0,9,4,5,11,12,17],"total":58,"week":1405814400},{"days":[8,5,16,6,3,6,8],"total":52,"week":1406419200},{"days":[9,12,5,1,11,9,4],"total":51,"week":1407024000},{"days":[4,7,8,11,11,10,2],"total":53,"week":1407628800},{"days":[2,9,16,6,7,8,10],"total":58,"week":1408233600},{"days":[3,3,14,10,6,11,4],"total":51,"week":1408838400},{"days":[3,3,9,2,8,18,12],"total":55,"week":1409443200},{"days":[4,14,7,10,2,8,3],"total":48,"week":1410048000},{"days":[3,4,8,10,6,7,4],"total":42,"week":1410652800},{"days":[10,5,9,12,4,5,6],"total":51,"week":1411257600},{"days":[1,8,3,1,5,1,10],"total":29,"week":1411862400},{"days":[2,5,6,8,9,5,8],"total":43,"week":1412467200},{"days":[3,4,8,12,4,6,5],"total":42,"week":1413072000},{"days":[10,8,7,9,7,7,2],"total":50,"week":1413676800},{"days":[1,10,5,4,13,11,1],"total":45,"week":1414281600},{"days":[0,10,8,9,3,2,1],"total":33,"week":1414886400},{"days":[4,10,10,10,10,3,40],"total":87,"week":1415491200},{"days":[11,17,21,14,13,11,16],"total":103,"week":1416096000},{"days":[5,13,12,7,12,9,13],"total":71,"week":1416700800},{"days":[3,13,8,11,11,7,11],"total":64,"week":1417305600},{"days":[3,6,6,0,10,3,8],"total":36,"week":1417910400},{"days":[11,10,3,12,6,7,3],"total":52,"week":1418515200},{"days":[5,3,14,11,2,16,9],"total":60,"week":1419120000},{"days":[3,9,10,8,8,12,14],"total":64,"week":1419724800},{"days":[1,8,8,6,10,12,16],"total":61,"week":1420329600},{"days":[10,12,10,8,7,12,32],"total":91,"week":1420934400},{"days":[22,10,6,4,3,6,1],"total":52,"week":1421539200},{"days":[3,7,9,8,8,11,2],"total":48,"week":1422144000},{"days":[4,2,13,9,12,10,9],"total":59,"week":1422748800},{"days":[9,15,15,12,11,6,15],"total":83,"week":1423353600},{"days":[7,17,7,7,5,9,16],"total":68,"week":1423958400},{"days":[16,7,4,7,4,6,5],"total":49,"week":1424563200},{"days":[1,5,6,10,9,4,12],"total":47,"week":1425168000},{"days":[8,8,7,7,11,8,1],"total":50,"week":1425772800},{"days":[5,8,9,6,3,11,8],"total":50,"week":1426377600},{"days":[15,2,2,2,6,4,8],"total":39,"week":1426982400},{"days":[1,6,8,19,9,5,7],"total":55,"week":1427587200},{"days":[1,4,4,6,4,0,3],"total":22,"week":1428192000},{"days":[0,14,12,2,5,3,3],"total":39,"week":1428796800},{"days":[5,8,5,2,3,15,4],"total":42,"week":1429401600},{"days":[1,6,4,5,5,4,6],"total":31,"week":1430006400},{"days":[3,3,5,3,5,4,7],"total":30,"week":1430611200},{"days":[0,3,1,8,1,1,0],"total":14,"week":1431216000}];

var data = json_obj;

//sum daily values for weekly total
function weeklySum (dataArray, i) {
	var weeklySum = d3.sum(dataArray[i].days);
	return weeklySum;
}

//sum weekly values for yearly total
function yearSum (dataArray) {
	var yTotal = [];

	dataArray.forEach(function(d, i) {
		yTotal.push(d.total);
	});

	var sumYear = d3.sum(yTotal);
	return sumYear;
}

//get months from weeks & add weekly totals
function monthNos (dataArray) {
	var repoMonths = [];
	var weekMonths = [];

	dataArray.forEach(function(d, i) {
		//week as unix time
		var week = d.week;
		var weekTotal = d.total;
		//convert unix time for js
		var date = new Date(week*1000);
		var month = new Array();
		month[0] = "January";
		month[1] = "February";
		month[2] = "March";
		month[3] = "April";
		month[4] = "May";
		month[5] = "June";
		month[6] = "July";
		month[7] = "August";
		month[8] = "September";
		month[9] = "October";
		month[10] = "November";
		month[11] = "December";
		//extract month no. from date
		var monthNo = month[date.getMonth()];
	
		var obj = {};	
		obj['month'] = monthNo;
		obj['weekTotal'] = weekTotal;
		weekMonths.push(obj);	
	});

	return weekMonths;
}

function buildTable(tableData, tableColumns, container) {	
		
	var table = d3.select(container).append('table')
		.classed('table table-bordered', 'true'),
		thead = table.append('thead'),
		tbody = table.append('tbody');
		
	//append the header row
	thead.append('tr')
		.selectAll('th')
		.data(tableColumns)
		.enter()
		.append('th')
		.text(function(column) { return column; });
	
	console.log(tableData);
	var cArray = [];
				
	var rows = tbody.selectAll('tr')
		.data(tableData)
		.enter()
		.append('tr')
		.html(function(d, i) {
	var monTotal = d.values['month_total']
	cArray.push(monTotal);
	var cTotal = d3.sum(cArray);
		return '<td>' + d.key + '</td><td>' + d.values['month_total'] + '</td><td>' 
				+ d.values['length'] + '</td><td>' + cTotal + '</td>';
	});
	
}

//sum all totals to get year total...
var yearlyTotal = yearSum(data);
//create objects with month and weekly totals...
var monthNum = monthNos(data);
	
//create nest, get length per leaf, and sum leafs to get total per month...
var nest = d3.nest()
	.key(function (d, i) { return d.month; })
	.rollup(function(leaves) { 
	return {
	"length": leaves.length, "month_total": d3.sum(leaves, function(d) {return parseFloat(d.weekTotal);})
	} 
	})
	.entries(monthNum);

//output table title
d3.select('#test-container').append('h5').text('Yearly total = ' + yearlyTotal);

//build table and render
buildTable(nest, ['month', 'total commits', 'weeks', 'cumulative sum'], "#test-container");