// Misc Variables
const send_button = document.querySelector('.chat_input i');
const input_area = document.querySelector('.chat_input textarea');
const chat_body = document.querySelector('.chat_body');
let input_message;
// open AI data
const ai_api_key = `Your API key`;
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
};

// 01 to get input and insert to chat_body
send_button.addEventListener('click', chat_handler);

// 02 to get input when enter pressed
document.addEventListener('keydown', (key) => {
    if (key.code === 'Enter' && !key.shiftKey) {
        key.preventDefault();
        chat_handler();
        chat_body.scrollTo(0, chat_body.scrollHeight);
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
        let response_message = reply.querySelector('p');
        response_message.innerText = data.choices[0].message.content;
        chat_body.scrollTo(0, chat_body.scrollHeight);
        console.log(data)
    }).catch((error) => {
        console.log(error)
    })
};





// //Misc Variables
// const textarea = document.querySelector('.chat-input textarea');
// const send_button = document.querySelector('#send-btn');
// const chat_area = document.querySelector('.chatbox');
// let message;

// // AI veriables
// const AI_Chat_URL = `https://api.openai.com/v1/chat/completions`;
// const AI_Chat_API = `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`;


// //Misc Functions

// //03
// const generate_response = (incoming_li) => {
//     let request = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${AI_Chat_API}`
//         },
//         body: JSON.stringify({
//             "model": "gpt-3.5-turbo",
//             "messages": [{
//                 "role": "user",
//                 "content": message
//             }]
//         })
//     }
//     let p = incoming_li.querySelector('p');
//     fetch(AI_Chat_URL, request).then(res => res.json()).then(data => {
//         p.innerText = data.choices[0].message.content;
//     }).catch(error => {
//         p.innerText = 'OOPs... Somthing Went Wrong, Please Try Again..';
//     }).finally(() => {
//         chat_area.scrollTo(0, chat_area.scrollHeight)
//     })
// };

// //02
// const insert_message_in_chatbox = (message, html_class) => {
//     let li = document.createElement('li');
//     li.classList.add('chat', html_class);
//     let chat_content = html_class === 'outgoing' ? `<p>${message}</p>` : `
//                 <span class="material-symbols-outlined">chat</span>
//                 <p>${message}</p>`;
//     li.innerHTML = chat_content;
//     chat_area.scrollTo(0, chat_area.scrollHeight)
//     return li;
// };

// //01
// const message_handler = () => {
//     message = textarea.value;
//     chat_area.appendChild(insert_message_in_chatbox(message, 'outgoing'))
//     chat_area.scrollTo(0, chat_area.scrollHeight)
//     textarea.value = ``;
//     setTimeout(() => {
//         let incoming_li = insert_message_in_chatbox('Thinking...', 'incoming');
//         chat_area.appendChild(incoming_li)
//         generate_response(incoming_li);
//     }, 600)

// };


// //01 get textarea message and place in the chatbox
// send_button.addEventListener('click', message_handler)
