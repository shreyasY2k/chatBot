import React from "react";

import "./AdmissionInfo.css";

const AdmissionInfo = (props) => {
  const options = [
    { text: "General Information", 
      handler: props.actionProvider.handleGeneralInfoList , 
      id: 1 
    },
    { text: "Admission For UG Course", 
      handler:props.actionProvider.handleAdmissionsList, 
      id: 2 
    },
    { text: "Cut Off Rank", 
      handler: props.actionProvider.handleCutOffRankList, 
      id: 3 
    },
    { text: "Fee Schedule",
      handler: props.actionProvider.handleFeeScheduleList,
      id: 4 
    },
    { text: "Staff", 
      handler: props.actionProvider.handleStaffList, 
      id: 5 
    },
    { text: "FAQ", 
      handler: props.actionProvider.handleFAQList, 
      id: 6 
    },
    { text: "Scholarship Details", 
      handler: props.actionProvider.handleScholarshipDetailsList,
      id: 7 
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="admission-info-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="admission-info-container">{optionsMarkup}</div>;
};

export default AdmissionInfo;