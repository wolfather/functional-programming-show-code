import { Employee } from '../interfaces/employee.interface.ts';

export default function createEmployeeTable(employees: Array<Employee>): any {
    if(employees.length) {
        const headers = Object.keys(employees[0])
                        .map(header => (`<td>${header}</td>`))
                        .toString()
                        .replace(/\<\/td\>\,?/gm, '</td>')
                        .trim();
        
        const body = employees.map(e => {
            let row = `<tr>
                <td>${e.firstName}</td>
                <td>${e.lastName}</td>
                <td>${e.role}</td>
                <td>${e.level}</td>
                <td>${e.salary}</td>
                <td>${e.contract}</td>
                <td>${e.id}</td>`;

            if(e.credit_card) {
                row += `<td>${e.credit_card}</td>`;
            }
            if(e.email) {
                row += `<td>${e.email}</td>`;
            }

            row += `</tr>`;
            
            return row
                .toString()
                .replace(/\<\/td\>\,?/gm, '</td>')
                .replace(/\<\/tr\>\,?/gm, '</tr>')
                .trim();
        });

        return `
            <table class="employees-list">
                <thead class="employees-list-header">
                    <tr>${headers}</tr>
                </thead>
                <tbody>${body}</tbody>
            </table>`;
    }
}
