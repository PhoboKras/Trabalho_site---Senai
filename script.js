function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const msg = document.getElementById("msg");

  if (email === "admin@horizonte.com" && senha === "123456") {
    msg.innerText = "Login realizado com sucesso";
    window.location.href = "index.html";
  } else {
    msg.innerText = "Email ou senha incorretos";
  }
}

document.getElementById("cep")?.addEventListener("blur", async () => {
  const cep = document.getElementById("cep").value;

  try {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();

    if (data.erro) throw "Erro";

    document.getElementById("rua").value = data.logradouro;
    document.getElementById("bairro").value = data.bairro;
    document.getElementById("cidade").value = data.localidade;
    document.getElementById("estado").value = data.uf;

  } catch {
    alert("CEP inválido");
  }
});

// Cadastro do cliente 
document.getElementById("formCadastro")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const campos = document.querySelectorAll("#formCadastro input");
  let valido = true;

  campos.forEach(c => {
    if (c.value === "") valido = false;
  });

  const msg = document.getElementById("msgCadastro");

  if (!valido) {
    msg.innerText = "Preencha todos os campos";
  } else {
    const user = {
      nome: nome.value,
      email: emailCad.value
    };
    msg.innerText = "Cadastro realizado com sucesso";
    console.log(user);
  }
});