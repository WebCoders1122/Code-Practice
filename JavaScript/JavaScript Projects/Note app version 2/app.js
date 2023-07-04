const container = document.querySelector('.container')
const btn = document.querySelector('#btn')
// const del = document.querySelector('.delete')
// const save = document.querySelector('.save')



//03 to save data to local storage
const saveNote = () => {
    let textarea = new Array();
    let text = document.querySelectorAll('.note textarea')
    text.forEach(
        (input) => {
            textarea.push(input.value)
        }
    )
    let title = new Array();
    let titleText = document.querySelectorAll('.note input')
    titleText.forEach(
        (input) => {
            title.push(input.value)
        }
    )
    localStorage.setItem('localNote', JSON.stringify(textarea))
    localStorage.setItem('localTitle', JSON.stringify(title))
}

//02 funtion to add dynamic notes
const addNote = (text = '') => {
    
    let note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML = `<input type="text" name="" id="" placeholder="Enter Title Here" value="">
    <textarea>${text}</textarea>
    <div class="footer">
        <button class="save">Save</button>
        <button class="delete">Delete</button>
    `
    //to delete note
    note.querySelector('.delete').addEventListener(
        'click',
        () => {
            note.remove()
        }
    )
    //to save note
    note.querySelector('.save').addEventListener(
        'click',
        saveNote
    )
    container.appendChild(note)
}

// 01 click on button
btn.addEventListener(
    'click',
    addNote
)


// 04 to show data from local storage to browser
const showData = () => {
    localNote = JSON.parse(localStorage.getItem('localNote'))
    localNote.forEach(
        (input) => {
        addNote(input)
        }
    )
    localTitle = JSON.parse(localStorage.getItem('localTitle'))
    let inputs = document.querySelectorAll('.note input')
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = localTitle[i]
        
    }
    // localTitle.forEach(
    //     (input) => {
    //     addTitle(input)
    //     }
    // )
    console.log(inputs[0])
    
}

showData()