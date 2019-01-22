# SQLite Working Sample

This is a working sample of a main script from a Cordova App that goes through the basic steps for deviceready, and then into the check to see if the database exists, the creation and population of the tables. 

```js
let app = {
  db = null,
  init: function(){
    document.addEventListener("deviceready", start);
  },
  start: function(){
    //plugins loaded. 
    //add the listeners for navigation
    app.addNavListeners();

    //open /create the db
    app.db = window.sqlitePlugin.openDatabase({name: 'my.db',iosDatabaseLocation: 'default', androidLockWorkaround: 1});
    app.db.transaction(function(tx){
      //tx represents the transaction object. queries are called on the transaction  
      tx.executeSql('CREATE TABLE IF NOT EXISTS stuff(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)', [], 
        function(result){
           //executeSql calls the success function first
           console.log("CREATE statement worked");
           tx.executeSql('INSERT INTO stuff(name) VALUES(?)', ["beer"] );
           tx.executeSql('INSERT INTO stuff(name) VALUES(?)', ["pizza"] );
      }, function(error){
           console.log(error.message);
      });
   },
   function(error){
    //transactions call the error function first.
    console.warn("Transaction error " + error.message);
   },
   function(){
     console.log("Transaction ok.");
   });
   //fetch the data for the home page
   app.fetchData();
  },
  fetchData: function(){
    //stand alone executeSql
    app.db.executeSql('SELECT * FROM stuff ORDER BY name', [], function(results){
      var ul = document.getElementById("list-view");
      ul.innerHTML = "";
      var numRows = results.rows.length;
      for(var i=0; i<numRows; i++){
        var li = document.createElement("li");
        li.textContent = results.rows.item(i).name;
        ul.appendChild(li);
      }
    },
    function(error){
      console.log(error.message);
    }
  }
}
app.init();
```

After working with the set up of the database we can then progress to add the handlers for the navigation, buttons.

Finally, this app includes a `fetchData` function just to demonstrate how to retrieve information from a database.

The basic process is to call the database `transaction` method. Inside a transaction you can call one or more `executeSql` methods. Each `executeSql` method is a `SQL query` that you are running on the database.

Both the `executeSql` method and the `transaction` method have a `success` and a `failure` `callback` function. The `transaction success callback` is really just something to do after the `executeSql` method(s) run. As along as the transaction connected to an existing database you will always get a success message. The `Transaction error callback function` is much more useful.

The `executeSql callbacks` are the ones that tell you if your individual queries worked or not.

Remember, when you run a `SELECT statement` that returns no matches, that is still considered a success. You can then access the `result.rows.length` value to find out if one or more records were returned.