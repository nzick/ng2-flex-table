# ng2-datepicker
Angular2 Datepicker Component

***ng2-datatable*** is a table grid component for Angular2/4.

## Demo

![How it looks](https://raw.githubusercontent.com/nzick/ng2-datatable/master/github/screenshot.png?raw=true)

## Installation:

Install ng2-datatable via `npm`

````shell
npm install ng2-datatable --save
````

## Integration

```ts
// app.module.ts
import { DataTableModule } from 'ng2-datatable';

@NgModule({
  ...
  imports: [ DataTableModule ]
  ...
})
export class AppModule { }

// app.component.html
<ng2-datatable [tabledata]="data" [onValueChanged]="valChanged"></ng2-datatable>
```

## Run Included Demo

```shell
git clone https://github.com/nzick/ng2-datatable.git --depth 1
cd ng2-datatable
npm install
npm start
```

## AoT Library Build

```shell
npm run build:lib
```

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
