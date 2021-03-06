import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const options = new DocumentBuilder()
		.setTitle('Test API')
		.setDescription('Description')
		.setVersion('1.0.0')
		.addTag('Test')
		.build();
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('', app, document);

	await app.listen(8080);
}
bootstrap();
