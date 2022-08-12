import { Body, Delete, Get, Post, Put, Route } from "tsoa";
import { ITenant } from "../interfaces/ITenant";
import tenants from "../mocks/tenants.json";
import { TenantsService } from "../services/tenants.service";

@Route("api/tenants")
export default class TenantsController {
  tenantDataSource;
  tenantsService;

  constructor() {
    this.tenantDataSource = tenants;
    this.tenantsService = new TenantsService(this.tenantDataSource);
  }

  @Get("/")
  public getAllTenants(): ITenant[] {
    return this.tenantsService.getAllTenants();
  }

  @Get("/:id")
  public getTenantByCode(id: string): ITenant[] {
    return this.tenantsService.getTenantByCode(id);
  }

  @Route("/add")
  @Post()
  public addNewTenant(@Body() data: ITenant): ITenant[] {
    return this.tenantsService.addNewTenant(data);
  }

  @Put("/:id")
  public updateTenant(id: string, @Body() data: ITenant) {
    return this.tenantsService.updateTenant(id, data);
  }

  @Delete("/:id")
  public deleteTenant(id: string) {
    return this.tenantsService.deleteTenant(id);
  }
}
