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
export class TiketRepository {

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

    getTikets(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[tiket].[SEL_TIKETS_SP]")
    }

    getComentarios(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[tiket].[SEL_COMENTARIOS_SP]")
    }

    getTiket(query: any): PromiseLike<{}> {
        console.log(query);
        return this.query.spExecute(query, "[tiket].[SEL_TIKET_SP]")
    }


    getComentario(query: any): PromiseLike<{}> {
        console.log(query);
        return this.query.spExecute(query, "[tiket].[SEL_COMENTARIO_SP]")
    }


    // ************ Servicios POST ************

    postTiket(body: any): PromiseLike<{}> {
        return this.query.spExecute(body, "[tiket].[INS_TIKET_SP]")
    }

    postComentario(body: any): PromiseLike<{}> {
        return this.query.spExecute(body, "[tiket].[INS_COMENTARIO_SP]")
    }

    // ************ Servicios PUT ************

    putTiket(body: any): PromiseLike<{}> {
        return this.query.spExecute(body, '[tiket].[UPD_TIKET_SP]')
    }

    putComentario(body: any): PromiseLike<{}> {
        return this.query.spExecute(body, '[tiket].[UPD_COMENTARIO_SP]')
    }

    // ************ Servicios DELETE ************
    deleteTiket(body: any): PromiseLike<{}> {
        return this.query.spExecute(body, '[tiket].[DEL_TIKET_SP]')
    }
    
    deleteComentario(body: any): PromiseLike<{}> {
        return this.query.spExecute(body, '[tiket].[DEL_COMENTARIO_SP]')
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
