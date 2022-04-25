import {Controller, Get, Query} from '@nestjs/common';
import { RequestsService } from './requests.service';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Get('/?')
  async getAllRequests(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {
    return await this.requestsService.findAll({
      page: page,
      pageSize: pageSize,
    });
  }

  @Get('/total')
  async getTotalRequests() {
    return await this.requestsService.getTotalCost();
  }
}
