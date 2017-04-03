# RESTfulWithMongo

Использование MongoDB далее просто БД

## Установка и запуск сервера БД
```
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
$ echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
$ sudo apt-get update
$ sudo apt-get install -y mongodb-org
$ sudo service mongod start
```
## Проверка роботоспособности сервера БД

### Запуск клиента
```
$ mongo
```
### Некоторые команды
**version()** - узнать версию БД
**show dbs** - показать все базы данных
**use <база>** - использовать базу по названию (use my_base)
**show collections** - показать коллекции, (аналог сущности)
**db.<коллекция>.find()** - показать содержимое колекции (db.people.find())
**help** - краткая справка по коммандам

### Подключение в JS
```
var mongoose   = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/my_database');
```
