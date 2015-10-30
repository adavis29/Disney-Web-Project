// JavaScript Document

	
	
      google.load("visualization", "1.1", {packages:['table', 'line', 'corechart']});
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
        ['Q1, 2013', {v: 22486, f: '$22,486'}, {v: 23409, f: '$23,409'} ,{v: 20149, f: '$20,149'}, {v: 14013, f: '$14,013'}],
        ['Q2, 2013', {v: 18383, f: '$18,383'}, {v: 13113, f: '$13,113'}, {v: 13119, f: '$13,119'}, {v: 18600, f: '$18,600'}],
        ['Q3, 2013', {v: 19190, f: '$19,190'}, {v: 17097, f: '$17,097'}, {v: 23284, f: '$23,284'}, {v: 23353, f: '$23,253'}],
        ['Q4, 2013', {v: 21011, f: '$21,011'}, {v: 21796, f: '$21,796'}, {v: 12697, f: '$12,697'}, {v: 20756, f: '$20,756'}],
		['Q1, 2014', {v: 15282, f: '$15,282'}, {v: 11436, f: '$11,436'}, {v: 21630, f: '$21,630'}, {v: 18378, f: '$18,378'}],
        ['Q2, 2014', {v: 16454, f: '$16,454'}, {v: 18152, f: '$18,152'}, {v: 19603, f: '$19,603'}, {v: 22284, f: '$22,284'}],
        ['Q3, 2014', {v: 19653, f: '$19,653'}, {v: 17097, f: '$17,097'}, {v: 23947, f: '$23,947'}, {v: 24473, f: '$24,473'}],
        ['Q4, 2014', {v: 10284, f: '$10,284'}, {v: 12747, f: '$12,747'}, {v: 22444, f: '$22,444'}, {v: 16286, f: '$16,286'}],
      ]);

      var options = {
		vAxis: {
			title: 'Sales (in thousands)',
			viewWindowMode:'explicit',
            viewWindow: {
              max:25000,
              min:9000
			},
			format: 'currency'
			},
		hAxis:{title: 'Quarter'},
		colors: ['#ffb987', '#43a99b', '#e88640', '#9ae2d8'],
        pointSize: 5,
		pointShape: 'circle',
        width: 1100,
        height: 500,
		
		
      };

		var chart = new google.visualization.LineChart(document.getElementById('chart_div2'));
      chart.draw(data, options);
	}
	
	
	//Bar Chart

	function drawC() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Year');
      data.addColumn('number', 'South West');
      data.addColumn('number', 'South East');
	  data.addColumn('number', 'North West');
	  data.addColumn('number', 'North East');

      data.addRows([
        ['2013', {v: 75414, f: '$75,415'}, {v: 76722, f: '$76,722'}, {v: 81070, f: '$81,070'}, {v: 69249, f: '$69,249'}],
        ['2014', {v: 60254, f: '$60,254'}, {v: 81421, f: '$81,421'}, {v: 61673, f: '$61,673'}, {v: 87624, f: '$87,624'}],

      ]);

      var options = {
		colors: ['#289183', '#43a99b', '#6ac8ba', '#9ae2d8'],
		width: 510,
        height: 680,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true,
        hAxis: {
          title: 'Year'
        },
        vAxis: {
          title: 'Sales (in thousands)',
		  format: 'currency',
		  viewWindowMode:'explicit',
            viewWindow: {
              max:320000,
              min:0
			},
        }
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
	