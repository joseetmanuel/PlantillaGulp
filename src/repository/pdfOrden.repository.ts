import { Service } from 'typedi';
import { default as config } from '../config';
import { Query } from '../data/query';
import * as mail from '../helpers/mail.helper';
const xml2json = require('xml-js');
import * as nodemailer from 'nodemailer';
import { reject, defer, IPromise, async } from 'q';
import * as HttpHelper from '../helpers/http.helper';
import { QueryParams } from 'routing-controllers';

var fs = require('fs');


/**
 * @summary En este archivo van todos los metodos referentes a ...
 * 
 */

@Service()
export class PdfOrdenRepository {

    // ************ Variables de clase ************
    private conf: any; // variabel para guardar la configuración
    query: any;

    constructor() {
        const env: string = process.env.NODE_ENV || 'development';
        this.conf = (config as any)[env]; // ejemplo de llamada al confg.js
        this.query = new Query();

    }

    // ************ Servicios GET ************

    async getDelay(query: any): Promise<{}> {
        let delayres = await this.delay(1000);
        return { ok: "ok" }

    }

    GetOrdenes(query: any): PromiseLike<{}> {
        // return this.query.spExecute(query, "[SEL_ORDENES_PF_SP]")
        let faltantes = [229,
            384,
            476,
            480,
            501,
            530,
            549,
            782,
            901,
            984,
            993,
            1038,
            1048,
            1058,
            1087,
            1131,
            1175,
            1186,
            1188,
            1219,
            1239,
            1259,
            1268,
            1321,
            1380,
            1671,
            1702,
            1877,
            1880,
            2063,
            3054,
            3093,
            3095,
            3133,
            3170,
            3201,
            3221,
            3234,
            3822,
            3843,
            3863,
            5424,
            5469,
            5474,
            5593,
            5697,
            5753,
            5786,
            5874,
            5886,
            5898,
            5901,
            5921,
            5936,
            6090,
            6108,
            6163,
            6177,
            6208,
            6347,
            6397,
            6535,
            6600,
            6843,
            6949,
            6991,
            7099,
            7100,
            8019,
            8047,
            8112,
            8127,
            8128
            ]
        console.log('********** new exe')
        var deferred = defer<any>();
        //  for (let i = 8134; i <= 8250; i++) {
        faltantes.forEach(i => {
            setTimeout(() => {
                // console.log('Creando el archivo id ' + i)
                this.ExecuteQuery(i);
            }, 500 * (i - 8134));
        }
        );
        deferred.resolve({ "Respuesta": "Creando archivos." })
        return deferred.promise;
    }

    currency(n: number): string {
        return Intl.NumberFormat("en-IN", { style: "currency", currency: "USD" }).format(n);
    }

    ExecuteQuery(i: number) {
        let q = { id: i }
        this.query.spExecute(q, '[arrendamiento].[SEL_DatosExcel_SP]').then((res: any) => {
            if (res.err) {
                console.log('res.err ' + i + '==================== ')
                console.log(res.err)
                console.log('============================================ ')
                console.log(' ')
            } else if (res.excepcion) {
                console.log('res.excepcion ' + i + '==================== ')
                console.log(res.excepcion)
                console.log('============================================ ')
                console.log(' ')
            } else if (res.recordsets && res.recordsets[0]) {
                let jsonData = {};
                res.recordsets[0].forEach((e: any) => {
                    try {
                        let _parti = [];
                        let _fech = '', _fechA = '', _fechE ='' 
                        let _ord = e.folio
                        try {
                            let anio = e.fecha.getFullYear();
                            let mes = e.fecha.getMonth();
                            let dia = e.fecha.getDate();
                            _fech = dia + '/' + mes + '/' + anio

                            anio = e.fechaA.getFullYear();
                            mes = e.fechaA.getMonth();
                            dia = e.fechaA.getDate();
                            _fechA = dia + '/' + mes + '/' + anio

                            anio = e.fechaE.getFullYear();
                            mes = e.fechaE.getMonth();
                            dia = e.fechaE.getDate();
                            _fechE = dia + '/' + mes + '/' + anio

                            _ord = '18-' + anio + e.id + '-' + e.folio
                        } catch (e) {
                            console.log(e)
                        }

                        if (e.llantas > 0) _parti.push({
                            "partida": "1",
                            "descripcion": "Llantas",
                            "monto": this.currency(e.llantas)
                        })
                        if (e.cambioBalatas > 0) _parti.push({
                            "partida": "1",
                            "descripcion": "Cambio de balatas",
                            "monto": this.currency(e.cambioBalatas)
                        })
                        if (e.alineacionyBalanceo > 0) _parti.push({
                            "partida": "1",
                            "descripcion": "Alineación y balanceo",
                            "monto": this.currency(e.alineacionyBalanceo)
                        })
                        if (e.manoObra > 0) _parti.push({
                            "partida": "1",
                            "descripcion": "Mano de obra",
                            "monto": this.currency(e.manoObra)
                        })
                        if (e.cambioAnticongelante > 0) _parti.push({
                            "partida": "1",
                            "descripcion": "Cambio de anticongelante",
                            "monto": this.currency(e.cambioAnticongelante)
                        })
                        if (e.cambioLlantasTraceras > 0) _parti.push({
                            "partida": "1",
                            "descripcion": "Cambio de llantas traceras",
                            "monto": this.currency(e.cambioLlantasTraceras)
                        })
                        if (e.limpiezaFrenos > 0) _parti.push({
                            "partida": "1",
                            "descripcion": "Limpueza de frenos",
                            "monto": this.currency(e.limpiezaFrenos)
                        })
                        if (e.refacciones > 0) _parti.push({
                            "partida": "1",
                            "descripcion": "Refacciones",
                            "monto": this.currency(e.refacciones)
                        })
                        if (e.lavadoInyectores > 0) _parti.push({
                            "partida": "1",
                            "descripcion": "Lavado de inyectores",
                            "monto": this.currency(e.lavadoInyectores)
                        })
                        if (e.lavadoCuerpoAceleracion > 0) _parti.push({
                            "partida": "1",
                            "descripcion": "lavado del cuerpo de aceleración",
                            "monto": this.currency(e.lavadoCuerpoAceleracion)
                        })
                        if (e.nitrogenoLlantas > 0) _parti.push({
                            "partida": "1",
                            "descripcion": "Nitrogeno en llantas",
                            "monto": this.currency(e.nitrogenoLlantas)
                        })
                        if (e.MO > 0) _parti.push({
                            "partida": "1",
                            "descripcion": "M.O.",
                            "monto": this.currency(e.MO)
                        })

                        jsonData = {
                            'template': {
                                'name': 'SISCOV2_reporteOrden'
                            },
                            'data': {
                                "id": e.id,
                                "folio": _ord,
                                "fecha": _fech,
                                "descripcion": e.descripcion,
                                "serie": e.serie,
                                "modelo": e.modelo,
                                "subtotal": this.currency(e.subtotal),
                                "iva": this.currency(e.iva),
                                "total": this.currency(e.total),
                                "totalPartidas": _parti.length,
                                "DatosPartidas": _parti,
                                "marca": e.marca,
                                "cilindros": e.cilindros,
                                "submarca": e.submarca,
                                "combustible": e.combustible,
                                "noEconomico": e.noEconomico,
                                "zona": e.zona,
                                "usuarioC": e.usuarioc,
                                "fechaA": _fechA,
                                "usuarioA": e.usuarioa,
                                "fechaE": _fechE,
                            }
                        };
                        this.GuardaDocumentoSolicitud('Orden', jsonData, e.folio, e.id)
                    } catch (err) {
                        console.log('==================== ' + e.id + '==================== ')
                        console.log(err)
                        console.log('============================================ ')
                        console.log(' ')
                    }
                });
            } else {
                console.log('else ' + i + '==================== ')
                console.log(res)
                console.log('============================================ ')
                console.log(' ')
            }
        }, (reason: any) => {
            console.log('reason ' + i + '==================== ')
            console.log(reason)
            console.log('============================================ ')
            console.log(' ')
        })
    }

    GuardaDocumentoSolicitud(nombre: string, jsonData: any, orden: string, id: number) {

        let raiz = "C:\\ordenesPF\\";
        let filePath = raiz + nombre + '_' + orden + ".pdf";

        if (!fs.existsSync(raiz))
            fs.mkdirSync(raiz);

        HttpHelper.sendJsonPostArch(this.conf.jsReport.host, this.conf.jsReport.port, '/api/report', jsonData, (err: any, t: any) => {
            if (err) {
                console.log('ServerJS ' + id + '==================== ')
                console.log(err)
                console.log('============================================ ')
                console.log(' ')
            } else
                try {
                    var buffer = Buffer.concat(t);
                    fs.writeFile(filePath, buffer, (err: any) => {
                        let formData = {
                            files: fs.createReadStream(filePath),
                            path: 2,
                            idAplicacionSeguridad: this.conf.ApplicationId,
                            idUsuario: 2,
                            idModuloSeguridad: 1,
                            titulo: nombre,
                            descripcion: nombre
                        }
                    })
                } catch (err) {
                    console.log('Guarda Doc ' + id + '==================== ')
                    console.log(err)
                    console.log('============================================ ')
                    console.log(' ')
                }
        });
    }

    /**
   * Plantilla de ejemplo para un servicio GET
   * @summary Metodo para esperar delayInms milisegundos
   * @param delayInms { nombreVarible tipoVariable descripción }   
   * @returns null
   *  
   */
    async delay(delayInms: number) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(2);
            }, delayInms);
        });
    }


}
