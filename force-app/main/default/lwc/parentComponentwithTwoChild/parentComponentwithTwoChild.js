import { LightningElement, track } from 'lwc';

export default class ParentComponentwithTwoChild extends LightningElement {
    @track messageFromChild1 = '';

    handleMessageChange1(event) {
        // When ChildComponent1 sends a message change event, update the messageFromChild1 property
        this.messageFromChild1 = event.detail;
        // Pass the message to ChildComponent2 using the method exposed in ChildComponent2
        const childComponent2 = this.template.querySelector('c-child-component-2');
        childComponent2.updateMessage(this.messageFromChild1);
    }
}