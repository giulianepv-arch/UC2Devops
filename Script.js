document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const assunto = document.getElementById("assunto").value;
        const mensagem = document.getElementById("mensagem").value;

        console.log("Dados enviados:");
        console.log({
            nome,
            email,
            assunto,
            mensagem
        });

        alert(
            `Mensagem enviada com sucesso!\n\nNome: ${nome}\nE-mail: ${email}`
        );

        form.reset();
    });
});