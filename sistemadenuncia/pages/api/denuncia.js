import nextConnect from 'next-connect'
import multer from "multer";
import path from "path";
import db from "../../lib/db";



//configuaração do multer
const upload = multer({
    storage: multer.diskStorage({
        destination: "./public/uploads",
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}${ext}`;
            cb(null, name);
        },
    }),
});

//criando a api com next-connect
const apiRouteDenuncia = nextConnect({
    onError(error, req, res) {
        res.status(500).json({ error: `Erro: ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(404).json({ error: "Rota nao encontrada" });
    },
});

//aplicando o Multer 
apiRouter.use(upload.single("image"));

//criando a rota para a api
apiRouter.post(async (req, res) => {
    const { endereco, Bairro, descricao, cep, rua, numero, idUsuario } = req.body;
    if (!endereco || !Bairro || !descricao || !cep || !rua || !numero || !idUsuario) {
        return res.status(400).json({ error: "Todos os campos sao obrigatorios" });
    }

    const imageUrl = `./uploads/${req.file.filename}`;

    try {
        const [result] = await db.query(
            "INSERT INTO denuncias (endereco, Bairro, descricao, imgUrl, cep, rua, numero, idUsuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [endereco, Bairro, descricao, imageUrl, cep, rua, numero, idUsuario]
        );
        const idDenuncia = result.insertId;
        return res.status(201).json({ menssage: "Denuncia registrada com sucesso", idDenuncia: idDenuncia });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao registrar a denuncia" });
    }
});

// desligando bodyparser
export const config = {
    api: {
      bodyParser: false,
    },
  };
  
  export default apiRouteDenuncia
