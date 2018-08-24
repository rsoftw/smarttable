jQuery.sap.declare("sap.ui.comp.sample.smarttable.mtable.Component");

sap.ui.core.UIComponent.extend("sap.ui.comp.sample.smarttable.mtable.Component", {

	metadata: {
		rootView: {
		 "viewName": "sap.ui.comp.sample.smarttable.mtable.SmartTable",
		   "type": "XML",
		  "async": true
		},
		dependencies: {
			libs: [
				"sap.m", "sap.ui.comp"
			]
		},
		config: {
			sample: {
				files: [
					"SmartTable.view.xml",
					"SmartTable.controller.js",
					"../mockserver/metadata.xml"
				]
			}
		}
	}
});
