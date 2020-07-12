//------------credential
const admin = require("firebase-admin");
const serviceAccount = require("../mapareunal-firebase-adminsdk-bm11g-e5bedd4451.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://mapareunal.firebaseio.com"
});
//-----------------------
const { Router } = require('express');
const router = Router();

const db = admin.firestore();

router.get('/maquinas', (req, res) => {
    var dataf=new Array();
    db.collection('forms').get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            var aux1 ="{\"id\":\""+doc.id+"\","+JSON.stringify(doc.data()).substring(1);    
            dataf.push(JSON.parse(aux1));
        });
        //dataf.sort((a, b) => a.id - b.id); experimental para numerito
        //res.send(dataf[0]);//obtener el primero
        res.send(dataf);//obtener todos
        console.log(dataf);
    })
    .catch(err => {
        console.log('error getting documents ', err);
    });
});

router.get('/maquinas/:id', (req, res) => {
    const { id } = req.params;
    db.collection('forms')
    .doc(id)
    .update({
        received: true
    });
    res.send('se cotizo '+id);
});

//-----------------------Extrusora
router.get('/maquinas/extrusoras', (req, res) => {
    var dataf=new Array();
    db.collection('forms')
    .get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            if (doc.data().type == '1' && doc.data().received == false) {
                var aux1 ="{\"id\":\""+doc.id+"\","+JSON.stringify(doc.data()).substring(1);    
                dataf.push(JSON.parse(aux1));
            }
        });
        //res.send(dataf[0]);//obtener el primero
        res.send(dataf);//obtener todos
        console.log(dataf);
    })
    .catch(err => {
        console.log('error getting documents ', err);
    });
});

//-----------------------Inyectora
router.get('/maquinas/inyectoras', (req, res) => {
    var dataf=new Array();
    db.collection('forms').get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            if (doc.data().type == '2' && doc.data().received == false) {
                var aux1 ="{\"id\":\""+doc.id+"\","+JSON.stringify(doc.data()).substring(1);    
                dataf.push(JSON.parse(aux1));
            }
        });
        //res.send(dataf[0]);//obtener el primero
        res.send(dataf);//obtener todos
        console.log(dataf);
    })
    .catch(err => {
        console.log('error getting documents ', err);
    });
});

//---------------------Trituradora
router.get('/maquinas/trituradoras', (req, res) => {
    var dataf=new Array();
    db.collection('forms').get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            if (doc.data().type == '3' && doc.data().received == false) {
                var aux1 ="{\"id\":\""+doc.id+"\","+JSON.stringify(doc.data()).substring(1);    
                dataf.push(JSON.parse(aux1));
            }          
        });
        //res.send(dataf[0]);//obtener el primero
        res.send(dataf);//obtener todos
        console.log(dataf);
    })
    .catch(err => {
        console.log('error getting documents ', err);
    });
});

//----------------------Compresora
router.get('/maquinas/compresoras', (req, res) => {
    var dataf=new Array();
    db.collection('forms').get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            //res.send(doc.id, '=>', doc.data());
            //dataf = dataf + JSON.stringify(doc.data());//dataf.push(JSON.stringify(doc.data()));
            if (doc.data().type == '4' && doc.data().received == false) {
                var aux1 ="{\"id\":\""+doc.id+"\","+JSON.stringify(doc.data()).substring(1);    
                dataf.push(JSON.parse(aux1));
            }
        });
        //res.send(dataf[0]);//obtener el primero
        res.send(dataf);//obtener todos
        console.log(dataf);
    })
    .catch(err => {
        console.log('error getting documents ', err);
    });
});

//----------------------postear_archivos
/*var storageRef = Firebase.storage().ref();
var path = "activities/" + id + "/activitiesImages/" + file.name;
var task = storageRef.child(path).put(file);*/
//---------------------------poster_info

module.exports = router;