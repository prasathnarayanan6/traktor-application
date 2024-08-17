const request = require('supertest');
const express = require('express');
describe("GET /profile", ()=>{
    test("Respond format check data", async() => {
        // const res = request(app).get('/profile');
        const res = await fetch("http://localhost:3003/profile", {
            method: "GET", 
        })
        const contentType = res.headers.get('content-type');
        expect(contentType).toEqual(expect.stringContaining('application/json'));
    })
    test("Respond data check", async()=>{
        const res = await fetch("http://localhost:3003/profile", {
            method: "GET"
        })
        expect("Hello").toBe("Hello");
    })
})

describe("POST /login", ()=> {
    test("Login API passing no data in credentials", async()=>{
        const res = await fetch("http://localhost:3003/api/v1/login",{
            method: "POST"
        },{
            user_mail: "",
            user_password: ""
        })
        expect(res.status).toBe(401);
    });

    test("Login data validation check", async() => {
        const res = await fetch("http://localhost:3003/api/v1/login", {
            method: "POST"
        },{
            user_mail: "",
            user_password: ""
        })
        const contentType = res.headers.get('content-type');
        expect(contentType).toEqual(expect.stringContaining('application/json'));
    })
})

describe("POST /add/mentor", ()=>{
    test("Adding the mentor", async() => {
        const res = await fetch("http://localhost:3003/api/v1/mentor/add", {
            method: "POST"
        },{
            mentor_name : "",
            mentor_logo : "",
            mentor_description : "",
            experienced_years : "",
            area_of_expertise : "",
            current_designation : "",
            Institution : "",
            Qualification : "",
            Year_of_passing_out : "",
            startup_associated : "",
            contact_number : NULL,
            email_address : "",
            linkedIn :   "",
            password : ""
        })
        expect(res.status).toBe(401);
    })

    test("Data type", async() => {
        const res = await fetch("http://localhost:3003/api/v1/mentor/add", {
            method: "POST"
        },{
            mentor_name : "",
            mentor_logo : "",
            mentor_description : "",
            experienced_years : "",
            area_of_expertise : "",
            current_designation : "",
            Institution : "",
            Qualification : "",
            Year_of_passing_out : "",
            startup_associated : "",
            contact_number : NULL,
            email_address : "",
            linkedIn :   "",
            password : ""
        })
        const contentType = res.headers.get('content-type');
        expect(contentType).toEqual(expect.stringContaining('application/json'));
    })
})