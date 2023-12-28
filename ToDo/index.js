const input = document.getElementById("input")
const list = document.getElementsByClassName("list")[0]
const btn = document.getElementById("btn")
let listarray = []
let task = ""
input.addEventListener("input", (e) => {
    task = e.target.value
})
btn.addEventListener("click", () => {
    if (task != "") {
        listarray.unshift(task)
        console.log(listarray)
        input.value = ""
        list.innerHTML = ""
        listarray.map((task) => {
            const element = document.createElement("li")
            element.innerHTML = task
            const editbtn = document.createElement("button")
            editbtn.innerText = "✏️"
            editbtn.style.border = "none";
            editbtn.style.backgroundColor = "transparent"
            editbtn.style.marginLeft = "4px"
            element.appendChild(editbtn)
            const delbtn = document.createElement("button")
            delbtn.innerText = "❌"
            delbtn.style.border = "none";
            delbtn.style.backgroundColor = "transparent"
            delbtn.style.marginLeft = "4px"
            element.appendChild(delbtn)
            list.appendChild(element)
            delbtn.addEventListener("click", (e) => {
                const deltask = e.target.parentNode
                list.removeChild(deltask)
                listarray = []
                for (var i = 0; i < list.children.length; i++) {
                    listarray[i] = list.children[i].textContent;
                    listarray[i] = listarray[i].slice(0, -2)
                }
                console.log(listarray)
            })
            editbtn.addEventListener("click", (e) => {
                const editTask = e.target.parentNode
                input.value = editTask.innerText.slice(0, -4)
                console.log(editTask)
                list.removeChild(editTask)
                listarray = []
                for (var i = 0; i < list.children.length; i++) {
                    listarray[i] = list.children[i].textContent;
                    listarray[i] = listarray[i].slice(0, -3)
                }
                console.log(listarray)
            })
        })
    }
})


