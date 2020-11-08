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
import { RelacionRepository } from "../repository/relacion.repository";
import Mail = require("nodemailer/lib/mailer");

@JsonController("/relacion")
export class RelacionController {
  private repository: RelacionRepository;

  constructor(repository: RelacionRepository) {
    this.repository = repository;
  }



  // ************ Servicios Get ************

  /*
   Nombre:         GetTiket
   Autor:          José Hernández
   Fecha:          03/11/2020
   Descripción:    Obtener los tikets
   SP:             [SEL_DISPOSITIVOPERIFERICO_SP]
   Url:            http://{server}:{port}/tiket/getTikets
 */
  @Get('/getDispositivoPeriferico/:id')
  getDispositivoPeriferico(@Req() req: Request) {
    return this.repository.getDispositivoPeriferico(req.query);
  }

  /*
   Nombre:         GetTiket
   Autor:          Braulio Hernández
   Fecha:          04/11/2020
   Descripción:    Obtene un tiket
   SP:             [SEL_DISPOSITIVOSPERIFERICOS_SP]
   Url:            http://{server}:{port}/tiket/getTiket
 */
  @Get('/getDispositivosPerifericos')
  getDispositivosPerifericos(@Req() req: Request) {
    return this.repository.getDispositivosPerifericos(req.params);
  }



  /*
   Nombre:         GetTiket
   Autor:          José Hernández
   Fecha:          03/11/2020
   Descripción:    Obtener los tikets
   SP:             [SEL_USUARIOCUENTA_SP]
   Url:            http://{server}:{port}/tiket/getTikets
 */
  @Get('/getUsuarioCuenta/:idUsuarioCuenta')
  getUsuarioCuenta(@Req() req: Request) {
    return this.repository.getUsuarioCuenta(req.params);
  }

  /*
   Nombre:         GetTiket
   Autor:          Braulio Hernández
   Fecha:          04/11/2020
   Descripción:    Obtene un tiket
   SP:             [SEL_USUARIOSCUENTAS_SP]
   Url:            http://{server}:{port}/tiket/getTiket
  */
  @Get('/getUsuariosCuentas')
  getUsuariosCuentas(@Req() req: Request) {
    return this.repository.getUsuariosCuentas(req.query);
  }



  /*
   Nombre:         GetTiket
   Autor:          José Hernández
   Fecha:          03/11/2020
   Descripción:    Obtener los tikets
   SP:             [SEL_USUARIODISPOSITIVO_SP]
   Url:            http://{server}:{port}/tiket/getTikets
 */
  @Get('/getUsuarioDispositivo/:idUsuarioDispositivo')
  getUsuarioDispositivo(@Req() req: Request) {
    return this.repository.getUsuarioDispositivo(req.params);
  }

  /*
   Nombre:         GetTiket
   Autor:          Braulio Hernández
   Fecha:          04/11/2020
   Descripción:    Obtene un tiket
   SP:             [SEL_USUARIOSDISPOSITIVOS_SP]
   Url:            http://{server}:{port}/tiket/getTiket
  */
  @Get('/getUsuariosDispositivos')
  getUsuariosDispositivos(@Req() req: Request) {
    return this.repository.getUsuariosDispositivos(req.query);
  }

  /*
   Nombre:         GetTiket
   Autor:          José Hernández
   Fecha:          03/11/2020
   Descripción:    Obtener los tikets
   SP:             [SEL_USUARIOPUESTO_SP]
   Url:            http://{server}:{port}/tiket/getTikets
 */
  @Get('/getUsuarioPuesto/:idRelacionUsuarioPuesto')
  getUsuarioPuesto(@Req() req: Request) {
    return this.repository.getUsuarioPuesto(req.params);
  }

  /*
   Nombre:         GetTiket
   Autor:          Braulio Hernández
   Fecha:          04/11/2020
   Descripción:    Obtene un tiket
   SP:             [SEL_USUARIOSPUESTOS_SP]
   Url:            http://{server}:{port}/tiket/getTiket
  */
  @Get('/getUsuariosPuestos')
  getUsuariosPuestos(@Req() req: Request) {
    return this.repository.getUsuariosPuestos(req.query);
  }




  // ************ Servicios POST ************

  /**
 Nombre:         postTiket
 Autor:          Braulio Hernández
 Fecha:          04/11/2020
 Descripción:    Inserta un tiket
 SP:             [SEL_TIKET_SP]
 Url:            http://{server}:{port}/tiket/postTiket
 */
@Post('/postDispositivoPeriferico')
postDispositivoPeriferico(@Body() body: Request) {
    return this.repository.postDispositivoPeriferico(body);
}

@Post('/postUsuarioCuenta')
postUsuarioCuenta(@Body() body: Request) {
    return this.repository.postUsuarioCuenta(body);
}

@Post('/postUsuarioDispositivo')
postUsuarioDispositivo(@Body() body: Request) {
    return this.repository.postUsuarioDispositivo(body);
}

@Post('/postUsuarioPuesto')
postUsuarioPuesto(@Body() body: Request) {
    return this.repository.postUsuarioPuesto(body);
}
 
  // ************ Servicios PUT ************ 
 
 

  @Put('/putDispositivoPeriferico')
  putDispositivoPeriferico(@Body() body: Request) {
      return this.repository.putDispositivoPeriferico(body);
  }
  
  @Put('/putUsuarioCuenta')
  putUsuarioCuenta(@Body() body: Request) {
      return this.repository.putUsuarioCuenta(body);
  }
  
  @Put('/putUsuarioDispositivo')
  putUsuarioDispositivo(@Body() body: Request) {
      return this.repository.putUsuarioDispositivo(body);
  }
  
  @Put('/putUsuarioPuesto')
  putUsuarioPuesto(@Body() body: Request) {
      return this.repository.putUsuarioPuesto(body);
  }
   
 
  // ************ Servicios DELETE ************
  @Delete('/deleteDispositivoPeriferico')
  deleteDispositivoPeriferico(@Body() body: Request) {
      return this.repository.deleteDispositivoPeriferico(body);
  }
  
  @Delete('/deleteUsuarioCuenta')
  deleteUsuarioCuenta(@Body() body: Request) {
      return this.repository.deleteUsuarioCuenta(body);
  }
  
  @Delete('/deleteUsuarioDispositivo')
  deleteUsuarioDispositivo(@Body() body: Request) {
      return this.repository.deleteUsuarioDispositivo(body);
  }
  
  @Delete('/deleteUsuarioPuesto')
  deleteUsuarioPuesto(@Body() body: Request) {
      return this.repository.deleteUsuarioPuesto(body);
  }
   

}
