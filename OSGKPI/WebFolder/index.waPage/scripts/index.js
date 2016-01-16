
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItem27 = {};	// @menuItem
	var menuItem26 = {};	// @menuItem
	var menuItem25 = {};	// @menuItem
	var menuItem23 = {};	// @menuItem
	var menuItem22 = {};	// @menuItem
	var menuItem21 = {};	// @menuItem
	var menuItem20 = {};	// @menuItem
	var menuItem19 = {};	// @menuItem
	var menuItem18 = {};	// @menuItem
	var menuItem17 = {};	// @menuItem
	var dataGrid13 = {};	// @dataGrid
	var fileUpload5 = {};	// @fileUpload
	var fileUpload4 = {};	// @fileUpload
	var dataGrid12 = {};	// @dataGrid
	var dataGrid11 = {};	// @dataGrid
	var dataGrid9 = {};	// @dataGrid
	var menuItem15 = {};	// @menuItem
	var menuItem14 = {};	// @menuItem
	var menuItem13 = {};	// @menuItem
	var menuItem11 = {};	// @menuItem
	var dataGrid8 = {};	// @dataGrid
	var documentEvent = {};	// @document
	var login1 = {};	// @login
	var dataGrid7 = {};	// @dataGrid
	var dataGrid6 = {};	// @dataGrid
	var dataGrid5 = {};	// @dataGrid
	var dataGrid4 = {};	// @dataGrid
	var dataGrid3 = {};	// @dataGrid
	var dataGrid2 = {};	// @dataGrid
	var dataGrid1 = {};	// @dataGrid
	var menuItem6 = {};	// @menuItem
	var fileUpload1 = {};	// @fileUpload
// @endregion// @endlock

// eventHandlers// @lock

	menuItem27.click = function menuItem27_click (event)// @startlock
	{// @endlock
		callback = function (result) { 
//                        console.log(result);
//					var arr13Plot = result;
					
			        };
		 
		var arrMinsPlot = myRPC.createMinsYTIChart(callback);
		var arrSHCPlot = myRPC.createSHCYTIChart(callback);
		var arrFOBPlot = myRPC.createFOBYTIChart(callback);
		
		$.jqplot.config.enablePlugins = true;

		var plot1 = $.jqplot ('chartYTI', [arrFOBPlot, arrMinsPlot, arrSHCPlot], {
      		title: 'YTI',
      		seriesDefaults: {
          		rendererOptions: {
              		smooth: true
          		},
          		yaxis: 'yaxis'
      		},
      		seriesColors:['#004C99', '#FF8000', '#009900'],
      		canvasOverlay: {
            	show: true,
            	objects: [
               		{verticalLine: {
                   		name: 'ln2013',
                    	x: new $.jsDate( '2013-12-01 16:10:00.000').getTime(),
                    	lineWidth: 3,
                    	color: 'rgb(66, 98, 144)',
                    	shadow: false
               		}},
               		{verticalLine: {
                   		name: 'ln2014',
                    	x: new $.jsDate( '2014-12-01 16:10:00.000').getTime(),
                    	lineWidth: 3,
                    	color: 'rgb(66, 98, 144)',
                    	shadow: false
               		}}
            	]
       		},
      		series: [
            	{
                	label: 'FOB Value (in US$ 000)   ',
                	yaxis: 'y2axis',
                	fill: true,
                	fillAlpha: 0.1,
                	fillAndStroke:  true,
                	fillColor: '#FFFFFF'
            	},
            	{
                	label: 'Output (in 000 Mins)   ',
                	shadowDepth: 5,
                	shadowAlpha: 0.8
            	},
            	{
                	label: 'Sewer Headcount (Average)   ',
                	yaxis: 'y2axis'
            	}
        	],
      		legend: {
        		show: true,
        		location: 's',
        		showSwatches: true,
        		placement: 'outsideGrid',
        		renderer: $.jqplot.EnhancedLegendRenderer,
        		rendererOptions: {
     				numberRows: 1
    			}
    		},
      		// An axes object holds options for all axes.
      		// Allowable axes are xaxis, x2axis, yaxis, y2axis, y3axis, ...
      		// Up to 9 y axes are supported.
      		axes: {
        		// options for each axis are specified in seperate option objects.
        		xaxis: {
          			renderer: $.jqplot.DateAxisRenderer,
          			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			tickRenderer: $.jqplot.CanvasAxisTickRenderer,
          			tickOptions: {
              			angle: -30,
              			formatString:'%b %Y'
          			},
          			pad: 0,
          			numberTicks: 32
        		},
        		yaxis: {
        			min: 0,
        			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			label: "Output (in 000)",
          			
          			tickOptions:{
          				fontSize: '10pt',
          				formatString: '%d'
            		}
        		},
        		y2axis: {
        			min: 0,
        			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			label: "Total Value (US$ in 000) / Headcount",
          			
          			tickOptions:{
          				fontSize: '10pt'
            		}
        		}
      		},
      		highlighter: {
        		show: true,
        		sizeAdjust: 7.5
      		}
    	});
	};// @lock

	menuItem26.click = function menuItem26_click (event)// @startlock
	{// @endlock
		callback = function (result) { 
//                        console.log(result);
//					var arr13Plot = result;
					
			        };
		 
		var arrMinsPlot = myRPC.createMinsBS3Chart(callback);
		var arrSHCPlot = myRPC.createSHCBS3Chart(callback);
		var arrFOBPlot = myRPC.createFOBBS3Chart(callback);
		
		$.jqplot.config.enablePlugins = true;

		var plot1 = $.jqplot ('chartBS3', [arrFOBPlot, arrMinsPlot, arrSHCPlot], {
      		title: 'BS3',
      		seriesDefaults: {
          		rendererOptions: {
              		smooth: true
          		},
          		yaxis: 'yaxis'
      		},
      		seriesColors:['#004C99', '#FF8000', '#009900'],
      		canvasOverlay: {
            	show: true,
            	objects: [
               		{verticalLine: {
                   		name: 'ln2013',
                    	x: new $.jsDate( '2013-12-01 16:10:00.000').getTime(),
                    	lineWidth: 3,
                    	color: 'rgb(66, 98, 144)',
                    	shadow: false
               		}},
               		{verticalLine: {
                   		name: 'ln2014',
                    	x: new $.jsDate( '2014-12-01 16:10:00.000').getTime(),
                    	lineWidth: 3,
                    	color: 'rgb(66, 98, 144)',
                    	shadow: false
               		}}
            	]
       		},
      		series: [
            	{
                	label: 'FOB Value (in US$ 000)   ',
                	yaxis: 'y2axis',
                	fill: true,
                	fillAlpha: 0.1,
                	fillAndStroke:  true,
                	fillColor: '#FFFFFF'
            	},
            	{
                	label: 'Output (in 000 Mins)   ',
                	shadowDepth: 5,
                	shadowAlpha: 0.8
            	},
            	{
                	label: 'Sewer Headcount (Average)   ',
                	yaxis: 'y2axis'
            	}
        	],
      		legend: {
        		show: true,
        		location: 's',
        		showSwatches: true,
        		placement: 'outsideGrid',
        		renderer: $.jqplot.EnhancedLegendRenderer,
        		rendererOptions: {
     				numberRows: 1
    			}
    		},
      		// An axes object holds options for all axes.
      		// Allowable axes are xaxis, x2axis, yaxis, y2axis, y3axis, ...
      		// Up to 9 y axes are supported.
      		axes: {
        		// options for each axis are specified in seperate option objects.
        		xaxis: {
          			renderer: $.jqplot.DateAxisRenderer,
          			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			tickRenderer: $.jqplot.CanvasAxisTickRenderer,
          			tickOptions: {
              			angle: -30,
              			formatString:'%b %Y'
          			},
          			pad: 0,
          			numberTicks: 32
        		},
        		yaxis: {
        			min: 0,
        			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			label: "Output (in 000)",
          			
          			tickOptions:{
          				fontSize: '10pt',
          				formatString: '%d'
            		}
        		},
        		y2axis: {
        			min: 0,
        			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			label: "Total Value (US$ in 000) / Headcount",
          			
          			tickOptions:{
          				fontSize: '10pt'
            		}
        		}
      		},
      		highlighter: {
        		show: true,
        		sizeAdjust: 7.5
      		}
    	});
	};// @lock

	menuItem25.click = function menuItem25_click (event)// @startlock
	{// @endlock
		callback = function (result) { 
//                        console.log(result);
//					var arr13Plot = result;
					
			        };
		 
		var arrMinsPlot = myRPC.createMinsBS2Chart(callback);
		var arrSHCPlot = myRPC.createSHCBS2Chart(callback);
		var arrFOBPlot = myRPC.createFOBBS2Chart(callback);
		
		$.jqplot.config.enablePlugins = true;

		var plot1 = $.jqplot ('chartBS2', [arrFOBPlot, arrMinsPlot, arrSHCPlot], {
      		title: 'BS2',
      		seriesDefaults: {
          		rendererOptions: {
              		smooth: true
          		},
          		yaxis: 'yaxis'
      		},
      		seriesColors:['#004C99', '#FF8000', '#009900'],
      		canvasOverlay: {
            	show: true,
            	objects: [
               		{verticalLine: {
                   		name: 'ln2013',
                    	x: new $.jsDate( '2013-12-01 16:10:00.000').getTime(),
                    	lineWidth: 3,
                    	color: 'rgb(66, 98, 144)',
                    	shadow: false
               		}},
               		{verticalLine: {
                   		name: 'ln2014',
                    	x: new $.jsDate( '2014-12-01 16:10:00.000').getTime(),
                    	lineWidth: 3,
                    	color: 'rgb(66, 98, 144)',
                    	shadow: false
               		}}
            	]
       		},
      		series: [
            	{
                	label: 'FOB Value (in US$ 000)   ',
                	yaxis: 'y2axis',
                	fill: true,
                	fillAlpha: 0.1,
                	fillAndStroke:  true,
                	fillColor: '#FFFFFF'
            	},
            	{
                	label: 'Output (in 000 Mins)   ',
                	shadowDepth: 5,
                	shadowAlpha: 0.8
            	},
            	{
                	label: 'Sewer Headcount (Average)   ',
                	yaxis: 'y2axis'
            	}
        	],
      		legend: {
        		show: true,
        		location: 's',
        		showSwatches: true,
        		placement: 'outsideGrid',
        		renderer: $.jqplot.EnhancedLegendRenderer,
        		rendererOptions: {
     				numberRows: 1
    			}
    		},
      		// An axes object holds options for all axes.
      		// Allowable axes are xaxis, x2axis, yaxis, y2axis, y3axis, ...
      		// Up to 9 y axes are supported.
      		axes: {
        		// options for each axis are specified in seperate option objects.
        		xaxis: {
          			renderer: $.jqplot.DateAxisRenderer,
          			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			tickRenderer: $.jqplot.CanvasAxisTickRenderer,
          			tickOptions: {
              			angle: -30,
              			formatString:'%b %Y'
          			},
          			pad: 0,
          			numberTicks: 32
        		},
        		yaxis: {
        			min: 0,
        			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			label: "Output (in 000)",
          			
          			tickOptions:{
          				fontSize: '10pt',
          				formatString: '%d'
            		}
        		},
        		y2axis: {
        			min: 0,
        			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			label: "Total Value (US$ in 000) / Headcount",
          			
          			tickOptions:{
          				fontSize: '10pt'
            		}
        		}
      		},
      		highlighter: {
        		show: true,
        		sizeAdjust: 7.5
      		}
    	});
	};// @lock

	menuItem23.click = function menuItem23_click (event)// @startlock
	{// @endlock
		callback = function (result) { 
//                        console.log(result);
//					var arr13Plot = result;
					
			        };
		 
		var arrMinsPlot = myRPC.createMinsBS1Chart(callback);
		var arrSHCPlot = myRPC.createSHCBS1Chart(callback);
		var arrFOBPlot = myRPC.createFOBBS1Chart(callback);
		
		$.jqplot.config.enablePlugins = true;

		var plot1 = $.jqplot ('chartBS1', [arrFOBPlot, arrMinsPlot, arrSHCPlot], {
      		title: 'BS1',
      		seriesDefaults: {
          		rendererOptions: {
              		smooth: true
          		},
          		yaxis: 'yaxis'
      		},
      		seriesColors:['#004C99', '#FF8000', '#009900'],
      		canvasOverlay: {
            	show: true,
            	objects: [
               		{verticalLine: {
                   		name: 'ln2013',
                    	x: new $.jsDate( '2013-12-01 16:10:00.000').getTime(),
                    	lineWidth: 3,
                    	color: 'rgb(66, 98, 144)',
                    	shadow: false
               		}},
               		{verticalLine: {
                   		name: 'ln2014',
                    	x: new $.jsDate( '2014-12-01 16:10:00.000').getTime(),
                    	lineWidth: 3,
                    	color: 'rgb(66, 98, 144)',
                    	shadow: false
               		}}
            	]
       		},
      		series: [
            	{
                	label: 'FOB Value (in US$ 000)   ',
                	yaxis: 'y2axis',
                	fill: true,
                	fillAlpha: 0.1,
                	fillAndStroke:  true,
                	fillColor: '#FFFFFF'
            	},
            	{
                	label: 'Output (in 000 Mins)   ',
                	shadowDepth: 5,
                	shadowAlpha: 0.8
            	},
            	{
                	label: 'Sewer Headcount (Average)   ',
                	yaxis: 'y2axis'
            	}
        	],
      		legend: {
        		show: true,
        		location: 's',
        		showSwatches: true,
        		placement: 'outsideGrid',
        		renderer: $.jqplot.EnhancedLegendRenderer,
        		rendererOptions: {
     				numberRows: 1
    			}
    		},
      		// An axes object holds options for all axes.
      		// Allowable axes are xaxis, x2axis, yaxis, y2axis, y3axis, ...
      		// Up to 9 y axes are supported.
      		axes: {
        		// options for each axis are specified in seperate option objects.
        		xaxis: {
          			renderer: $.jqplot.DateAxisRenderer,
          			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			tickRenderer: $.jqplot.CanvasAxisTickRenderer,
          			tickOptions: {
              			angle: -30,
              			formatString:'%b %Y'
          			},
          			pad: 0,
          			numberTicks: 32
        		},
        		yaxis: {
        			min: 0,
        			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			label: "Output (in 000)",
          			
          			tickOptions:{
          				fontSize: '10pt',
          				formatString: '%d'
            		}
        		},
        		y2axis: {
        			min: 0,
        			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			label: "Total Value (US$ in 000) / Headcount",
          			
          			tickOptions:{
          				fontSize: '10pt'
            		}
        		}
      		},
      		highlighter: {
        		show: true,
        		sizeAdjust: 7.5
      		}
    	});
	};// @lock

	menuItem22.click = function menuItem22_click (event)// @startlock
	{// @endlock
		callback = function (result) { 
//                        console.log(result);
//					var arr13Plot = result;
					
			        };
		 
		var arrMinsPlot = myRPC.createMinsAllChart(callback);
		var arrSHCPlot = myRPC.createSHCAllChart(callback);
		var arrFOBPlot = myRPC.createFOBAllChart(callback);
		
		$.jqplot.config.enablePlugins = true;

		var plot1 = $.jqplot ('chartOSG', [arrFOBPlot, arrMinsPlot, arrSHCPlot], {
      		title: 'OSG Comparison',
      		seriesDefaults: {
          		rendererOptions: {
              		smooth: true
          		},
          		yaxis: 'yaxis'
      		},
      		seriesColors:['#004C99', '#FF8000', '#009900'],
      		canvasOverlay: {
            	show: true,
            	objects: [
               		{verticalLine: {
                   		name: 'ln2013',
                    	x: new $.jsDate( '2013-12-01 16:10:00.000').getTime(),
                    	lineWidth: 3,
                    	color: 'rgb(66, 98, 144)',
                    	shadow: false
               		}},
               		{verticalLine: {
                   		name: 'ln2014',
                    	x: new $.jsDate( '2014-12-01 16:10:00.000').getTime(),
                    	lineWidth: 3,
                    	color: 'rgb(66, 98, 144)',
                    	shadow: false
               		}}
            	]
       		},
      		series: [
            	{
                	label: 'FOB Value (in US$ 000)   ',
                	yaxis: 'y2axis',
                	fill: true,
                	fillAlpha: 0.1,
                	fillAndStroke:  true,
                	fillColor: '#FFFFFF'
            	},
            	{
                	label: 'Output (in 000 Mins)   ',
                	shadowDepth: 5,
                	shadowAlpha: 0.8
            	},
            	{
                	label: 'Sewer Headcount (Average)   ',
                	yaxis: 'y2axis'
            	}
        	],
      		legend: {
        		show: true,
        		location: 's',
        		showSwatches: true,
        		placement: 'outsideGrid',
        		renderer: $.jqplot.EnhancedLegendRenderer,
        		rendererOptions: {
     				numberRows: 1
    			}
    		},
      		// An axes object holds options for all axes.
      		// Allowable axes are xaxis, x2axis, yaxis, y2axis, y3axis, ...
      		// Up to 9 y axes are supported.
      		axes: {
        		// options for each axis are specified in seperate option objects.
        		xaxis: {
          			renderer: $.jqplot.DateAxisRenderer,
          			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			tickRenderer: $.jqplot.CanvasAxisTickRenderer,
          			tickOptions: {
              			angle: -30,
              			formatString:'%b %Y'
          			},
          			pad: 0,
          			numberTicks: 32
        		},
        		yaxis: {
        			min: 0,
        			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			label: "Output (in 000)",
          			
          			tickOptions:{
          				fontSize: '10pt',
          				formatString: '%d'
            		}
        		},
        		y2axis: {
        			min: 0,
        			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			label: "Total Value (US$ in 000) / Headcount",
          			
          			tickOptions:{
          				fontSize: '10pt'
            		}
        		}
      		},
      		highlighter: {
        		show: true,
        		sizeAdjust: 7.5
      		}
    	});
	};// @lock

	menuItem21.click = function menuItem21_click (event)// @startlock
	{// @endlock
		callback = function (result) { 
//                        console.log(result);
//					var arr13Plot = result;
					
			        };
		 
		var arrBS1Plot = myRPC.createFOBBS1Chart(callback);
		console.log(arrBS1Plot);
		var arrBS2Plot = myRPC.createFOBBS2Chart(callback);
		console.log(arrBS2Plot);
		var arrBS3Plot = myRPC.createFOBBS3Chart(callback);
		console.log(arrBS3Plot);
		var arrYTIPlot = myRPC.createFOBYTIChart(callback);
		console.log(arrYTIPlot);
		var arrAllPlot = myRPC.createFOBAllChart(callback);
		console.log(arrAllPlot);
		
		$.jqplot.config.enablePlugins = true;

		var plot1 = $.jqplot ('chartFOB', [arrBS1Plot, arrBS2Plot, arrBS3Plot, arrYTIPlot, arrAllPlot], {
      		title: 'FOB Value (US$)',
      		seriesDefaults: {
          		rendererOptions: {
              		smooth: true
          		},
          		yaxis: 'yaxis'
      		},
      		seriesColors:['#009900', '#FF8000', '#004C99', '#CC0000', '#000000'],
      		canvasOverlay: {
            	show: true,
            	objects: [
               		{verticalLine: {
                   		name: 'ln2013',
                    	x: new $.jsDate( '2013-12-01 16:10:00.000').getTime(),
                    	lineWidth: 3,
                    	color: 'rgb(66, 98, 144)',
                    	shadow: false
               		}},
               		{verticalLine: {
                   		name: 'ln2014',
                    	x: new $.jsDate( '2014-12-01 16:10:00.000').getTime(),
                    	lineWidth: 3,
                    	color: 'rgb(66, 98, 144)',
                    	shadow: false
               		}}
            	]
       		},
      		series: [
            	{
                	label: 'BS1'
            	},
            	{
                	label: 'BS2'
            	},
            	{
                	label: 'BS3'
            	},
            	{
                	label: 'YTI'
            	},
            	{
                	label: 'Total',
                	yaxis: 'y2axis',
                	lineWidth: 3.5,
            		markerOptions: { style:"filledSquare", size:10 }
            	}
        	],
      		legend: {
        		show: true,
        		location: 'ne',
        		showSwatches: true,
        		placement: 'outsideGrid',
        		renderer: $.jqplot.EnhancedLegendRenderer
    		},
      		// An axes object holds options for all axes.
      		// Allowable axes are xaxis, x2axis, yaxis, y2axis, y3axis, ...
      		// Up to 9 y axes are supported.
      		axes: {
        		// options for each axis are specified in seperate option objects.
        		xaxis: {
          			renderer: $.jqplot.DateAxisRenderer,
          			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			tickRenderer: $.jqplot.CanvasAxisTickRenderer,
          			tickOptions: {
              			angle: -30,
              			formatString:'%b %Y'
          			},
          			pad: 0,
          			numberTicks: 32
        		},
        		yaxis: {
        			min: 0,
        			max: 8000,
        			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			label: "Value (in 000)",
          			
          			tickOptions:{
          				fontSize: '10pt',
          				formatString: '%d'
            		}
        		},
        		y2axis: {
        			min: 0,
        			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			label: "Total Value (in 000)",
          			
          			tickOptions:{
          				fontSize: '10pt'
            		}
        		}
      		},
      		highlighter: {
        		show: true,
        		sizeAdjust: 7.5
      		}
    	});
	};// @lock

	menuItem20.click = function menuItem20_click (event)// @startlock
	{// @endlock
		callback = function (result) { 
//                        console.log(result);
//					var arr13Plot = result;
					
			        };
		 
		var arrBS1Plot = myRPC.createSHCBS1Chart(callback);
		console.log(arrBS1Plot);
		var arrBS2Plot = myRPC.createSHCBS2Chart(callback);
		console.log(arrBS2Plot);
		var arrBS3Plot = myRPC.createSHCBS3Chart(callback);
		console.log(arrBS3Plot);
		arrYTIPlot = myRPC.createSHCYTIChart(callback);
		console.log(arrYTIPlot);
		arrAllPlot = myRPC.createSHCAllChart(callback);
		console.log(arrAllPlot);
		
		$.jqplot.config.enablePlugins = true;

		var plot1 = $.jqplot ('chartSHC', [arrBS1Plot, arrBS2Plot, arrBS3Plot, arrYTIPlot, arrAllPlot], {
      		title: 'Sewer Headcount (Average)',
      		seriesDefaults: {
          		rendererOptions: {
              		smooth: true
          		},
          		yaxis: 'yaxis'
      		},
      		seriesColors:['#009900', '#FF8000', '#004C99', '#CC0000', '#000000'],
      		canvasOverlay: {
            	show: true,
            	objects: [
               		{verticalLine: {
                   		name: 'ln2013',
                    	x: new $.jsDate( '2013-12-01 16:10:00.000').getTime(),
                    	lineWidth: 3,
                    	color: 'rgb(66, 98, 144)',
                    	shadow: false
               		}},
               		{verticalLine: {
                   		name: 'ln2014',
                    	x: new $.jsDate( '2014-12-01 16:10:00.000').getTime(),
                    	lineWidth: 3,
                    	color: 'rgb(66, 98, 144)',
                    	shadow: false
               		}}
            	]
       		},
      		series: [
            	{
                	label: 'BS1'
            	},
            	{
                	label: 'BS2'
            	},
            	{
                	label: 'BS3'
            	},
            	{
                	label: 'YTI'
            	},
            	{
                	label: 'Total',
                	yaxis: 'y2axis',
                	lineWidth: 3.5,
            		markerOptions: { style:"filledSquare", size:10 }
            	}
        	],
      		legend: {
        		show: true,
        		location: 'ne',
        		showSwatches: true,
        		placement: 'outsideGrid',
        		renderer: $.jqplot.EnhancedLegendRenderer
    		},
      		// An axes object holds options for all axes.
      		// Allowable axes are xaxis, x2axis, yaxis, y2axis, y3axis, ...
      		// Up to 9 y axes are supported.
      		axes: {
        		// options for each axis are specified in seperate option objects.
        		xaxis: {
          			renderer: $.jqplot.DateAxisRenderer,
          			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			tickRenderer: $.jqplot.CanvasAxisTickRenderer,
          			tickOptions: {
              			angle: -30,
              			formatString:'%b %Y'
          			},
          			pad: 0,
          			numberTicks: 32
        		},
        		yaxis: {
        			min: 0,
        			max: 2500,
        			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			label: "Headcount",
          			
          			tickOptions:{
          				fontSize: '10pt',
          				formatString: '%d'
            		}
        		},
        		y2axis: {
        			min: 0,
        			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			label: "Total Headcount",
          			
          			tickOptions:{
          				fontSize: '10pt'
            		}
        		}
      		},
      		highlighter: {
        		show: true,
        		sizeAdjust: 7.5
      		}
    	});
	};// @lock

	menuItem19.click = function menuItem19_click (event)// @startlock
	{// @endlock
		callback = function (result) { 
//                        console.log(result);
//					var arr13Plot = result;
					
			        };
		 
		var arrBS1Plot = myRPC.createMinsBS1Chart(callback);
		console.log(arrBS1Plot);
		var arrBS2Plot = myRPC.createMinsBS2Chart(callback);
		console.log(arrBS2Plot);
		var arrBS3Plot = myRPC.createMinsBS3Chart(callback);
		console.log(arrBS3Plot);
		arrYTIPlot = myRPC.createMinsYTIChart(callback);
		console.log(arrYTIPlot);
		arrAllPlot = myRPC.createMinsAllChart(callback);
		console.log(arrAllPlot);
		
		$.jqplot.config.enablePlugins = true;

		var plot1 = $.jqplot ('chartMins', [arrBS1Plot, arrBS2Plot, arrBS3Plot, arrYTIPlot, arrAllPlot], {
      		title: 'Output (Minutes)',
      		seriesDefaults: {
          		rendererOptions: {
              		smooth: true
          		},
          		yaxis: 'yaxis'
      		},
      		seriesColors:['#009900', '#FF8000', '#004C99', '#CC0000', '#000000'],
        	canvasOverlay: {
            	show: true,
            	objects: [
               		{verticalLine: {
                   		name: 'ln2013',
                    	x: new $.jsDate( '2013-12-01 16:10:00.000').getTime(),
                    	lineWidth: 3,
                    	color: 'rgb(66, 98, 144)',
                    	shadow: false
               		}},
               		{verticalLine: {
                   		name: 'ln2014',
                    	x: new $.jsDate( '2014-12-01 16:10:00.000').getTime(),
                    	lineWidth: 3,
                    	color: 'rgb(66, 98, 144)',
                    	shadow: false
               		}}
            	]
       		},
      		series: [
            	{
                	label: 'BS1'
            	},
            	{
                	label: 'BS2'
            	},
            	{
                	label: 'BS3'
            	},
            	{
                	label: 'YTI'
            	},
            	{
                	label: 'Total',
                	yaxis: 'y2axis',
                	lineWidth: 3.5,
            		markerOptions: { style:"filledSquare", size:10 }
            	}
        	],
      		legend: {
        		show: true,
        		location: 'ne',
        		showSwatches: true,
        		placement: 'outsideGrid',
        		renderer: $.jqplot.EnhancedLegendRenderer
    		},
      		// An axes object holds options for all axes.
      		// Allowable axes are xaxis, x2axis, yaxis, y2axis, y3axis, ...
      		// Up to 9 y axes are supported.
      		axes: {
        		// options for each axis are specified in seperate option objects.
        		xaxis: {
          			renderer: $.jqplot.DateAxisRenderer,
          			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			tickRenderer: $.jqplot.CanvasAxisTickRenderer,
          			tickOptions: {
              			angle: -30,
              			formatString:'%b %Y'
          			},
          			pad: 0,
          			numberTicks: 32
        		},
        		yaxis: {
        			min: 0,
        			max: 16000,
        			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			label: "Output (in 000)",
          			
          			tickOptions:{
          				fontSize: '10pt',
          				formatString: '%d'
            		}
        		},
        		y2axis: {
        			min: 0,
        			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			label: "Total Output (in 000)",
          			
          			tickOptions:{
          				fontSize: '10pt'
            		}
        		}
      		},
      		highlighter: {
        		show: true,
        		sizeAdjust: 7.5
      		}
    	});
	};// @lock

	menuItem18.click = function menuItem18_click (event)// @startlock
	{// @endlock
		callback = function (result) { 
//                        console.log(result);
//					var arr13Plot = result;
					
			        };
		 
		var arrBS1Plot = myRPC.createEffBS1Chart(callback);
		//var arrBS1Plot = [['1/1/2008', 42], ['2/14/2008', 56], ['3/7/2008', 39], ['4/22/2008', 81]];
		console.log(arrBS1Plot);
		var arrBS2Plot = myRPC.createEffBS2Chart(callback);
		console.log(arrBS2Plot);
		var arrBS3Plot = myRPC.createEffBS3Chart(callback);
		console.log(arrBS3Plot);
		arrYTIPlot = myRPC.createEffYTIChart(callback);
		console.log(arrYTIPlot);
		
		$.jqplot.config.enablePlugins = true;

		var plot1 = $.jqplot ('chartEff', [arrBS1Plot, arrBS2Plot, arrBS3Plot, arrYTIPlot], {
      		title: 'Efficiency',
      		seriesDefaults: {
          		rendererOptions: {
              		smooth: true
          		},
      		},
      		seriesColors:['#009900', '#FF8000', '#0066CC', '#CC0000'],
        	canvasOverlay: {
            	show: true,
            	objects: [
               		{verticalLine: {
                   		name: 'ln2013',
                    	x: new $.jsDate( '2013-12-01 16:10:00.000').getTime(),
                    	lineWidth: 3,
                    	color: 'rgb(66, 98, 144)',
                    	shadow: false
               		}},
               		{verticalLine: {
                   		name: 'ln2014',
                    	x: new $.jsDate( '2014-12-01 16:10:00.000').getTime(),
                    	lineWidth: 3,
                    	color: 'rgb(66, 98, 144)',
                    	shadow: false
               		}}
            	]
       		},
      		series: [
            	{
                	label: 'BS1'
            	},
            	{
                	label: 'BS2'
            	},
            	{
                	label: 'BS3'
            	},
            	{
                	label: 'YTI'
            	}
        	],
      		legend: {
        		show: true,
        		location: 'ne',
        		showSwatches: true,
        		placement: 'outsideGrid',
        		renderer: $.jqplot.EnhancedLegendRenderer
    		},
      		// An axes object holds options for all axes.
      		// Allowable axes are xaxis, x2axis, yaxis, y2axis, y3axis, ...
      		// Up to 9 y axes are supported.
      		axes: {
        		// options for each axis are specified in seperate option objects.
        		xaxis: {
          			renderer: $.jqplot.DateAxisRenderer,
          			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			tickRenderer: $.jqplot.CanvasAxisTickRenderer,
          			tickOptions: {
              			angle: -30,
              			formatString:'%b %Y'
          			},
          			pad: 0,
          			numberTicks: 32
        		},
        		yaxis: {
        			min: 0,
        			labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          			label: "Efficiency (%)",
          			
          			tickOptions:{
          				fontSize: '10pt',
          				formatString: '%d'
            		}
        		}
      		},
      		highlighter: {
        		show: true,
        		sizeAdjust: 7.5
      		}
    	});

	};// @lock

	menuItem17.click = function menuItem17_click (event)// @startlock
	{// @endlock
		$$("container2").hide();
		$$("container29").hide();
		$$("container34").hide();
		$$("container41").show();
		$$("tabView3").show();
		$("#menuItem18").click();
	};// @lock

	dataGrid13.onRowDraw = function dataGrid13_onRowDraw (event)// @startlock
	{// @endlock
//		if((event.row.cells[0].value === "Suntex ") || (event.row.cells[0].value === "BS1 ") || (event.row.cells[0].value === "BS 3 [Non Adidas]") || (event.row.cells[0].value === "BS3 [Adidas]") || (event.row.cells[0].value === "Overall (In-house production)")) { // or if(event.element.salary < 16000)
		if((event.row.cells[1].value === "Efficiency")) { // or if(event.element.salary < 16000)
   			event.row.cells[0].dom.css("font-weight","bold");
			for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgb(216, 216, 216)");
			}
	    } else {
	    	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgba(255,255,255, 0.0)");
			}
	    }
	};// @lock

	fileUpload5.filesUploaded = function fileUpload5_filesUploaded (event)// @startlock
	{// @endlock
		callback = function (result) { 
//                        console.log(result);
			        };

		var files = $$('fileUpload5').getFiles();
		var d13SUMMTBL = sources.d13SUMM.getEntityCollection()
		d13SUMMTBL.removeAllEntities();

//		myRPC.createChartFilesAsync(callback);

   		var file = files[0];
    	var workbook, mySheets;
    	for (var i = 0; i < files.length; i++) {
        	var file = files[i];

        	//Read content of the file into image object
        	var reader = new FileReader();
        	reader.onload = function(e) {
            	var data = e.target.result;

            	/* if binary string, read with type 'binary' */
            	workbook = XLSX.read(data, { type: 'binary' });

            	/* DO SOMETHING WITH workbook HERE */
            	mySheets = JSON.stringify(to_json(workbook), 2, 2);

            	var sheet_name_list = workbook.SheetNames;
            	sheet_name_list.forEach(function(sheetName) { /* iterate through sheets */
                	var worksheet = workbook.Sheets[sheetName];
                	if (sheetName === "2013 Overall") {
						myRPC.create13SUMMAsync(callback, [worksheet]);
					};
            	});
            	

            	alert('Upload Successful');
//            	myRPC.createSummaryAsync(callback);
            	location.reload();
        	};
        	reader.readAsBinaryString(file);
        	
    	};

	};// @lock

	fileUpload4.filesUploaded = function fileUpload4_filesUploaded (event)// @startlock
	{// @endlock
		callback = function (result) { 
//                        console.log(result);
			        };

		var files = $$('fileUpload4').getFiles();
		var d14SUMMTBL = sources.d14SUMM.getEntityCollection()
		d14SUMMTBL.removeAllEntities();

   		var file = files[0];
    	var workbook, mySheets;
    	for (var i = 0; i < files.length; i++) {
        	var file = files[i];

        	//Read content of the file into image object
        	var reader = new FileReader();
        	reader.onload = function(e) {
            	var data = e.target.result;

            	/* if binary string, read with type 'binary' */
            	workbook = XLSX.read(data, { type: 'binary' });

            	/* DO SOMETHING WITH workbook HERE */
            	mySheets = JSON.stringify(to_json(workbook), 2, 2);

            	var sheet_name_list = workbook.SheetNames;
            	sheet_name_list.forEach(function(sheetName) { /* iterate through sheets */
                	var worksheet = workbook.Sheets[sheetName];
                	if (sheetName === "OVERALL") {
						myRPC.create14SUMMAsync(callback, [worksheet]);
					};
            	});
            	

            	alert('Upload Successful');
            	location.reload();
        	};
        	reader.readAsBinaryString(file);
        	
    	};

	};// @lock

	dataGrid12.onRowDraw = function dataGrid12_onRowDraw (event)// @startlock
	{// @endlock

	};// @lock

	dataGrid11.onRowDraw = function dataGrid11_onRowDraw (event)// @startlock
	{// @endlock

	};// @lock

	dataGrid9.onRowDraw = function dataGrid9_onRowDraw (event)// @startlock
	{// @endlock
		if((event.row.cells[0].value === "Bright Sky 2 [Lower]") || (event.row.cells[0].value === "Bright Sky 1 [Upper] ") || (event.row.cells[0].value === "Bright Sky ") || (event.row.cells[0].value === "VEST [BS3]") || (event.row.cells[0].value === "YTI [SUNTEX]")) { // or if(event.element.salary < 16000)
   			event.row.cells[0].dom.css("font-weight","bold");
			for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgb(216, 216, 216)");
			}
	    } else {
	    	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgba(255,255,255, 0.0)");
			}
	    }
	};// @lock

	menuItem15.click = function menuItem15_click (event)// @startlock
	{// @endlock
		$$("container2").hide();
		$$("container29").hide();
		$$("container34").hide();
		$$("container41").hide();
	};// @lock

	menuItem14.click = function menuItem14_click (event)// @startlock
	{// @endlock
		$$("container2").show();
		$$("container29").hide();
		$$("container34").hide();
		$$("container41").hide();
	};// @lock

	menuItem13.click = function menuItem13_click (event)// @startlock
	{// @endlock
		$$("container2").hide();
		$$("container29").hide();
		$$("container41").hide();
		$$("container34").show();
		$$("tabView4").show();
	};// @lock

	menuItem11.click = function menuItem11_click (event)// @startlock
	{// @endlock
		$$("container2").hide();
		$$("container29").show();
		$$("container34").hide();
		$$("container41").hide();
		$$("tabView2").show();
	};// @lock

	dataGrid8.onRowDraw = function dataGrid8_onRowDraw (event)// @startlock
	{// @endlock
		if((event.row.cells[0].value === "STX") || (event.row.cells[0].value === "BS1") || (event.row.cells[0].value === "BS2") || (event.row.cells[0].value === "VEST") || (event.row.cells[0].value === "OVERALL")) { // or if(event.element.salary < 16000)
   			event.row.cells[0].dom.css("font-weight","bold");
			for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgb(216, 216, 216)");
			}
	    } else {
	    	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgba(255,255,255, 0.0)");
			}
	    }
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		if (WAF.directory.currentUserBelongsTo("Users")) {
			$$("tabView1").enable();
			$$("tabView1").show()
			$$("container29").hide();
			$$("container34").hide();
			$$("container41").hide();
			$$("menuBar2").show();
			$$("menuItem14").setState('active');
		} else {
			$$("tabView1").hide("visibility");
			$$("tabView2").hide("visibility");
			$$("tabView4").hide("visibility");
			$$("tabView3").hide("visibility");
			$$("menuBar2").hide("visibility");
		};
		if (WAF.directory.currentUserBelongsTo("Uploader")) {
				$$("menuItem10").show();
		};
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		$$("tabView1").hide("visibility");
		$$("tabView2").hide("visibility");
		$$("tabView3").hide("visibility");
		$$("tabView4").hide("visibility");
		$$("menuBar2").hide("visibility");
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		if (WAF.directory.currentUserBelongsTo("Uploader")) {
				$$("menuItem10").show();
		} else {
			$$("menuItem10").hide();
		};
		$$("tabView1").show();
		$$("menuBar2").show();
	};// @lock

	dataGrid7.onRowDraw = function dataGrid7_onRowDraw (event)// @startlock
	{// @endlock
		if((event.row.cells[0].value === "Print") || (event.row.cells[0].value === "Embro") || (event.row.cells[0].value === "Wash") || (event.row.cells[0].value === "Avery")) { // or if(event.element.salary < 16000)
    			event.row.cells[0].dom.css("font-weight","bold");

	    } else if(event.element.A === "Act Prod vs Cap %") { // or if(event.element.salary < 16000)
        	for (i = 1; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgb(216, 216, 216)");
			}
	    } else {
	    	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgba(255,255,255, 0.0)");
			}
	    }
	};// @lock

	dataGrid6.onRowDraw = function dataGrid6_onRowDraw (event)// @startlock
	{// @endlock
		if((event.row.cells[0].value === "STX") || (event.row.cells[0].value === "VEST") || (event.row.cells[0].value === "BS1&2") || (event.row.cells[0].value === "BTE") || (event.row.cells[0].value === "CENTRAL") || (event.row.cells[0].value === "OSG TOTAL")) { // or if(event.element.salary < 16000)
  			event.row.cells[0].dom.css("background-color","rgb(71, 171, 206)");
	    } else if(event.element.B === "Total Headcount") { // or if(event.element.salary < 16000)
        	for (i = 1; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgb(249,239,148)");
			}
	    } else {
	    	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgba(255,255,255, 0.0)");
			}
	    }
	};// @lock

	dataGrid5.onRowDraw = function dataGrid5_onRowDraw (event)// @startlock
	{// @endlock
		if((event.element.B === "Efficiency [using total worked mins]") || (event.row.cells[0].value === "FOB Value/unit (US$)") || (event.row.cells[0].value === "Cost per min produced") || (event.row.cells[0].value === "Wastage %")) { // or if(event.element.salary < 16000)
        	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgb(255,255,102)");
			}
	    } else if(event.element.B === "FOB Value/work day (US$ 000)") { // or if(event.element.salary < 16000)
        	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgb(249,239,148)");
			}
		} else if((event.row.cells[0].value == "Month-end headcount") || (event.row.cells[0].value == "Operational KPIs") || (event.row.cells[0].value == "Outsourcing Shipment Statistics") || (event.row.cells[0].value == "PLUS In-House GAP Production")) { // or if(event.element.salary < 16000)
			event.row.cells[0].dom.css("font-weight","bold");
	    } else {
	    	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgba(255,255,255, 0.0)");
			};
			event.row.cells[0].dom.css("font-weight","normal");
	    }
	};// @lock

	dataGrid4.onRowDraw = function dataGrid4_onRowDraw (event)// @startlock
	{// @endlock
		if((event.element.B === "Efficiency [using total worked mins]") || (event.row.cells[0].value === "FOB Value/unit (US$)") || (event.row.cells[0].value === "Cost per min produced") || (event.row.cells[0].value === "Wastage %")) { // or if(event.element.salary < 16000)
        	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgb(255,255,102)");
			}
	    } else if(event.element.B === "FOB Value/work day (US$ 000)") { // or if(event.element.salary < 16000)
        	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgb(249,239,148)");
			}
		} else if((event.row.cells[0].value == "Daily Attendance (Direct sewing)") || (event.row.cells[0].value == "Daily Attendance (All)") || (event.row.cells[0].value == "Month-end headcount") || (event.row.cells[0].value == "Operational KPIs") || (event.row.cells[0].value == "In-house Shipment Statistics") || (event.row.cells[0].value == "Outsourcing Shipment Statistics")) { // or if(event.element.salary < 16000)
			event.row.cells[0].dom.css("font-weight","bold");
	    } else {
	    	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgba(255,255,255, 0.0)");
			};
			event.row.cells[0].dom.css("font-weight","normal");
	    }
	};// @lock

	dataGrid3.onRowDraw = function dataGrid3_onRowDraw (event)// @startlock
	{// @endlock
		if((event.row.cells[0].value === "FOB Value/unit (US$)") || (event.row.cells[0].value === "Cost per min produced") || (event.row.cells[0].value === "Wastage %")) { // or if(event.element.salary < 16000)
        	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgb(255,255,102)");
			}
	    } else if(event.element.B === "Efficiency [using total worked mins]") { // or if(event.element.salary < 16000)
        	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgb(249,239,148)");
			}
	    } else {
	    	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgba(255,255,255, 0.0)");
			}
	    }
	};// @lock

	dataGrid2.onRowDraw = function dataGrid2_onRowDraw (event)// @startlock
	{// @endlock
		if((event.row.cells[0].value === "Efficiency [using total worked mins]") || (event.row.cells[0].value === "FOB Value/unit (US$)") || (event.row.cells[0].value === "Cost per min produced") || (event.row.cells[0].value === "Wastage %")) { // or if(event.element.salary < 16000)
        	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgb(255,255,102)");
			}
	    } else if(event.element.B === "FOB Value/work day (US$ 000)") { // or if(event.element.salary < 16000)
        	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgb(249,239,148)");
			}
		} else if((event.row.cells[0].value == "Daily Attendance (Direct sewing)") || (event.row.cells[0].value == "Daily Attendance (All)") || (event.row.cells[0].value == "Month-end headcount") || (event.row.cells[0].value == "Operational KPIs") || (event.row.cells[0].value == "In-house Shipment Statistics") || (event.row.cells[0].value == "Outsourcing Shipment Statistics")) { // or if(event.element.salary < 16000)
			event.row.cells[0].dom.css("font-weight","bold");
	    } else {
	    	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgba(255,255,255, 0.0)");
			};
			event.row.cells[0].dom.css("font-weight","normal");
	    }
	};// @lock

	dataGrid1.onRowDraw = function dataGrid1_onRowDraw (event)// @startlock
	{// @endlock
		if ((event.row.cells[0].value == "Efficiency [using total worked mins]") || (event.row.cells[0].value == "FOB Value/unit (US$)") || (event.row.cells[0].value == "Cost per min produced") || (event.row.cells[0].value == "Wastage %")) { // or if(event.element.salary < 16000)
        	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgb(255,255,102)");
			}
	    } else if(event.row.cells[0].value == "FOB Value/work day (US$ 000)") { // or if(event.element.salary < 16000)
        	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgb(249,239,148)");
			}
		} else if((event.row.cells[0].value == "Month-end headcount") || (event.row.cells[0].value == "Operational KPIs")) { // or if(event.element.salary < 16000)
			event.row.cells[0].dom.css("font-weight","bold");
	    } else {
	    	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgba(255,255,255, 0.0)");
			};
			event.row.cells[0].dom.css("font-weight","normal");
	    }
	};// @lock

	menuItem6.click = function menuItem6_click (event)// @startlock
	{// @endlock
		//debugger;
		
		$('#container8').css('overflow', 'auto'); 
		var myEntity = "";

		ds.DSTX.find("rowNum = :1", {
    		params: [7],      
    		onSuccess: function(event) {    
        		myEntity = event.entity; 
        		var strVal = myEntity.HS.getValue();
        		$('#effSTX').html(strVal);
           		} 
		});
		ds.DVEST.find("rowNum = :1", {
    		params: [7],      
    		onSuccess: function(event) {    
        		myEntity = event.entity; 
        		$('#effVEST').html(myEntity.HS.getValue());
    		} 
		});
		ds.DBS12.find("rowNum = :1", {
    		params: [7],      
    		onSuccess: function(event) {    
        		myEntity = event.entity; 
        		$('#effBS12').html(myEntity.HS.getValue());
    		} 
		});
		
		ds.DSTX.find("rowNum = :1", {
    		params: [59],      
    		onSuccess: function(event) {    
        		myEntity = event.entity; 
        		var strVal = myEntity.HS.getValue();
        		$('#cpmSTX').html(strVal);
           		} 
		});
		ds.DVEST.find("rowNum = :1", {
    		params: [60],      
    		onSuccess: function(event) {    
        		myEntity = event.entity; 
        		$('#cpmVEST').html(myEntity.HS.getValue());
    		} 
		});
		ds.DBS12.find("rowNum = :1", {
    		params: [58],      
    		onSuccess: function(event) {    
        		myEntity = event.entity; 
        		$('#cpmBS12').html(myEntity.HS.getValue());
    		} 
		});
		
		ds.DSTX.find("rowNum = :1", {
    		params: [49],      
    		onSuccess: function(event) {    
        		myEntity = event.entity; 
        		var strVal = myEntity.HS.getValue();
        		$('#snsSTX').html(strVal);
           		} 
		});
		ds.DVEST.find("rowNum = :1", {
    		params: [50],      
    		onSuccess: function(event) {    
        		myEntity = event.entity; 
        		$('#snsVEST').html(myEntity.HS.getValue());
    		} 
		});
		ds.DBS12.find("rowNum = :1", {
    		params: [48],      
    		onSuccess: function(event) {    
        		myEntity = event.entity; 
        		$('#snsBS12').html(myEntity.HS.getValue());
    		} 
		});

		ds.DSTX.find("rowNum = :1", {
    		params: [68],      
    		onSuccess: function(event) {    
        		myEntity = event.entity; 
        		var strVal = myEntity.HS.getValue();
        		$('#wtgSTX').html(strVal);
           		} 
		});
		ds.DVEST.find("rowNum = :1", {
    		params: [79],      
    		onSuccess: function(event) {    
        		myEntity = event.entity; 
        		$('#wtgVEST').html(myEntity.HS.getValue());
    		} 
		});
		ds.DBS12.find("rowNum = :1", {
    		params: [78],      
    		onSuccess: function(event) {    
        		myEntity = event.entity; 
        		$('#wtgBS12').html(myEntity.HS.getValue());
    		} 
		});

	};// @lock

	function to_json(workbook) {
    	var result = {};
    	workbook.SheetNames.forEach(function(sheetName) {
    	    var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
   		    if(roa.length > 0){
        	    result[sheetName] = roa;
        	}
    	});
    	return result;
	};


	fileUpload1.filesUploaded = function fileUpload1_filesUploaded (event)// @startlock
	{// @endlock
				
		//debugger;
		//var kpif = new ds.KpiFile();
		
		callback = function (result) { 
//                        console.log(result);
	               };
		var dSTXTBL = sources.dSTX.getEntityCollection()
		dSTXTBL.removeAllEntities();
		var dVESTTBL = sources.dVEST.getEntityCollection()
		dVESTTBL.removeAllEntities();
		var dBS12TBL = sources.dBS12.getEntityCollection()
		dBS12TBL.removeAllEntities();
		var dBS1TBL = sources.dBS1.getEntityCollection()
		dBS1TBL.removeAllEntities();
		var dBS2TBL = sources.dBS2.getEntityCollection()
		dBS2TBL.removeAllEntities();
		var files = $$('fileUpload1').getFiles();
//		var eFFCHTTBL = sources.eFFCHT.getEntityCollection();
//		eFFCHTTBL.removeAllEntities();
//		var cPMCHTTBL = sources.cPMCHT.getEntityCollection();
//		cPMCHTTBL.removeAllEntities();
		var kPICHTTBL = sources.kPICHT.getEntityCollection();
		kPICHTTBL.removeAllEntities();
		var dHCTBL = sources.dHC.getEntityCollection()
		dHCTBL.removeAllEntities();
		var dBTETBL = sources.dBTE.getEntityCollection()
		dBTETBL.removeAllEntities();
		var dSUMMTBL = sources.dSUMM.getEntityCollection()
		dSUMMTBL.removeAllEntities();
		var d15SUMMTBL = sources.d15SUMM.getEntityCollection()
		d15SUMMTBL.removeAllEntities();


		myRPC.createChartFilesAsync(callback);

   		var file = files[0];
    	var workbook, mySheets;
    	for (var i = 0; i < files.length; i++) {
        	var file = files[i];

        	//Read content of the file into image object
        	var reader = new FileReader();
        	reader.onload = function(e) {
            	var data = e.target.result;

            	/* if binary string, read with type 'binary' */
            	workbook = XLSX.read(data, { type: 'binary' });

            	/* DO SOMETHING WITH workbook HERE */
            	mySheets = JSON.stringify(to_json(workbook), 2, 2);

            	var sheet_name_list = workbook.SheetNames;
            	sheet_name_list.forEach(function(sheetName) { /* iterate through sheets */
                	var worksheet = workbook.Sheets[sheetName];
                	if (sheetName === "STX") {
						myRPC.createSTXGridAsync(callback, [worksheet]);
					};
					if (sheetName === "VEST") {
						myRPC.createVESTGridAsync(callback, [worksheet]);
					};
//					if (sheetName === "BS1&2") {
//						myRPC.createBS12GridAsync(callback, [worksheet]);
//					};
					if (sheetName === "BS1") {
						myRPC.createBS1GridAsync(callback, [worksheet]);
					};
					if (sheetName === "BS2") {
						myRPC.createBS2GridAsync(callback, [worksheet]);
					};
					if (sheetName === "Totals") {
						myRPC.create15SUMMGridAsync(callback, [worksheet]);
					};
//					if (sheetName === "Headcount") {
//						myRPC.createHCGridAsync(callback, [worksheet]);
//					};
//					if (sheetName === "BTE") {
//						myRPC.createBTEGridAsync(callback, [worksheet]);
//					};
            	});
            	
//            	myRPC.createKPIChartAsync(callback);
//            	myRPC.createKPIChart2Async(callback);
            	alert('Upload Successful');
            	myRPC.createSummaryAsync(callback);
            	location.reload();
        	};
        	reader.readAsBinaryString(file);
        	
    	};
    	
    	//sources.dSTX.query('ID > 0');
    	//$$("dataGrid1").focus();
		//document.getElementById("dataGrid1").reload(true);
		
						

		//$$('errorDiv1').setErrorMessage( { message: mySheets , tooltip: false } 
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menuItem27", "click", menuItem27.click, "WAF");
	WAF.addListener("menuItem26", "click", menuItem26.click, "WAF");
	WAF.addListener("menuItem25", "click", menuItem25.click, "WAF");
	WAF.addListener("menuItem23", "click", menuItem23.click, "WAF");
	WAF.addListener("menuItem22", "click", menuItem22.click, "WAF");
	WAF.addListener("menuItem21", "click", menuItem21.click, "WAF");
	WAF.addListener("menuItem20", "click", menuItem20.click, "WAF");
	WAF.addListener("menuItem19", "click", menuItem19.click, "WAF");
	WAF.addListener("menuItem18", "click", menuItem18.click, "WAF");
	WAF.addListener("menuItem17", "click", menuItem17.click, "WAF");
	WAF.addListener("dataGrid13", "onRowDraw", dataGrid13.onRowDraw, "WAF");
	WAF.addListener("fileUpload5", "filesUploaded", fileUpload5.filesUploaded, "WAF");
	WAF.addListener("fileUpload4", "filesUploaded", fileUpload4.filesUploaded, "WAF");
	WAF.addListener("dataGrid12", "onRowDraw", dataGrid12.onRowDraw, "WAF");
	WAF.addListener("dataGrid11", "onRowDraw", dataGrid11.onRowDraw, "WAF");
	WAF.addListener("dataGrid9", "onRowDraw", dataGrid9.onRowDraw, "WAF");
	WAF.addListener("menuItem15", "click", menuItem15.click, "WAF");
	WAF.addListener("menuItem14", "click", menuItem14.click, "WAF");
	WAF.addListener("menuItem13", "click", menuItem13.click, "WAF");
	WAF.addListener("menuItem11", "click", menuItem11.click, "WAF");
	WAF.addListener("dataGrid8", "onRowDraw", dataGrid8.onRowDraw, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("dataGrid7", "onRowDraw", dataGrid7.onRowDraw, "WAF");
	WAF.addListener("dataGrid6", "onRowDraw", dataGrid6.onRowDraw, "WAF");
	WAF.addListener("dataGrid5", "onRowDraw", dataGrid5.onRowDraw, "WAF");
	WAF.addListener("dataGrid4", "onRowDraw", dataGrid4.onRowDraw, "WAF");
	WAF.addListener("dataGrid3", "onRowDraw", dataGrid3.onRowDraw, "WAF");
	WAF.addListener("dataGrid2", "onRowDraw", dataGrid2.onRowDraw, "WAF");
	WAF.addListener("dataGrid1", "onRowDraw", dataGrid1.onRowDraw, "WAF");
	WAF.addListener("menuItem6", "click", menuItem6.click, "WAF");
	WAF.addListener("fileUpload1", "filesUploaded", fileUpload1.filesUploaded, "WAF");
// @endregion
};// @endlock
