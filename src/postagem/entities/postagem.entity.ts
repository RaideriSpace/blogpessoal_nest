import { IsNotEmpty } from "class-validator";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";

// Define a tabela "tb_postagens".

@Entity({ name: "tb_postagens" })

// Exporta a classe "Postagem".
export class Postagem {
  // Cria a coluna id com chave primária, tipo número e auto generate.
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  // Cria a coluna titulo com tipo string, tamanho de 100 caracteres e não nulo.
  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  titulo: string;

  // Cria a coluna texto com tipo string, tamanho de 1000 caracteres e não nulo.
  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  texto: string;

  // Cria a coluna data e preenche com a data e horário atual.
  @ApiProperty()
  @UpdateDateColumn()
  data: Date;

  // Cria a relação das tabelas Postagem e Tema sendo Many-to-one, criando a coluna com chave estrangeira "temaId".
  @ApiProperty({ type: () => Tema })
  @ManyToOne(() => Tema, (tema) => tema.postagem, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "tema_id" })
  tema: Tema;

  // Cria a relação das tabelas Postagem e Usuario sendo Many-to-one, criando a coluna com chave estrangeira "temaId".
  @ApiProperty({ type: () => Usuario })
  @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "usuario_id" })
  usuario: Usuario;
}
