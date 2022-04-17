import { Controller, Get } from '@nestjs/common';
import { RequestsService } from './requests.service';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}



  @Get()
  async getAllRequests() {
    return await this.requestsService.findAll();
  }

  @Get('/total')
  async getTotalRequests() {
    return await this.requestsService.getTotalCost();
  }


}
