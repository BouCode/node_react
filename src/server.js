import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.js';
//Inicializando paquetes
const app = express ();

//Configuraciones
app.set ('port', process.env.PORT || 3000);

//middlewares
app.use (webpackDevMiddleware(webpack(webpackConfig)));

//rutas
app.get ('/', (req, res) => {
    res.send ('Hello World');
})

app.get ('/api', (req, res) => {
    res.json ({ api : 'Works!'});
})


//Iniciando server
app.listen (app.get('port'), () => {
    console.log ('server on port', app.get ('port'));
})
