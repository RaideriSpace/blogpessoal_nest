import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemModule } from "./postagem/postagem.module";
import { Postagem } from "./postagem/entities/postagem.entity";
import { Tema } from "./tema/entities/tema.entity";
import { TemaModule } from "./tema/tema.module";
import { AuthModule } from "./auth/auth.module";
import { Usuario } from "./usuario/entities/usuario.entity";
import { UsuarioModule } from "./usuario/usuario.module";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: "mysql",
        host: config.get<string>("DB_HOST"),
        port: config.get<number>("DB_PORT"),
        username: config.get<string>("DB_USERNAME"),
        password: config.get<string>("DB_PASSWORD"),
        database: config.get<string>("DB_NAME"),
        entities: [Postagem, Tema, Usuario],
        synchronize: true,
        logging: true,
      }),
    }),
    PostagemModule,
    TemaModule,
    AuthModule,
    UsuarioModule,
  ],
})
export class AppModule {}
