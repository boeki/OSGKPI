/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'myRPC' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(myRPC.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
exports.createSTXGrid = function createSTXGrid(xParams) {
    //ds.DSTX.all().remove();

	console.log("Starting --------------------------------------------------------------------------------------");
    var worksheet = xParams[0];
	var monthList = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    var cellList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
    var rowList = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '16', '31', '45', '46', '49', '51', '53', '54', '55', '56', '57', '58', '59', '60', '63', '64', '65', '66', '67', '68'];
	
    for (cellName in worksheet) {
        /* all keys that do not begin with "!" correspond to cell addresses */
        if (cellName[0] === '!') continue;
        var cellnum = cellName.replace(/[0-9]/g, '');
        var rownumber = cellName.replace(cellnum, '');
        if (rowList.indexOf(rownumber) != -1) {
            if (cellList.indexOf(cellnum) != -1) {
                var cellColumn = cellName.replace(/[0-9]/g, '');
                var cellVal = JSON.stringify(worksheet[cellName].w);
                var cellValue = cellVal.replace(/"/g, '');
                var dSTXrec = ds.DSTX.find('rowNum = :1', rownumber);
                if (dSTXrec != null) {
                    dCell = "dSTXrec." + cellColumn + " = cellValue;";
                    eval(dCell);
                    dSTXrec.save();
                }
                else {
                    var dSTXrec = ds.DSTX.createEntity();
                    dSTXrec.dateCreated = new Date();
                    dSTXrec.rowNum = rownumber;
                    dCell = "dSTXrec." + cellColumn + " = cellValue;";
                    eval(dCell);
                    dSTXrec.save();
                };
                if ((cellList.indexOf(cellColumn) < 1) || (cellList.indexOf(cellColumn) > 11)) continue;
                if (rownumber == 7) {
                	var kPICHTrec = ds.KPICHT.find('monthName = :1', monthList[cellList.indexOf(cellColumn) - 1]);
                	if (kPICHTrec != null) {
                		var numVal = parseFloat(cellValue.replace("%", ""));
						kPICHTrec.EFFSTX = numVal;
						kPICHTrec.save();
					};
                };
                if (rownumber == 59) {
                	var kPICHTrec = ds.KPICHT.find('monthName = :1', monthList[cellList.indexOf(cellColumn) - 1]);
                	if (kPICHTrec != null) {
                		var numVal = parseFloat(cellValue.replace("$", ""));
						kPICHTrec.CPMSTX = numVal * 100;
						kPICHTrec.save();
                	};
                };
                if (rownumber == 49) {
                	var kPICHTrec = ds.KPICHT.find('monthName = :1', monthList[cellList.indexOf(cellColumn) - 1]);
                	if (kPICHTrec != null) {
                		var numVal = parseFloat(cellValue.replace("%", ""));
						kPICHTrec.SNSSTX = numVal;
						kPICHTrec.save();
                	};
                };
                if (rownumber == 68) {
                	var kPICHTrec = ds.KPICHT.find('monthName = :1', monthList[cellList.indexOf(cellColumn) - 1]);
                	if (kPICHTrec != null) {
                		var numVal = parseFloat(cellValue.replace("%", ""));
						kPICHTrec.WTGSTX = numVal;
						kPICHTrec.save();
                	};
                };

            };
        };
    };
};

exports.createVESTGrid = function createVESTGrid(xParams) {
    //ds.DSTX.all().remove();

    var worksheet = xParams[0];
   	var monthList = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    var cellList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
    var rowList = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '16', '33', '46', '47', '50', '52', '54', '55', '56', '57', '58', '59', '60', '61', '64', '65', '66', '67', '68', '69', '71', '74', '75', '76', '77', '78', '79'];

    for (cellName in worksheet) {
        /* all keys that do not begin with "!" correspond to cell addresses */
        if (cellName[0] === '!') continue;

        var cellnum = cellName.replace(/[0-9]/g, '');
        var rownumber = cellName.replace(cellnum, '');
        if (rowList.indexOf(rownumber) != -1) {
            if (cellList.indexOf(cellnum) != -1) {
                var cellColumn = cellName.replace(/[0-9]/g, '');
                var cellVal = JSON.stringify(worksheet[cellName].w);
                var cellValue = cellVal.replace(/"/g, '');
                var dVESTrec = ds.DVEST.find('rowNum = :1', rownumber);
                if (dVESTrec != null) {
                    dCell = "dVESTrec." + cellColumn + " = cellValue;";
                    eval(dCell);
                    dVESTrec.save();
                }
                else {
                    var dVESTrec = ds.DVEST.createEntity();
                    dVESTrec.dateCreated = new Date();
                    dVESTrec.rowNum = rownumber;
                    dCell = "dVESTrec." + cellColumn + " = cellValue;";
                    eval(dCell);
                    dVESTrec.save();
                };
                if ((cellList.indexOf(cellColumn) < 1) || (cellList.indexOf(cellColumn) > 11)) continue;
                if (rownumber == 7) {
                	var kPICHTrec = ds.KPICHT.find('monthName = :1', monthList[cellList.indexOf(cellColumn) - 1]);
                	if (kPICHTrec != null) {
                		var numVal = parseFloat(cellValue.replace("%", ""));
						kPICHTrec.EFFVEST = numVal;
						kPICHTrec.save();
					};
                };
                if (rownumber == 60) {
                	var kPICHTrec = ds.KPICHT.find('monthName = :1', monthList[cellList.indexOf(cellColumn) - 1]);
                	if (kPICHTrec != null) {
                		var numVal = parseFloat(cellValue.replace("$", ""));
						kPICHTrec.CPMVEST = numVal * 100;
						kPICHTrec.save();
                	};
                };   
                if (rownumber == 50) {
                	var kPICHTrec = ds.KPICHT.find('monthName = :1', monthList[cellList.indexOf(cellColumn) - 1]);
                	if (kPICHTrec != null) {
                		var numVal = parseFloat(cellValue.replace("%", ""));
						kPICHTrec.SNSVEST = numVal;
						kPICHTrec.save();
                	};
                };
                if (rownumber == 79) {
                	var kPICHTrec = ds.KPICHT.find('monthName = :1', monthList[cellList.indexOf(cellColumn) - 1]);
                	if (kPICHTrec != null) {
                		var numVal = parseFloat(cellValue.replace("%", ""));
						kPICHTrec.WTGVEST = numVal;
						kPICHTrec.save();
                	};
                };
             
            };
        };
    };
};

exports.createBS12Grid = function createBS12Grid(xParams) {
    //ds.DSTX.all().remove();

    var worksheet = xParams[0];
    var monthList = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    var cellList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
    var rowList = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '16', '17', '31', '44', '45', '48', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '73', '74', '75', '76', '77', '78'];

    for (cellName in worksheet) {
        /* all keys that do not begin with "!" correspond to cell addresses */
        if (cellName[0] === '!') continue;

        var cellnum = cellName.replace(/[0-9]/g, '');
        var rownumber = cellName.replace(cellnum, '');
        if (rowList.indexOf(rownumber) != -1) {
            if (cellList.indexOf(cellnum) != -1) {
                var cellColumn = cellName.replace(/[0-9]/g, '');
                var cellVal = JSON.stringify(worksheet[cellName].w);
                var cellValue = cellVal.replace(/"/g, '');
                var dBS12rec = ds.DBS12.find('rowNum = :1', rownumber);
                if (dBS12rec != null) {
                    dCell = "dBS12rec." + cellColumn + " = cellValue;";
                    eval(dCell);
                    dBS12rec.save();
                }
                else {
                    var dBS12rec = ds.DBS12.createEntity();
                    dBS12rec.dateCreated = new Date();
                    dBS12rec.rowNum = rownumber;
                    dCell = "dBS12rec." + cellColumn + " = cellValue;";
                    eval(dCell);
                    dBS12rec.save();
                };
                if ((cellList.indexOf(cellColumn) < 1) || (cellList.indexOf(cellColumn) > 11)) continue;
                if (rownumber == 7) {
                	var kPICHTrec = ds.KPICHT.find('monthName = :1', monthList[cellList.indexOf(cellColumn) - 1]);
                	if (kPICHTrec != null) {
                		var numVal = parseFloat(cellValue.replace("%", ""));
						kPICHTrec.EFFBS12 = numVal;
						kPICHTrec.save();
					};
                };
                if (rownumber == 58) {
                	var kPICHTrec = ds.KPICHT.find('monthName = :1', monthList[cellList.indexOf(cellColumn) - 1]);
                	if (kPICHTrec != null) {
                		var numVal = parseFloat(cellValue.replace("$", ""));
						kPICHTrec.CPMBS12 = numVal * 100;
						kPICHTrec.save();
                	};
                };  
                if (rownumber == 48) {
                	var kPICHTrec = ds.KPICHT.find('monthName = :1', monthList[cellList.indexOf(cellColumn) - 1]);
                	if (kPICHTrec != null) {
                		var numVal = parseFloat(cellValue.replace("%", ""));
						kPICHTrec.SNSBS12 = numVal;
						kPICHTrec.save();
                	};
                };
              	if (rownumber == 78) {
                	var kPICHTrec = ds.KPICHT.find('monthName = :1', monthList[cellList.indexOf(cellColumn) - 1]);
                	if (kPICHTrec != null) {
                		var numVal = parseFloat(cellValue.replace("%", ""));
						kPICHTrec.WTGBS12 = numVal;
						kPICHTrec.save();
                	};
                };

            };
        };
    };
};

exports.createBS1Grid = function createBS1Grid(xParams) {
    //ds.DSTX.all().remove();

    var worksheet = xParams[0];
    var cellList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
    var rowList = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '16', '31', '44', '45', '48', '50', '52', '53', '54', '55', '56', '57', '58', '60', '63', '64', '65', '66', '67', '68', '70', '73', '74', '75', '76', '77', '78'];

    for (cellName in worksheet) {
        /* all keys that do not begin with "!" correspond to cell addresses */
        if (cellName[0] === '!') continue;

        var cellnum = cellName.replace(/[0-9]/g, '');
        var rownumber = cellName.replace(cellnum, '');
        if (rowList.indexOf(rownumber) != -1) {
            if (cellList.indexOf(cellnum) != -1) {
                var cellColumn = cellName.replace(/[0-9]/g, '');
                var cellVal = JSON.stringify(worksheet[cellName].w);
                var cellValue = cellVal.replace(/"/g, '');
                var dBS1rec = ds.DBS1.find('rowNum = :1', rownumber);
                if (dBS1rec != null) {
                    dCell = "dBS1rec." + cellColumn + " = cellValue;";
                    eval(dCell);
                    dBS1rec.save();
                }
                else {
                    var dBS1rec = ds.DBS1.createEntity();
                    dBS1rec.dateCreated = new Date();
                    dBS1rec.rowNum = rownumber;
                    dCell = "dBS1rec." + cellColumn + " = cellValue;";
                    eval(dCell);
                    dBS1rec.save();
                };
            };
        };
    };
};

exports.createBS2Grid = function createBS2Grid(xParams) {
    //ds.DSTX.all().remove();

    var worksheet = xParams[0];
    var cellList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
    var rowList = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '16', '31', '44', '45', '48', '50', '52', '53', '54', '55', '56', '57', '58', '59', '63', '64', '65', '66', '67', '68', '70', '73', '74', '75', '76', '77', '78'];

    for (cellName in worksheet) {
        /* all keys that do not begin with "!" correspond to cell addresses */
        if (cellName[0] === '!') continue;

        var cellnum = cellName.replace(/[0-9]/g, '');
        var rownumber = cellName.replace(cellnum, '');
        if (rowList.indexOf(rownumber) != -1) {
            if (cellList.indexOf(cellnum) != -1) {
                var cellColumn = cellName.replace(/[0-9]/g, '');
                var cellVal = JSON.stringify(worksheet[cellName].w);
                var cellValue = cellVal.replace(/"/g, '');
                var dBS2rec = ds.DBS2.find('rowNum = :1', rownumber);
                if (dBS2rec != null) {
                    dCell = "dBS2rec." + cellColumn + " = cellValue;";
                    eval(dCell);
                    dBS2rec.save();
                }
                else {
                    var dBS2rec = ds.DBS2.createEntity();
                    dBS2rec.dateCreated = new Date();
                    dBS2rec.rowNum = rownumber;
                    dCell = "dBS2rec." + cellColumn + " = cellValue;";
                    eval(dCell);
                    dBS2rec.save();
                };
            };
        };
    };
};

exports.createBS2Grid = function createBS2Grid(xParams) {
    //ds.DSTX.all().remove();

    var worksheet = xParams[0];
    var cellList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
    var rowList = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '16', '31', '44', '45', '48', '50', '52', '53', '54', '55', '56', '57', '58', '59', '63', '64', '65', '66', '67', '68', '70', '73', '74', '75', '76', '77', '78'];

    for (cellName in worksheet) {
        /* all keys that do not begin with "!" correspond to cell addresses */
        if (cellName[0] === '!') continue;

        var cellnum = cellName.replace(/[0-9]/g, '');
        var rownumber = cellName.replace(cellnum, '');
        if (rowList.indexOf(rownumber) != -1) {
            if (cellList.indexOf(cellnum) != -1) {
                var cellColumn = cellName.replace(/[0-9]/g, '');
                var cellVal = JSON.stringify(worksheet[cellName].w);
                var cellValue = cellVal.replace(/"/g, '');
                var dBS2rec = ds.DBS2.find('rowNum = :1', rownumber);
                if (dBS2rec != null) {
                    dCell = "dBS2rec." + cellColumn + " = cellValue;";
                    eval(dCell);
                    dBS2rec.save();
                }
                else {
                    var dBS2rec = ds.DBS2.createEntity();
                    dBS2rec.dateCreated = new Date();
                    dBS2rec.rowNum = rownumber;
                    dCell = "dBS2rec." + cellColumn + " = cellValue;";
                    eval(dCell);
                    dBS2rec.save();
                };
            };
        };
    };
};

exports.createHCGrid = function createHCGrid(xParams) {
    //ds.DSTX.all().remove();

    var worksheet = xParams[0];
    var cellList = ['A', 'B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'GH', 'GI', 'GJ', 'GK', 'GL', 'GM'];
    var rowList = ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44'];

    for (cellName in worksheet) {
        /* all keys that do not begin with "!" correspond to cell addresses */
        if (cellName[0] === '!') continue;

        var cellnum = cellName.replace(/[0-9]/g, '');
        var rownumber = cellName.replace(cellnum, '');
        if (rowList.indexOf(rownumber) != -1) {
            if (cellList.indexOf(cellnum) != -1) {
                var cellColumn = cellName.replace(/[0-9]/g, '');
                var cellVal = JSON.stringify(worksheet[cellName].w);
                var cellValue = cellVal.replace(/"/g, '');
                var dHCrec = ds.DHC.find('rowNum = :1', rownumber);
                if (dHCrec != null) {
                    dCell = "dHCrec." + cellColumn + " = cellValue;";
                    eval(dCell);
                    dHCrec.save();
                }
                else {
                    var dHCrec = ds.DHC.createEntity();
                    dHCrec.dateCreated = new Date();
                    dHCrec.rowNum = rownumber;
                    dCell = "dHCrec." + cellColumn + " = cellValue;";
                    eval(dCell);
                    dHCrec.save();
                };
            };
        };
    };
};

exports.createBTEGrid = function createBTEGrid(xParams) {
    //ds.DSTX.all().remove();

    var worksheet = xParams[0];
    var cellList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];
    var rowList = ['14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '47', '48', '49', '50', '51'];

    for (cellName in worksheet) {
        /* all keys that do not begin with "!" correspond to cell addresses */
        if (cellName[0] === '!') continue;

        var cellnum = cellName.replace(/[0-9]/g, '');
        var rownumber = cellName.replace(cellnum, '');
        if (rowList.indexOf(rownumber) != -1) {
            if (cellList.indexOf(cellnum) != -1) {
                var cellColumn = cellName.replace(/[0-9]/g, '');
                var cellVal = JSON.stringify(worksheet[cellName].w);
                var cellValue = cellVal.replace(/"/g, '');
                var dBTErec = ds.DBTE.find('rowNum = :1', rownumber);
                if (dBTErec != null) {
                    dCell = "dBTErec." + cellColumn + " = cellValue;";
                    eval(dCell);
                    dBTErec.save();
                }
                else {
                    var dBTErec = ds.DBTE.createEntity();
                    dBTErec.dateCreated = new Date();
                    dBTErec.rowNum = rownumber;
                    dCell = "dBTErec." + cellColumn + " = cellValue;";
                    eval(dCell);
                    dBTErec.save();
                };
            };
        };
    };
};

exports.createChartFiles = function createChartFiles(callback) {
	
	var monthList = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
	var i = 0;
	monthList.forEach(function(moVar) {
		i++;
		var kPICHTrec = ds.KPICHT.createEntity();
		kPICHTrec.monthName = moVar;	
		kPICHTrec.monthNum = i;	
		kPICHTrec.save();
	});
};

exports.createSummary = function createSummary(callback) {
	
	var recField = ds.DSTX.attributes;
	var dSUMMrec = ds.DSUMM.createEntity();
	dSUMMrec.dateCreated = new Date();
	dSUMMrec.rowNum = 0;
	dSUMMrec.B = "STX";
	dSUMMrec.save();
	
	var DSTXrecs = ds.DSTX.all();
	DSTXrecs.forEach( function (rec) {
		if (rec.B == "Efficiency reported by SBU") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 1;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};
		if (rec.B == "Efficiency [using total worked mins]") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 2;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};	
		if (rec.B == "Total Headcount") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 3;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};	
		if (rec.B == "Sewer vs Non sewer % (excludes FE & OS)") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 4;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};
		if (rec.B == "Direct vs Indirect % (excludes FE & OS)") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 5;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};
		if (rec.B == "Turnover % (Monthly)") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 6;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};
	});
	var dSUMMrec = ds.DSUMM.createEntity();
	dSUMMrec.dateCreated = new Date();
	dSUMMrec.rowNum = 7;
	dSUMMrec.B = "BS1";
	dSUMMrec.save();
	
	var DBS1recs = ds.DBS1.all();
	DBS1recs.forEach( function (rec) {
		if (rec.B == "Efficiency reported by SBU") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 8;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};
		if (rec.B == "Efficiency [using total worked mins]") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 9;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};	
		if (rec.B == "Total Headcount") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 10;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};	
		if (rec.B == "Sewer vs Non sewer % (excludes FE & OS)") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 11;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};
		if (rec.B == "Direct vs Indirect % (excludes FE & OS)") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 12;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};
		if (rec.B == "Turnover % (Monthly)") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 13;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};
	});
	var dSUMMrec = ds.DSUMM.createEntity();
	dSUMMrec.dateCreated = new Date();
	dSUMMrec.rowNum = 14;
	dSUMMrec.B = "BS2";
	dSUMMrec.save();
	
	var DBS2recs = ds.DBS2.all();
	DBS2recs.forEach( function (rec) {
		if (rec.B == "Efficiency reported by SBU") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 15;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};
		if (rec.B == "Efficiency [using total worked mins]") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 16;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};	
		if (rec.B == "Total Headcount") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 17;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};	
		if (rec.B == "Sewer vs Non sewer % (excludes FE & OS)") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 18;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};
		if (rec.B == "Direct vs Indirect % (excludes FE & OS)") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 19;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};
		if (rec.B == "Turnover % (Monthly)") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 20;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};
	});
	var dSUMMrec = ds.DSUMM.createEntity();
	dSUMMrec.dateCreated = new Date();
	dSUMMrec.rowNum = 21;
	dSUMMrec.B = "VEST";
	dSUMMrec.save();
	
	var DVESTrecs = ds.DVEST.all();
	DVESTrecs.forEach( function (rec) {
		if (rec.B == "Efficiency reported by SBU") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 22;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};
		if (rec.B == "Efficiency [using total worked mins]") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 23;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};	
		if (rec.B == "Total Headcount") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 24;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};	
		if (rec.B == "Sewer vs Non sewer % (excludes FE & OS)") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 25;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};
		if (rec.B == "Direct vs Indirect % (excludes FE & OS)") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 26;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};
		if (rec.B == "Turnover % (Monthly)") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 27;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};
	});
};
	
