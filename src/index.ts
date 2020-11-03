import 'reflect-metadata';
import { createExpressServer, useContainer, Action, UnauthorizedError } from 'routing-controllers';
import { Container, ContainerInstance, Token } from 'typedi';
import { default as config } from './config';

/**
 * @summary En este archivo van todos los metodos referentes a ...
 * localhost:{{port}}/objeto/...
 */


import { PdfOrdenRepository } from './repository/pdfOrden.repository';
import { PdfOrdenController } from './controllers/pdfOrden.controller';
Container.get(PdfOrdenRepository);


import { TiketRepository } from './repository/tiket.repository';
import { TiketController } from './controllers/tiket.controller';
Container.get(TiketRepository);

//obtenemos el puerto del conf
const env: string = process.env.NODE_ENV || 'qa';
const conf: any = (config as any)[env]; 
Container.set('ConfigGlobal', conf);

useContainer(Container);

//EjecutarTasks([EventoTask]);

//global.UserId = 6036;

// generamos el Express
let app = createExpressServer({
    cors: true,
    controllers: [ // Cada uno de los controlests de arriba
        PdfOrdenController,
        TiketController
    ]
});

//middlewares: [SeguridadMiddleware]

// si no se asigna puerto desde el servidor de aplicación
const PORT = process.env.PORT || conf.port;

app.listen(PORT);
console.log(`Running local server on http://localhost:${PORT}`);

// function EjecutarTasks(arr: Array<ClassType<Task>>) {
//     (arr || []).forEach((f) => {
//         Container.get(f);
//     });
// }