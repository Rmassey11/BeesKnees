//Get Values from the page
//Controller Function
function getValues(){
    let beesValue = document.getElementById("beesValue").value;
    let kneesValue = document.getElementById("kneesValue").value;
    //Parse into Integers
    beesValue = parseInt(beesValue);
    kneesValue = parseInt(kneesValue);
    //Check that the numbers are Integers
    if(Number.isInteger(beesValue) && Number.isInteger(kneesValue)){
        //call beesKnees function
        let numbers = beesKneesB(beesValue, kneesValue);
        //call displayNumbers function
        displayNumbers(numbers);
    }else{
        alert("You must enter integers");
    }
}

//Count to 100 and find BeesKnees multiples
//Logic Function
function beesKnees(beesValue, kneesValue){
    let numbers = [];
    //Get numbers 1-100
    for(let index = 1; index<= 100; index++){
        //Check if numbers are multiples of our values
        if(index % beesValue == 0 && index % kneesValue == 0){
            numbers.push("BeesKnees");
        }else if(index % beesValue == 0){
            numbers.push("Bees");
        }else if(index % kneesValue == 0){
            numbers.push("Knees");
        }else{
            numbers.push(index)
        }
    }
    return numbers
}

//Best Solution
function beesKneesB(beesValue, kneesValue){
    let numbers = [];
    for (let index =1; index <=100; index++){
        let value = ((index % beesValue == 0 ? "Bees" : "") + (index % kneesValue == 0 ? "Knees": "" ) || index);
        numbers.push(value);
    }
    return numbers;
}

//Display the values
function displayNumbers(numbers){
    //Get the table body from the page
    let tableBody = document.getElementById("results");
    //Get the template
    let templateRows = document.getElementById("bnTemplate");
    //Clear the table
    tableBody.innerHTML = "";
    for(index = 0; index < numbers.length; index+= 5){
        let tableRow = document.importNode(templateRows.content, true);
        //Grab the td's to put into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(numbers[index]);
        rowCols[0].textContent = numbers[index];

        rowCols[1].classList.add(numbers[index+1]);
        rowCols[1].textContent = numbers[index+1];

        rowCols[2].classList.add(numbers[index+2]);
        rowCols[2].textContent = numbers[index+2];

        rowCols[3].classList.add(numbers[index+3]);
        rowCols[3].textContent = numbers[index+3];

        rowCols[4].classList.add(numbers[index+4]);
        rowCols[4].textContent = numbers[index+4];
        tableBody.appendChild(tableRow);
    }
}