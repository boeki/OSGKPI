
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
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

	dataGrid8.onRowDraw = function dataGrid8_onRowDraw (event)// @startlock
	{// @endlock
		if((event.row.cells[0].value === "STX") || (event.row.cells[0].value === "BS1") || (event.row.cells[0].value === "BS2") || (event.row.cells[0].value === "VEST")) { // or if(event.element.salary < 16000)
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
		} else {
			$$("tabView1").hide("visibility");
		};
		if (WAF.directory.currentUserBelongsTo("Uploader")) {
				$$("menuItem10").show();
		};
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		$$("tabView1").hide("visibility");
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		if (WAF.directory.currentUserBelongsTo("Uploader")) {
				$$("menuItem10").show();
		} else {
			$$("menuItem10").hide();
		};
		$$("tabView1").show();
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

	dataGrid4.onRowDraw = function dataGrid4_onRowDraw (event)// @startlock
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
					if (sheetName === "BS1&2") {
						myRPC.createBS12GridAsync(callback, [worksheet]);
					};
					if (sheetName === "BS1") {
						myRPC.createBS1GridAsync(callback, [worksheet]);
					};
					if (sheetName === "BS2") {
						myRPC.createBS2GridAsync(callback, [worksheet]);
					};
					if (sheetName === "Headcount") {
						myRPC.createHCGridAsync(callback, [worksheet]);
					};
					if (sheetName === "BTE") {
						myRPC.createBTEGridAsync(callback, [worksheet]);
					};
            	});
            	myRPC.createSummaryAsync(callback);
//            	myRPC.createKPIChartAsync(callback);
//            	myRPC.createKPIChart2Async(callback);
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
