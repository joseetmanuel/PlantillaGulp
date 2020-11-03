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
   SP:             [SEL_TIKET_SP]
   Url:            http://{server}:{port}/tiket/getTikets
 */
  @Get('/getTikets')
  getTikets(@Req() req: Request) {
    return this.repository.getTikets(req.query);
  }



}
