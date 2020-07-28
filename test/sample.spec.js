import fetch from 'node-fetch';
import { describe,it} from 'mocha';
var expect = require('chai').expect;
const nodeFetchMatchers = require('node-fetch-response-matchers');
const chai = require('chai');
chai.use(nodeFetchMatchers);

describe("Node fetch Demo",function () {
   it("Sample Get CAll using Json",async () => {
        const response = await fetch('http://dummy.restapiexample.com/api/v1/employees');
        const json = await response.json();
        console.log(json);
        const statusValue = await json.status;
        console.log(statusValue);
        console.log(json.data[0].id);
        expect(json.data[0].id).to.equal('1');
    })
    it("Sample Get CAll with input using Json",async () => {
        const input1 = 1;
        const response = await fetch(`http://dummy.restapiexample.com/api/v1/employee/${input1}`);
        const json = await response.json();

        console.log(json);
    })
    it("Sample POST CAll using Json",async () => {
        const body1 = {name:"test",salary:"123",age:"23"};
        const response = await fetch('http://dummy.restapiexample.com/api/v1/create', {
            method: 'POST',
            body: JSON.stringify(body1),
            headers: {'Content-Type': 'application/json'}
        });
        const json = await response.json();
        console.log(json);
        expect(json.data.name).to.equal('test');
    })
    it("Sample Get CAll using Json with assertions",async () => {
        const response = await fetch('http://dummy.restapiexample.com/api/v1/employees');
        const json = await response.json();
        console.log(json);
    })
    it("Sample POST CAll using Json with assertions",async () => {
        const body1 = {name:"test",salary:"123",age:"23"};
        const response = await fetch('http://dummy.restapiexample.com/api/v1/create', {
            method: 'POST',
            body: JSON.stringify(body1),
            headers: {'Content-Type': 'application/json'}
        });
        const sta = await response.statusCode;
        const json = await response.json();
        expect(json.status).to.equal('success');
        expect(json.data.salary).to.equal('123');
        console.log(json+ ' '+sta);
    })

   //https://reqres.in/api/users?page=2
    it("Sample Get CAll with input using Json - 2",async () => {

        //const input1 = 1;
        // const response =  fetch(`http://dummy.restapiexample.com/api/v1/employee/${input1}`);
        // const json = await response.json();
        const response =  fetch('https://reqres.in/api/users?page=2');
        expect(response).to.be.successful();
        //expect(response).to.haveStatus(200);

        /*/!*return expect(fetch('https://reqres.in/api/users?page=2')).to.be.successful();
        return expect(fetch('https://reqres.in/api/users?page=2')).to.be.successful();*!/*/

    })
    it("Sample Get CAll with input using Json - 3",async () => {

        return expect(fetch('https://reqres.in/api/users?page=2')).to.be.successful();

    })
    it("Sample Get CAll with input using Json - 4",async () => {
        const response = await fetch(`https://reqres.in/api/users?page=2`);
        const json = await response.json();

        console.log(json);
    })
    it("Sample Get CAll with input using Json - 3",async () => {

        return expect(fetch('https://reqres.in/api/users?page=2')).to.haveBodyObject({ company: 'StatusCode Weekly',
            url: 'http://statuscode.org/',
            text:
                'A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things.' })

    })
    it("Sample Post CAll with input using Json - 1",async () => {
        const body1 = {
            name: "morpheus",
            job: "leader"
        };
        const response = await fetch(`https://reqres.in/api/users`, {
            method: 'POST',
            body: JSON.stringify(body1),
            headers: {'Content-Type': 'application/json'}
        });
        const json = await response.json();

        console.log(json);
    })
    it("Sample Post CAll with input using Json - 2-assertionss",async () => {
        const body1 = {
            name: "morpheus",
            job: "leader"
        };
        const response = fetch(`https://reqres.in/api/users`, {
            method: 'POST',
            body: JSON.stringify(body1),
            headers: {'Content-Type': 'application/json'}
        });
        expect(response).to.be.successful();
        console.log('----------------')
        expect(response).to.haveBodyObject( {name: 'morpheus'});
        console.log('After')
    })
})
