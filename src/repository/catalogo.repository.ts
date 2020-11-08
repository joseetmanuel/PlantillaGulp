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
export class CatalogoRepository {

    // ************ Variables de clase ************
    private conf: any; // variabel para guardar la configuración
    query: any;

    constructor() {
        const env: string = process.env.NODE_ENV || 'development';
        this.conf = (config as any)[env]; // ejemplo de llamada al confg.js
        this.query = new Query();

    }

    getCuenta(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[SEL_CUENTA_SP]")
    }


    getCuentas(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[SEL_CUENTAS_SP]")
    }


    getDispositivo(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[SEL_DISPOSITIVO_SP]")
    }

    getDispositivos(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[SEL_DISPOSITIVOS_SP]")
    }


    getEstatus(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[SEL_ESTATUS_SP]")
    }

    getGerencias(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[SEL_GERENCIAS_SP]")
    }


    getPeriferico(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[SEL_PERIFERICO_SP]")
    }

    getPerifericos(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[SEL_PERIFERICOS_SP]")
    }


    getPrioridades(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[SEL_PRIORIDADES_SP]")
    }


    getProcesadores(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[SEL_PROCESADORES_SP]")
    }


    getPuesto(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[SEL_PUESTO_SP]")
    }

    getPuestos(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[SEL_PUESTOS_SP]")
    }


    getTipoCuentas(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[SEL_TIPOCUENTAS_SP]")
    }

    getTipoDispositivos(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[SEL_TIPODISPOSITIVOS_SP]")
    }


    getTipoTikets(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[SEL_TIPOTIKETS_SP]")
    }


    getUsuario(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[SEL_USUARIO_SP]")
    }

    getUsuarios(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[SEL_USUARIOS_SP]")
    }


    // ************ Servicios POST ************




    postCuenta(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[INS_CUENTA_SP]")
    }


    postDispositivo(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[INS_DISPOSITIVO_SP]")
    }


    postPeriferico(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[INS_PERIFERICO_SP]")
    }



    postPuesto(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[INS_PUESTO_SP]")
    }



    postUsuario(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[INS_USUARIO_SP]")
    }



    // ************ Servicios PUT ************


    putCuenta(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[UPD_CUENTA_SP]")
    }


    putDispositivo(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[UPD_DISPOSITIVO_SP]")
    }


    putPeriferico(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[UPD_PERIFERICO_SP]")
    }


    putPrioridades(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[UPD_PRIORIDADES_SP]")
    }



    putPuesto(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[UPD_PUESTO_SP]")
    }



    putUsuario(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[UPD_USUARIO_SP]")
    }


    // ************ Servicios DELETE ************



    deleteCuenta(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[DEL_CUENTA_SP]")
    }


    deleteDispositivo(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[DEL_DISPOSITIVO_SP]")
    }




    deletePeriferico(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[DEL_PERIFERICO_SP]")
    }


    deletePuesto(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[DEL_PUESTO_SP]")
    }


    deleteTipoCuentas(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[DEL_TIPOCUENTAS_SP]")
    }

    deleteUsuario(query: any): PromiseLike<{}> {
        return this.query.spExecute(query, "[catalogo].[DEL_USUARIO_SP]")
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
