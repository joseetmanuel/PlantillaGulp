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
export class RelacionRepository {

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



    getDispositivoPeriferico(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[relacion].[SEL_DISPOSITIVOPERIFERICO_SP]")
    }

    
    getDispositivosPerifericos(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[relacion].[SEL_DISPOSITIVOSPERIFERICOS_SP]")
    }


    getUsuarioCuenta(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[relacion].[SEL_USUARIOCUENTA_SP]")
    }

    
    getUsuariosCuentas(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[relacion].[SEL_USUARIOSCUENTAS_SP]")
    }


    getUsuarioDispositivo(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[relacion].[SEL_USUARIODISPOSITIVO_SP]")
    }

    
    getUsuariosDispositivos(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[relacion].[SEL_USUARIOSDISPOSITIVOS_SP]")
    }


    getUsuarioPuesto(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[relacion].[SEL_USUARIOPUESTO_SP]")
    }


    getUsuariosPuestos(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[relacion].[SEL_USUARIOSPUESTOS_SP]")
    }


    // ************ Servicios POST ************

 
    postDispositivoPeriferico(body: any): PromiseLike<{}> {
        return this.query.spExecute(body, "[relacion].[INS_DISPOSITIVOPERIFERICO_SP]")
    }

    postUsuarioCuenta(body: any): PromiseLike<{}> {
        return this.query.spExecute(body, "[relacion].[INS_USUARIOCUENTA_SP]")
    }

    postUsuarioDispositivo(body: any): PromiseLike<{}> {
        return this.query.spExecute(body, "[relacion].[INS_USUARIODISPOSITIVO_SP]")
    }

    postUsuarioPuesto(body: any): PromiseLike<{}> {
        return this.query.spExecute(body, "[relacion].[INS_USUARIOPUESTO_SP]")
    }


    // ************ Servicios PUT ************

 
    putDispositivoPeriferico(body: any): PromiseLike<{}> {
        return this.query.spExecute(body, "[relacion].[UPD_DISPOSITIVOPERIFERICO_SP]")
    }

    putUsuarioCuenta(body: any): PromiseLike<{}> {
        return this.query.spExecute(body, "[relacion].[UPD_USUARIOCUENTA_SP]")
    }

    putUsuarioDispositivo(body: any): PromiseLike<{}> {
        return this.query.spExecute(body, "[relacion].[UPD_USUARIODISPOSITIVO_SP]")
    }

    putUsuarioPuesto(body: any): PromiseLike<{}> {
        return this.query.spExecute(body, "[relacion].[UPD_USUARIOPUESTO_SP]")
    }

 

    // ************ Servicios DELETE ************
 

    deleteDispositivoPeriferico(body: any): PromiseLike<{}> {
        return this.query.spExecute(body, "[relacion].[DEL_DISPOSITIVOPERIFERICO_SP]")
    }

    deleteUsuarioCuenta(body: any): PromiseLike<{}> {
        return this.query.spExecute(body, "[relacion].[DEL_USUARIOCUENTA_SP]")
    }

    deleteUsuarioDispositivo(body: any): PromiseLike<{}> {
        return this.query.spExecute(body, "[relacion].[DEL_USUARIODISPOSITIVO_SP]")
    }

    deleteUsuarioPuesto(body: any): PromiseLike<{}> {
        return this.query.spExecute(body, "[relacion].[DEL_USUARIOPUESTO_SP]")
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
