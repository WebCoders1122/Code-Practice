// all variables to be used in the script
const addBtn = document.querySelector('#addbtn');
const addNoteDialogue = document.querySelector('.background');
const closeBtn = document.querySelector('#closebtn');
const btn = document.querySelector('#btn');
const addTitle = document.querySelector('#title');
const addDesc = document.querySelector('#desc');
const addHeading = document.querySelector('.add-heading');
let update = false, updateIndex = 0;
let localStorageArray = JSON.parse(localStorage.getItem("localStorageNotes") || '[]') // to prevent overwriting when creating new notes


//01 showing "add new note dialogue" when click on add button
addBtn.addEventListener(
    'click',
    () => {
        addTitle.value = ''
        addDesc.value = ''
        addHeading.innerText = 'Add a New Note'
        btn.innerText = 'Add Note'
        addTitle.focus()
        // console.log(title, desc)

        addNoteDialogue.classList.add('show')
    }
)

//02 to close "add new note dialogue" when click on close button
closeBtn.addEventListener(
    'click',
    () => {
        addNoteDialogue.classList.remove('show')
    }
)

//04 to show local notes in document
const showLocalNotes = () => {
    document.querySelectorAll('.note').forEach((e) => {
        e.remove()
    })
    localStorageArray.forEach((element, index) => {
        let localNote = document.createElement('div');
        localNote.classList.add('note');
        localNote.innerHTML =
            ` <div class="header">
            <h3 class="heading">
                ${element.title}
            </h3>
            <p class="body">
            ${element.desc}
            </p>
        </div>
        <div class="footer">
            <p class="date">${element.date}</p>
            <div class="settings">
                <i onclick="showNoteMenu(this)" class="fa-solid fa-bars"></i>
                <div class="menu">
                    <div onclick="updateNote('${element.title}','${element.desc}', '${index}')" class="Update">
                        <i class="fa-solid fa-file-pen"></i>
                        <span>Update</span>
                    </div>
                    <div onclick="deleteNote(${index})" class="delete">
                        <i class="fa-solid fa-trash"></i>
                        <span>Delete</span>
                    </div>
                </div>
            </div>
        </div>`
        document.querySelector('.container').appendChild(localNote)
    });
}; showLocalNotes()//initial call

// 03 to get values of title description and date
btn.addEventListener(
    'click',
    (e) => {
        e.preventDefault();

        // getting values of title and description on "add new note dialogue"
        let title = addTitle.value;
        let desc = addDesc.value;

        // to get current date
        let date = new Date();
        date = date.toDateString();

        // object to store values of title, desc and date
        if (title != "" || desc != "") {
            let object = {
                title,
                desc,
                date
            }
            if (update == true) { //acts while updating the notes
                localStorageArray[updateIndex] = object;
                localStorage.setItem('localStorageNotes', JSON.stringify(localStorageArray))
                closeBtn.click()
                showLocalNotes();
                update = false
                
            } else {
                // store objects to local storage
                localStorageArray.unshift(object);
                localStorage.setItem('localStorageNotes', JSON.stringify(localStorageArray))
                closeBtn.click()
                showLocalNotes();
            }
        }
    }
)

//05 to show each note menu
const showNoteMenu = (element) => {
    element.parentElement.classList.add('show')
    document.addEventListener(
        'click', (e) => {
            if (e.target != element) {
                element.parentElement.classList.remove('show')
            }
        }
    )
}

//06 to remove notes
const deleteNote = (element) => {
    let deleteNotes = confirm('Are you sure to delete this note?')
    if (deleteNotes == false) {
     return   
    }
    localStorageArray.splice(element, 1)
    localStorage.setItem('localStorageNotes', JSON.stringify(localStorageArray))
    showLocalNotes()
}

//07 to update notes
const updateNote = (title, desc, index) => {
    addBtn.click()
    addHeading.innerText = 'Upddate This Note'
    btn.innerText = 'Upddate Note'
    addTitle.value = title
    addDesc.value = desc
    addTitle.focus()
    update = true;
    updateIndex = index;
}



