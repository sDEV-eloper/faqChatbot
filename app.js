
const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");
send.addEventListener("click", () => renderUserMessage());

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {    //13 is keycode for enter
    renderUserMessage();
  }
});

const renderUserMessage = () => {
  const userInput = txtInput.value.toLowerCase();
  renderMessageEle(userInput, "user");
  txtInput.value = "";
  setTimeout(() => {
    renderChatbotResponse(userInput);
    setScrollPosition();
  }, 900);
};

const renderChatbotResponse = (userInput) => {
  const res = getChatbotResponse(userInput);
  renderMessageEle(res);
};

const renderMessageEle = (txt, type) => {
  let className = "user-message";
  if (type !== "user") {
    className = "chatbot-message";
  }
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.classList.add(className);
  messageEle.append(txtNode);
  chatBody.append(messageEle);
};



const getChatbotResponse = (userInput) => {
if(responseObj[userInput]===undefined){
  return "Sorry😐... I didn't get it.\n This is the Graphic Era Hill Univesity Helpdesk for Student services.\n You will come to know about FAQ of different department of Graphic Era Hill University \n\nIn Order to choose type⌨️ short option:👇\n 👉Departments/Courses(dpt) \n👉Payment Options(po) \n👉Scholarships(sch)\n👉FAQ"
}
else{
  return responseObj[userInput] 
}
};


const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};