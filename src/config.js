import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';
import AdmissionInfo from "./components/AdmissionInfo/AdmissionInfo";
import LinkList from "./components/LinkList/LinkList"
const config = { 
  botName: "Sapthagiri Bot",
  initialMessages: [createChatBotMessage("Hi, Welcome! I'm Sapthagiri College's Bot. What do you want to Know?",{
     widget: "AdmissionInfo",}),
    ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
        widgetName: "AdmissionInfo",
        widgetFunc: (props) => <AdmissionInfo {...props} />,
    },
    {      
        widgetName: "GeneralInformation",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
            options: [
           {
             text: `ADDRESS
             #14/5, Chikkasandra,Hesaraghatta Main Road Bangalore – 560057
             TEL
             080-28 372800       
             080-28 372801
             080-28 372802
             EMAIL
             principal@sapthagiri.edu.in`,
             url:"https://www.sapthagiri.edu.in/generalinformation",
             id: 1,
           },
           
         ],
    },
},
{      
    widgetName: "Admissions",
    widgetFunc: (props) => <LinkList {...props} />,
    props: {
        options: [
       {
         text: `Admissions are done as per Government of Karnataka and AICTE Norms
         Eligibilty Criteria
         Should've Passed 2nd PUC or equivallent with English as Prime Language
         Secured minimum of 45% Marks in Physics Maths and Chemistry or any other 
         `,
         url:"https://www.sapthagiri.edu.in/admissionforaugcourse",
         id: 2,
       },
       
     ],
},
},
{      
    widgetName: "CutOffRanks",
    widgetFunc: (props) => <LinkList {...props} />,
    props: {
        options: [
       {
         text: "Click Here!",
         url:"https://www.sapthagiri.edu.in/cutoffmarks",
         id: 3,
       },
       
     ],
},
},
{      
    widgetName: "Fee",
    widgetFunc: (props) => <LinkList {...props} />,
    props: {
        options: [
       {
         text: "Click Here!",
         url:"https://www.sapthagiri.edu.in/feeschedule",
         id: 4,
       },
       
     ],
},
},
{      
    widgetName: "Staff",
    widgetFunc: (props) => <LinkList {...props} />,
    props: {
        options: [
       {
         text: "Click Here!",
         url:"https://www.sapthagiri.edu.in/departmentstaff",
         id: 5,
       },
       
     ],
},
},
{      
    widgetName: "FAQ",
    widgetFunc: (props) => <LinkList {...props} />,
    props: {
        options: [
       {
         text: "Click Here!",
         url:"https://www.sapthagiri.edu.in/faq",
         id: 6,
       },
       
     ],
},
},
{      
    widgetName: "Scholarship",
    widgetFunc: (props) => <LinkList {...props} />,
    props: {
        options: [
       {
         text: "Click Here!",
         url:"https://www.sapthagiri.edu.in/admissionprocedureandscholarshipdetails",
         id: 7,
       },
       
     ],
},
},

],
}
export default config