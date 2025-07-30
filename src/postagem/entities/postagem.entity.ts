import { IsNotEmpty } from "class-validator";
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";

// Define a tabela "tb_postagens".

@Entity({ name: "tb_postagens" })

// Exporta a classe "Postagem".
export class Postagem {
  // Cria a coluna id com chave primária, tipo número e auto generate.
  @PrimaryGeneratedColumn()
  id: number;

  // Cria a coluna titulo com tipo string, tamanho de 100 caracteres e não nulo.
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  titulo: string;

  // Cria a coluna texto com tipo string, tamanho de 1000 caracteres e não nulo.
  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  texto: string;

  // Cria a coluna data e preenche com a data e horário atual.
  @UpdateDateColumn()
  data: Date;

  // Cria a relação das tabelas Controller e Tema sendo Many-to-one, criando a coluna com chave estrangeira "temaId".
  @ManyToOne(() => Tema, (tema) => tema.postagem, {
    onDelete: "CASCADE",
  })
  tema: Tema;
}
