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
import { TiketRepository } from "../repository/tiket.repository";
import Mail = require("nodemailer/lib/mailer");

@JsonController("/tiket")
export class TiketController {
  private repository: TiketRepository;

  constructor(repository: TiketRepository) {
    this.repository = repository;
  }

  /*
   Nombre:         GetTiket
   Autor:          José Hernández
   Fecha:          03/11/2020
   Descripción:    Obtener los tikets
   SP:             [SEL_TIKETS_SP]
   Url:            http://{server}:{port}/tiket/getTikets
 */
  @Get('/getTikets')
  getTikets(@Req() req: Request) {
    return this.repository.getTikets(req.query);
  }

    /*
   Nombre:         getComentarios
   Autor:          Braulio Hernández
   Fecha:          03/11/2020
   Descripción:    Obtener los tikets
   SP:             [SEL_TIKETS_SP]
   Url:            http://{server}:{port}/tiket/getTikets
 */
@Get('/getComentarios')
getComentarios(@Req() req: Request) {
  return this.repository.getComentarios(req.query);
}

  /*
   Nombre:         GetTiket
   Autor:          Braulio Hernández
   Fecha:          04/11/2020
   Descripción:    Obtene un tiket
   SP:             [SEL_TIKET_SP]
   Url:            http://{server}:{port}/tiket/getTiket
 */
  @Get('/getTiket/:idTiket')
  getTiket(@Req() req: Request) {
    return this.repository.getTiket(req.params);
  }



    /*
   Nombre:         GetTiket
   Autor:          Braulio Hernández
   Fecha:          04/11/2020
   Descripción:    Obtene un tiket
   SP:             [SEL_TIKET_SP]
   Url:            http://{server}:{port}/tiket/getTiket
 */
@Get('/getComentario/:idTiket')
getComentario(@Req() req: Request) {
  return this.repository.getComentario(req.params);
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
  @Post('/postTiket')
  postTiket(@Body() body: Request) {
    console.log(body)
      return this.repository.postTiket(body);
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
  @Post('/postComentario')
  postComentario(@Body() body: Request) {
      return this.repository.postComentario(body);
  }


      // ************ Servicios PUT ************ 

    /**
   * @description Esctibe los arrendamientos
   * @author José Etmanuel Hernández Rejón
   * SP: contrato.UPD_DESCUENTO_SP
   * Url: http://{server}:{port}/arrendamiento/putTiket
   * Wiki: 
   */
  @Put('/putTiket')
  putTiket(@Body() body: Request) {
      return this.repository.putTiket(body);
  }



  
      // ************ Servicios PUT ************ 

    /**
   * @description Esctibe los arrendamientos
   * @author José Etmanuel Hernández Rejón
   * SP: contrato.UPD_DESCUENTO_SP
   * Url: http://{server}:{port}/arrendamiento/putTiket
   * Wiki: 
   */
  @Put('/putComentario')
  putComentario(@Body() body: Request) {
      return this.repository.putComentario(body);
  }

    // ************ Servicios DELETE ************
    /**
    * @description Esctibe los arrendamientos
    * @author José Etmanuel Hernández Rejón
    * SP: contrato.DEL_DESCUENTO_SP
    * Url: http://{server}:{port}/arrendamiento/deleteDescuento
    * Wiki: 
    */
   @Delete('/deleteTiket')
   deleteTiket(@Body() body: Request) {
       return this.repository.deleteTiket(body);
   }

       // ************ Servicios DELETE ************
    /**
    * @description Esctibe los arrendamientos
    * @author José Etmanuel Hernández Rejón
    * SP: contrato.DEL_DESCUENTO_SP
    * Url: http://{server}:{port}/arrendamiento/deleteDescuento
    * Wiki: 
    */
   @Delete('/deleteComentario')
   deleteComentario(@Body() body: Request) {
       return this.repository.deleteComentario(body);
   }




  
}
