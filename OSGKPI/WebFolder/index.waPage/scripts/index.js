
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var dataGrid5 = {};	// @dataGrid
	var dataGrid4 = {};	// @dataGrid
	var dataGrid3 = {};	// @dataGrid
	var dataGrid2 = {};	// @dataGrid
	var dataGrid1 = {};	// @dataGrid
	var menuItem6 = {};	// @menuItem
	var fileUpload1 = {};	// @fileUpload
// @endregion// @endlock

// eventHandlers// @lock

	dataGrid5.onRowDraw = function dataGrid5_onRowDraw (event)// @startlock
	{// @endlock
		if((event.row.cells[0].value === "FOB Value/unit (US$)") || (event.row.cells[0].value === "Cost per min produced") || (event.row.cells[0].value === "Wastage %")) { // or if(event.element.salary < 16000)
		//if((event.element.B === "FOB Value/unit (US$)") || (event.element.B === "Cost per min produced") || (event.element.B === "Wastage %")) { // or if(event.element.salary < 16000)
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

	dataGrid4.onRowDraw = function dataGrid4_onRowDraw (event)// @startlock
	{// @endlock
		if((event.row.cells[0].value === "FOB Value/unit (US$)") || (event.row.cells[0].value === "Cost per min produced") || (event.row.cells[0].value === "Wastage %")) { // or if(event.element.salary < 16000)
		//if((event.element.B === "FOB Value/unit (US$)") || (event.element.B === "Cost per min produced") || (event.element.B === "Wastage %")) { // or if(event.element.salary < 16000)
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

	dataGrid3.onRowDraw = function dataGrid3_onRowDraw (event)// @startlock
	{// @endlock
		if((event.row.cells[0].value === "FOB Value/unit (US$)") || (event.row.cells[0].value === "Cost per min produced") || (event.row.cells[0].value === "Wastage %")) { // or if(event.element.salary < 16000)
		//if((event.element.B === "FOB Value/unit (US$)") || (event.element.B === "Cost per min produced") || (event.element.B === "Wastage %")) { // or if(event.element.salary < 16000)
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
		if((event.row.cells[0].value === "FOB Value/unit (US$)") || (event.row.cells[0].value === "Cost per min produced") || (event.row.cells[0].value === "Wastage %")) { // or if(event.element.salary < 16000)
		//if((event.element.B === "FOB Value/unit (US$)") || (event.element.B === "Cost per min produced") || (event.element.B === "Wastage %")) { // or if(event.element.salary < 16000)
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

	dataGrid1.onRowDraw = function dataGrid1_onRowDraw (event)// @startlock
	{// @endlock
		if((event.row.cells[0].value == "FOB Value/unit (US$)") || (event.row.cells[0].value == "Cost per min produced") || (event.row.cells[0].value == "Wastage %")) { // or if(event.element.salary < 16000)
        	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgb(255,255,102)");
			}
	    } else if(event.row.cells[0].value == "Efficiency [using total worked mins]") { // or if(event.element.salary < 16000)
        	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgb(249,239,148)");
			}
	    } else {
	    	for (i = 0; i < event.row.cells.length; i++) {
    			event.row.cells[i].dom.css("background-color","rgba(255,255,255, 0.0)");
			}
	    }
	};// @lock

	menuItem6.click = function menuItem6_click (event)// @startlock
	{// @endlock
		//debugger;
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
                        console.log(result);
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
		var eFFCHTTBL = sources.eFFCHT.getEntityCollection();
		eFFCHTTBL.removeAllEntities();


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
					if (sheetName === "BS1&2") {
						myRPC.createBS12GridAsync(callback, [worksheet]);
					};
					if (sheetName === "BS1") {
						myRPC.createBS1GridAsync(callback, [worksheet]);
					};
					if (sheetName === "BS2") {
						myRPC.createBS2GridAsync(callback, [worksheet]);
					};
            	});
            	myRPC.createChartAsync(callback);
            	alert('Upload Successful');
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
	WAF.addListener("dataGrid5", "onRowDraw", dataGrid5.onRowDraw, "WAF");
	WAF.addListener("dataGrid4", "onRowDraw", dataGrid4.onRowDraw, "WAF");
	WAF.addListener("dataGrid3", "onRowDraw", dataGrid3.onRowDraw, "WAF");
	WAF.addListener("dataGrid2", "onRowDraw", dataGrid2.onRowDraw, "WAF");
	WAF.addListener("dataGrid1", "onRowDraw", dataGrid1.onRowDraw, "WAF");
	WAF.addListener("menuItem6", "click", menuItem6.click, "WAF");
	WAF.addListener("fileUpload1", "filesUploaded", fileUpload1.filesUploaded, "WAF");
// @endregion
};// @endlock
