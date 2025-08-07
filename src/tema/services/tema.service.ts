import { Tema } from "./../entities/tema.entity";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";

// Cria os métodos que serão utilizados pela classe Tema.
@Injectable()
export class TemaService {
  constructor(
    @InjectRepository(Tema)
    private temaRepository: Repository<Tema>,
  ) {}

  // --- Encontrar todos: ---
  async findAll(): Promise<Tema[]> {
    const temaList = await this.temaRepository.find({
      relations: {
        postagem: true,
      },
    });

    if (temaList.length === 0)
      throw new HttpException("Nenhum tema encontrado.", HttpStatus.NOT_FOUND);

    return temaList;
  }

  // --- Encontrar pelo ID relacionando com postagem: ---
  async findById(id: number): Promise<Tema> {
    const tema = await this.temaRepository.findOne({
      where: {
        id,
      },
      relations: {
        postagem: true,
      },
    });

    if (!tema)
      throw new HttpException("Tema não encontrado!", HttpStatus.NOT_FOUND);

    return tema;
  }

  // --- Encontrar pela descrição, relacionando com postagem: ---
  async findAllByDescricao(descricao: string): Promise<Tema[]> {
    const temaList = await this.temaRepository.find({
      where: {
        descricao: ILike(`%${descricao}%`),
      },
      relations: {
        postagem: true,
      },
    });

    if (temaList.length === 0)
      throw new HttpException("Nenhum tema encontrado.", HttpStatus.NOT_FOUND);

    return temaList;
  }

  // --- Criar novo tema: ---
  async create(tema: Tema): Promise<{ message: string; tema: Tema }> {
    try {
      const createdTema = await this.temaRepository.save(tema);
      return {
        message: "Tema criado com sucesso!",
        tema: createdTema,
      };
    } catch (error) {
      throw new HttpException(
        "Erro ao criar o tema! Verifique os dados enviados.",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // --- Atualizar um tema: ---
  async update(tema: Tema): Promise<{ message: string; tema: Tema }> {
    await this.findById(tema.id);

    try {
      const updatedTema = await this.temaRepository.save(tema);
      return {
        message: "Tema atualizado com sucesso!",
        tema: updatedTema,
      };
    } catch (error) {
      throw new HttpException(
        "Erro ao atualizar o tema! Verifique os dados enviados.",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // --- Deleta um tema: ---
  async delete(id: number): Promise<{ message: string }> {
    await this.findById(id);
    try {
      await this.temaRepository.delete(id);

      return {
        message: `Tema com id ${id} deletado com sucesso.`,
      };
    } catch (error) {
      throw new HttpException(
        "Erro ao deletar o tema.",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
