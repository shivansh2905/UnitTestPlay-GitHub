import { LightningElement, api } from 'lwc';

export default class ChildComponent2 extends LightningElement {
    @api receivedMessage = '';

    // Expose a public method to receive messages from ChildComponent1
    updateMessage(message) {
        this.receivedMessage = message;
    }
}