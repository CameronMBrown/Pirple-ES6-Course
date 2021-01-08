//Pirple Assignment 5 - switch statements
//some more experimentation with internal arrow funtions

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

    const tryReduce = ([val, label]) => {
    //this function converts time lables to the most appropriate label.
    //ex. should convert 60 seconds = 1 minute, does not handle remainders or half values
    //ie. this will not ever output 90s = 1.5 minutes.

        switch (label) { 
        //do not return immidiately after finding a reduce
        //ex. 3600s can be reduced twice to 2h, then return
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
                return [val, label]; //days is the largest time label. do not reduce further
            default:
                console.log(label + ": unexpected time label");  
        }
        return [val, label];
    }

    const addTime = ([v1, l1], [v2, l2]) => {
    //expecting 2 arrays of length 2, add the time values considering their labels
    let finalTime = [];

        const printTime = (finalTime) => {
        //expecting an array of length 2 or 4. 
        //prints the resulting time to the console in a nice way.

            const prettyString = ([val, label]) => {
                //refactor function converts and array of len 2 to a string ready to be placed in a sentance
                let prettyStr;
                if (val > 1 || val === 0){ //we do say "0 second(s)", so s needed for zero case
                    prettyStr = val + " " + addPlural(label); 
                } else {
                    prettyStr = val + " " + label;
                }
                return prettyStr;
            }
        
            if (finalTime.length === 2){
            //labels matched and values added, print one final value
                console.log(prettyString(finalTime));
            } else if (finalTime.length === 4){
            //labels do not match print result in a sentance
                console.log(prettyString([finalTime[0], finalTime[1]]) + " and " + prettyString([finalTime[2], finalTime[3]]));
            } else {
                console.log("error with final time");
            }
            
        }

        if (l1 === l2){
        //labels match so time values can be added together and one value printed
            finalTime.push(v1+ v2);
            finalTime.push(l1);
            finalTime = tryReduce(finalTime);
        } else {
        //time labels are different and values cannot be added
        //make sure the larger label comes first (ex. days before minutes)
            if (l2 === "minute" && l2 === "second"){
                finalTime.push(v2, l2, v1, l1);
            } else if (l2 === "hour" && (l1 === "second" || l1 === "minute")){
                finalTime.push(v2, l2, v1, l1);
            } else if (l2 === "day" && (l1 === "second"  || l1 === "minute"  || l1 === "hour" )){
                finalTime.push(v2, l2, v1, l1);
            }
        }
        printTime(finalTime);
    }

    //first filter out unexpected inputs
    let time1 = sanitizeInputs(val1, label1);
    let time2 = sanitizeInputs(val2, label2);

    //stop execution if invalid values are found
    if (time1 === "Invalid input" || time2 === "Invalid input"){
        console.log("Invalid input");
        return;
    }

    //try to reduce large time values to smaller ones with more appropriate labels
    time1 = tryReduce(time1);
    time2 = tryReduce(time2);

    //finally add the time and print to the console.
    addTime(time1, time2);
}

timeAdder(24, "hour", 6, "day"); //7days
timeAdder(-45, "second", 24, "hours"); //invalid, negative seconds
timeAdder(60, "second", 24, "hours"); //1 day and 1 minute
timeAdder(3600, "seconds", 3600, "second"); //2 hours
