const input = document.getElementById("commandInput");
const output = document.getElementById("output");
const avatarInput = document.getElementById("avatarInput");
const avatarPreview = document.getElementById("avatarPreview");

let history = [];

function print(text) {
  const line = document.createElement("div");
  line.textContent = text;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

function typingEffect(text, callback) {
  let i = 0;
  const line = document.createElement("div");
  output.appendChild(line);

  const interval = setInterval(() => {
    line.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 15);
}

function handleCommand(cmd) {
  print(`guest@jose:~$ ${cmd}`);
  history.push(cmd);

  switch (cmd.toLowerCase()) {

    case "whoami":
      typingEffect(
`José Dev
Backend Developer
Python | Flask | FastAPI
19 anos
Luanda, Talatona, Angola`
      );
      break;

    case "skills":
      typingEffect("Python, Flask, FastAPI, REST APIs, SQL, Git, Linux CLI");
      break;

    case "projects":
      typingEffect("Projetos:\n- API REST Sistema X (placeholder)\n- Automação de arquivos\n- Portfólio terminal UI");
      break;

    case "contact":
      typingEffect(
`email: josewave2006@gmail.com
github: https://github.com/SEU_GITHUB
location: Luanda, Talatona, Angola`
      );
      break;

    case "clear":
      output.innerHTML = "";
      break;

    default:
      typingEffect("Comando não encontrado. Use: whoami | skills | projects | contact | clear");
  }
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleCommand(input.value);
    input.value = "";
  }
});

avatarInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      avatarPreview.src = reader.result;
    };
    reader.readAsDataURL(file);
  }
});