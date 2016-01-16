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
	var cellList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'IS', 'IT', 'IU', 'IV', 'IW', 'IX'];
    var fldList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
    var rowList = ['4', '5', '6', '8', '9', '10', '11', '12', '13', '14', '15', '16', '30', '31', '32', '33', '34', '35', '36', '37', '38', '43', '44', '45', '46', '49', '51', '53', '54', '55', '56', '57', '58', '59', '60', '63', '64', '65', '66', '67', '68'];
	
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
//                    dCell = "dSTXrec." + cellColumn + " = cellValue;";
					dCell = "dSTXrec." + fldList[cellList.indexOf(cellnum)] + " = cellValue;";
                    eval(dCell);
                    dSTXrec.save();
                }
                else {
                    var dSTXrec = ds.DSTX.createEntity();
                    dSTXrec.dateCreated = new Date();
                    dSTXrec.rowNum = rownumber;
//                    dCell = "dSTXrec." + cellColumn + " = cellValue;";
					dCell = "dSTXrec." + fldList[cellList.indexOf(cellnum)] + " = cellValue;";
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
    var cellList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'IS', 'IT', 'IU', 'IV', 'IW', 'IX'];
    var fldList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
    var rowList = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '50', '51', '52', '54', '55', '56', '57', '58', '59', '60', '61', '62', '65', '66', '67', '68', '69', '70', '71', '72', '75', '76', '77', '78', '79', '80'];

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
                    dCell = "dVESTrec." + fldList[cellList.indexOf(cellnum)] + " = cellValue;";
                    eval(dCell);
                    dVESTrec.save();
                }
                else {
                    var dVESTrec = ds.DVEST.createEntity();
                    dVESTrec.dateCreated = new Date();
                    dVESTrec.rowNum = rownumber;
                    dCell = "dVESTrec." + fldList[cellList.indexOf(cellnum)] + " = cellValue;";
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
    var fldList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
    var cellList= ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'IS', 'IT', 'IU', 'IV', 'IW', 'IX'];
    var rowList = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '42', '43', '44', '45', '48', '50', '52', '53', '54', '55', '56', '57', '58', '59', '60', '63', '64', '65', '66', '67', '68', '69', '70', '73', '74', '75', '76', '77', '78'];

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
                    dCell = "dBS1rec." + fldList[cellList.indexOf(cellnum)] + " = cellValue;";
                    eval(dCell);
                    dBS1rec.save();
                }
                else {
                    var dBS1rec = ds.DBS1.createEntity();
                    dBS1rec.dateCreated = new Date();
                    dBS1rec.rowNum = rownumber;
                    dCell = "dBS1rec." + fldList[cellList.indexOf(cellnum)] + " = cellValue;";
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
    var cellList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'IS', 'IT', 'IU', 'IV', 'IW', 'IX'];
    var fldList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
    var rowList = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '30', '31', '32', '33', '34', '35', '36', '37', '38', '42', '43', '44', '45', '48', '50', '52', '53', '54', '55', '56', '57', '58', '59', '60', '63', '64', '65', '66', '67', '68', '70', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82'];

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
                    dCell = "dBS2rec." + fldList[cellList.indexOf(cellnum)] + " = cellValue;";
                    eval(dCell);
                    dBS2rec.save();
                }
                else {
                    var dBS2rec = ds.DBS2.createEntity();
                    dBS2rec.dateCreated = new Date();
                    dBS2rec.rowNum = rownumber;
                    dCell = "dBS2rec." + fldList[cellList.indexOf(cellnum)] + " = cellValue;";
                    eval(dCell);
                    dBS2rec.save();
                };
            };
        };
    };
};

exports.create15SUMMGrid = function create15SUMMGrid(xParams) {
    //ds.DSTX.all().remove();

    var worksheet = xParams[0];
    var cellList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'IS', 'IT', 'IU', 'IV', 'IW', 'IX'];
    var fldList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
    var rowList = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '30', '31', '32', '33', '34', '35', '36', '37', '38', '42', '43', '44', '45', '48', '50', '52', '53', '54', '55', '56', '57', '58', '59', '60', '63', '64', '65', '66', '67', '68', '70', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82'];

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
                var d15SUMMrec = ds.D15SUMM.find('rowNum = :1', rownumber);
                if (d15SUMMrec != null) {
                    dCell = "d15SUMMrec." + fldList[cellList.indexOf(cellnum)] + " = cellValue;";
                    eval(dCell);
                    d15SUMMrec.save();
                }
                else {
                    var d15SUMMrec = ds.D15SUMM.createEntity();
                    d15SUMMrec.dateCreated = new Date();
                    d15SUMMrec.rowNum = rownumber;
                    dCell = "d15SUMMrec." + fldList[cellList.indexOf(cellnum)] + " = cellValue;";
                    eval(dCell);
                    d15SUMMrec.save();
                };
            };
        };
    };
};

//exports.createBS2Grid = function createBS2Grid(xParams) {
//    //ds.DSTX.all().remove();

//    var worksheet = xParams[0];
//    var cellList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
//    var rowList = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '16', '31', '44', '45', '48', '50', '52', '53', '54', '55', '56', '57', '58', '59', '63', '64', '65', '66', '67', '68', '70', '73', '74', '75', '76', '77', '78'];

//    for (cellName in worksheet) {
//        /* all keys that do not begin with "!" correspond to cell addresses */
//        if (cellName[0] === '!') continue;

//        var cellnum = cellName.replace(/[0-9]/g, '');
//        var rownumber = cellName.replace(cellnum, '');
//        if (rowList.indexOf(rownumber) != -1) {
//            if (cellList.indexOf(cellnum) != -1) {
//                var cellColumn = cellName.replace(/[0-9]/g, '');
//                var cellVal = JSON.stringify(worksheet[cellName].w);
//                var cellValue = cellVal.replace(/"/g, '');
//                var dBS2rec = ds.DBS2.find('rowNum = :1', rownumber);
//                if (dBS2rec != null) {
//                    dCell = "dBS2rec." + cellColumn + " = cellValue;";
//                    eval(dCell);
//                    dBS2rec.save();
//                }
//                else {
//                    var dBS2rec = ds.DBS2.createEntity();
//                    dBS2rec.dateCreated = new Date();
//                    dBS2rec.rowNum = rownumber;
//                    dCell = "dBS2rec." + cellColumn + " = cellValue;";
//                    eval(dCell);
//                    dBS2rec.save();
//                };
//            };
//        };
//    };
//};

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
		if (rec.B == "Output (000 units)") {
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
		if (rec.B == "Output (000 mins)") {
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
		if (rec.B == "Sewer headcount (Ave. daily attended)") {
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
		if (rec.B == "FOB Value (000 US$)") {
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
		if (rec.B == "Total Headcount") {
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
		if (rec.B == "Output (000 units)") {
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
		if (rec.B == "Output (000 mins)") {
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
		if (rec.B == "Sewer headcount (Ave. daily attended)") {
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
		if (rec.B == "FOB Value (000 US$)") {
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
		if (rec.B == "Total Headcount") {
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
		if (rec.B == "Output (000 units)") {
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
		if (rec.B == "Output (000 mins)") {
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
		if (rec.B == "Sewer headcount (Ave. daily attended)") {
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
		if (rec.B == "FOB Value (000 US$)") {
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
		if (rec.B == "Total Headcount") {
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
		if (rec.B == "Output (000 units)") {
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
		if (rec.B == "Output (000 mins)") {
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
		if (rec.B == "Sewer headcount (Ave. daily attended)") {
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
		if (rec.B == "FOB Value (000 US$)") {
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
		if (rec.B == "Total Headcount") {
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
	var dSUMMrec = ds.DSUMM.createEntity();
	dSUMMrec.dateCreated = new Date();
	dSUMMrec.rowNum = 28;
	dSUMMrec.B = "OVERALL";
	dSUMMrec.save();
	var dSUMMrec = ds.DSUMM.createEntity();
	dSUMMrec.dateCreated = new Date();
	dSUMMrec.rowNum = 29;
	dSUMMrec.B = "Efficiency reported by SBU";
	dSUMMrec.save();
	
	var D15SUMMrecs = ds.D15SUMM.all();
	D15SUMMrecs.forEach( function (rec) {
		if (rec.B == "Output (000 units)") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 30;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};	
		if (rec.B == "Output (000 mins)") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 31;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};	
		if (rec.B == "Sewer headcount (Ave. daily attended)") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 32;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};
		if (rec.B == "FOB Value (000 US$)") {
			var dSUMMrec = ds.DSUMM.createEntity();
			dSUMMrec.dateCreated = new Date();
			dSUMMrec.rowNum = 33;
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
			dSUMMrec.rowNum = 34;
			for (i = 5; i < 19; i++) {
				console.log(recField[i]);
 			   	dCell = "dSUMMrec." + recField[i] + " = rec." + recField[i] + ";";
               	eval(dCell);
			};
			dSUMMrec.save();
		};
	});
};
	
exports.create13SUMM = function create13SUMM(xParams) {
    //ds.DSTX.all().remove();

	console.log("Starting --------------------------------------------------------------------------------------");
    var worksheet = xParams[0];
	var monthList = ['MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
	var cellList = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    var fldList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP'];
    var rowList = ['4', '5', '6', '10', '11', '13', '14', '15', '16', '17', '18', '19', '23', '24', '26', '27', '28', '29', '30', '44', '45', '49', '50', '52', '53', '54', '55', '56', '57', '58', '62', '63', '65', '66', '67', '68', '69', '70', '71', '75', '76', '78', '79', '80', '81', '82'];
	
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
                cellValue = cellValue.replace(/\\n/g, " ");
                var d13SUMMrec = ds.D13SUMM.find('rowNum = :1', rownumber);
                if (d13SUMMrec != null) {
//                    dCell = "d13SUMMrec." + cellColumn + " = cellValue;";
					dCell = "d13SUMMrec." + fldList[cellList.indexOf(cellnum)] + " = cellValue;";
                    eval(dCell);
                    d13SUMMrec.save();
                }
                else {
                    var d13SUMMrec = ds.D13SUMM.createEntity();
                    d13SUMMrec.dateCreated = new Date();
                    d13SUMMrec.rowNum = rownumber;
//                    dCell = "d13SUMMrec." + cellColumn + " = cellValue;";
					dCell = "d13SUMMrec." + fldList[cellList.indexOf(cellnum)] + " = cellValue;";
                    eval(dCell);
                    d13SUMMrec.save();
                };
            };
        };
    };
};

exports.create14SUMM = function create14SUMM(xParams) {
    //ds.DSTX.all().remove();

	console.log("Starting --------------------------------------------------------------------------------------");
    var worksheet = xParams[0];
	var monthList = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
	var cellList = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
    var fldList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS', 'HT'];
    var rowList = ['4', '5', '6', '10', '11', '13', '14', '15', '16', '17', '18', '19', '23', '24', '26', '27', '28', '29', '30', '31', '32', '36', '37', '39', '40', '41', '42', '43', '44', '45', '49', '50', '52', '53', '54', '55', '56', '57', '58', '62', '63', '65', '66', '67', '68', '69'];
	
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
                cellValue = cellValue.replace(/\\r\\n/g, " ");
                var d14SUMMrec = ds.D14SUMM.find('rowNum = :1', rownumber);
                if (d14SUMMrec != null) {
//                    dCell = "d14SUMMrec." + cellColumn + " = cellValue;";
					dCell = "d14SUMMrec." + fldList[cellList.indexOf(cellnum)] + " = cellValue;";
                    eval(dCell);
                    d14SUMMrec.save();
                }
                else {
                    var d14SUMMrec = ds.D14SUMM.createEntity();
                    d14SUMMrec.dateCreated = new Date();
                    d14SUMMrec.rowNum = rownumber;
//                    dCell = "d14SUMMrec." + cellColumn + " = cellValue;";
					dCell = "d14SUMMrec." + fldList[cellList.indexOf(cellnum)] + " = cellValue;";
                    eval(dCell);
                    d14SUMMrec.save();
                };
            };
        };
    };
//    var D1SUMMrecs = ds.D14SUMM.all();
//	D14SUMMrecs.forEach( function (rec) {
//		rec.B = rec.B.replace("\r\n", "");
//		rec.save();
//	});
};

exports.createEffBS1Chart = function createEffBS1Chart(xParams) {
	var myEntity = "";
	var lnEval = "";
	var arrPlot = [];
	var result = [];
	var fld13List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO'];
	var fld14List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
	var fld15List = ['AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR'];
	var monthList = ['1-MAY-2013', '1-JUN-2013', '1-JUL-2013', '1-AUG-2013', '1-SEP-2013', '1-OCT-2013', '1-NOV-2013', '1-DEC-2013', '1-JAN-2014', '1-FEB-2014', '1-MAR-2014', '1-APR-2014', '1-MAY-2014', '1-JUN-2014', '1-JUL-2014', '1-AUG-2014', '1-SEP-2014', '1-OCT-2014', '1-NOV-2014', '1-DEC-2014', '1-JAN-2015', '1-FEB-2015', '1-MAR-2015', '1-APR-2015', '1-MAY-2015', '1-JUN-2015', '1-JUL-2015', '1-AUG-2015', '1-SEP-2015', '1-OCT-2015', '1-NOV-2015', '1-DEC-2015'];
		
	var d13SUMMrec = ds.D13SUMM.find('rowNum = :1', 18);
	for (i = 0; i < 8; i++) {
   		lnEval = 'arrPlot.push(d13SUMMrec.' + fld13List[i] + '.replace("%", ""));';
   		eval(lnEval);
	};
	var d14SUMMrec = ds.D14SUMM.find('rowNum = :1', 18);
	for (i = 0; i < fld14List.length; i++) {
   		lnEval = 'arrPlot.push(d14SUMMrec.' + fld14List[i] + '.replace("%", ""));';
   		eval(lnEval);
	};
	var d15SUMMrec = ds.DBS1.find('rowNum = :1', 6);
	for (i = 0; i < fld15List.length; i++) {
   		lnEval = 'arrPlot.push(d15SUMMrec.' + fld15List[i] + '.replace("%", ""));';
   		eval(lnEval);
	};
	for (i = 0; i < arrPlot.length; i++) {
		arrPlot[i] = parseFloat(arrPlot[i]);
	};
	for (i = 0; i < arrPlot.length; i++) {
		result[i] = [monthList[i], arrPlot[i]];
		console.log(result[i]);
	};
	return result;	
};

exports.createEffBS2Chart = function createEffBS2Chart(xParams) {
	var myEntity = "";
	var lnEval = "";
	var arrPlot = [];
	var result = [];
	var fld13List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO'];
	var fld14List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
	var fld15List = ['AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR'];
	var monthList = ['1-MAY-2013', '1-JUN-2013', '1-JUL-2013', '1-AUG-2013', '1-SEP-2013', '1-OCT-2013', '1-NOV-2013', '1-DEC-2013', '1-JAN-2014', '1-FEB-2014', '1-MAR-2014', '1-APR-2014', '1-MAY-2014', '1-JUN-2014', '1-JUL-2014', '1-AUG-2014', '1-SEP-2014', '1-OCT-2014', '1-NOV-2014', '1-DEC-2014', '1-JAN-2015', '1-FEB-2015', '1-MAR-2015', '1-APR-2015', '1-MAY-2015', '1-JUN-2015', '1-JUL-2015', '1-AUG-2015', '1-SEP-2015', '1-OCT-2015', '1-NOV-2015', '1-DEC-2015'];
		
	var d13SUMMrec = ds.D13SUMM.find('rowNum = :1', 5);
	for (i = 0; i < 8; i++) {
   		lnEval = 'arrPlot.push(d13SUMMrec.' + fld13List[i] + '.replace("%", ""));';
   		eval(lnEval);
	};
	var d14SUMMrec = ds.D14SUMM.find('rowNum = :1', 5);
	for (i = 0; i < fld14List.length; i++) {
   		lnEval = 'arrPlot.push(d14SUMMrec.' + fld14List[i] + '.replace("%", ""));';
   		eval(lnEval);
	};
	var d15SUMMrec = ds.DBS2.find('rowNum = :1', 6);
	for (i = 0; i < fld15List.length; i++) {
   		lnEval = 'arrPlot.push(d15SUMMrec.' + fld15List[i] + '.replace("%", ""));';
   		eval(lnEval);
	};
	for (i = 0; i < arrPlot.length; i++) {
		arrPlot[i] = parseFloat(arrPlot[i]);
	};
	for (i = 0; i < arrPlot.length; i++) {
		result[i] = [monthList[i], arrPlot[i]];
		console.log(result[i]);
	};
	return result;
};

exports.createEffBS3Chart = function createEffBS3Chart(xParams) {
	var myEntity = "";
	var lnEval = "";
	var arrPlot = [];
	var result = [];
	var fld13List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO'];
	var fld14List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
	var fld15List = ['AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR'];
	var monthList = ['1-MAY-2013', '1-JUN-2013', '1-JUL-2013', '1-AUG-2013', '1-SEP-2013', '1-OCT-2013', '1-NOV-2013', '1-DEC-2013', '1-JAN-2014', '1-FEB-2014', '1-MAR-2014', '1-APR-2014', '1-MAY-2014', '1-JUN-2014', '1-JUL-2014', '1-AUG-2014', '1-SEP-2014', '1-OCT-2014', '1-NOV-2014', '1-DEC-2014', '1-JAN-2015', '1-FEB-2015', '1-MAR-2015', '1-APR-2015', '1-MAY-2015', '1-JUN-2015', '1-JUL-2015', '1-AUG-2015', '1-SEP-2015', '1-OCT-2015', '1-NOV-2015', '1-DEC-2015'];
		
	var d13SUMMrec = ds.D13SUMM.find('rowNum = :1', 44);
	for (i = 0; i < 8; i++) {
   		lnEval = 'arrPlot.push(d13SUMMrec.' + fld13List[i] + '.replace("%", ""));';
   		eval(lnEval);
	};
	var d14SUMMrec = ds.D14SUMM.find('rowNum = :1', 44);
	for (i = 0; i < fld14List.length; i++) {
   		lnEval = 'arrPlot.push(d14SUMMrec.' + fld14List[i] + '.replace("%", ""));';
   		eval(lnEval);
	};
	var d15SUMMrec = ds.DVEST.find('rowNum = :1', 6);
	for (i = 0; i < fld15List.length; i++) {
   		lnEval = 'arrPlot.push(d15SUMMrec.' + fld15List[i] + '.replace("%", ""));';
   		eval(lnEval);
	};
	for (i = 0; i < arrPlot.length; i++) {
		arrPlot[i] = parseFloat(arrPlot[i]);
	};
	for (i = 0; i < arrPlot.length; i++) {
		result[i] = [monthList[i], arrPlot[i]];
		console.log(result[i]);
	};
	return result;
};

exports.createEffYTIChart = function createEffYTIChart(xParams) {
	var myEntity = "";
	var lnEval = "";
	var arrPlot = [];
	var result = [];
	var fld13List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO'];
	var fld14List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
	var fld15List = ['AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR'];
	var monthList = ['1-MAY-2013', '1-JUN-2013', '1-JUL-2013', '1-AUG-2013', '1-SEP-2013', '1-OCT-2013', '1-NOV-2013', '1-DEC-2013', '1-JAN-2014', '1-FEB-2014', '1-MAR-2014', '1-APR-2014', '1-MAY-2014', '1-JUN-2014', '1-JUL-2014', '1-AUG-2014', '1-SEP-2014', '1-OCT-2014', '1-NOV-2014', '1-DEC-2014', '1-JAN-2015', '1-FEB-2015', '1-MAR-2015', '1-APR-2015', '1-MAY-2015', '1-JUN-2015', '1-JUL-2015', '1-AUG-2015', '1-SEP-2015', '1-OCT-2015', '1-NOV-2015', '1-DEC-2015'];
		
	var d13SUMMrec = ds.D13SUMM.find('rowNum = :1', 57);
	console.log(d13SUMMrec);
	for (i = 0; i < 8; i++) {
   		lnEval = 'var valFld = d13SUMMrec.' + fld13List[i] + ' || "0";';
   		eval(lnEval);
   		console.log(valFld);
		arrPlot.push(valFld.replace("%", ""));
	};
	var d14SUMMrec = ds.D14SUMM.find('rowNum = :1', 57);
	for (i = 0; i < fld14List.length; i++) {
   		lnEval = 'arrPlot.push(d14SUMMrec.' + fld14List[i] + '.replace("%", ""));';
   		eval(lnEval);
	};
	var d15SUMMrec = ds.DSTX.find('rowNum = :1', 6);
	for (i = 0; i < fld15List.length; i++) {
   		lnEval = 'arrPlot.push(d15SUMMrec.' + fld15List[i] + '.replace("%", ""));';
   		eval(lnEval);
	};
	for (i = 0; i < arrPlot.length; i++) {
		arrPlot[i] = parseFloat(arrPlot[i]);
	};
	for (i = 0; i < arrPlot.length; i++) {
		result[i] = [monthList[i], arrPlot[i]];
		console.log(result[i]);
	};
	return result;
};

exports.createMinsBS1Chart = function createMinsBS1Chart(xParams) {
	var myEntity = "";
	var lnEval = "";
	var arrPlot = [];
	var result = [];
	var fld13List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO'];
	var fld14List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
	var fld15List = ['AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR'];
	var monthList = ['1-MAY-2013', '1-JUN-2013', '1-JUL-2013', '1-AUG-2013', '1-SEP-2013', '1-OCT-2013', '1-NOV-2013', '1-DEC-2013', '1-JAN-2014', '1-FEB-2014', '1-MAR-2014', '1-APR-2014', '1-MAY-2014', '1-JUN-2014', '1-JUL-2014', '1-AUG-2014', '1-SEP-2014', '1-OCT-2014', '1-NOV-2014', '1-DEC-2014', '1-JAN-2015', '1-FEB-2015', '1-MAR-2015', '1-APR-2015', '1-MAY-2015', '1-JUN-2015', '1-JUL-2015', '1-AUG-2015', '1-SEP-2015', '1-OCT-2015', '1-NOV-2015', '1-DEC-2015'];
		
	var d13SUMMrec = ds.D13SUMM.find('rowNum = :1', 23);
	for (i = 0; i < 8; i++) {
   		lnEval = 'arrPlot.push(d13SUMMrec.' + fld13List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d14SUMMrec = ds.D14SUMM.find('rowNum = :1', 23);
	for (i = 0; i < fld14List.length; i++) {
   		lnEval = 'arrPlot.push(d14SUMMrec.' + fld14List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d15SUMMrec = ds.DBS1.find('rowNum = :1', 9);
	for (i = 0; i < fld15List.length; i++) {
   		lnEval = 'arrPlot.push(d15SUMMrec.' + fld15List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	for (i = 0; i < arrPlot.length; i++) {
		arrPlot[i] = parseFloat(arrPlot[i]);
	};
	for (i = 0; i < arrPlot.length; i++) {
		result[i] = [monthList[i], arrPlot[i]];
		console.log(result[i]);
	};
	return result;	
};

exports.createMinsBS2Chart = function createMinsBS2Chart(xParams) {
	var myEntity = "";
	var lnEval = "";
	var arrPlot = [];
	var result = [];
	var fld13List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO'];
	var fld14List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
	var fld15List = ['AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR'];
	var monthList = ['1-MAY-2013', '1-JUN-2013', '1-JUL-2013', '1-AUG-2013', '1-SEP-2013', '1-OCT-2013', '1-NOV-2013', '1-DEC-2013', '1-JAN-2014', '1-FEB-2014', '1-MAR-2014', '1-APR-2014', '1-MAY-2014', '1-JUN-2014', '1-JUL-2014', '1-AUG-2014', '1-SEP-2014', '1-OCT-2014', '1-NOV-2014', '1-DEC-2014', '1-JAN-2015', '1-FEB-2015', '1-MAR-2015', '1-APR-2015', '1-MAY-2015', '1-JUN-2015', '1-JUL-2015', '1-AUG-2015', '1-SEP-2015', '1-OCT-2015', '1-NOV-2015', '1-DEC-2015'];
		
	var d13SUMMrec = ds.D13SUMM.find('rowNum = :1', 10);
	for (i = 0; i < 8; i++) {
   		lnEval = 'arrPlot.push(d13SUMMrec.' + fld13List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d14SUMMrec = ds.D14SUMM.find('rowNum = :1', 10);
	for (i = 0; i < fld14List.length; i++) {
   		lnEval = 'arrPlot.push(d14SUMMrec.' + fld14List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d15SUMMrec = ds.DBS2.find('rowNum = :1', 9);
	for (i = 0; i < fld15List.length; i++) {
   		lnEval = 'arrPlot.push(d15SUMMrec.' + fld15List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	for (i = 0; i < arrPlot.length; i++) {
		arrPlot[i] = parseFloat(arrPlot[i]);
	};
	for (i = 0; i < arrPlot.length; i++) {
		result[i] = [monthList[i], arrPlot[i]];
		console.log(result[i]);
	};
	return result;	
};

exports.createMinsBS3Chart = function createMinsBS3Chart(xParams) {
	var myEntity = "";
	var lnEval = "";
	var arrPlot = [];
	var result = [];
	var fld13List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO'];
	var fld14List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
	var fld15List = ['AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR'];
	var monthList = ['1-MAY-2013', '1-JUN-2013', '1-JUL-2013', '1-AUG-2013', '1-SEP-2013', '1-OCT-2013', '1-NOV-2013', '1-DEC-2013', '1-JAN-2014', '1-FEB-2014', '1-MAR-2014', '1-APR-2014', '1-MAY-2014', '1-JUN-2014', '1-JUL-2014', '1-AUG-2014', '1-SEP-2014', '1-OCT-2014', '1-NOV-2014', '1-DEC-2014', '1-JAN-2015', '1-FEB-2015', '1-MAR-2015', '1-APR-2015', '1-MAY-2015', '1-JUN-2015', '1-JUL-2015', '1-AUG-2015', '1-SEP-2015', '1-OCT-2015', '1-NOV-2015', '1-DEC-2015'];
		
	var d13SUMMrec = ds.D13SUMM.find('rowNum = :1', 49);
	for (i = 0; i < 8; i++) {
   		lnEval = 'arrPlot.push(d13SUMMrec.' + fld13List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d14SUMMrec = ds.D14SUMM.find('rowNum = :1', 49);
	for (i = 0; i < fld14List.length; i++) {
   		lnEval = 'arrPlot.push(d14SUMMrec.' + fld14List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d15SUMMrec = ds.DVEST.find('rowNum = :1', 9);
	for (i = 0; i < fld15List.length; i++) {
   		lnEval = 'arrPlot.push(d15SUMMrec.' + fld15List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	for (i = 0; i < arrPlot.length; i++) {
		arrPlot[i] = parseFloat(arrPlot[i]);
	};
	for (i = 0; i < arrPlot.length; i++) {
		result[i] = [monthList[i], arrPlot[i]];
		console.log(result[i]);
	};
	return result;	
};

exports.createMinsYTIChart = function createMinsYTIChart(xParams) {
	var myEntity = "";
	var lnEval = "";
	var arrPlot = [];
	var result = [];
	var fld13List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO'];
	var fld14List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
	var fld15List = ['AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR'];
	var monthList = ['1-MAY-2013', '1-JUN-2013', '1-JUL-2013', '1-AUG-2013', '1-SEP-2013', '1-OCT-2013', '1-NOV-2013', '1-DEC-2013', '1-JAN-2014', '1-FEB-2014', '1-MAR-2014', '1-APR-2014', '1-MAY-2014', '1-JUN-2014', '1-JUL-2014', '1-AUG-2014', '1-SEP-2014', '1-OCT-2014', '1-NOV-2014', '1-DEC-2014', '1-JAN-2015', '1-FEB-2015', '1-MAR-2015', '1-APR-2015', '1-MAY-2015', '1-JUN-2015', '1-JUL-2015', '1-AUG-2015', '1-SEP-2015', '1-OCT-2015', '1-NOV-2015', '1-DEC-2015'];
		
	var d13SUMMrec = ds.D13SUMM.find('rowNum = :1', 62);
	for (i = 0; i < 8; i++) {
   		lnEval = 'var valFld = d13SUMMrec.' + fld13List[i] + ' || "0";';
   		eval(lnEval);
   		console.log(valFld);
		arrPlot.push(valFld.replace(",", ""));
	};
	var d14SUMMrec = ds.D14SUMM.find('rowNum = :1', 62);
	for (i = 0; i < fld14List.length; i++) {
   		lnEval = 'arrPlot.push(d14SUMMrec.' + fld14List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d15SUMMrec = ds.DSTX.find('rowNum = :1', 9);
	for (i = 0; i < fld15List.length; i++) {
   		lnEval = 'arrPlot.push(d15SUMMrec.' + fld15List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	for (i = 0; i < arrPlot.length; i++) {
		arrPlot[i] = parseFloat(arrPlot[i]);
	};
	for (i = 0; i < arrPlot.length; i++) {
		result[i] = [monthList[i], arrPlot[i]];
		console.log(result[i]);
	};
	return result;	
};

exports.createSHCBS1Chart = function createSHCBS1Chart(xParams) {
	var myEntity = "";
	var lnEval = "";
	var arrPlot = [];
	var result = [];
	var fld13List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO'];
	var fld14List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
	var fld15List = ['AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR'];
	var monthList = ['1-MAY-2013', '1-JUN-2013', '1-JUL-2013', '1-AUG-2013', '1-SEP-2013', '1-OCT-2013', '1-NOV-2013', '1-DEC-2013', '1-JAN-2014', '1-FEB-2014', '1-MAR-2014', '1-APR-2014', '1-MAY-2014', '1-JUN-2014', '1-JUL-2014', '1-AUG-2014', '1-SEP-2014', '1-OCT-2014', '1-NOV-2014', '1-DEC-2014', '1-JAN-2015', '1-FEB-2015', '1-MAR-2015', '1-APR-2015', '1-MAY-2015', '1-JUN-2015', '1-JUL-2015', '1-AUG-2015', '1-SEP-2015', '1-OCT-2015', '1-NOV-2015', '1-DEC-2015'];
		
	var d13SUMMrec = ds.D13SUMM.find('rowNum = :1', 24);
	for (i = 0; i < 8; i++) {
   		lnEval = 'arrPlot.push(d13SUMMrec.' + fld13List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d14SUMMrec = ds.D14SUMM.find('rowNum = :1', 24);
	for (i = 0; i < fld14List.length; i++) {
   		lnEval = 'arrPlot.push(d14SUMMrec.' + fld14List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d15SUMMrec = ds.DBS1.find('rowNum = :1', 10);
	for (i = 0; i < fld15List.length; i++) {
   		lnEval = 'arrPlot.push(d15SUMMrec.' + fld15List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	for (i = 0; i < arrPlot.length; i++) {
		arrPlot[i] = parseFloat(arrPlot[i]);
	};
	for (i = 0; i < arrPlot.length; i++) {
		result[i] = [monthList[i], arrPlot[i]];
		console.log(result[i]);
	};
	return result;	
};

exports.createSHCBS2Chart = function createSHCBS2Chart(xParams) {
	var myEntity = "";
	var lnEval = "";
	var arrPlot = [];
	var result = [];
	var fld13List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO'];
	var fld14List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
	var fld15List = ['AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR'];
	var monthList = ['1-MAY-2013', '1-JUN-2013', '1-JUL-2013', '1-AUG-2013', '1-SEP-2013', '1-OCT-2013', '1-NOV-2013', '1-DEC-2013', '1-JAN-2014', '1-FEB-2014', '1-MAR-2014', '1-APR-2014', '1-MAY-2014', '1-JUN-2014', '1-JUL-2014', '1-AUG-2014', '1-SEP-2014', '1-OCT-2014', '1-NOV-2014', '1-DEC-2014', '1-JAN-2015', '1-FEB-2015', '1-MAR-2015', '1-APR-2015', '1-MAY-2015', '1-JUN-2015', '1-JUL-2015', '1-AUG-2015', '1-SEP-2015', '1-OCT-2015', '1-NOV-2015', '1-DEC-2015'];
		
	var d13SUMMrec = ds.D13SUMM.find('rowNum = :1', 11);
	for (i = 0; i < 8; i++) {
   		lnEval = 'arrPlot.push(d13SUMMrec.' + fld13List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d14SUMMrec = ds.D14SUMM.find('rowNum = :1', 11);
	for (i = 0; i < fld14List.length; i++) {
   		lnEval = 'arrPlot.push(d14SUMMrec.' + fld14List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d15SUMMrec = ds.DBS2.find('rowNum = :1', 10);
	for (i = 0; i < fld15List.length; i++) {
   		lnEval = 'arrPlot.push(d15SUMMrec.' + fld15List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	for (i = 0; i < arrPlot.length; i++) {
		arrPlot[i] = parseFloat(arrPlot[i]);
	};
	for (i = 0; i < arrPlot.length; i++) {
		result[i] = [monthList[i], arrPlot[i]];
		console.log(result[i]);
	};
	return result;	
};

exports.createSHCBS3Chart = function createSHCBS3Chart(xParams) {
	var myEntity = "";
	var lnEval = "";
	var arrPlot = [];
	var result = [];
	var fld13List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO'];
	var fld14List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
	var fld15List = ['AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR'];
	var monthList = ['1-MAY-2013', '1-JUN-2013', '1-JUL-2013', '1-AUG-2013', '1-SEP-2013', '1-OCT-2013', '1-NOV-2013', '1-DEC-2013', '1-JAN-2014', '1-FEB-2014', '1-MAR-2014', '1-APR-2014', '1-MAY-2014', '1-JUN-2014', '1-JUL-2014', '1-AUG-2014', '1-SEP-2014', '1-OCT-2014', '1-NOV-2014', '1-DEC-2014', '1-JAN-2015', '1-FEB-2015', '1-MAR-2015', '1-APR-2015', '1-MAY-2015', '1-JUN-2015', '1-JUL-2015', '1-AUG-2015', '1-SEP-2015', '1-OCT-2015', '1-NOV-2015', '1-DEC-2015'];
		
	var d13SUMMrec = ds.D13SUMM.find('rowNum = :1', 50);
	for (i = 0; i < 8; i++) {
   		lnEval = 'arrPlot.push(d13SUMMrec.' + fld13List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d14SUMMrec = ds.D14SUMM.find('rowNum = :1', 50);
	for (i = 0; i < fld14List.length; i++) {
   		lnEval = 'arrPlot.push(d14SUMMrec.' + fld14List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d15SUMMrec = ds.DVEST.find('rowNum = :1', 10);
	for (i = 0; i < fld15List.length; i++) {
   		lnEval = 'arrPlot.push(d15SUMMrec.' + fld15List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	for (i = 0; i < arrPlot.length; i++) {
		arrPlot[i] = parseFloat(arrPlot[i]);
	};
	for (i = 0; i < arrPlot.length; i++) {
		result[i] = [monthList[i], arrPlot[i]];
		console.log(result[i]);
	};
	return result;	
};

exports.createSHCYTIChart = function createSHCYTIChart(xParams) {
	var myEntity = "";
	var lnEval = "";
	var arrPlot = [];
	var result = [];
	var fld13List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO'];
	var fld14List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
	var fld15List = ['AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR'];
	var monthList = ['1-MAY-2013', '1-JUN-2013', '1-JUL-2013', '1-AUG-2013', '1-SEP-2013', '1-OCT-2013', '1-NOV-2013', '1-DEC-2013', '1-JAN-2014', '1-FEB-2014', '1-MAR-2014', '1-APR-2014', '1-MAY-2014', '1-JUN-2014', '1-JUL-2014', '1-AUG-2014', '1-SEP-2014', '1-OCT-2014', '1-NOV-2014', '1-DEC-2014', '1-JAN-2015', '1-FEB-2015', '1-MAR-2015', '1-APR-2015', '1-MAY-2015', '1-JUN-2015', '1-JUL-2015', '1-AUG-2015', '1-SEP-2015', '1-OCT-2015', '1-NOV-2015', '1-DEC-2015'];
		
	var d13SUMMrec = ds.D13SUMM.find('rowNum = :1', 63);
	for (i = 0; i < 8; i++) {
   		lnEval = 'var valFld = d13SUMMrec.' + fld13List[i] + ' || "0";';
   		eval(lnEval);
   		console.log(valFld);
		arrPlot.push(valFld.replace(",", ""));
	};
	var d14SUMMrec = ds.D14SUMM.find('rowNum = :1', 63);
	for (i = 0; i < fld14List.length; i++) {
   		lnEval = 'arrPlot.push(d14SUMMrec.' + fld14List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d15SUMMrec = ds.DSTX.find('rowNum = :1', 10);
	for (i = 0; i < fld15List.length; i++) {
   		lnEval = 'arrPlot.push(d15SUMMrec.' + fld15List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	for (i = 0; i < arrPlot.length; i++) {
		arrPlot[i] = parseFloat(arrPlot[i]);
	};
	for (i = 0; i < arrPlot.length; i++) {
		result[i] = [monthList[i], arrPlot[i]];
		console.log(result[i]);
	};
	return result;	
};

exports.createFOBBS1Chart = function createFOBBS1Chart(xParams) {
	var myEntity = "";
	var lnEval = "";
	var arrPlot = [];
	var result = [];
	var fld13List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO'];
	var fld14List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
	var fld15List = ['AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR'];
	var monthList = ['1-MAY-2013', '1-JUN-2013', '1-JUL-2013', '1-AUG-2013', '1-SEP-2013', '1-OCT-2013', '1-NOV-2013', '1-DEC-2013', '1-JAN-2014', '1-FEB-2014', '1-MAR-2014', '1-APR-2014', '1-MAY-2014', '1-JUN-2014', '1-JUL-2014', '1-AUG-2014', '1-SEP-2014', '1-OCT-2014', '1-NOV-2014', '1-DEC-2014', '1-JAN-2015', '1-FEB-2015', '1-MAR-2015', '1-APR-2015', '1-MAY-2015', '1-JUN-2015', '1-JUL-2015', '1-AUG-2015', '1-SEP-2015', '1-OCT-2015', '1-NOV-2015', '1-DEC-2015'];
		
	var d13SUMMrec = ds.D13SUMM.find('rowNum = :1', 28);
	for (i = 0; i < 8; i++) {
   		lnEval = 'arrPlot.push(d13SUMMrec.' + fld13List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d14SUMMrec = ds.D14SUMM.find('rowNum = :1', 28);
	for (i = 0; i < fld14List.length; i++) {
   		lnEval = 'arrPlot.push(d14SUMMrec.' + fld14List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d15SUMMrec = ds.DBS1.find('rowNum = :1', 13);
	for (i = 0; i < fld15List.length; i++) {
   		lnEval = 'arrPlot.push(d15SUMMrec.' + fld15List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	for (i = 0; i < arrPlot.length; i++) {
		arrPlot[i] = arrPlot[i].replace("$", "");
		arrPlot[i] = parseFloat(arrPlot[i]);
	};
	for (i = 0; i < arrPlot.length; i++) {
		result[i] = [monthList[i], arrPlot[i]];
		console.log(result[i]);
	};
	return result;	
};

exports.createFOBBS2Chart = function createFOBBS2Chart(xParams) {
	var myEntity = "";
	var lnEval = "";
	var arrPlot = [];
	var result = [];
	var fld13List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO'];
	var fld14List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
	var fld15List = ['AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR'];
	var monthList = ['1-MAY-2013', '1-JUN-2013', '1-JUL-2013', '1-AUG-2013', '1-SEP-2013', '1-OCT-2013', '1-NOV-2013', '1-DEC-2013', '1-JAN-2014', '1-FEB-2014', '1-MAR-2014', '1-APR-2014', '1-MAY-2014', '1-JUN-2014', '1-JUL-2014', '1-AUG-2014', '1-SEP-2014', '1-OCT-2014', '1-NOV-2014', '1-DEC-2014', '1-JAN-2015', '1-FEB-2015', '1-MAR-2015', '1-APR-2015', '1-MAY-2015', '1-JUN-2015', '1-JUL-2015', '1-AUG-2015', '1-SEP-2015', '1-OCT-2015', '1-NOV-2015', '1-DEC-2015'];
		
	var d13SUMMrec = ds.D13SUMM.find('rowNum = :1', 15);
	for (i = 0; i < 8; i++) {
   		lnEval = 'arrPlot.push(d13SUMMrec.' + fld13List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d14SUMMrec = ds.D14SUMM.find('rowNum = :1', 15);
	for (i = 0; i < fld14List.length; i++) {
   		lnEval = 'arrPlot.push(d14SUMMrec.' + fld14List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d15SUMMrec = ds.DBS2.find('rowNum = :1', 13);
	for (i = 0; i < fld15List.length; i++) {
   		lnEval = 'arrPlot.push(d15SUMMrec.' + fld15List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	for (i = 0; i < arrPlot.length; i++) {
		arrPlot[i] = arrPlot[i].replace("$", "");
		arrPlot[i] = parseFloat(arrPlot[i]);
	};
	for (i = 0; i < arrPlot.length; i++) {
		result[i] = [monthList[i], arrPlot[i]];
		console.log(result[i]);
	};
	return result;	
};

exports.createFOBBS3Chart = function createFOBBS3Chart(xParams) {
	var myEntity = "";
	var lnEval = "";
	var arrPlot = [];
	var result = [];
	var fld13List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO'];
	var fld14List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
	var fld15List = ['AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR'];
	var monthList = ['1-MAY-2013', '1-JUN-2013', '1-JUL-2013', '1-AUG-2013', '1-SEP-2013', '1-OCT-2013', '1-NOV-2013', '1-DEC-2013', '1-JAN-2014', '1-FEB-2014', '1-MAR-2014', '1-APR-2014', '1-MAY-2014', '1-JUN-2014', '1-JUL-2014', '1-AUG-2014', '1-SEP-2014', '1-OCT-2014', '1-NOV-2014', '1-DEC-2014', '1-JAN-2015', '1-FEB-2015', '1-MAR-2015', '1-APR-2015', '1-MAY-2015', '1-JUN-2015', '1-JUL-2015', '1-AUG-2015', '1-SEP-2015', '1-OCT-2015', '1-NOV-2015', '1-DEC-2015'];
		
	var d13SUMMrec = ds.D13SUMM.find('rowNum = :1', 54);
	for (i = 0; i < 8; i++) {
   		lnEval = 'arrPlot.push(d13SUMMrec.' + fld13List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d14SUMMrec = ds.D14SUMM.find('rowNum = :1', 54);
	for (i = 0; i < fld14List.length; i++) {
   		lnEval = 'arrPlot.push(d14SUMMrec.' + fld14List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d15SUMMrec = ds.DVEST.find('rowNum = :1', 13);
	for (i = 0; i < fld15List.length; i++) {
   		lnEval = 'arrPlot.push(d15SUMMrec.' + fld15List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	for (i = 0; i < arrPlot.length; i++) {
		arrPlot[i] = arrPlot[i].replace("$", "");
		arrPlot[i] = parseFloat(arrPlot[i]);
	};
	for (i = 0; i < arrPlot.length; i++) {
		result[i] = [monthList[i], arrPlot[i]];
		console.log(result[i]);
	};
	return result;	
};

exports.createFOBYTIChart = function createFOBYTIChart(xParams) {
	var myEntity = "";
	var lnEval = "";
	var arrPlot = [];
	var result = [];
	var fld13List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO'];
	var fld14List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
	var fld15List = ['AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR'];
	var monthList = ['1-MAY-2013', '1-JUN-2013', '1-JUL-2013', '1-AUG-2013', '1-SEP-2013', '1-OCT-2013', '1-NOV-2013', '1-DEC-2013', '1-JAN-2014', '1-FEB-2014', '1-MAR-2014', '1-APR-2014', '1-MAY-2014', '1-JUN-2014', '1-JUL-2014', '1-AUG-2014', '1-SEP-2014', '1-OCT-2014', '1-NOV-2014', '1-DEC-2014', '1-JAN-2015', '1-FEB-2015', '1-MAR-2015', '1-APR-2015', '1-MAY-2015', '1-JUN-2015', '1-JUL-2015', '1-AUG-2015', '1-SEP-2015', '1-OCT-2015', '1-NOV-2015', '1-DEC-2015'];
		
	var d13SUMMrec = ds.D13SUMM.find('rowNum = :1', 67);
	for (i = 0; i < 8; i++) {
   		lnEval = 'var valFld = d13SUMMrec.' + fld13List[i] + ' || "0";';
   		eval(lnEval);
   		console.log(valFld);
		arrPlot.push(valFld.replace(",", ""));
	};
	var d14SUMMrec = ds.D14SUMM.find('rowNum = :1', 67);
	for (i = 0; i < fld14List.length; i++) {
   		lnEval = 'arrPlot.push(d14SUMMrec.' + fld14List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	var d15SUMMrec = ds.DSTX.find('rowNum = :1', 13);
	for (i = 0; i < fld15List.length; i++) {
   		lnEval = 'arrPlot.push(d15SUMMrec.' + fld15List[i] + '.replace(",", ""));';
   		eval(lnEval);
	};
	for (i = 0; i < arrPlot.length; i++) {
		arrPlot[i] = arrPlot[i].replace("$", "");
		arrPlot[i] = parseFloat(arrPlot[i]);
	};
	for (i = 0; i < arrPlot.length; i++) {
		result[i] = [monthList[i], arrPlot[i]];
		console.log(result[i]);
	};
	return result;	
};

exports.createMinsAllChart = function createMinsAllChart(xParams) {
	var myEntity = "";
	var lnEval = "";
	var arrPlot = [];
	var result = [];
	var fld13List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO'];
	var fld14List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
	var fld15List = ['AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR'];
	var monthList = ['1-MAY-2013', '1-JUN-2013', '1-JUL-2013', '1-AUG-2013', '1-SEP-2013', '1-OCT-2013', '1-NOV-2013', '1-DEC-2013', '1-JAN-2014', '1-FEB-2014', '1-MAR-2014', '1-APR-2014', '1-MAY-2014', '1-JUN-2014', '1-JUL-2014', '1-AUG-2014', '1-SEP-2014', '1-OCT-2014', '1-NOV-2014', '1-DEC-2014', '1-JAN-2015', '1-FEB-2015', '1-MAR-2015', '1-APR-2015', '1-MAY-2015', '1-JUN-2015', '1-JUL-2015', '1-AUG-2015', '1-SEP-2015', '1-OCT-2015', '1-NOV-2015', '1-DEC-2015'];

	var d13BS1SUMMrec = ds.D13SUMM.find('rowNum = :1', 23);	
	var d13BS2SUMMrec = ds.D13SUMM.find('rowNum = :1', 10);
	var d13BS3SUMMrec = ds.D13SUMM.find('rowNum = :1', 49);
	var d13YTISUMMrec = ds.D13SUMM.find('rowNum = :1', 62);
	for (i = 0; i < 8; i++) {
		lnEval = 'var v13BS1 = d13BS1SUMMrec.' + fld13List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v13BS2 = d13BS2SUMMrec.' + fld13List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v13BS3 = d13BS3SUMMrec.' + fld13List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v13YTI = d13YTISUMMrec.' + fld13List[i] + ' || "0";';
		eval(lnEval);
		v13BS1 = v13BS1.replace(",", "");
		v13BS2 = v13BS2.replace(",", "");
		v13BS3 = v13BS3.replace(",", "");
		v13YTI = v13YTI.replace(",", "");
		arrPlot.push(parseFloat(v13BS1) + parseFloat(v13BS2) + parseFloat(v13BS3) + parseFloat(v13YTI));
	};
	var d14BS1SUMMrec = ds.D14SUMM.find('rowNum = :1', 23);
	var d14BS2SUMMrec = ds.D14SUMM.find('rowNum = :1', 10);
	var d14BS3SUMMrec = ds.D14SUMM.find('rowNum = :1', 49);
	var d14YTISUMMrec = ds.D14SUMM.find('rowNum = :1', 62);
	for (i = 0; i < fld14List.length; i++) {
   		lnEval = 'var v14BS1 = d14BS1SUMMrec.' + fld14List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v14BS2 = d14BS2SUMMrec.' + fld14List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v14BS3 = d14BS3SUMMrec.' + fld14List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v14YTI = d14YTISUMMrec.' + fld14List[i] + ' || "0";';
		eval(lnEval);
		v14BS1 = v14BS1.replace(",", "");
		v14BS2 = v14BS2.replace(",", "");
		v14BS3 = v14BS3.replace(",", "");
		v14YTI = v14YTI.replace(",", "");
		arrPlot.push(parseFloat(v14BS1) + parseFloat(v14BS2) + parseFloat(v14BS3) + parseFloat(v14YTI));
	};
	var d15BS1SUMMrec = ds.DBS1.find('rowNum = :1', 9);
	var d15BS2SUMMrec = ds.DBS2.find('rowNum = :1', 9);
	var d15BS3SUMMrec = ds.DVEST.find('rowNum = :1', 9);
	var d15YTISUMMrec = ds.DSTX.find('rowNum = :1', 9);
	for (i = 0; i < fld15List.length; i++) {
		lnEval = 'var v15BS1 = d15BS1SUMMrec.' + fld15List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v15BS2 = d15BS2SUMMrec.' + fld15List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v15BS3 = d15BS3SUMMrec.' + fld15List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v15YTI = d15YTISUMMrec.' + fld15List[i] + ' || "0";';
		eval(lnEval);
		v15BS1 = v15BS1.replace(",", "");
		v15BS2 = v15BS2.replace(",", "");
		v15BS3 = v15BS3.replace(",", "");
		v15YTI = v15YTI.replace(",", "");
		v15BS1 = v15BS1.replace("$", "");
		v15BS2 = v15BS2.replace("$", "");
		v15BS3 = v15BS3.replace("$", "");
		v15YTI = v15YTI.replace("$", "");
		arrPlot.push(parseFloat(v15BS1) + parseFloat(v15BS2) + parseFloat(v15BS3) + parseFloat(v15YTI));
	};
	for (i = 0; i < arrPlot.length; i++) {
		result[i] = [monthList[i], arrPlot[i]];
		console.log(result[i]);
	};
	return result;	
};

exports.createSHCAllChart = function createSHCAllChart(xParams) {
	var myEntity = "";
	var lnEval = "";
	var arrPlot = [];
	var result = [];
	var fld13List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO'];
	var fld14List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
	var fld15List = ['AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR'];
	var monthList = ['1-MAY-2013', '1-JUN-2013', '1-JUL-2013', '1-AUG-2013', '1-SEP-2013', '1-OCT-2013', '1-NOV-2013', '1-DEC-2013', '1-JAN-2014', '1-FEB-2014', '1-MAR-2014', '1-APR-2014', '1-MAY-2014', '1-JUN-2014', '1-JUL-2014', '1-AUG-2014', '1-SEP-2014', '1-OCT-2014', '1-NOV-2014', '1-DEC-2014', '1-JAN-2015', '1-FEB-2015', '1-MAR-2015', '1-APR-2015', '1-MAY-2015', '1-JUN-2015', '1-JUL-2015', '1-AUG-2015', '1-SEP-2015', '1-OCT-2015', '1-NOV-2015', '1-DEC-2015'];

	var d13BS1SUMMrec = ds.D13SUMM.find('rowNum = :1', 24);	
	var d13BS2SUMMrec = ds.D13SUMM.find('rowNum = :1', 11);
	var d13BS3SUMMrec = ds.D13SUMM.find('rowNum = :1', 50);
	var d13YTISUMMrec = ds.D13SUMM.find('rowNum = :1', 63);
	for (i = 0; i < 8; i++) {
		lnEval = 'var v13BS1 = d13BS1SUMMrec.' + fld13List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v13BS2 = d13BS2SUMMrec.' + fld13List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v13BS3 = d13BS3SUMMrec.' + fld13List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v13YTI = d13YTISUMMrec.' + fld13List[i] + ' || "0";';
		eval(lnEval);
		v13BS1 = v13BS1.replace(",", "");
		v13BS2 = v13BS2.replace(",", "");
		v13BS3 = v13BS3.replace(",", "");
		v13YTI = v13YTI.replace(",", "");
		arrPlot.push(parseFloat(v13BS1) + parseFloat(v13BS2) + parseFloat(v13BS3) + parseFloat(v13YTI));
	};
	var d14BS1SUMMrec = ds.D14SUMM.find('rowNum = :1', 24);
	var d14BS2SUMMrec = ds.D14SUMM.find('rowNum = :1', 11);
	var d14BS3SUMMrec = ds.D14SUMM.find('rowNum = :1', 50);
	var d14YTISUMMrec = ds.D14SUMM.find('rowNum = :1', 63);
	for (i = 0; i < fld14List.length; i++) {
   		lnEval = 'var v14BS1 = d14BS1SUMMrec.' + fld14List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v14BS2 = d14BS2SUMMrec.' + fld14List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v14BS3 = d14BS3SUMMrec.' + fld14List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v14YTI = d14YTISUMMrec.' + fld14List[i] + ' || "0";';
		eval(lnEval);
		v14BS1 = v14BS1.replace(",", "");
		v14BS2 = v14BS2.replace(",", "");
		v14BS3 = v14BS3.replace(",", "");
		v14YTI = v14YTI.replace(",", "");
		arrPlot.push(parseFloat(v14BS1) + parseFloat(v14BS2) + parseFloat(v14BS3) + parseFloat(v14YTI));
	};
	var d15BS1SUMMrec = ds.DBS1.find('rowNum = :1', 10);
	var d15BS2SUMMrec = ds.DBS2.find('rowNum = :1', 10);
	var d15BS3SUMMrec = ds.DVEST.find('rowNum = :1', 10);
	var d15YTISUMMrec = ds.DSTX.find('rowNum = :1', 10);
	for (i = 0; i < fld15List.length; i++) {
		lnEval = 'var v15BS1 = d15BS1SUMMrec.' + fld15List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v15BS2 = d15BS2SUMMrec.' + fld15List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v15BS3 = d15BS3SUMMrec.' + fld15List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v15YTI = d15YTISUMMrec.' + fld15List[i] + ' || "0";';
		eval(lnEval);
		v15BS1 = v15BS1.replace(",", "");
		v15BS2 = v15BS2.replace(",", "");
		v15BS3 = v15BS3.replace(",", "");
		v15YTI = v15YTI.replace(",", "");
		v15BS1 = v15BS1.replace("$", "");
		v15BS2 = v15BS2.replace("$", "");
		v15BS3 = v15BS3.replace("$", "");
		v15YTI = v15YTI.replace("$", "");
		arrPlot.push(parseFloat(v15BS1) + parseFloat(v15BS2) + parseFloat(v15BS3) + parseFloat(v15YTI));
	};
	for (i = 0; i < arrPlot.length; i++) {
		result[i] = [monthList[i], arrPlot[i]];
		console.log(result[i]);
	};
	return result;	
};

exports.createFOBAllChart = function createFOBAllChart(xParams) {
	var myEntity = "";
	var lnEval = "";
	var arrPlot = [];
	var result = [];
	var fld13List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO'];
	var fld14List = ['BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
	var fld15List = ['AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR'];
	var monthList = ['1-MAY-2013', '1-JUN-2013', '1-JUL-2013', '1-AUG-2013', '1-SEP-2013', '1-OCT-2013', '1-NOV-2013', '1-DEC-2013', '1-JAN-2014', '1-FEB-2014', '1-MAR-2014', '1-APR-2014', '1-MAY-2014', '1-JUN-2014', '1-JUL-2014', '1-AUG-2014', '1-SEP-2014', '1-OCT-2014', '1-NOV-2014', '1-DEC-2014', '1-JAN-2015', '1-FEB-2015', '1-MAR-2015', '1-APR-2015', '1-MAY-2015', '1-JUN-2015', '1-JUL-2015', '1-AUG-2015', '1-SEP-2015', '1-OCT-2015', '1-NOV-2015', '1-DEC-2015'];

	var d13BS1SUMMrec = ds.D13SUMM.find('rowNum = :1', 28);	
	var d13BS2SUMMrec = ds.D13SUMM.find('rowNum = :1', 15);
	var d13BS3SUMMrec = ds.D13SUMM.find('rowNum = :1', 54);
	var d13YTISUMMrec = ds.D13SUMM.find('rowNum = :1', 67);
	for (i = 0; i < 8; i++) {
		lnEval = 'var v13BS1 = d13BS1SUMMrec.' + fld13List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v13BS2 = d13BS2SUMMrec.' + fld13List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v13BS3 = d13BS3SUMMrec.' + fld13List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v13YTI = d13YTISUMMrec.' + fld13List[i] + ' || "0";';
		eval(lnEval);
		v13BS1 = v13BS1.replace(",", "");
		v13BS2 = v13BS2.replace(",", "");
		v13BS3 = v13BS3.replace(",", "");
		v13YTI = v13YTI.replace(",", "");
		arrPlot.push(parseFloat(v13BS1) + parseFloat(v13BS2) + parseFloat(v13BS3) + parseFloat(v13YTI));
	};
	var d14BS1SUMMrec = ds.D14SUMM.find('rowNum = :1', 28);
	var d14BS2SUMMrec = ds.D14SUMM.find('rowNum = :1', 15);
	var d14BS3SUMMrec = ds.D14SUMM.find('rowNum = :1', 54);
	var d14YTISUMMrec = ds.D14SUMM.find('rowNum = :1', 67);
	for (i = 0; i < fld14List.length; i++) {
   		lnEval = 'var v14BS1 = d14BS1SUMMrec.' + fld14List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v14BS2 = d14BS2SUMMrec.' + fld14List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v14BS3 = d14BS3SUMMrec.' + fld14List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v14YTI = d14YTISUMMrec.' + fld14List[i] + ' || "0";';
		eval(lnEval);
		v14BS1 = v14BS1.replace(",", "");
		v14BS2 = v14BS2.replace(",", "");
		v14BS3 = v14BS3.replace(",", "");
		v14YTI = v14YTI.replace(",", "");
		arrPlot.push(parseFloat(v14BS1) + parseFloat(v14BS2) + parseFloat(v14BS3) + parseFloat(v14YTI));
	};
	var d15BS1SUMMrec = ds.DBS1.find('rowNum = :1', 13);
	var d15BS2SUMMrec = ds.DBS2.find('rowNum = :1', 13);
	var d15BS3SUMMrec = ds.DVEST.find('rowNum = :1', 13);
	var d15YTISUMMrec = ds.DSTX.find('rowNum = :1', 13);
	for (i = 0; i < fld15List.length; i++) {
		lnEval = 'var v15BS1 = d15BS1SUMMrec.' + fld15List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v15BS2 = d15BS2SUMMrec.' + fld15List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v15BS3 = d15BS3SUMMrec.' + fld15List[i] + ' || "0";';
		eval(lnEval);
		lnEval = 'var v15YTI = d15YTISUMMrec.' + fld15List[i] + ' || "0";';
		eval(lnEval);
		v15BS1 = v15BS1.replace(",", "");
		v15BS2 = v15BS2.replace(",", "");
		v15BS3 = v15BS3.replace(",", "");
		v15YTI = v15YTI.replace(",", "");
		v15BS1 = v15BS1.replace("$", "");
		v15BS2 = v15BS2.replace("$", "");
		v15BS3 = v15BS3.replace("$", "");
		v15YTI = v15YTI.replace("$", "");
		arrPlot.push(parseFloat(v15BS1) + parseFloat(v15BS2) + parseFloat(v15BS3) + parseFloat(v15YTI));
	};
	for (i = 0; i < arrPlot.length; i++) {
		result[i] = [monthList[i], arrPlot[i]];
		console.log(result[i]);
	};
	return result;	
};