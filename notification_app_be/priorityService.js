const weights={
    "Security Alerts":5,
    "Academic Deadlines":3,
    "Event Reminders":2,
    "Administrative Notices":1
};

const lambda=0.1;

function calculatePriority(notification){
    return weights[notification.category]*
    Math.exp(-lambda*notification.daysAgo);
}

module.exports={calculatePriority};