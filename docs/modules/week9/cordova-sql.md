# Cordova and SQLite

## Saving Data on Mobile Devices

Cordova takes advantage of the fact that mobile devices support SQLite in order to save data on the device.

If you have worked with any other database then you will be able to work with SQLite. It uses the same basic SQL syntax to `INSERT`, `UPDATE`, `DELETE` or `SELECT` information. You can `CREATE`, `ALTER`, and `DROP` tables. You can even run transactions.

So, the basic process for working with a SQLite database in Cordova is:

1. Open a database
2. Create table(s) as desired.
3. Start a transaction
4. Insert data into your table(s)
5. Select data from the table(s) to display
6. Update data in the table(s) based on user input

You won't always have all these steps but these are the things you would normally encounter.

## Creating a Database
So, before we can save or access any data, we need to create a database. In Cordova here is the basic script we would use to set up our database.

```js
document.addEventListener("DOMContentLoaded", init);
document.addEventListener("deviceready", onReady, false);
//or you can combine these two and just use the deviceready event

function init( ){
  //ready to add click and tap listeners, etc.
}
function onReady( ev ){
  //ready to use Cordova plugin features
  let db = window.openDatabase("myDb", "1.0", "Display Name", 1024000);  
}
```

`openDatabase` will look to open the database and if it does not exist, then create it. It will check both the DB name and the version number.

It takes four parameters - `( actual DB name, version number, DB display name, max size )`

Here is a codepen sample [working with SQLite/WebSQL](http://codepen.io/mad-d/pen/WwOVLE)

## Creating a Database Table

Once you have a database object from the window.openDatabase method then we can create a table, if needed. `CREATE TABLE` is simply a SQL command like any other. It will be run with the `executeSQL( )` method on the transaction object.

The database object will call its `transaction( )` method which takes three parameters. All three parameters are function calls. The first function is the one which contains all the steps in your transaction. The second is the error callback. The third is the success function. A transaction is a bundle of one or more SQL statements.

```js
function onReady( ev ){
  let db = window.openDatabase("myDb", "1.0", "demo", 1024000);
  db.transaction( doTrans, successFunc, errFunc );
} 
function doTrans( trans ){
  //trans is the variable that holds the transaction object
  trans.executeSql('CREATE TABLE IF NOT EXISTS stuff( id unique, info)' );
} 
```

This would create a table called stuff, but only if it doesn't exist. The table would have two columns, one called id and the other called info. The id column values must be unique. The id column will be our primary key.

## Putting Data into a Table

Once you have the table then you will want to add data to it. This step could be run the first time your app runs in order to put some default information into the table or it could happen after some interactions with the user.

```js
function doTrans( trans ){
  //trans is the variable that holds the transaction object
  trans.executeSql('CREATE TABLE IF NOT EXISTS stuff( id unique, info)' );
  trans.executeSql('INSERT INTO stuff(id, info) VALUES(1, "Cheese")');
  trans.executeSql('UPDATE stuff SET info="Apple Pie" WHERE id=1');
}
```

This would add a single row into the table and then alter the values in that row.

See [this page](http://cordova.apache.org/docs/en/latest/cordova/storage/storage.html) for more information on all of this.

Also [see tutorialspoint](http://www.tutorialspoint.com/html5/html5_web_sql.htm) for specific details on WebSQL.

## Retrieving Data from a Table

Assuming that tables have been created and that they contain data, we want to retrieve a recordset that we can use in our Cordova app.

While the previous examples are calling the executeSQL method with only one argument there are actually four parameters -  SQL statement, container for results, success callback function, error callback function. The last three parameters are all optional.

It is important to note that both transactions as well as the individual SQL statements both have success and failure callback functions.

```js
trans.executeSql( "SELECT * FROM stuff", [ ], querySuccess, transErr);

function querySuccess( trans, results){
  //trans is the reference to the transaction
  //results is the container for the SQL record set / SQLResultSetList
  console.log( results.rows.length );
  console.log( results.insertId + " is the id of the last inserted row");
  console.log( results.rowsAffected + " is the number of rows affected by an update or delete");
  let len = results.rows.length;
  for( let i=0; i<len; i++){
    console.log( results.rows.item(i).info );
    //info is the column name 
    //item( i ) refers to a single row in our result set.
  }
} 
``` 

## Specific Information for SQLite

Since we are working with SQLite instead of MySQL it is probably helpful to have a few resources at hand.

[This list](http://www.sqlite.org/datatype3.html) is the list of datatypes available to us in SQLite for our table columns. Basically, we only have five datatypes to work with. Keep in mind that SQLite is a SIMPLE database. It is intended to be used as an embedded standalone database.

```
NULL, TEXT, INTEGER, REAL, and BLOB are our five types. Everything fits into those five.

TEXT - all strings, dates, time values.

INTEGER - all numbers without decimal places.

REAL - all numbers with a decimal place.

BLOB - binary data like an image file.

NULL - is Null, empty, void, undefined, nothing, nada. You get the point.
```
 
**Note:** If you have SQL commands from other databases for creating tables then SQLite will actually accept many more datatypes. However, internally it will convert them to the five types listed above.

[main reference site for all information about SQLite](http://www.sqlite.org/)

If you are looking for a bit more information about SQLite - [here is a small tutorial](http://souptonuts.sourceforge.net/readme_sqlite_tutorial.html)

## Specifics for Mobile Hybrid Apps

When working with Cordova we will use this plugin

[Cordova SQLite Storage plugin](https://www.npmjs.com/package/cordova-sqlite-storage)

There are a few minor differences between the example code from above and the version with the plugin to run on Android and iOS.

First is a modified version of the method to open or create the database.

```js
let db = window.sqlitePlugin.openDatabase({name: 'myDB', iosDatabaseLocation: 'default'}, successcb, errorcb);
```

Second is the method to test if you were able to connect to the database.

```js
window.sqlitePlugin.echoTest(successCallback, errorCallback);
```

Third is the ability to call queries directly on the DB object without wrapping it in a transaction.

```js
db.executeSql("SELECT * FROM users", [], successCB, errorCB); 
``` 

## References

Here are some good links that will help you work with SQLite and WebSQL on iOS (and Android)

[Raymond Camden PhoneGap DB article 1](http://www.raymondcamden.com/index.cfm/2011/10/20/Example-of-PhoneGaps-Database-Support )

[Apple Developer JS DB guide](https://developer.apple.com/library/safari/documentation/iphone/conceptual/safarijsdatabaseguide/UsingtheJavascriptDatabase/UsingtheJavascriptDatabase.html#//apple_ref/doc/uid/TP40007256-CH3-XSW1)

[Raymond Camden Phonegap DB article 2](http://www.raymondcamden.com/index.cfm/2013/8/14/Updating-PhoneGap-Databases)

[DZone DB Reference](http://css.dzone.com/articles/adding-database)


[Simple SQL Sample](./sql-sample.md)
