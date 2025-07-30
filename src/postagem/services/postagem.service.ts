import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Postagem } from "../entities/postagem.entity";
import { DeleteResult, ILike, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { TemaService } from "../../tema/services/tema.service";

// Contém todos os métodos de postagem.
// Service acessa a repository que acessa o banco. (Conversa com o banco de dados através da Repository)
// Principal característica dos services são suas regras.

@Injectable()
export class PostagemService {
  constructor(
    @InjectRepository(Postagem)
    private postagemRepository: Repository<Postagem>,
    private temaService: TemaService,
  ) {}

  // -- Método de encontrar tudo: ---
  // Não necessita de tratamento de erro pois lista é sempre encontrada, mesmo que vazia.
  async findAll(): Promise<Postagem[]> {
    // SELECT * FROM tb_postagem;
    return await this.postagemRepository.find({
      relations: {
        tema: true,
      },
    });
  }

  // --- Método de encontrar pelo Id: ---
  async findById(id: number): Promise<Postagem> {
    // SELECT * FROM tb_postagem WHERE id = id;
    const postagem = await this.postagemRepository.findOne({
      where: {
        id,
      },
      relations: {
        tema: true,
      },
    });

    // Se o id não for encontrado, retorna o erro 404 com a mensagem.
    if (!postagem)
      throw new HttpException("Postagem não encontrada", HttpStatus.NOT_FOUND);

    return postagem;
  }

  // --- Método de Encotrar pelo título: ---
  // Não necessita de tratamento de erro pois lista é sempre encontrada, mesmo que vazia.
  async findAllByTitulo(titulo: string): Promise<Postagem[]> {
    // SELECT * FROM tb_postagem WHERE titulo LIKE "%titulo%";
    return await this.postagemRepository.find({
      where: {
        // ILike é CaseSensetive e o Like não.
        titulo: ILike(`%${titulo}%`),
      },
      relations: {
        tema: true,
      },
    });
  }

  // --- Método de cadastrar: ---
  async create(postagem: Postagem): Promise<Postagem> {
    // Verifica se o id do tema existe antes da criação;
    await this.temaService.findById(postagem.tema.id);
    // INSERT INTO tb_postagens (titulo, texto, data) VALUES ("Título", "Texto", CURRENT_TIMESTAMP());
    return await this.postagemRepository.save(postagem);
  }

  // --- Método de atualizar: ---
  async update(postagem: Postagem): Promise<Postagem> {
    // Tratamento para se o id não existir.
    const postagem_id = await this.findById(postagem.id);
    if (!postagem_id) {
      throw new HttpException("Postagem não encontrada", HttpStatus.NOT_FOUND);
    }
    // Verifica se o id do tema existe antes de atualizar;
    await this.temaService.findById(postagem.tema.id);
    // UPDATE tb_postagem SET postagem WHERE id = postagem.id;
    return await this.postagemRepository.save(postagem);
  }

  // --- Método de deletar: ---
  async delete(id: number): Promise<DeleteResult> {
    // DELETE FROM tb_postagem WHERE id = id;
    await this.findById(id);
    return await this.postagemRepository.delete(id);
  }
}
