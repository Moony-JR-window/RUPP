import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('RUPP example')
    .setDescription('The RUPP API ')
    .setVersion('0.0.1')

    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-duc', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
  if (app.listen) {
    Logger.log(`Server is running on port ${process.env.PORT || 3000}`);
  }
}
bootstrap();