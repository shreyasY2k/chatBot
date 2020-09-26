class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    greet() {
      const greetingMessage = this.createChatBotMessage("Hello, Greetings from Bot.")
      this.updateChatbotState(greetingMessage)
    }
    noMessage(){
      const noMessage = this.createChatBotMessage("I Can't Understand That")
      this.updateChatbotState(noMessage)
    }
    loveMessage(){
      const greetingMessage = this.createChatBotMessage("Love You Too!")
      this.updateChatbotState(greetingMessage)
    }
    
    // handleUnknownChat = () =>{
    //   const message = "I can't do that now I'm Still Learning"
    //   this.updateChatbotState(message);
    // }

    handleGeneralInfoList = () => {
        const message = this.createChatBotMessage(
          "Fantastic, I've got the following resources for you on General Information:",
          {
            widget: "GeneralInformation",
          }
        );
    
        this.updateChatbotState(message);
      };
    
    handleAdmissionsList = () =>{
        const message = this.createChatBotMessage(
            "Fantastic! Joinning our College?",
            {
              widget: "Admissions",
            }
          );
      
          this.updateChatbotState(message);
    }

    handleCutOffRankList = () =>{
        const message = this.createChatBotMessage(
            "Super, I've got the following resources for you on Cut Off Ranks:",
            {
              widget: "CutOffRanks",
            }
          );
      
          this.updateChatbotState(message);
    }
    handleFeeScheduleList = () =>{
        const message = this.createChatBotMessage(
            "I've got the following resources for you on Fee Structure:",
            {
              widget: "Fee",
            }
          );
      
          this.updateChatbotState(message);
    }
    handleStaffList = () =>{
        const message = this.createChatBotMessage(
            "Great, I've got the Staff Information Below",
            {
              widget: "Staff",
            }
          );
      
          this.updateChatbotState(message);
    }
    handleFAQList = () =>{
        const message = this.createChatBotMessage(
            "Good, For FAQ's Click Below",
            {
              widget: "FAQ",
            }
          );
      
          this.updateChatbotState(message);
    }
    handleScholarshipDetailsList = () =>{
        const message = this.createChatBotMessage(
            "Getting you Scholarship Details",
            {
              widget: "Scholarship",
            }
          );
      
          this.updateChatbotState(message);
    }
    
    
    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }));
    }
  }
  
  export default ActionProvider