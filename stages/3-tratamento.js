const banco = require("../banco");
function execute(user, msg) {

    if (msg.toLowerCase() === "voltar") {
        banco.db[user].itens.pop();
        banco.db[user].stage = 2;
        if (banco.db[user].itens[1] === "1") {
            return [
                `*MENU INSTITUCIONAL*\n\n` +
                `1️⃣ - Diretoria Executiva \n` +
                `2️⃣ - Instituto Acil \n` +
                `3️⃣ - Fórum Desenvolve Londrina \n` +
                `4️⃣ - Núcleo de Desenvolvimento Empresarial \n` +
                `#️⃣ - Voltar ao Menu Principal`
            ];
        }
        if (banco.db[user].itens[1] === "2") {
            return [
                `*MENU PRODUTOS E SERVIÇOS*\n\n` +
                `1️⃣ - Nota Fiscal Eletrônica \n` +
                `2️⃣ - SPC ACIL \n` +
                `#️⃣ - Voltar ao Menu Principal`
            ];
        }
        if (banco.db[user].itens[1] === "3") {
            return [
                `*MENU PROGRAMAS ESTRATÉGICOS*\n\n` +
                `1️⃣ - Compra Londrina \n` +
                `2️⃣ - Empreender \n` +
                `3️⃣ - Fomento Paraná \n` +
                `4️⃣ - Sala do Empreendedor \n` +
                `5️⃣ - Frente a Frente \n` +
                `#️⃣ - Voltar ao Menu Principal`
            ];
        }
        if (banco.db[user].itens[1] === "4") {
            return [
                `*MENU NOTÍCIAS*\n\n` +
                `1️⃣ - Encontro de empresários \n` +
                `2️⃣ - Black Friday estende horário do comércio de rua em Londrina \n` +
                `3️⃣ - Informação protegida \n` +
                `#️⃣ - Voltar ao Menu Principal`
            ];
        }
        if (banco.db[user].itens[1] === "5") {
            return [
                `*MENU CONTATO*\n\n` +
                `1️⃣ - Nosso Endereço \n` +
                `2️⃣ - Solicitar contato \n` +
                `3️⃣ - Telefones \n` +
                `#️⃣ - Voltar ao Menu Principal`
            ];
        }
    }
    if (msg === "#") {
        banco.db[user].stage = 1;
        banco.db[user].itens.splice(1, 2);
        return [
            `*MENU PRINCIPAL*\n` +
            `🏭 *1* - Institucional. \n` +
            `🛠️ *2* - Produtos e Serviços. \n` +
            `🎯 *3* - Programas Estratégicos. \n` +
            `📢 *4* - Notícias. \n` +
            `📬 *5* - Contato. \n\n` +

            `A qualquer momento durante a navegação pelos Menus, envie a palavra *VOLTAR*\n` +
            `para retornar ao *Menu Anterior*, envie #️⃣ para voltar ao *MENU PRINCIPAL*\n` +
            `e envie *SAIR* para finalizar o atendimento`
        ];
    }
    if (msg.toLowerCase() === "sair") {
        while (banco.db[user].itens.length > 0) {
            banco.db[user].itens.pop();
        }
        banco.db[user].stage = 0;
        return [
            `🚫  Atendimento foi finalizado. 🚫\n` +
            `Ficamos felizes por utilizar nossos serviços e estaremos a disposição sempre que precisar 🙂 \n` +
            `Ate logo 👋🏻👋🏻`
        ];
    }
};
exports.execute = execute;