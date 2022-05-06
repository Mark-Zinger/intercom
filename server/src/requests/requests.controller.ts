import {Controller, Get, Query} from '@nestjs/common';
import { RequestsService } from './requests.service';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Get('/?')
  async getAllRequests(
    @Query('page') page: string,
    @Query('limit') limit: string,
  ) {
    return await this.requestsService.findAll({
      page: parseInt(page),
      limit: parseInt(limit),
    });
  }

  @Get('/total')
  async getTotalRequests() {
    return await this.requestsService.getTotalCost();
  }
}
