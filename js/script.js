// JavaScript Document

	
	
      google.load("visualization", "1.1", {packages:["table", 'line', 'corechart']});
      google.setOnLoadCallback(initialize);
	  
	  function initialize(){
		  drawVisualization();
		  function drawVisualization(){
			  drawA();
			  drawB();
			  drawC();
			  }
		}
	// Table 
	
      function drawA() {
        var data = new google.visualization.DataTable();
		data.addColumn('number', 'Year');
		data.addColumn('number', 'Quarter');
		data.addColumn('string', 'Region');
        data.addColumn('string', 'Regional Manager');
        data.addColumn('number', 'Sales');
        data.addRows([
          [2013, 1, 'South East', 'John',  {v: 14013, f: '$14,013'}],
		  [2013, 2, 'South East', 'John',  {v: 18600, f: '$18,600'}],
		  [2013, 3, 'South East', 'Leonardo',  {v: 23353, f: '$23,353'}],
		  [2013, 4, 'South East', 'Leonardo',  {v: 20756, f: '$20,756'}],
		  [2013, 1, 'North East', 'Paul',  {v: 24149, f: '$20,149'}],
		  [2013, 2, 'North East', 'Paul',  {v: 13119, f: '$13,119'}],
		  [2013, 3, 'North East', 'Paul',  {v: 23284, f: '$23,284'}],
		  [2013, 4, 'North East', 'Paul',  {v: 12697, f: '$12,697'}],
		  [2013, 1, 'South West', 'George',  {v: 23409, f: '$23,409'}],
		  [2013, 2, 'South West', 'George',  {v: 13113, f: '$13,113'}],
		  [2013, 3, 'South West', 'George',  {v: 17097, f: '$17,097'}],
		  [2013, 4, 'South West', 'Michelangelo',  {v: 21796, f: '$21,796'}],
		  [2013, 1, 'North West', 'Ringo',  {v: 22486, f: '$22,486'}],
		  [2013, 2, 'North West', 'Raphael',  {v: 18383, f: '$18,383'}],
		  [2013, 3, 'North West', 'Raphael',  {v: 19190, f: '$19,190'}],
		  [2013, 4, 'North West', 'Raphael',  {v: 21011, f: '$21,011'}],
		  [2014, 1, 'South East', 'Leonardo',  {v: 18378, f: '$18,378'}],
		  [2014, 2, 'South East', 'Leonardo',  {v: 22284, f: '$22,284'}],
		  [2014, 3, 'South East', 'Donatello',  {v: 24473, f: '$24,473'}],
		  [2014, 4, 'South East', 'Donatello',  {v: 16286, f: '$16,286'}],
		  [2014, 1, 'North East', 'Paul',  {v: 21630, f: '$21,630'}],
		  [2014, 2, 'North East', 'Paul',  {v: 19603, f: '$19,603'}],
		  [2014, 3, 'North East', 'Paul',  {v: 23947, f: '$23,947'}],
		  [2014, 4, 'North East', 'Paul',  {v: 22444, f: '$22,444'}],
		  [2014, 1, 'South West', 'Michelangelo',  {v: 11436, f: '$11,436'}],
		  [2014, 2, 'South West', 'Michelangelo',  {v: 18152, f: '$18,152'}],
		  [2014, 3, 'South West', 'Michelangelo',  {v: 17919, f: '$17,919'}],
		  [2014, 4, 'South West', 'Michelangelo',  {v: 12747, f: '$12,747'}],
		  [2014, 1, 'North West', 'Raphael',  {v: 15282, f: '$15,282'}],
		  [2014, 2, 'North West', 'Raphael',  {v: 16454, f: '$16,454'}],
		  [2014, 3, 'North West', 'Raphael',  {v: 19653, f: '$19,653'}],
		  [2014, 4, 'North West', 'Raphael',  {v: 10284, f: '$10,284'}]
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }

	// Line Graph

    function drawB() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Quarter');
      data.addColumn('number', 'North West');
      data.addColumn('number', 'South West');
      data.addColumn('number', 'North East');
	  data.addColumn('number', 'South East');

      data.addRows([
        ['Q1, 2013',  22486, 23409, 20149, 14013],
        ['Q2, 2013',  18383, 13113, 13119, 18600],
        ['Q3, 2013',  19190, 17097, 23284, 23353],
        ['Q4, 2013',  21011, 21796, 12697, 20756],
		['Q1, 2014',  15282, 11436, 21630, 18378],
        ['Q2, 2014',  16454, 18152, 19603, 22284],
        ['Q3, 2014',  19653, 17097, 23947, 24473],
        ['Q4, 2014',  10284, 12747, 22444, 16286]
        
      ]);

      var options = {
		  colors: ['#ffb987', '#43a99b', '#e88640', '#9ae2d8'],
		 legend: 'none',
         hAxis: { minValue: 0, maxValue: 7 },
        pointSize: 5,
		pointShape: 'circle',
        width: 1100,
        height: 500,
		
      };

      var chart = new google.charts.Line(document.getElementById('linechart_material'));

      chart.draw(data, options);
	}
	
	
	//Bar Chart

	function drawC() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Year');
      data.addColumn('number', 'Quarter 1');
      data.addColumn('number', 'Quarter 2');
	  data.addColumn('number', 'Quarter 3');
	  data.addColumn('number', 'Quarter 4');

      data.addRows([
        ['2013', {v: 80057, f: '$80,057'}, {v: 63215, f: '$63,215'}, {v: 82924, f: '$82,924'}, {v: 76260, f: '$76,260'}],
        ['2014', {v: 66726, f: '$66,726'}, {v: 76493, f: '$76,493'}, {v: 85992, f: '$85,992'}, {v: 61761, f: '$61,761'}],

      ]);

      var options = {
		colors: ['#289183', '#43a99b', '#6ac8ba', '#9ae2d8'],
		width: 500,
        height: 680,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true,
        hAxis: {
          title: 'Year'
        },
        vAxis: {
          title: 'Sales (in thousands)',
		  minValue: 0, 
		  maxValue: 350000
		 
        }
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
	