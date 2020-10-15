const express = require('express');
const mongojs = require('mongojs');
const logger = require('morgan');
const path = require('path');

const app = express();
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('assets/html'));

const dbURL = 'photolog';
const dbLogs = ['logs'];
const dbL = mongojs(dbURL, dbLogs);

app.get("/all", (req, res) => {

    var notesArray = [];
    
    getNotes();
    function getNotes() {
      db.notes.find({}, (error, data) => {
        for(var i = 0; i < data.length; i++) {
          notesArray.push(data[i])
        }
        newNotes();
      })
      function newNotes() {
        db.newNotes.find({}, (error, data) => {
        for(var i = 0; i < data.length; i++) {
          notesArray.push(data[i]);
        }
        res.json(notesArray);
        console.log(notesArray)
        })
      }
    }
    });