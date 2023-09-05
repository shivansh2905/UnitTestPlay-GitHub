import { LightningElement, api } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
export default class LightningDatatableLWCExample extends LightningElement {
    columns = [{
            label: 'Account name',
            fieldName: 'Name',
            type: 'text',
            sortable: true
        },
        {
            label: 'Industry',
            fieldName: 'Industry',
            type: 'text',
            sortable: true
        },
        {
            label: 'Shipping Country',
            fieldName: 'ShippingCountry',
            type: 'text',
            sortable: true
        },
        {
            label: 'Billing Country',
            fieldName: 'BillingCountry',
            type: 'Currency',
            sortable: true
        },
        {
            label: 'Rating',
            fieldName: 'Rating',
            type: 'text',
            sortable: true
        }
    ];
    @api accList;
}