import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  // Aguarda o nest criar a instância da aplicação.
  const app = await NestFactory.create(AppModule);

  // Configuração para o swagger fazer a documentação.
  const config = new DocumentBuilder()
    .setTitle("Blog Pessoal - Lucas Alves Pinheiro")
    .setDescription("Projeto Blog Pessoal")
    .setContact(
      "Lucas Alls Pinheiro",
      "https://github.com/RaideriSpace",
      "l.pinheiro.w@gmail.com",
    )
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/swagger", app, document);

  // Configuração do fuso horário para UTC-03:00 (Brasília).
  process.env.TZ = "-03:00";

  // Ativação do ValidationPipe para validar dados em todas as requisições.
  app.useGlobalPipes(new ValidationPipe());

  // Habilitação do CORS para permitir requisições de diferentes origens.
  app.enableCors();

  // A porta do Backend é 4000.
  await app.listen(process.env.PORT ?? 4000);
}

// eslint-disable-next-line
bootstrap();
