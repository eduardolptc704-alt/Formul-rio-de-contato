const webhook = "https://discord.com/api/webhooks/ SUA-WEBHOOK-AQUI";
const form = document.getElementById("formulario");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Captura dos campos de texto normais
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("comentario").value;

  // Captura o input do tipo radio que estiver marcado (:checked)
  const radioSelecionado = document.querySelector(
    'input[name="consulta"]:checked',
  );

  // Se houver uma opção selecionada, pega o valor dela, caso contrário, define um texto padrão.
  const tipoConsulta = radioSelecionado
    ? radioSelecionado.value
    : "Não informado";

  try {
    await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        content:
          `**Novo Requerimento Recebido!**\n\n` +
          `**Nome:** ${nome} ${sobrenome}\n` +
          `**Email:** ${email}\n` +
          `**Tipo de Consulta:** ${tipoConsulta}\n` +
          `**Mensagem:** ${mensagem}`,
      }),
    });

    alert("Formulário enviado com sucesso!");
    form.reset(); // Limpa o formulário após o envio
  } catch (error) {
    console.error("Erro ao enviar para o webhook:", error);
    alert("Houve um erro ao enviar a mensagem.");
  }
});
