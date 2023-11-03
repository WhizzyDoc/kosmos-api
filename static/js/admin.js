const admin = [
    {
        title: "Get site/company information",
        value: "get_site_info",
        method: "GET",
        url: "https://kosmoshr.pythonanywhere.com/api/v1/site/get_site_info/",
        request: `
        // import axios if you're using a module system
        const axios = require('axios');
        
        const url = 'https://kosmoshr.pythonanywhere.com/api/v1/site/get_site_info/';
        const headers = {
          'Accept': 'application/json'
        }
        
        axios.get(url, {
          headers: headers
        })
        .then(response => {
          // Handle the json response
          console.log(response);
        })
        .catch(error => {
          // Handle the error
          console.error('Error: ', error);
        })`,
        success_response: `
        // when site information has been created
        {
          "status": "success",
          "message": "site info fetched successfully",
          "data": {
            "title": "Kosmos",
            "tagline": "Providing HR solutions",
            "logo": "/media/site/logo/logo.png",
            "about": "A platform for employee engagement",
            "objectives": "&lt;p&gt;To improve the rate of employee engagement&lt;/p&gt;",
            "mission": "",
            "last_modified": "2023-10-21T23:27:58.587205Z"
          }
        }

        // when site information has not been created
        {
            "status": "success",
            "message": "site info not found"
        }`,
        error_response: `
        // when an error occur while processing request
        {
          "status": "error",
          "message": "error occured"
        }`
    },
    {
        title: "Create Site/Company Details",
        value: "create_site_info",
        method: "POST",
        url: "https://kosmoshr.pythonanywhere.com/api/v1/site/create_site_info/",
        request: `
        // import axios if you're using a module system
        const axios = require('axios');
        
        const url = 'https://kosmoshr.pythonanywhere.com/api/v1/site/create_site_info/';
        
        // headers
        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        
        // form data to be created
        const formData = JSON.stringify({
          title: "KosmosHR",
          tagline: "we provide solutions to HR problems",
          objectives: "to ensure equal engagement",
          mission: "to ensure equal engagement",
          about: "A platform to HR employee",
          logo: "", // an image file
          api_token: "your-api-token"
        })
        
        // make the request
        axios.post(url, formData, {
          headers: headers,
        })
        .then(response => {
          // Handle the json response
          console.log(response);
        })
        .catch(error => {
          // Handle the error
          console.error('Error: ', error);
        })`,
        success_response: `
        // when site information has been created
        {
          "status": "success",
          "message": "site info created successfully",
          "data": {
            "title": "KosmosHR",
            "tagline": "we provide solutions to HR problems",
            "logo": "",
            "about": "A platform to HR employee",
            "objectives": "to ensure equal engagement",
            "mission": "to ensure equal engagement",
            "last_modified": "2023-10-21T23:27:58.587205Z"
          }
        }`,
        error_response: `
        // when an error occur while processing request
        {
          "status": "error",
          "message": "error occured"
        }

        // error due to invalid api token
        {
            "status": "error",
            "message": "user not found"
        }

        // error due to unauthorized user
        {
            "status": "error",
            "message": "user not authorized"
        }
        
        // when a GET request is used instead
        {
        "status": "error",
        "message": "GET method not allowed"
        }`,
    },
    {
        title: "Edit Site/Company Details",
        value: "edit_site_info",
        method: "POST",
        url: "https://kosmoshr.pythonanywhere.com/api/v1/site/edit_site_info/",
        request: `
        // import axios if you're using a module system
        const axios = require('axios');
        
        const url = 'https://kosmoshr.pythonanywhere.com/api/v1/site/edit_site_info/';
        
        // headers
        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        
        // form data to be edited
        const formData = JSON.stringify({
            mission: "to ensure equal engagement and employee happiness",
            about: "A platform to HR employee and Departments alike",
            api_token: "your-api-token"
        })
        
        // make the request
        axios.post(url, formData, {
          headers: headers,
        })
        .then(response => {
          // Handle the json response
          console.log(response);
        })
        .catch(error => {
          // Handle the error
          console.error('Error: ', error);
        })`,
        success_response: `
        // when site information has been edited
        {
            "status": "success",
            "message": "site info edited successfully",
            "data": {
            "title": "KosmosHR",
            "tagline": "we provide solutions to HR problems",
            "logo": "",
            "about": "A platform to HR employee and Departments alike",
            "objectives": "to ensure equal engagement",
            "mission": "to ensure equal engagement and employee happiness",
            "last_modified": "2023-10-21T23:27:58.587205Z"
            }
        }`,
        error_response: `
        // when an error occur while processing request
        {
          "status": "error",
          "message": "error occured"
        }

        // error due to invalid api token
        {
            "status": "error",
            "message": "user not found"
        }

        // error due to unauthorized user
        {
            "status": "error",
            "message": "user not authorized"
        }
        
        // when a GET request is used instead
        {
        "status": "error",
        "message": "GET method not allowed"
        }
        
        // when site info does not exist
        {
            "status": "error",
            "message": "site info not found"
        }`,
    },
    {
        title: "Create An Account",
        value: "create_account",
        method: "POST",
        url: "https://kosmoshr.pythonanywhere.com/api/v1/profile/create_account/",
        request: `
        // import axios if you're using a module system
        const axios = require('axios');
        
        const url = 'https://kosmoshr.pythonanywhere.com/api/v1/profile/create_account/';
        
        // headers
        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        
        // form data to be created
        const formData = JSON.stringify({
          email: "example@gmail.com",
          first_name: "John",
          last_name: "Doe",
          account_type: "employee" // can either be "admin", "staff" or "employee"
        })
        
        // make the request
        axios.post(url, formData, {
          headers: headers
        })
        .then(response => {
          // Handle the json response
          console.log(response);
        })
        .catch(error => {
          // Handle the error
          console.error('Error: ', error);
        })`,
        success_response: `
        // when user account has been created
        {
            "status": "success",
            "message": "Account created successfully. username is &apos;kos0001&apos; and password is &apos;John&apos;", // can be changed after login
            "data": {
                "user": {
                "id": 1,
                "username": "kos0001",
                "email": "example@gmail.com",
                "first_name": "John",
                "last_name": "Doe",
                "is_superuser": false,
                "is_active": true,
                },
                "address": "",
                "api_token": "6je39zonyq6k352nt3j0cxb0xg4trnn0dqv0m247koffj52x1pjc5ypx7izk",
                "appointment_date": null,
                "date_of_birth": null,
                "department": null,
                "email": "example@gmail.com",
                "first_name": "John",
                "id": 6,
                "id_no": "kos0001",
                "image": null,
                "is_premium_user": false,
                "last_name": "Doe",
                "middle_name": null,
                "phone_number": null,
                "position": null,
                "salary": "0.00",
                "title": null
            }
        }`,
        error_response: `
        // when an error occur while processing request
        {
          "status": "error",
          "message": "error while creating account"
        }
        
        // error due to existing email
        {
        "status": "error",
        "message": "Email &apos;example@gmail&apos; has already been used, kindly use another email"
        }
        
        // error due to invalid email
        {
            "status": "error",
            "message": "Invalid email"
        }`
    },
    {
        title: "",
        value: "",
        method: "",
        url: "",
        request: ``,
        success_response: ``,
        error_response: ``,
    },
]