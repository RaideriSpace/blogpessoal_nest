import { PostagemService } from "./../services/postagem.service";
import { Postagem } from "./../entities/postagem.entity";
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

// Controller recebe e controla as requisições através de rotas (protocolos HTTP com endpoints e subendpoints(/rota/subrota)).

@ApiTags("Postagem")
@UseGuards(JwtAuthGuard)
@Controller("/postagens")
@ApiBearerAuth()
export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Postagem[]> {
    return this.postagemService.findAll();
  }

  // Faz um tratamento no id para transformar de string para number. (ParseIntPipe recebe e transforma).
  @Get("/:id")
  @HttpCode(HttpStatus.OK)
  findById(@Param("id", ParseIntPipe) id: number): Promise<Postagem> {
    return this.postagemService.findById(id);
  }

  @Get("/titulo/:titulo")
  @HttpCode(HttpStatus.OK)
  findAllByTitulo(@Param("titulo") titulo: string): Promise<Postagem[]> {
    return this.postagemService.findAllByTitulo(titulo);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body() postagem: Postagem,
  ): Promise<{ message: string; postagem: Postagem }> {
    return this.postagemService.create(postagem);
  }

  @Put()
  @HttpCode(HttpStatus.CREATED)
  update(
    @Body() postagem: Postagem,
  ): Promise<{ message: string; postagem: Postagem }> {
    return this.postagemService.update(postagem);
  }

  @Delete("/:id")
  @HttpCode(HttpStatus.OK)
  delete(@Param("id", ParseIntPipe) id: number): Promise<{ message: string }> {
    return this.postagemService.delete(id);
  }
}
