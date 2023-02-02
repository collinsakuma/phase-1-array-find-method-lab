// code your solution here
const record = [
    { 
        year: "2018",
        result: "N/A"
    },
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},

]


function callBack(element) {
    if(element.result === 'W') {
        return element;
    }
}

function superbowlWin (array) {
    let answer = array.find(callBack);
    if (typeof answer === 'object') {
        return answer.year;
    }
} 
