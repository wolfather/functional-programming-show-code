import { employeesStub } from './stubs.ts';
import findEmployee from './services/find/findemployee.service.ts';
import changeEmployeeSalary from './services/changesalary/changesalary.service.ts';
import changeEmployeeLevel from './services/changelevel/changelevel.service.ts';
import addEmail from './services/addemail/addemail.service.ts';
import addCreditCard from './services/addcard/addcard.service.ts';
import makeComposition from './services/makecomposition/makecomposition.service.ts';
import { LEVELS } from './enums/levels.enum.ts';
import { PERFORMACE_RATING } from './enums/performance.enum.ts';

import createEmployeeTable from './helpers/create-table.ts';

import { serve } from 'https://deno.land/std@0.79.0/http/server.ts';

const s = serve({ port: 8080 });
console.log("http://localhost:8080/");

const directorEmployee = findEmployee(employeesStub)('role', 'diretor');
const directorProfile = makeComposition(
    addCreditCard,
    addEmail
);
const director = directorProfile(directorEmployee);

const coordEmployee = findEmployee(employeesStub)('id', '111111');
const coordProfile = makeComposition(
    addCreditCard,
    addEmail,
    changeEmployeeSalary(PERFORMACE_RATING.HIGH)
);
const coordinator = coordProfile(coordEmployee);

const jr = findEmployee(employeesStub)('role', 'junior developer');
const jrDevsProfile = makeComposition(
    changeEmployeeLevel(LEVELS.pleno),
    changeEmployeeSalary(PERFORMACE_RATING.AVERAGE)
);
const jrsdevs = jrDevsProfile(jr);

const htmlBody = `
    <style>
    html {font: 500 1em/1.1rem sans-serif, monospace}
    .employees-list {
        width: 90%;
        margin: 0 auto;
    }
    .employees-list-header {background: #cdd}
    .employees-list-header td {
        padding: 3px; font-weight: 700; text-align: center
    }
    </style>
    <section class="table-employees">
        <h2>Quadro de funcion&aacute;rios</h2>
        <hr/>
        ${createEmployeeTable(employeesStub)}
    </section>
    <section class="table-directors">
        <h2>Diretores</h2>
        <hr/>
        ${createEmployeeTable(director)}
    </section>
    <section class="table-coord">
        <h2>Coordenador</h2>
        <hr/>
        ${createEmployeeTable(coordinator)}
    </section>
    <section class="table-jrdevs">
        <h2>Desenvolvedores j&uacute;niores</h2>
        <hr/>
        ${createEmployeeTable(jrsdevs)}
    </section>`;

for await (const req of s) {req.respond({ body: htmlBody})}