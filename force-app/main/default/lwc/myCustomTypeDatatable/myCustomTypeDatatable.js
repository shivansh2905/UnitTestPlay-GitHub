//myCustomTypeDatatable.js
import LightningDatatable from "lightning/datatable";
import customNameTemplate from "./customName.html";
import customNumberTemplate from "./customNumber.html";
import customIndustryTemplate from "./customIndustry.html";

export default class MyCustomTypeDatatable extends LightningDatatable {
  static customTypes = {
    customName: {
      template: customNameTemplate,
      standardCellLayout: true,
      typeAttributes: ["accountName"],
    },
    customNumber: {
      template: customNumberTemplate,
      standardCellLayout: false,
      typeAttributes: ["status"],
    },
    customIndustry: {
        template: customIndustryTemplate,
        standardCellLayout: false,
        typeAttributes: ["industryType"],
    },
    // Other types here
  };
}