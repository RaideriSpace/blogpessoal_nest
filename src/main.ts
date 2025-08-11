import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { SwaggerTheme, SwaggerThemeNameEnum } from "swagger-themes";

async function bootstrap() {
  // Aguarda o nest criar a instância da aplicação.
  const app = await NestFactory.create(AppModule);
  const theme = new SwaggerTheme();

  // Configuração para o swagger fazer a documentação.
  const config = new DocumentBuilder()
    .setTitle("Blog Pessoal - Lucas Alves Pinheiro")
    .setDescription("Projeto Blog Pessoal")
    .setContact(
      "Lucas Alves Pinheiro",
      "https://github.com/RaideriSpace",
      "l.pinheiro.w@gmail.com",
    )
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  // Criação do documento Swagger
  const document = SwaggerModule.createDocument(app, config);

  // A customização é passada como um terceiro argumento no método setup:
  // Biblioteca de temas usado no Swagger para pegar uns temas legais: 
  // https://github.com/ilyamixaltik/swagger-themes/blob/530bf8e1eae0a7cdda32211d17504a262ceed586/README.md
  const options = {
    customSiteTitle: "BlogPessoal - Lucas Alves Pinheiro",
    customCss: theme.getBuffer(SwaggerThemeNameEnum.NORD_DARK),
  };

  SwaggerModule.setup("/swagger", app, document, options);

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
