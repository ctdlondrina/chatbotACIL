const banco = require("../banco");
function execute(user, msg) {
    while (banco.db[user].itens.length > 0) {
        banco.db[user].itens.pop();
    }
    banco.db[user].stage = 0;

    return [
        "✅ Ok tudo certo entraremos em contato 👋🏼👋🏼\n" +
        "Agradecemos pelo interesse em nossos serviços \n" +
        "Ate logo. 🤝🏻👋🏻👋🏻"
    ];
}
exports.execute = execute;