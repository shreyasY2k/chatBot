class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      var lowerCaseMessage = message.toLowerCase().split(" ").join("");
     // var keyWordsArray = ["hello","hi","hey","","generalinformation","admission","cutoff",
      //"fee","staff","faq","scholarship"]
     
      // if(keyWordsArray.includes(lowerCaseMessage)){
      
      if (lowerCaseMessage.includes("hello")||lowerCaseMessage.includes("hi")||lowerCaseMessage.includes("hey")) {
        this.actionProvider.greet()
      }
      if(lowerCaseMessage.includes("love")){
        this.actionProvider.loveMessage()
      }
      if (lowerCaseMessage ==="") {
        this.actionProvider.noMessage();
      }

      if (lowerCaseMessage.includes("generalinformation")) {
        this.actionProvider.handleGeneralInfoList();
      }
      if (lowerCaseMessage.includes("admission")) {
        this.actionProvider.handleAdmissionsList();
      }
      if (lowerCaseMessage.includes("cutoff")) {
        this.actionProvider.handleCutOffRankList();
      }
      if (lowerCaseMessage.includes("fee")) {
        this.actionProvider.handleFeeScheduleList();
      }
      if (lowerCaseMessage.includes("staff")) {
        this.actionProvider.handleStaffList();
      }
      if (lowerCaseMessage.includes("faq")) {
        this.actionProvider.handleFAQList();
      }
      if (lowerCaseMessage.includes("scholarship")) {
        this.actionProvider.handleScholarshipDetailsList();
      }
    }
    //else{
     // this.actionProvider.handleUnknownChat();
   // }
//  }
}
  export default MessageParser