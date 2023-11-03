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
        title: "Register Created Account",
        value: "register_account",
        method: "POST",
        url: "https://kosmoshr.pythonanywhere.com/api/v1/profile/register/",
        request: `
        // import axios if you're using a module system
        const axios = require('axios');
        
        const url = 'https://kosmoshr.pythonanywhere.com/api/v1/profile/register/';
        
        // headers
        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        
        // form data to be created
        const formData = JSON.stringify({
          email: "example@gmail.com", // registered email to identify user
          middle_name: "Max",
          title: "Mr",
          address: "block 2, Allen Avenue",
          date_of_birth: "1999-12-04",
          appointment_date: "2023-10-12",
          nationality: "Nigeria",
          phone_number: "09011223344",
          position: 2, // (an integer) id of the selected position (check documentation on how to fetch positions and departments), select form field is advised
          department: 1, // same as position
          salary: 150000.00, // a decimal field
          image: "" // an image file
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
        // when user has been registered
        {
            "status": "success",
            "message": "User registration successful!",
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
                "api_token": "6je39zonyq6k352nt3j0cxb0xg4trnn0dqv0m247koffj52x1pjc5ypx7izk",
                "address": "block 2, Allen Avenue",
                "date_of_birth": "1999-12-04",
                "appointment_date": "2023-10-12",
                "nationality": "Nigeria",
                "email": "example@gmail.com",
                "first_name": "John",
                "id": 6,
                "id_no": "kos0001",
                "image": "https://kosmoshr.pythonanywhere.com/media/profile/image/avatar-2.jpg",
                "is_premium_user": false,
                "last_name": "Doe",
                "middle_name": "Max",
                "phone_number": "09011223344",
                "position": {
                    "id": 2,
                    "title": "Clerk"
                },
                "department": {
                    "id": 1,
                    "title": "Sales"
                },
                "salary": "150000.00",
                "title": "Mr"
            }
        }`,
        error_response: `
        // when an error occur while processing request
        {
          "status": "error",
          "message": "error while registering account"
        }
        
        // error due to invalid id for department/position
        {
        "status": "error",
        "message": "invalid id for position/department"
        }
        
        // error due to non-registered email
        {
            "status": "error",
            "message": "user not found for email {wrong_email}"
        }
        
        // error due to invalid email
        {
            "status": "error",
            "message": "invalid email"
        }`,
    },
    {
        title: "Admin Login/Authentication",
        value: "admin_login",
        method: "POST",
        url: "https://kosmoshr.pythonanywhere.com/api/v1/profile/authentication/",
        request: `
        // import axios if you're using a module system
        const axios = require('axios');
        
        const url = 'https://kosmoshr.pythonanywhere.com/api/v1/profile/authentication/';
        
        // headers
        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        
        // form data to be created
        const formData = JSON.stringify({
          username: "Admin",
          password: "Kosmos"
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
        {
            "status": "success",
            "message": "login successful",
            "data": {
                "id": 3,
                "user": {
                    "id": 6,
                    "username": "Admin",
                    "email": "admin@gmail.com",
                    "first_name": "Kosmos",
                    "last_name": "Admin",
                    "is_superuser": true,
                    "is_active": true
                },
                "title": "Mr",
                "first_name": "Kosmos",
                "middle_name": null,
                "last_name": "Admin",
                "email": "admin@gmail.com",
                "phone_number": null,
                "date_of_birth": "2019-07-17",
                "address": "",
                "appointment_date": "2023-11-02",
                "position": {
                    "id": 3,
                    "title": "CEO"
                },
                "department": {
                    "id": 3,
                    "title": "Administration"
                },
                "id_no": "kos0006",
                "salary": "1000000.00",
                "is_premium_user": true,
                "image": "https://kosmoshr.pythonanywhere.com/media/profile/image/avatar-2.jpg",
                "api_token": "6s0gjrqr61xrrt7omzo8lmp4vo0dsgwamlzvoa7ygxsw8ledxadfp68ygjtr"
            }
        }`,
        error_response: `
        // error due to unauthorized login
        {
            "status": "error",
            "message": "user not authorized"
        }
        
        // error due to disabled account
        {
            "status": "error",
            "message": "Your account has been disabled"
        }
        
        // error due to invalid login
        {
            "status": "error",
            "message": "Invalid login credentials"
        }`,
    },
    {
        title: "Get Admin Profile",
        value: "admin_profile",
        method: "POST",
        url: "https://kosmoshr.pythonanywhere.com/api/v1/profile/get_admin_profile/",
        request: `
        // import axios if you're using a module system
        const axios = require('axios');
        
        const url = 'https://kosmoshr.pythonanywhere.com/api/v1/profile/get_admin_profile/';
        
        // headers
        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        
        // form data to be created
        const formData = JSON.stringify({
          api_token: "admin-api-token", // only an admin account can view an admin profile
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
        {
            "status": "success",
            "message": "data fetched successfully",
            "data": {
                "id": 3,
                "user": {
                    "id": 6,
                    "username": "Admin",
                    "email": "admin@gmail.com",
                    "first_name": "Kosmos",
                    "last_name": "Admin",
                    "is_superuser": true,
                    "is_active": true
                },
                "title": "Mr",
                "first_name": "Kosmos",
                "middle_name": null,
                "last_name": "Admin",
                "email": "admin@gmail.com",
                "phone_number": null,
                "date_of_birth": "2019-07-17",
                "address": "",
                "appointment_date": "2023-11-02",
                "position": {
                    "id": 3,
                    "title": "CEO"
                },
                "department": {
                    "id": 3,
                    "title": "Administration"
                },
                "id_no": "kos0006",
                "salary": "1000000.00",
                "is_premium_user": true,
                "image": "https://kosmoshr.pythonanywhere.com/media/profile/image/avatar-2.jpg",
                "api_token": "6s0gjrqr61xrrt7omzo8lmp4vo0dsgwamlzvoa7ygxsw8ledxadfp68ygjtr"
            }
        }`,
        error_response: `
        // error due to unauthorized user
        {
            "status": "error",
            "message": "user not authorized"
        }
        
        // error due to invalid api token
        {
            "status": "error",
            "message": "Invalid API token"
        }`,
    },
    {
        title: "Edit Admin Profile",
        value: "edit_admin_profile",
        method: "POST",
        url: "https://kosmoshr.pythonanywhere.com/api/v1/profile/edit_admin_profile/",
        request: `
        // import axios if you're using a module system
        const axios = require('axios');
        
        const url = 'https://kosmoshr.pythonanywhere.com/api/v1/profile/edit_admin_profile/';
        
        // headers
        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        
        // form data to be created
        const formData = JSON.stringify({
          api_token: "admin-api-token", // only an admin account can view an admin profile
          phone_number: "08144444444",
          salary: 2000000
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
        {
            "status": "success",
            "message": "profile edited successfully",
            "data": {
                "id": 3,
                "user": {
                    "id": 6,
                    "username": "Admin",
                    "email": "admin@gmail.com",
                    "first_name": "Kosmos",
                    "last_name": "Admin",
                    "is_superuser": true,
                    "is_active": true
                },
                "title": "Mr",
                "first_name": "Kosmos",
                "middle_name": null,
                "last_name": "Admin",
                "email": "admin@gmail.com",
                "phone_number": "08144444444",
                "date_of_birth": "2019-07-17",
                "address": "",
                "appointment_date": "2023-11-02",
                "position": {
                    "id": 3,
                    "title": "CEO"
                },
                "department": {
                    "id": 3,
                    "title": "Administration"
                },
                "id_no": "kos0006",
                "salary": "2000000.00",
                "is_premium_user": true,
                "image": "https://kosmoshr.pythonanywhere.com/media/profile/image/avatar-2.jpg",
                "api_token": "6s0gjrqr61xrrt7omzo8lmp4vo0dsgwamlzvoa7ygxsw8ledxadfp68ygjtr"
            }
        }`,
        error_response: `
        // error due to unauthorized user
        {
            "status": "error",
            "message": "user not authorized"
        }
        
        // error due to invalid api token
        {
            "status": "error",
            "message": "Invalid API token"
        }`,
    },
    // for Position API
    {
        title: "Get Available Positions",
        value: "get_position",
        method: "GET",
        url: "https://kosmoshr.pythonanywhere.com/api/v1/positions/get_positions/",
        request: `
        // import axios if you're using a module system
        const axios = require('axios');
        
        const url = 'https://kosmoshr.pythonanywhere.com/api/v1/positions/get_positions/';
        
        // headers
        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        
        // make the request
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
        // if position list is found
        {
            "status": "success",
            "message": "position list retrieved",
            "data": [
                {
                    "id": 1,
                    "title": "Manager"
                },
                {
                    "id": 2,
                    "title": "Clerk"
                },
                {
                    "id": 3,
                    "title": "CEO"
                }
            ]
        }
        
        //if no position is created yet
        {
            "status": "success",
            "message": "No position found"
        }`,
        error_response: `
        // error due to
        {
            "status": "error",
            "message": "Error getting position list"
        }`,
    },
    {
      title: "Create Position",
      value: "create_position",
      method: "POST",
      url: "https://kosmoshr.pythonanywhere.com/api/v1/positions/create_position/",
      request: `
      // import axios if you're using a module system
      const axios = require('axios');
      
      const url = 'https://kosmoshr.pythonanywhere.com/api/v1/positions/create_position/';
      
      // headers
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      // form data to be created
      const formData = JSON.stringify({
        "api_token": "admin-api-token",
        "title": "Accountant" // title of position to be created
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
      {
          "status": "success",
          "message": "position created successfully",
          "data": {
            "id": 5,
            "title": "Accountant"
          }
      }`,
      error_response: `
      // error due to existing position
      {
          "status": "error",
          "message": "position already exists!"
      }
      
      // error due to unauthorized user
      {
          "status": "error",
          "message": "User not authorized"
      }
      
      // error due to invalid api token
      {
          "status": "error",
          "message": "Invalid API token"
      }`,
    },
    {
      title: "Edit Position",
      value: "edit_position",
      method: "POST",
      url: "https://kosmoshr.pythonanywhere.com/api/v1/positions/edit_position/",
      request: `
      // import axios if you're using a module system
      const axios = require('axios');
      
      const url = 'https://kosmoshr.pythonanywhere.com/api/v1/positions/edit_position/';
      
      // headers
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      // form data to be created
      const formData = JSON.stringify({
        "api_token": "admin-api-token",
        "id": 5, // id of position to be edited (integer)
        "title": "Secretary"
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
      {
          "status": "success",
          "message": "position edited successfully",
          "data": {
            "id": 5,
            "title": "Secretary"
          }
      }`,
      error_response: `
      // error due to invalid id
      {
          "status": "error",
          "message": "position with id '{wrong_id}' does not exists"
      }
      
      // error due to unauthorized user
      {
          "status": "error",
          "message": "User not authorized"
      }
      
      // error due to invalid api token
      {
          "status": "error",
          "message": "Invalid API token"
      }`,
    },
    {
      title: "Delete Position",
      value: "delete_position",
      method: "POST",
      url: "https://kosmoshr.pythonanywhere.com/api/v1/positions/delete_position/",
      request: `
      // import axios if you're using a module system
      const axios = require('axios');
      
      const url = 'https://kosmoshr.pythonanywhere.com/api/v1/positions/delete_position/';
      
      // headers
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      // form data to be created
      const formData = JSON.stringify({
        "api_token": "admin-api-token",
        "id": 5, // id of position to be deleted (integer)
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
      {
          "status": "success",
          "message": "position 'Secretary' deleted successfully"
      }`,
      error_response: `
      // error due to invalid id
      {
          "status": "error",
          "message": "position with id '{wrong_id}' does not exists!"
      }
      
      // error due to unauthorized user
      {
          "status": "error",
          "message": "User not authorized"
      }
      
      // error due to invalid api token
      {
          "status": "error",
          "message": "Invalid API token"
      }`,
    },
    // for departments API
    {
        title: "Get Available Departments",
        value: "get_dept",
        method: "GET",
        url: "https://kosmoshr.pythonanywhere.com/api/v1/departments/get_departments/",
        request: `
        // import axios if you're using a module system
        const axios = require('axios');
        
        const url = 'https://kosmoshr.pythonanywhere.com/api/v1/departments/get_departments/';
        
        // headers
        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        
        // make the request
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
        // if department list is found
        {
            "status": "success",
            "message": "department list retrieved",
            "data": [
                {
                    "id": 1,
                    "title": "Sales"
                },
                {
                    "id": 2,
                    "title": "Human Resources"
                }
            ]
        }
        
        //if no department is created yet
        {
            "status": "success",
            "message": "No department found"
        }`,
        error_response: `
        // error due to
        {
            "status": "error",
            "message": "Error getting department list"
        }`,
    },
    {
      title: "Create Department",
      value: "create_department",
      method: "POST",
      url: "https://kosmoshr.pythonanywhere.com/api/v1/departments/create_department/",
      request: `
      // import axios if you're using a module system
      const axios = require('axios');
      
      const url = 'https://kosmoshr.pythonanywhere.com/api/v1/departments/create_department/';
      
      // headers
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      // form data to be created
      const formData = JSON.stringify({
        "api_token": "admin-api-token",
        "title": "Advertisement" // title of department to be created
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
      {
          "status": "success",
          "message": "department created successfully",
          "data": {
            "id": 6,
            "title": "Advertisement"
          }
      }`,
      error_response: `
      // error due to existing department
      {
          "status": "error",
          "message": "department already exists!"
      }
      
      // error due to unauthorized user
      {
          "status": "error",
          "message": "User not authorized"
      }
      
      // error due to invalid api token
      {
          "status": "error",
          "message": "Invalid API token"
      }`,
    },
    {
      title: "Edit Department",
      value: "edit_department",
      method: "POST",
      url: "https://kosmoshr.pythonanywhere.com/api/v1/positions/edit_department/",
      request: `
      // import axios if you're using a module system
      const axios = require('axios');
      
      const url = 'https://kosmoshr.pythonanywhere.com/api/v1/positions/edit_department/';
      
      // headers
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      // form data to be created
      const formData = JSON.stringify({
        "api_token": "admin-api-token",
        "id": 6, // id of department to be edited (integer)
        "title": "Advertising"
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
      {
          "status": "success",
          "message": "department edited successfully",
          "data": {
            "id": 6,
            "title": "Advertising"
          }
      }`,
      error_response: `
      // error due to invalid id
      {
          "status": "error",
          "message": "department with id '{wrong_id}' does not exists"
      }
      
      // error due to unauthorized user
      {
          "status": "error",
          "message": "User not authorized"
      }
      
      // error due to invalid api token
      {
          "status": "error",
          "message": "Invalid API token"
      }`,
    },
    {
      title: "Delete Department",
      value: "delete_department",
      method: "POST",
      url: "https://kosmoshr.pythonanywhere.com/api/v1/positions/delete_department/",
      request: `
      // import axios if you're using a module system
      const axios = require('axios');
      
      const url = 'https://kosmoshr.pythonanywhere.com/api/v1/positions/delete_department/';
      
      // headers
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      // form data to be created
      const formData = JSON.stringify({
        "api_token": "admin-api-token",
        "id": 6, // id of department to be deleted (integer)
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
      {
          "status": "success",
          "message": "department 'Advertising' deleted successfully"
      }`,
      error_response: `
      // error due to invalid id
      {
          "status": "error",
          "message": "department with id '{wrong_id}' does not exists!"
      }
      
      // error due to unauthorized user
      {
          "status": "error",
          "message": "User not authorized"
      }
      
      // error due to invalid api token
      {
          "status": "error",
          "message": "Invalid API token"
      }`,
    },
    // template
    {
        title: "",
        value: "",
        method: "",
        url: "https://kosmoshr.pythonanywhere.com/api/v1/",
        request: `
        // import axios if you're using a module system
        const axios = require('axios');
        
        const url = 'https://kosmoshr.pythonanywhere.com/api/v1/';
        
        // headers
        const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        // form data to be created
        const formData = JSON.stringify({
          
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
        {
            "status": "success",
            "message": "",
            "data": {}
        }`,
        error_response: `
        // error due to
        {
            "status": "error",
            "message": ""
        }`,
    },
]