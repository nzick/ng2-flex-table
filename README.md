# ng2-flex-table
Angular2 Table Component with *NO DEPENDENCYS*

***ng2-flex-table*** is a table grid component for Angular2/4.

## Demo

![How it looks](http://i.imgur.com/BfyZHwK.png)

Try it out: [http://ng2-flex-table.nicolaszick.com](http://ng2-flex-table.nicolaszick.com)


## Data

This table is made for non relational databases where response object not necessary have the same columns:

````json
{
  'startDate': '2015/08/19',
  'salary': 208.178
}, {
  'lastname': 'Pearl Crosby',
  'detailposition': 'In PC'
}
````

Results in the following headers:

| startDate  | salary  | lastname     | detailposition |
|------------|---------|--------------|----------------|
| 2015/08/19 | 208.178 |              |                |
|            |         | Pearl Crosby | In PC          |

***ng2-flex-table*** is built to handle this type of objects and fits the table to your needs.
All available *keys* will be used as a column and if some object doesnt have it, the cell with be left empty but can be edited by inline editing.

`[onValueChanged]` will give you the changed Object if some attribute has changed.


## Installation

Install ng2-flex-table via `npm`

````shell
npm install ng2-flex-table --save
````

## Integration

```ts
// app.module.ts
import { DataTableModule } from 'ng2-flex-table';

@NgModule({
  ...
  imports: [ DataTableModule ]
  ...
})
export class AppModule { }

// app.component.html
<ng2-flex-table [tabledata]="data" [onValueChanged]="valChanged"></ng2-flex-table>
```

## Run Included Demo

```shell
git clone https://github.com/nzick/ng2-flex-table.git --depth 1
cd ng2-flex-table
npm install
npm start
```

## AoT Library Build

```shell
npm run build:lib
```

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
