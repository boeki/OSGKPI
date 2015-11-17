/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'myRPC' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(myRPC.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
exports.createSTXGrid = function createSTXGrid(xParams) {
    //ds.DSTX.all().remove();

    var worksheet = xParams[0];

    for (cellName in worksheet) {
        /* all keys that do not begin with "!" correspond to cell addresses */
        if (cellName[0] === '!') continue;

        var cellList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
        var rowList = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '16', '31', '45', '46', '49', '51', '53', '54', '55', '56', '57', '58', '59', '60', '63', '64', '65', '66', '67', '68'];
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
            };
        };
    };
};

exports.createVESTGrid = function createVESTGrid(xParams) {
    //ds.DSTX.all().remove();

    var worksheet = xParams[0];

    for (cellName in worksheet) {
        /* all keys that do not begin with "!" correspond to cell addresses */
        if (cellName[0] === '!') continue;

        var cellList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
        var rowList = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '16', '33', '46', '47', '50', '52', '54', '55', '56', '57', '58', '59', '60', '61', '64', '65', '66', '67', '68', '69', '71', '74', '75', '76', '77', '78', '79'];
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
            };
        };
    };
};

exports.createBS12Grid = function createBS12Grid(xParams) {
    //ds.DSTX.all().remove();

    var worksheet = xParams[0];

    for (cellName in worksheet) {
        /* all keys that do not begin with "!" correspond to cell addresses */
        if (cellName[0] === '!') continue;

        var cellList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
        var rowList = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '16', '17', '31', '44', '45', '48', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '73', '74', '75', '76', '77', '78'];
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
            };
        };
    };
};

exports.createBS1Grid = function createBS1Grid(xParams) {
    //ds.DSTX.all().remove();

    var worksheet = xParams[0];

    for (cellName in worksheet) {
        /* all keys that do not begin with "!" correspond to cell addresses */
        if (cellName[0] === '!') continue;

        var cellList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
        var rowList = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '16', '31', '44', '45', '48', '50', '52', '53', '54', '55', '56', '57', '58', '60', '63', '64', '65', '66', '67', '68', '70', '73', '74', '75', '76', '77', '78'];
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

    for (cellName in worksheet) {
        /* all keys that do not begin with "!" correspond to cell addresses */
        if (cellName[0] === '!') continue;

        var cellList = ['B', 'AH', 'BK', 'CQ', 'DV', 'FB', 'GG', 'HM', 'HN', 'HO', 'HP', 'HQ', 'HR', 'HS'];
        var rowList = ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '16', '31', '44', '45', '48', '50', '52', '53', '54', '55', '56', '57', '58', '59', '63', '64', '65', '66', '67', '68', '70', '73', '74', '75', '76', '77', '78'];
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