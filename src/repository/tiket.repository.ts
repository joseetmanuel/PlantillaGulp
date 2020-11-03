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
