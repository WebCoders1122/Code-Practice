//Misc Variables
const textarea = document.querySelector('.chat-input textarea');
const send_button = document.querySelector('#send-btn');
const chat_area = document.querySelector('.chatbox');
let message;

// AI veriables
const AI_Chat_URL = `https://api.openai.com/v1/chat/completions`;
const AI_Chat_API = `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`;


//Misc Functions

//03
const generate_response = (incoming_li) => {
    let request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${AI_Chat_API}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{
                "role": "user",
                "content": message
            }]
        })
    }
    let p = incoming_li.querySelector('p');
    fetch(AI_Chat_URL, request).then(res => res.json()).then(data => {
        p.innerText = data.choices[0].message.content;
    }).catch(error => {
        p.innerText = 'OOPs... Somthing Went Wrong, Please Try Again..';
    }).finally(() => {
        chat_area.scrollTo(0, chat_area.scrollHeight)
    })
};

//02
const insert_message_in_chatbox = (message, html_class) => {
    let li = document.createElement('li');
    li.classList.add('chat', html_class);
    let chat_content = html_class === 'outgoing' ? `<p>${message}</p>` : `
                <span class="material-symbols-outlined">chat</span>
                <p>${message}</p>`;
    li.innerHTML = chat_content;
    chat_area.scrollTo(0, chat_area.scrollHeight)
    return li;
};

//01
const message_handler = () => {
    message = textarea.value;
    chat_area.appendChild(insert_message_in_chatbox(message, 'outgoing'))
    chat_area.scrollTo(0, chat_area.scrollHeight)
    textarea.value = ``;
    setTimeout(() => {
        let incoming_li = insert_message_in_chatbox('Thinking...', 'incoming');
        chat_area.appendChild(incoming_li)
        generate_response(incoming_li);
    }, 600)

};


//01 get textarea message and place in the chatbox
send_button.addEventListener('click', message_handler)
