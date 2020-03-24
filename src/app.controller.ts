import { Controller, Get } from '@nestjs/common';
import { ApiConsumes, ApiProduces } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller("test")
export class AppController {
	constructor(private readonly appService: AppService) { }

	@Get('app')
	@ApiProduces("application/json", "text/plain")
	@ApiConsumes("application/json")
	public getAppid(): string {
		return "";
	}
}
