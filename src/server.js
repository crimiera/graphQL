// const express = require('express');
// const path = require('path');
// const graphqlHTTP = require('express-graphql');
// const { buildSchema } = require('graphql');
// const  graphQlSchema  = require('./schema.js');
// const bodyParser = require('body-parser');
// const mongoose = require("mongoose");

// const User = require("./models/user.js");
// const Meeting = require("./models/meeting.js");

// mongoose.connect("mongodb://my-mongo:27017", {}, function(error) {
//     // Check error in initial connection. There is no 2nd param to the callback.
//     if(error){
//         console.log(error)
//         console.log("error connecting to mongo db")
//     }
// });

// let users =[
//     { name:"userd"},
//     { name:"user 2"}

// ]

// const resolvers = {
 
//     info: () => `This is the API of a Hackeddddrnews Clone`,
//     username: ({name}) => new Promise((resolve, reject) =>  
//             User.find({name:name}).exec(function(err, result) {
//             if(err) reject(err);
//             resolve(result);
//         })
//     ),
//     userId: ({id}) => new Promise((resolve, reject) =>  
//             User.findOne({_id:id}).exec(function(err, result) {

//             if(err) reject(err);
//             resolve(result);
//         })
//     ),
//     users: () => new Promise((resolve, reject) =>  
//         User.find({}).exec(function(err, results) {
//             if(err)
//             console.log("results"+results.length);
//             console.log(results);
//             resolve(results);
//         })
//     ),


//     postUser: ({name, email, password }) =>  new Promise((resolve, reject) =>  {
//             const user = new User({ name: name, email:email ,password: password });
//             user.save((err,result)=> {
//                 console.log(result)
//                 if(err )reject(err);
//                 resolve(result);
//             });
//         }
//     )
// }




// var app = express();

// app.use('/graphql', graphqlHTTP({
//     schema: graphQlSchema,
//     rootValue: resolvers,
//     graphiql: true,
// }));

// app.use(express.static(path.resolve(__dirname)));


// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.use(bodyParser.text({ type: 'application/graphql' }));
// app.set('views', path.resolve(__dirname +'/views'));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);


// app.get("/",function(req, res, next){
   
// });
// app.get("/form",function(req, res, next){
//     res.status(200).render(path.resolve(process.cwd()+"/src/views/form.html"),{data:"test"});
// });

// app.post("/form",function(req, res, next){
// console.log(req.body)
//     console.log("submit form now ")
//     res.status(200).render(path.resolve(process.cwd()+"/src/views/result.html"),{data:"yes"});
// })





// app.listen(4000);

// console.log('Running a GraphQL API server at localhost:3000/graphql');
import express from "express"
import cors from "cors"
import React from "react"
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from "react-router-dom"
import serialize from "serialize-javascript"
import App from '../shared/App'
import routes from '../shared/routes'
import {renderRoutes} from 'react-router-config';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import stats from '../../dist/react-loadable.json';

const app = express()

app.use(express.static("dist"))

app.get("*", (req, res, next) => {console.log("active route");

  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}
 
  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise.then((data) => {

    const context = { data }
    const  modules = [];

    let html = ReactDOMServer.renderToString(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
         <StaticRouter location={req.url} context={context}>
          <App/>
        </StaticRouter>
      </Loadable.Capture>
    );

    let bundles = getBundles(stats, modules);
    
    console.log(bundles,stats.domain[0].file);
    
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with RR</title>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>
        <body>
          <div id="app">${html}</div>

          ${bundles.map(bundle => {
          //  return `<script src="/${bundle.file}"></script>`
  
            return `<script src="${bundle.publicPath}"></script>`
          }).join('\n')}
          <script src="${stats.domain[0].file}"></script>
        </body>
      </html>
    `)
  }).catch(next)
})

app.listen(4000, () => {
  console.log('Running on http://localhost:3000/');
});