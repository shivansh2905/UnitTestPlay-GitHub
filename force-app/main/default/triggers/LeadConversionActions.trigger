trigger LeadConversionActions on Lead (after update) {
    // Check if the lead has been converted and it's the first time the conversion status is set to "Converted"
    List<Lead> convertedLeads = new List<Lead>();
    Id oppId;
    Id accId;
    Id conId;
    System.debug('converted Leads: '+convertedLeads);
    System.debug('Trigger.new Leads: '+Trigger.new);
    System.debug('Trigger.oldMap: '+Trigger.oldMap);
    for (Lead lead : Trigger.new) {
        Lead oldLead = Trigger.oldMap.get(lead.Id);
        if (lead.IsConverted && !oldLead.IsConverted) {
            convertedLeads.add(lead);
        }
    }
    System.debug('converted Leads after if condition: '+convertedLeads);

    if (!convertedLeads.isEmpty()) {
        // Additional actions to perform for each converted lead
        for (Lead convertedLead : convertedLeads) {
            // 1. Update custom fields on the converted Opportunity, Account, and Contact
            oppId = convertedLead.ConvertedOpportunityId;

            accId = convertedLead.ConvertedAccountId;

            conId = convertedLead.ConvertedContactId;


            // 2. Sending emails to relevant parties (optional)
            // Implement your email sending logic here, such as sending notifications to the sales team or the new contact.

            // // 3. Creating follow-up tasks (optional)
            // Task followUpTask = new Task();
            // followUpTask.Subject = 'Follow-up after lead conversion';
            // followUpTask.WhatId = opp.Id; // Attach the task to the opportunity
            // followUpTask.OwnerId = opp.OwnerId; // Assign the task to the opportunity owner
            // followUpTask.ActivityDate = Date.today() + 7; // Set the task due date, e.g., 7 days from today
            // followUpTask.Status = 'Not Started';
            // followUpTask.Priority = 'Normal';
            // // Set other task fields as needed
            // insert followUpTask;
        }
        Opportunity opp = [SELECT Value_from_Lead_Trigger__c FROM Opportunity WHERE Id=:oppId WITH SECURITY_ENFORCED];
        System.debug('opp: '+opp);
        if (opp != null) {
            opp.Value_from_Lead_Trigger__c = 'Opp Value';
            // Update other custom fields as needed
        }
        update opp;
        Account acc = [SELECT Value_from_Lead_Trigger__c FROM Account WHERE Id=:accId WITH SECURITY_ENFORCED];
        SYSTEM.DEBUG('acc: '+acc);
        if(acc != null){
            acc.Value_from_Lead_Trigger__c = 'Acc Value';
        }
        update acc;

        Contact con = [SELECT Value_from_Lead_Trigger__c FROM Contact WHERE Id=:conId WITH SECURITY_ENFORCED];
        SYSTEM.DEBUG('con: '+con);
        if(con != null){
            con.Value_from_Lead_Trigger__c = 'Con Value';
        }
        update con;
    }
}