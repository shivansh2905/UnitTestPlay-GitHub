/* myDatatable.js */
import { LightningElement, wire, track, api } from "lwc";
import getAccountList from "@salesforce/apex/AccountController.getAccountList";

const COLS = [
  {
    label: "Account Name",
    type: "customName",
    typeAttributes: {
      accountName: { fieldName: "Name" },
    },
  },
  {
    label: "Industry",
    type: "customIndustry",
    fieldName: "Industry",
    typeAttributes: {
        industryType: {fieldName: "industryType"}
    },
    cellAttributes: {
      class: { fieldName: "industryColor" },
    },
  },
  {
    label: "Employees",
    type: "customNumber",
    fieldName: "NumberOfEmployees",
    typeAttributes: {
      status: { fieldName: "status" },
    },
    cellAttributes: {
      class: "slds-theme_alert-texture",
    },
  },
];

export default class MyDatatable extends LightningElement {
  @api accList;
  columns = COLS;
  @track accounts = [];

  @wire(getAccountList)
  wiredAccounts({ error, data }) {
    if (error) {
      // Handle error
    } else if (data) {
      // Process record data
      this.accounts = data.map((record) => {
        let industryType;
        if(record.Industry){
            if(record.Industry === "Engineering"){
                industryType = "standard:settings";
            }
            if(record.Industry === "Banking"){
                industryType = "utility:currency";
            }
            if(record.Industry === "Electronics"){
                industryType = "standard:screen";
            }
            if(record.Industry === "Apparel"){
                industryType = "utility:magicwand";
            }
            if(record.Industry === "Construction"){
                industryType = "utility:thunder";
            }
            if(record.Industry === "Consulting"){
                industryType = "standard:skill";
            }
            if(record.Industry === "Hospitality"){
                industryType = "standard:facility_bed";
            }
            if(record.Industry === "Energy"){
                industryType = "utility:fallback";
            }
            if(record.Industry === "Transportation"){
                industryType = "utility:travel_and_places";
            }
            if(record.Industry === "Education"){
                industryType = "standard:education";
            }
        }
        let industryColor = record.Industry === "Energy" ? "slds-text-color_success" : "";
        let status = record.NumberOfEmployees > 10000 ? "utility:ribbon" : "";
        return { ...record, industryType: industryType, industryColor: industryColor, status: status };
      });
    }
  }
}