//Pirple Assignment 5 - switch statements

function timeAdder(val1, label1, val2, label2){
//This funtion will add 2 time values, and print the result to the console.
//can add non-matching time labels such as adding seconds and hours. Combining and reducing values where appropriate

    const addPlural = (label) => { return (label + "s"); }

    const removePlural = (label) => {         
        if(label.slice(-1) === "s"){
        return label.slice(0, -1);
        } else {
            return label;
        }
    }

    const sanitizeInputs = (val, label) => {
    //checks for valid inputs and removes 's' on the end of labels for now.
        let noSLabel = removePlural(label);

        if (val < 0){ return "Invalid input" }; //sanitize negative values

        //filter out only expected time labels
        if (noSLabel !== "day" && noSLabel !== "hour" && noSLabel !== "minute" && noSLabel !== "second") {
            return "Invalid input";
        }  
        return [val, noSLabel];
    }

    const tryReduce = (timeArr) => {
    //this function converts time lables to the most appropriate label.
    //ex. should convert 60 seconds = 1 minute, does not handle remainders or half values
    //ie. this will not ever output 90s = 1.5 minutes.
        let val = timeArr[0];
        let label = timeArr[1];

        switch (label) { 
            case "second":
                if (val % 60 == 0){
                    label = "minute";
                    val = val / 60;
                }
            case "minute":
                if (val % 60 == 0){
                    label = "hour";
                    val = val / 60;
                }
            case "hour":
                if (val % 24 == 0){
                    label = "day";
                    val = val / 24;
                }
            case "day":
                return [val, label];
            default:
                console.log(label + ": unexpected time label");  
        }
        return [val, label];
    }

    const addTime = (t1, t2) => {
    //expecting 2 arrays of length 2, add the time values considering their labels
    let finalTime = [];

        const printTime = (finalTime) => {
        //expecting an array of length 2 or 4. 
        //prints the resulting time to the console in a nice way.
            const prettyString = (time) => {
                let prettyStr;
                if (time[0] > 1 || time[0] === 0){ //we do say "0 second(s)" s needed for zero case
                    prettyStr = time[0] + " " + addPlural(time[1]); 
                } else  {
                    prettyStr = time[0] + " " + time[1];
                }
                return prettyStr;
            }
        
            if (finalTime.length === 2){
                console.log(prettyString(finalTime));
            } else if (finalTime.length === 4){
                console.log(prettyString([finalTime[0], finalTime[1]]) + " and " + prettyString([finalTime[2], finalTime[3]]));
            } else {
                console.log("error with final time");
            }
            
        }

        if (t1[1] === t2[1]){
            finalTime.push(t1[0] + t2[0]);
            finalTime.push(t1[1]);
            finalTime = tryReduce(finalTime);
        } else {
            if (t2[1] === "minute"  && t1[1] === "second"){
                finalTime.push(t2[0], t2[1], t1[0], t1[1]);
            } else if (t2[1] === "hour" && (t1[1] === "second" || t1[1] === "minute")){
                finalTime.push(t2[0], t2[1], t1[0], t1[1]);
            } else if (t2[1] === "day" && (t1[1] === "second"  || t1[1] === "minute"  || t1[1] === "hour" )){
                finalTime.push(t2[0], t2[1], t1[0], t1[1]);
            }
        }
        printTime(finalTime);
    }

    let time1 = sanitizeInputs(val1, label1);
    let time2 = sanitizeInputs(val2, label2);

    //stop execution if invalid values are found
    if (time1 === "Invalid input" || time2 === "Invalid input"){
        console.log("Invalid input");
        return;
    }

    time1 = tryReduce(time1);
    time2 = tryReduce(time2);
  
    addTime(time1, time2);
}

timeAdder(24, "hour", 6, "day"); //7days
timeAdder(-45, "second", 24, "hours"); //invalid, negative seconds
timeAdder(60, "second", 24, "hours"); //1 day and 1 minute
timeAdder(3600, "seconds", 3600, "second"); //2 hours
