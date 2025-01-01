import PouchDB from 'pouchdb';
const db = new PouchDB('first-database');

db.info().then(function (info) {
    console.log(info);
})