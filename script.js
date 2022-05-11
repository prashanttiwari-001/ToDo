let addBtn = document.querySelector(".addBtn");
let body = document.querySelector("body");
let isBtnPressed = false;
let todoArr = localStorage.getItem("todoArr");
let completedArr = localStorage.getItem("completedArr");
// console.log(todoArr);
if (!completedArr) {
    localStorage.setItem("completedArr", "[]");
}



if (todoArr) {
    // someting present before refresh or opening
    todoArr = JSON.parse(localStorage.getItem("todoArr"));

    for (let i = 0; i < todoArr.length; i++) {
        let divEle = document.createElement("div");
        divEle.setAttribute("class", "oneTask");
        divEle.innerHTML = `<i class="material-icons done">done</i>
                                  <p>${todoArr[i]}</p>
                                  <i class="material-icons delete">delete</i>`
        let deleteBtn = divEle.querySelector(".delete");
        deleteBtn.addEventListener("click", function (e) {
            e.target.parentNode.remove();
            let allP = document.querySelectorAll(".oneTask p");
            let newArr = [];
            for (let i = 0; i < allP.length; i++) {
                newArr.push(allP[i].innerHTML);
            }
            localStorage.setItem("todoArr", JSON.stringify(newArr));

        })
        let doneBtn = divEle.querySelector(".done");
        doneBtn.addEventListener("click", function (e) {
            let taskValue = e.target.nextElementSibling.innerHTML;
            e.target.parentNode.remove();
            let allP = document.querySelectorAll(".oneTask p");
            let newArr = [];
            for (let i = 0; i < allP.length; i++) {
                newArr.push(allP[i].innerHTML);
            }
            localStorage.setItem("todoArr", JSON.stringify(newArr));
            // update in completedArr
            let completedArr = JSON.parse(localStorage.getItem("completedArr"));
            completedArr.push(taskValue);
            localStorage.setItem("completedArr", JSON.stringify(completedArr));
        })

        let parentDiv = document.querySelector(".tasks");
        parentDiv.appendChild(divEle);



    }
} else {
    todoArr = [];
    todoArr = JSON.stringify(todoArr); // stringify is used to convert in string
    localStorage.setItem("todoArr", todoArr);
}

let taskListBtn = document.querySelector(".taskList");
let completedBtn = document.querySelector(".completed");

taskListBtn.addEventListener("click", function () {
    if (!taskListBtn.classList.contains("active")) {
        taskListBtn.classList.add("active");
        completedBtn.classList.remove("active");
    }
    let allTaskDiv = document.querySelectorAll(".oneTask");
    for (let i = 0; i < allTaskDiv.length; i++) {
        allTaskDiv[i].remove();
    }
    todoArr = JSON.parse(localStorage.getItem("todoArr"));

    for (let i = 0; i < todoArr.length; i++) {
        let divEle = document.createElement("div");
        divEle.setAttribute("class", "oneTask");
        divEle.innerHTML = `<i class="material-icons done">done</i>
                                  <p>${todoArr[i]}</p>
                                  <i class="material-icons delete">delete</i>`
        let deleteBtn = divEle.querySelector(".delete");
        deleteBtn.addEventListener("click", function (e) {
            e.target.parentNode.remove();
            let allP = document.querySelectorAll(".oneTask p");
            let newArr = [];
            for (let i = 0; i < allP.length; i++) {
                newArr.push(allP[i].innerHTML);
            }
            localStorage.setItem("todoArr", JSON.stringify(newArr));

        })
        let doneBtn = divEle.querySelector(".done");
        doneBtn.addEventListener("click", function (e) {
            let taskValue = e.target.nextElementSibling.innerHTML;
            e.target.parentNode.remove();
            let allP = document.querySelectorAll(".oneTask p");
            let newArr = [];
            for (let i = 0; i < allP.length; i++) {
                newArr.push(allP[i].innerHTML);
            }
            localStorage.setItem("todoArr", JSON.stringify(newArr));
            // update in completedArr
            let completedArr = JSON.parse(localStorage.getItem("completedArr"));
            completedArr.push(taskValue);
            localStorage.setItem("completedArr", JSON.stringify(completedArr));
        })

        let parentDiv = document.querySelector(".tasks");
        parentDiv.appendChild(divEle);



    }
})
completedBtn.addEventListener("click", function () {
    if (!completedBtn.classList.contains("active")) {
        completedBtn.classList.add("active");
        taskListBtn.classList.remove("active");
    }
    let allTaskDiv = document.querySelectorAll(".oneTask");
    for (let i = 0; i < allTaskDiv.length; i++) {
        allTaskDiv[i].remove();
    }
    let completedArr = JSON.parse(localStorage.getItem("completedArr"));
    // console.log(completedArr);
    for (let i = 0; i < completedArr.length; i++) {
        let divEle = document.createElement("div");
        divEle.setAttribute("class", "oneTask");
        divEle.innerHTML = `<p>${completedArr[i]}</p>
                                  <i class="material-icons delete">delete</i>`
        let deleteBtn = divEle.querySelector(".delete");
        deleteBtn.addEventListener("click", function (e) {
            e.target.parentNode.remove();
            let allP = document.querySelectorAll(".oneTask p");
            let newArr = [];
            for (let i = 0; i < allP.length; i++) {
                newArr.push(allP[i].innerHTML);
            }
            localStorage.setItem("completedArr", JSON.stringify(newArr));

        })

        let parentDiv = document.querySelector(".tasks");
        parentDiv.appendChild(divEle);



    }
})

addBtn.addEventListener("click", function () {
    if (isBtnPressed == false) {
        // <div class="taskToDo">
        //     <input type="text" placeholder="ENTER A TASK TO ADD">
        // </div>
        let divToAdd = document.createElement("div");
        divToAdd.setAttribute("class", "taskToDo");
        divToAdd.innerHTML = `<input type="text" placeholder="ENTER A TASK TO ADD">`
        body.appendChild(divToAdd);
        divToAdd.addEventListener("keypress", function (e) {
            // console.log(e.key);
            if (e.key == 'Enter') {
                if (e.target.value.length == 0) {
                    return;
                }
                // <div class="oneTask">
                //     <i class="material-icons done">done</i>
                //     <p>Task 1</p>
                //     <i class="material-icons delete">delete</i>
                // </div>
                let divEle = document.createElement("div");
                divEle.setAttribute("class", "oneTask");
                divEle.innerHTML = `<i class="material-icons done">done</i>
                                  <p>${e.target.value}</p>
                                  <i class="material-icons delete">delete</i>`

                todoArr = JSON.parse(localStorage.getItem("todoArr"));  // liye to string main tha upar to parse se usse array main convert kiye hai 

                todoArr.push(e.target.value);

                localStorage.setItem("todoArr", JSON.stringify(todoArr));// aur jb usse wapis dale to array tha to esse wajah se usse sting main convet kra diya

                let deleteBtn = divEle.querySelector(".delete");
                deleteBtn.addEventListener("click", function (e) {
                    e.target.parentNode.remove();
                    let allP = document.querySelectorAll(".oneTask p");
                    let newArr = [];
                    for (let i = 0; i < allP.length; i++) {
                        newArr.push(allP[i].innerHTML);
                    }
                    localStorage.setItem("todoArr", JSON.stringify(newArr));
                })
                let doneBtn = divEle.querySelector(".done");
                doneBtn.addEventListener("click", function (e) {
                    let taskValue = e.target.nextElementSibling.innerHTML;
                    e.target.parentNode.remove();
                    let allP = document.querySelectorAll(".oneTask p");
                    let newArr = [];
                    for (let i = 0; i < allP.length; i++) {
                        newArr.push(allP[i].innerHTML);
                    }
                    localStorage.setItem("todoArr", JSON.stringify(newArr));
                    // update in completedArr
                    let completedArr = JSON.parse(localStorage.getItem("completedArr"));
                    completedArr.push(taskValue);
                    localStorage.setItem("completedArr", JSON.stringify(completedArr));
                })
                let parentDiv = document.querySelector(".tasks");
                parentDiv.appendChild(divEle);
                taskListBtn.click();
                addBtn.click();
            }
        })






        isBtnPressed = true;
    }
    else {
        let modal = document.querySelector(".taskToDo");
        modal.remove();
        isBtnPressed = false;
    }




})