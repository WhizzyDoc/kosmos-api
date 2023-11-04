const employee = [
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
    // for Employee API
  {
    title: "Get Employees List",
    value: "get_emp_list",
    method: "GET",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/employees/get_employees/",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/employees/get_employees/';
    
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
    // if employee list is found
    {
      "status": "success",
      "message": "employee list retrieved",
      "data": [
        {
            "id": 5,
            "user": {
                "id": 9,
                "username": "kos0009"
            },
            "title": "Miss",
            "first_name": "Jane",
            "middle_name": "C",
            "last_name": "Doe",
            "email": "janefoster@gmail.com",
            "phone_number": "08123456476",
            "date_of_birth": "2023-10-31",
            "address": "",
            "appointment_date": "2023-10-31",
            "position": {
                "id": 2,
                "title": "Clerk"
            },
            "department": {
                "id": 1,
                "title": "Sales"
            },
            "id_no": "kos0009",
            "salary": "210000.00",
            "is_premium_user": false,
            "image": "/media/profile/image/avatar-3.jpg", // you'll need to add the domain name in front of this url manually to work
            "api_token": "mkdgpc931rw2yejbwdmpa83ak1qrh22sgkkt3kileehabp8h3cf1djwscjas"
        },
        {
            "id": 4,
            "user": {
                "id": 8,
                "username": "kos0008"
            },
            "title": "Mr",
            "first_name": "John",
            "middle_name": "B",
            "last_name": "Doe",
            "email": "johndoe@gmail.com",
            "phone_number": "09056574634",
            "date_of_birth": "2023-10-31",
            "address": "",
            "appointment_date": "2023-10-31",
            "position": {
                "id": 1,
                "title": "Manager"
            },
            "department": {
                "id": 2,
                "title": "Human Resources"
            },
            "id_no": "kos0008",
            "salary": "500000.00",
            "is_premium_user": false,
            "image": "/media/profile/image/avatar-1.jpg",
            "api_token": "1me9rbn2ti60hculhszfhq5hwhlo9vjws11555d92kmwfo6m7ie6bli3vy0e"
        },
        {
            "id": 6,
            "user": {
                "id": 10,
                "username": "kos0010"
            },
            "title": null,
            "first_name": "Peter",
            "middle_name": null,
            "last_name": "Parker",
            "email": "peterparker@gmail.com",
            "phone_number": null,
            "date_of_birth": null,
            "address": "",
            "appointment_date": null,
            "position": {
                "id": 4,
                "title": "Secretary"
            },
            "department": {
                "id": 3,
                "title": "Administration"
            },
            "id_no": "kos0010",
            "salary": "0.00",
            "is_premium_user": false,
            "image": null,
            "api_token": "6je39zonyq6k352nt3j0cxb0xg4trnn0dqv0m247koffj52x1pjc5ypx7izk"
        }
      ]
    }
    
    //if no employee is created yet
    {
        "status": "success",
        "message": "No employee added"
    }`,
    error_response: `
    // error due to processing
    {
        "status": "error",
        "message": "Error while getting employee list"
    }`,
  },
  {
    title: "Filter Employees by Department",
    value: "filter_emp_list",
    method: "GET",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/employees/get_employees/?department_id={id of department}",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/employees/get_employees/?department_id=1';
    
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
    // if employee list is found
    {
      "status": "success",
      "message": "employee list retrieved",
      "data": [
        {
            "id": 5,
            "user": {
                "id": 9,
                "username": "kos0009"
            },
            "title": "Miss",
            "first_name": "Jane",
            "middle_name": "C",
            "last_name": "Doe",
            "email": "janefoster@gmail.com",
            "phone_number": "08123456476",
            "date_of_birth": "2023-10-31",
            "address": "",
            "appointment_date": "2023-10-31",
            "position": {
                "id": 2,
                "title": "Clerk"
            },
            "department": {
                "id": 1,
                "title": "Sales"
            },
            "id_no": "kos0009",
            "salary": "210000.00",
            "is_premium_user": false,
            "image": "/media/profile/image/avatar-3.jpg",
            "api_token": "mkdgpc931rw2yejbwdmpa83ak1qrh22sgkkt3kileehabp8h3cf1djwscjas"
        }
      ]
    }
    
    //if no employee is created yet
    {
        "status": "success",
        "message": "No employee added"
    }`,
    error_response: `
    // error due to invalid department id
    {
        "status": "error",
        "message": "Invalid id for department"
    }`,
  },
  {
    title: "Search For Employees",
    value: "search_emp",
    method: "GET",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/employees/search_employee/?search={search_query}<br>(not case-sensitive) search are matched against first name, middle name, last name, email, ID number & phone number and returns a list",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/employees/search_employee/?search=Doe';
    
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
    // if employee list is found
    {
      "status": "success",
      "message": "result found for 'Doe'",
      "data": [
        {
            "id": 5,
            "user": {
                "id": 9,
                "username": "kos0009"
            },
            "title": "Miss",
            "first_name": "Jane",
            "middle_name": "C",
            "last_name": "Doe",
            "email": "janefoster@gmail.com",
            "phone_number": "08123456476",
            "date_of_birth": "2023-10-31",
            "address": "",
            "appointment_date": "2023-10-31",
            "position": {
                "id": 2,
                "title": "Clerk"
            },
            "department": {
                "id": 1,
                "title": "Sales"
            },
            "id_no": "kos0009",
            "salary": "210000.00",
            "is_premium_user": false,
            "image": "/media/profile/image/avatar-3.jpg",
            "api_token": "mkdgpc931rw2yejbwdmpa83ak1qrh22sgkkt3kileehabp8h3cf1djwscjas"
        },
        {
          "id": 4,
          "user": {
              "id": 8,
              "username": "kos0008"
          },
          "title": "Mr",
          "first_name": "John",
          "middle_name": "B",
          "last_name": "Doe",
          "email": "johndoe@gmail.com",
          "phone_number": "09056574634",
          "date_of_birth": "2023-10-31",
          "address": "",
          "appointment_date": "2023-10-31",
          "position": {
              "id": 1,
              "title": "Manager"
          },
          "department": {
              "id": 2,
              "title": "Human Resources"
          },
          "id_no": "kos0008",
          "salary": "500000.00",
          "is_premium_user": false,
          "image": "/media/profile/image/avatar-1.jpg",
          "api_token": "1me9rbn2ti60hculhszfhq5hwhlo9vjws11555d92kmwfo6m7ie6bli3vy0e"
        }
      ]
    }
    
    //if no result found
    {
        "status": "success",
        "message": "No result found for 'Doe'"
    }`,
    error_response: `
    // error due to processing
    {
        "status": "error",
        "message": "error while getting search results"
    }
    
    // error due to empty query
    {
        "status": "error",
        "message": "Invalid search query"
    }`,
  },
  {
    title: "Get Employee Details",
    value: "get_employee_details",
    method: "GET",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/employees/get_employee/?employee_id={ID Number of employee}",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/employees/get_employee/?employee_id=kos0009';
    
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
    // if employee is found
    {
      "status": "success",
      "message": "employee details retrieved",
      "data": {
        "id": 5,
        "user": {
            "id": 9,
            "username": "kos0009"
        },
        "title": "Miss",
        "first_name": "Jane",
        "middle_name": "C",
        "last_name": "Doe",
        "email": "janefoster@gmail.com",
        "phone_number": "08123456476",
        "date_of_birth": "2023-10-31",
        "address": "",
        "appointment_date": "2023-10-31",
        "position": {
            "id": 2,
            "title": "Clerk"
        },
        "department": {
            "id": 1,
            "title": "Sales"
        },
        "id_no": "kos0009",
        "salary": "210000.00",
        "is_premium_user": false,
        "image": "/media/profile/image/avatar-3.jpg",
        "api_token": "mkdgpc931rw2yejbwdmpa83ak1qrh22sgkkt3kileehabp8h3cf1djwscjas"
      }
    }`,
    error_response: `
    // error due to invalid ID Number
    {
        "status": "error",
        "message": "Invalid ID Number"
    }`,
  },
  {
    title: "", // use a title for the function
    value: "", // a suitable id (will show as #href on url bar)
    method: "", // request method GET/POST
    url: "",
    request: ``,
    success_response: ``,
    error_response: ``,
  },
]