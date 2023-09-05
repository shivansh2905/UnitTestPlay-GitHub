import { LightningElement, wire , track } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContactList';

const COLS = [
    { label: 'First Name', fieldName: 'FirstName' },
    { label: 'Last Name', fieldName: 'LastName' },
    { label: 'Title', fieldName: 'Title' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    // {
    //     label: 'Contact Picture',
    //     type: 'customPictureType',
    //     typeAttributes: {
    //         pictureUrl: { fieldName: 'Picture__c' }
    //     },
    //     cellAttributes: { alignment: 'center' }
    // }
];
export default class DatatableCustomDataType extends LightningElement {
    columns = COLS;
    @track error;
    @track data;
    @track contacts;

    @wire(getContacts)
    getContacts({error,data}){
        if(data){
            this.contacts=data;
            console.log('Datatype of Name field: ',typeof this.contacts[0].FirstName);
        }else if(error){
            this.error=error;
        }
    }
}