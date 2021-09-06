
import db from 'db.js'
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());


app.get('/matricula', async (req, resp)=> {
    try{ 
        let r = await.db.tb_Matricula.findAll();
        resp.send(r);
    }catch(e){
      resp.send({erro: "Ocorreu um Erro"})
    }
})


app.post('/matricula', async (req, resp)=> {
    try{
        let nomeAluno = req.body.nm_aluno
        let chamada = req.body.nr_chamada
        let turma = req.body.nr_turma
        let curso = req.body.nm_curso

        let cadastra ={
        nm_aluno: nomeAluno,
        nr_chamada: chamada,
        nr_turma: turma,
        nm_curso: curso   
        }

        let Alujacadas = await db.tb_Matricula.findOne({
            where:{nm_aluno: nomeAluno,
                   nr_chamada: chamada}
        })

        if(Alujacadas != null)
        retrun resp.send("aluno já cadastrado")

        let r = await db.tb_Matricula.create(cadastra)
        resp.send(r)

    }catch(e){
        resp.send(e)
    }
})

app.put('/matricula/:id', async(req, resp)=>{

})

app.delete('/matricula/:id', async(req, resp)=>{
    
})