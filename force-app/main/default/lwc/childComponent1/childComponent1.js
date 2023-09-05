import { LightningElement } from 'lwc';

export default class ChildComponent1 extends LightningElement {
    message = '';

    handleInputChange(event) {
        this.message = event.target.value;
        // Fire the custom event to notify the parent component about the message change
        this.dispatchEvent(new CustomEvent('messagechange', { detail: this.message }));
    }
}