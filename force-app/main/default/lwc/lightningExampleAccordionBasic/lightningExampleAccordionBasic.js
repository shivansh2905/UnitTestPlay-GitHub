import { LightningElement, track } from 'lwc';

export default class LightningExampleAccordionBasic extends LightningElement {
    activeSectionMessage = '';
    @track greeting = 'Hello World';

    greetingDatatype = typeof greeting;
    // greetingLength = this.greeting.size();
    handleToggleSection(event) {
        this.activeSectionMessage =
            'Open section name:  ' + event.detail.openSections;
            console.log(typeof activeSectionMessage);
    }

    handleSetActiveSectionC() {
        const accordion = this.template.querySelector('.example-accordion');

        accordion.activeSectionName = 'C';
    }

}