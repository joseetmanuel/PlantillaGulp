import { Request } from "express";
import {
  JsonController,
  UploadedFile,
  Body,
  Get,
  Post,
  Req,
  Put,
  Delete
} from "routing-controllers";
import { CatalogoRepository } from "../repository/catalogo.repository";
import Mail = require("nodemailer/lib/mailer");

@JsonController("/catalogo")
export class CatalogoController {
  private repository: CatalogoRepository;

  constructor(repository: CatalogoRepository) {
    this.repository = repository;
  }
   // ************ Servicios Get ************


  @Get('/getCuenta/:id')
  getCuenta(@Req() req: Request) {
    return this.repository.getCuenta(req.query);
  }

  @Get('/getCuentas')
  getDispositivosPerifericos(@Req() req: Request) {
    return this.repository.getCuentas(req.params);
  }

  @Get('/getDispositivo/:idDispositivo')
  getDispositivo(@Req() req: Request) {
    return this.repository.getDispositivo(req.params);
  }

  @Get('/getDispositivos')
  getDispositivos(@Req() req: Request) {
    return this.repository.getDispositivos(req.query);
  }

  @Get('/getEstatus')
  getEstatus(@Req() req: Request) {
    return this.repository.getEstatus(req.query);
  }

  @Get('/getGerencias')
  getGerencias(@Req() req: Request) {
    return this.repository.getGerencias(req.query);
  }

  @Get('/getPeriferico/:idPeriferico')
  getPeriferico(@Req() req: Request) {
    return this.repository.getPeriferico(req.params);
  }

  @Get('/getPerifericos')
  getPerifericos(@Req() req: Request) {
    return this.repository.getPerifericos(req.query);
  }

  @Get('/getPrioridades')
  getPrioridades(@Req() req: Request) {
    return this.repository.getPrioridades(req.query);
  }

  @Get('/getProcesadores')
  getProcesadores(@Req() req: Request) {
    return this.repository.getProcesadores(req.query);
  }

  @Get('/getPuesto/:idPuesto')
  getPuesto(@Req() req: Request) {
    return this.repository.getPuesto(req.params);
  }

  @Get('/getPuestos')
  getPuestos(@Req() req: Request) {
    return this.repository.getPuestos(req.query);
  }

  @Get('/getTipoCuentas')
  getTipoCuentas(@Req() req: Request) {
    return this.repository.getTipoCuentas(req.query);
  }

  @Get('/getTipoDispositivos')
  getTipoDispositivos(@Req() req: Request) {
    return this.repository.getTipoDispositivos(req.query);
  }

  @Get('/getUsuario/:_idUsuario')
  getUsuario(@Req() req: Request) {
    return this.repository.getUsuario(req.params);
  }

  @Get('/getUsuarios')
  getUsuarios(@Req() req: Request) {
    return this.repository.getUsuarios(req.query);
  }

  @Get('/getTipoTickets')
  getTipoTickets(@Req() req: Request) {
    return this.repository.getTipoTickets(req.query);
  }
  @Get('/getTipoPrioridad')
  getTipoPrioridad(@Req() req: Request) {
    return this.repository.getTipoPrioridad(req.query);
  }



  // ************ Servicios POST ************


  @Post('/postCuenta')
  postCuenta(@Body() body: Request) {
    return this.repository.postCuenta(body);
  }

  @Post('/postDispositivo')
  postDispositivo(@Body() body: Request) {
    return this.repository.postDispositivo(body);
  }

  @Post('/postPeriferico')
  postPeriferico(@Body() body: Request) {
    return this.repository.postPeriferico(body);
  }

  @Post('/postPuesto')
  postPuesto(@Body() body: Request) {
    return this.repository.postPuesto(body);
  }

  @Post('/postUsuario')
  postUsuario(@Body() body: Request) {
    return this.repository.postUsuario(body);
  }
 
  // ************ Servicios PUT ************


  @Put('/putCuenta')
  putCuenta(@Body() body: Request) {
    return this.repository.putCuenta(body);
  }

  @Put('/putDispositivo')
  putDispositivo(@Body() body: Request) {
    return this.repository.putDispositivo(body);
  }

  @Put('/putPeriferico')
  putPeriferico(@Body() body: Request) {
    return this.repository.putPeriferico(body);
  }

  @Put('/putPuesto')
  putPuesto(@Body() body: Request) {
    return this.repository.putPuesto(body);
  }

  @Put('/putUsuario')
  putUsuario(@Body() body: Request) {
    return this.repository.putUsuario(body);
  }


  // ************ Servicios DELETE ************


  @Delete('/deleteCuenta')
  deleteCuenta(@Req() req: Request) {
    return this.repository.deleteCuenta(req.query);
  }

  @Delete('/deleteDispositivo')
  deleteDispositivo(@Req() req: Request) {
    return this.repository.deleteDispositivo(req.query);
  }

  @Delete('/deletePeriferico')
  deletePeriferico(@Req() req: Request) {
    return this.repository.deletePeriferico(req.query);
  }

  @Delete('/deletePuesto')
  deletePuesto(@Req() req: Request) {
    return this.repository.deletePuesto(req.query);
  }

  @Delete('/deleteUsuario')
  deleteUsuario(@Req() req: Request) {
    return this.repository.deleteUsuario(req.query);
  }

 

}
