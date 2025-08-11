import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { ApiProperty } from "@nestjs/swagger";

// Entidade com criação da tabela "tb_temas".
@Entity({ name: "tb_temas" })
export class Tema {
  // Definição da coluna ID com chave primária e preenchimento automático.
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  // Definição da coluna descrição, não nula, do tipo string com tamanho 255 caracteres.
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  descricao: string;

  // Cria a relação de One-to-many com a tabela tb_postagem, sendo uma relação Bidirecional.
  @ApiProperty()
  @OneToMany(() => Postagem, (postagem) => postagem.tema)
  postagem: Postagem[];
}
