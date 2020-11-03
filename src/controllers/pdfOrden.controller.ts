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
import { PdfOrdenRepository } from "../repository/pdfOrden.repository";
import Mail = require("nodemailer/lib/mailer");

@JsonController("/pdfOrden")
export class PdfOrdenController {
  private repository: PdfOrdenRepository;

  constructor(repository: PdfOrdenRepository) {
    this.repository = repository;
  }

  /*
   Nombre:         GetOrdenes
   Autor:          Edgar Mendoza
   Fecha:          30/12/2019
   Descripción:    Obtener las ordenes
   SP:             [SEL_ORDENES_PF_SP]
   Url:            http://{server}:{port}/cuentasXPagar/GetDatosOrden
 */
  @Get('/GetOrdenes')
  GetOrdenes(@Req() req: Request) {
    return this.repository.GetOrdenes(req.query);
  }



}
