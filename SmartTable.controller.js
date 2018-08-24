sap.ui.controller("sap.ui.comp.sample.smarttable.mtable.SmartTable", {
	onInit: function() {
		var oModel, oView;
		jQuery.sap.require("sap.ui.core.util.MockServer");
		var oMockServer = new sap.ui.core.util.MockServer({
			rootUri: "sapuicompsmarttable2/"
		});
		this._oMockServer = oMockServer;
		oMockServer.simulate("test-resources/sap/ui/comp/demokit/sample/smarttable/mockserver/metadata.xml", "test-resources/sap/ui/comp/demokit/sample/smarttable/mockserver/");
		oMockServer.start();
		oModel = new sap.ui.model.odata.ODataModel("sapuicompsmarttable2", true);
		oModel.setCountSupported(false);
		oView = this.getView();
		oView.setModel(oModel);
	},
	onBeforeExport: function(oEvt) {
		var mExcelSettings = oEvt.getParameter("exportSettings");
		// GW export
		if (mExcelSettings.url) {
			return;
		}
		// UI5 Client Export
		mExcelSettings.fileName = "SmartTable-ResponsiveTable-Export"; // example to modify fileName

		// Disable Worker as Mockserver is used in explored
		mExcelSettings.worker = false;
	},
	onExit: function() {
		this._oMockServer.stop();
	}
});
