# ng2-datepicker
Angular2 Datepicker Component

***ng2-flex-table*** is a table grid component for Angular2/4.

## Demo

![How it looks](http://i.imgur.com/BfyZHwK.png)

## Installation:

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
