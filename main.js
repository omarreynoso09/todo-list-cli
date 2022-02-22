const prompt = require("prompt-sync")({sigint:true}); // PROMPT SYNC 
// APP STARTING DISPLAY 
console.log("=================================================")
console.log("=================================================")
console.log("===  Welcome to HANSEL'S To-Do List App!     ====")
console.log("===  Welcome to HANSEL'S To-Do List App!     ====")
console.log("===  Welcome to HANSEL'S To-Do List App!     ====")
console.log("=================================================")
console.log("=================================================")
console.log("")

// WHILE LOOP VARIABLES 
let counter = 0;
const boolean = true;
let arrList =[]
while(boolean == true){
    console.log("")
    if (counter === 0){
        console.log('Your to-do list is empty.')
        console.log(" ")
    }

    else{
        console.log(`You have ${counter} to-do task(s).`)
        arrLayout(arrList)
        console.log(" ")
    } 
    // LIST OF USER ACTIONS 
    console.log("~Select an action~")
    console.log("[1] Create a to-do list")
    console.log("[2] Complete a to-do list")
    console.log("[3] Uncomplete a to-do list") // undo 
    console.log("[4] Edit a to-do list")
    console.log("[5] Delete a to-do list")

    const select = Number(prompt(">"))




    // FUNCTIONS
    function checker(arr){
        let result = []
        for(const a of arr){
            if (a[a.length-1] =="1"){
                const temporary =  "[Incomplete] "+ a.slice(0,a.length-1)
                result.push(temporary)
            }
            else {
                const temporary =  "[Complete] "+ a.slice(0,a.length)
                result.push(temporary)
            }
        }
        return result
    }
    function mod(n, arr){
        const selected = arr[n-1]
        if(isNaN(Number(selected[selected.length-1]))){
            console.log("This task have already been completed")
            return arr
        }
        else{
            const text = selected.slice(0,-1)
            arr.splice(n-1,1, text)
        }
        return arr
    }
    function arrLayout(arr){
        let counterer = 0;
        for(const a of checker(arr)){
            counterer++
            console.log(`${counterer}. ` + a)
        }
    }
    function edit(n,arr){
        console.log("Update the task")
        const text = prompt(">")
        const selected = arr[n-1]
        if(isNaN(Number(selected[selected.length-1]))){
            arr.splice(n-1,1,text)
        }
        else{
            arr.splice(n-1,1,text+1)
        }
        return arr
    }
    function borrar(n,arr){
        arr.splice(n-1,1)
        return arr
    }
    function incomplete(n, arr){
        const selected = arr[n-1]
        if(isNaN(Number(selected[selected.length-1]))){
            const text = selected+1
            arr.splice(n-1,1, text)
        }
        else{
            console.log("This task is already incomplete.")
        }
        return arr
        
    }
    //END OF FUCNTIONS
    


// LOOP AND IFS 
    if(select === 1){
        console.log("~Creating a new to-do task~")
        console.log("What is this to-do task called?")
        const input = prompt(">")
        arrList.push(input+1);
        counter++
    }
    else if(select === 2){
        if(arrList.length>0){
            console.log("~ Completing a to-do task ~")
            console.log("Which to-do task would you like to complete?")
            let option = Number(prompt(">"))
            while(isNaN(option) || option > arrList.length){
                console.log("=====Pick another option!!!!!!!!======")
                option = Number(prompt(">"))
            }
            arrList = mod(option, arrList)
            console.log("")
        }
    }
    else if(select === 3){
        if(arrList.length>0){
            console.log("~ Unompleting a to-do task ~")
            console.log("Which to-do task would you like to uncomplete?")
            let option = Number(prompt(">"))
            while(isNaN(option) || option > arrList.length){
                console.log("=====Pick another option!!!!!!!!======")
                option = Number(prompt(">"))
            }
            arrList = incomplete(option, arrList)
            console.log("")
        }
    }
    else if(select == 4){
        if(arrList.length>0){
            console.log("~ Editing a to-do task ~")
            console.log("Which to-do task would you like to edit?")
            let option = Number(prompt(">"))
            while(isNaN(option) || option > arrList.length){
                console.log("=====Pick another option!!!!!!!!======")
                option = Number(prompt(">"))
            }
            arrList = edit(option,arrList)
        }
        else{
            console.log(" To-do list is empty.")
        }
    }
    else if(select == 5){
        if(arrList.length>0){
            console.log("~ Deleting a to-do task ~")
            console.log("Which to-do task would you like to delete?")
            let option = Number(prompt(">"))
            while(isNaN(option) || option > arrList.length){
                console.log("=====Pick another option!!!!!!!!======")
                option = Number(prompt(">"))
            }
            arrList = borrar(option,arrList)
        }
        else{
            console.log(" To-do list is empty.")
        }
        counter--
    }



    else{
    console.log("===============================================")
        console.log("====      Pick a valid option         ====")
    }
    console.log("===============================================")
}
