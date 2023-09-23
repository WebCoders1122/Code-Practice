// Misc Variables
const send_button = document.querySelector('.chat_input i');
const input_area = document.querySelector('.chat_input textarea');
const chat_body = document.querySelector('.chat_body');
let input_message;
const chat_toggle_close_btn = document.querySelector('.fa-xmark');
const chat_toggle_open_btn = document.querySelector('.fa-comment-medical');
const chat_close_btn = document.querySelector('.chat_close'); // for mobiles etc
let input_area_initial_height = input_area.scrollHeight;
// open AI data
const ai_api_key = `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`;
const ai_url = `https://api.openai.com/v1/chat/completions`;

// Misc functions
//02
const create_chat_ui = (message, class_name) => {
    let li = document.createElement('li');
    li.classList.add(class_name);
    let chat_message = class_name === 'outgoing' ? `<p>${message}</p>` :
        `<i class="fa-solid fa-robot"></i>
        <p>${message}</p>`;
    li.innerHTML = chat_message;
    return li;
};
// 01
const chat_handler = () => {
    input_message = input_area.value;
    if (input_message == ``) {
        return alert('Please Enter a Message...');
    }
    chat_body.appendChild(create_chat_ui(input_message, 'outgoing'));
    input_area.value = ``;
    setTimeout(() => {
        let reply = chat_body.appendChild(create_chat_ui('Thinking...', 'incoming'));
        chat_body.scrollTo(0, chat_body.scrollHeight);
        gen_response(reply)
    }, 400)
    chat_body.scrollTo(0, chat_body.scrollHeight);
    input_area.style.height = `${input_area_initial_height}px`
};

// 01 to get input and insert to chat_body
send_button.addEventListener('click', chat_handler);

// 02 to get input when enter pressed
document.addEventListener('keydown', (key) => {
    if (key.code === 'Enter' && !key.shiftKey) {
        key.preventDefault();
        chat_handler();
        chat_body.scrollTo(0, chat_body.scrollHeight);
        input_area.style.height = `${input_area_initial_height}px`
    }
})
//03 to get response from AI website
const gen_response = (reply) => {
    let res = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ai_api_key}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "user",
                    "content": input_message
                }
            ]
        })
    }
    fetch(ai_url, res).then(response => response.json()).then(data => {
        reply.innerHTML = `<i class="fa-solid fa-robot"></i><p>${data.choices[0].message.content}</p>`
        chat_body.scrollTo(0, chat_body.scrollHeight);
        console.log(data)
    }).catch((error) => {
        let response_message = reply.querySelector('p');
        response_message.innerText = 'Something Went Wrong... Try Again.'
        response_message.classList.add('error')
    })
};

//04 show hide chatbot
chat_toggle_open_btn.addEventListener('click', () => {
    document.querySelector('body').classList.add('chat_active')
})
chat_toggle_close_btn.addEventListener('click', () => {
    document.querySelector('body').classList.remove('chat_active')
})
chat_close_btn.addEventListener('click', () => {
    document.querySelector('body').classList.remove('chat_active')
})

//05 to increase height of textarea while typing multiple lines
input_area.addEventListener('input', (event) => {
    input_area.style.height = `${input_area_initial_height}px`
    input_area.style.height = `${input_area.scrollHeight}px`
})

