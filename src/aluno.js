import conexao from './banco.js';

// CRUD

// LER/EXIBIR todos os alunos
function ler(res) {
    const sql = "SELECT * FROM alunos ORDER BY nome";

    conexao.query(sql, (erro, resultados) => {
        // Verificação para ver se há conteúdo
        if (resultados.length === 0) {
            res.status(204).end(); // Sem conteúdo (204) se não houver resultado
            return;
        } 
        
        
       if (erro) {
                res.status(400).json(erro.code);
            } else {
                res.status(200).json(resultados); // OK (200) com os resultados
            }
    });
}

//INSERINDO alunos no banco de dados
function inserir(aluno,res){
    const sql = "INSERT INTO alunos SET ?";

    conexao.query(sql, aluno, (erro) => {
        if(erro) {
            res.status(400).json(erro.code);
        } else {
            res.status(201).json({ "status" : "Aluno inserido"});
            //res.status(201).end();

        }
    })

}

export { ler, inserir };