```json
IDE_{
  "target": "str",
  "id": "str",
  "path": "str",
  "name": "str",
  "action": "str",
  "data": "str",
  "type": "str",
  "before": "str",
  "after": "str",
  "dts": int,
  "ars": bool      
}

```

---------------------------------------------------------

target - определяет каталог верхнего уровня
id - значение для подстановки в path, before, after вместо %ID%
path - конечный каталог (внутри target)
name - имя файла с расширением или маска имен файлов
action - имя действия
data - передаваемые данные
type - тип передаваемых данных (текст, json, base-64)
before - команда выполняемая перед действием (say Hello %NICKNAME%)
after - команда выполняемая после действия (say Goodbye %NICKNAME%)
dts - момент времени (unix timestamp)
ars - контролировать право выполнения (action level security)

---------------------------------------------------------

На клиенте:
mc - корневой каталоге minecraft
ct - каталог файлов ChatTrigger
am - каталог файлов AdvansedMacros

На сервере:
srv - корневой каталоге minecraft
cct - каталог файлов ComputerCraft
wol - каталог файлов WizardOfLua
wds - каталог файлов WebDisplayServers
web - каталог файлов OpenRestyWebServer
njs - каталог файлов NodeJS приложений

------------------------------------------------------------------

```json
{
  "target": "cct",
  "id": "1",
  "path": "%ID%",
  "name": "*.*",
  "action": "getTargetItems",
  "data": "",
  "type": "",
  "before": "",
  "after": "",
  "dts": 1644914843,
  "ars": true      
}
```

------------------------------------------------------------------------
```json

{
    "target": "cct",
    "id": "1",
    "path": "1",
    "name": "*.*",
    "action": "getTargetItems",
    "dts": 1644914843,
    "data": [
        { "name": "libs", "parent": "",  "isDir": true},
        { "name": "test.lua", "parent": "libs",  "isDir": false},
        { "name": "gui.lua", "parent": "",  "isDir": false}
     ]
 } 

```

-----------------------------------------------------------------------------
```json
IDE_{
  "target": "cct",
  "id": "1",
  "path": "%ID%",
  "name": "test.lua",
  "action": "getTargetItem",
  "data": "",
  "type": "text",
  "before": "",
  "after": "",
  "dts": 1644914843,
  "ars": true      
}
```
---------------------------------------------------------------------------

text, base64, zip-base64

```json

IDE_{
  "target": "cct",
  "id": "1",
  "path": "%ID%",
  "name": "test.lua",
  "action": "postTargetItem",
  "data": "Привет от старых штиблет",
  "type": "text",
  "before": "",
  "after": "",
  "dts": 1644914843,
  "ars": true      
}
```


```js
/**
  * На клиенте:
  * mc - корневой каталоге minecraft
  * ct - каталог файлов ChatTrigger
  * am - каталог файлов AdvansedMacros
  *
  * На сервере:
  * srv - корневой каталоге minecraft
  * cct - каталог файлов ComputerCraft
  * wol - каталог файлов WizardOfLua
  * wds - каталог файлов WebDisplayServers
  * web - каталог файлов OpenRestyWebServer
  * njs - каталог файлов NodeJS приложений
  */
```