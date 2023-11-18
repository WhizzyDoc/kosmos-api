const make_post_req = `
  // make the request
  const data = await kosmos_post(url, formData)
  // use fetched data
  console.log(data)`;
const make_get_req = `
  // make the request
  const data = await kosmos_get(url)
  // use fetched data
  console.log(data)`;
const base_url = "https://kosmoshr.pythonanywhere.com/api/v1/"

const admin = [
    // For site API
    {
        title: "Register Created Account For Employee",
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
          address: "block 2, Allen Avenue",
          date_of_birth: "1999-12-04",
          appointment_date: "2023-10-12",
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
                "username": "kos0001"
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
    
    // for Position API
    {
        
        error_response: `
        `,
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
    // for News Category API
    {
      title: "Get Available News Categories",
      value: "get_news_cat",
      method: "GET",
      url: "https://kosmoshr.pythonanywhere.com/api/v1/news_categories/get_categories/",
      request: `
      // import axios if you're using a module system
      const axios = require('axios');
      
      const url = 'https://kosmoshr.pythonanywhere.com/api/v1/news_categories/get_categories/';
      
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
      // if category list is found
      {
        "status": "success",
        "message": "category list retrieved",
        "data": [
          {
            "id": 2,
            "title": "event",
            "slug": "event"
          },
          {
            "id": 1,
            "title": "production",
            "slug": "production"
          }
        ]
      }
      
      //if no category is created yet
      {
          "status": "success",
          "message": "No categories found"
      }`,
      error_response: `
      // error due to
      {
          "status": "error",
          "message": "Error getting categories list"
      }`,
  },
  {
    title: "Create News Category",
    value: "create_category",
    method: "POST",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/news_categories/create_category/",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/news_categories/create_category/';
    
    // headers
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    // form data to be created
    const formData = JSON.stringify({
      "api_token": "admin-api-token",
      "title": "Entertainment" // title of category to be created
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
        "message": "category created successfully",
        "data": {
          "id": 3,
          "title": "Entertainment"
        }
    }`,
    error_response: `
    // error due to existing category
    {
        "status": "error",
        "message": "category already exists!"
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
    title: "Edit News Category",
    value: "edit_category",
    method: "POST",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/news_categories/edit_category/",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/news_categories/edit_category/';
    
    // headers
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    // form data to be created
    const formData = JSON.stringify({
      "api_token": "admin-api-token",
      "id": 3, // id of category to be edited (integer)
      "title": "Technology"
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
        "message": "category edited successfully",
        "data": {
          "id": 3,
          "title": "Technology"
        }
    }`,
    error_response: `
    // error due to invalid id
    {
        "status": "error",
        "message": "category with id '{wrong_id}' does not exists"
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
    title: "Delete News Category",
    value: "delete_category",
    method: "POST",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/news_categories/delete_category/",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/news_categories/delete_category/';
    
    // headers
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    // form data to be created
    const formData = JSON.stringify({
      "api_token": "admin-api-token",
      "id": 3, // id of category to be deleted (integer)
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
        "message": "category 'Technology' deleted successfully"
    }`,
    error_response: `
    // error due to invalid id
    {
        "status": "error",
        "message": "category with id '{wrong_id}' does not exists!"
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
  // for Meeting API
  {
    title: "Get All Meetings",
    value: "get_meetings",
    method: "GET",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/meetings/get_meetings/",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/meetings/get_meetings/';
    
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
    // if meeting list is found
    {
      "status": "success",
      "data": [
        {
          "id": 1,
          "title": "End Of Week Meeting",
          "description": "<p>A general meeting among departmental heads in the company</p>",
          "date": "2023-11-04T01:01:03Z",
          "departments": [
            {
              "id": 1,
              "title": "Sales"
            },
            {
              "id": 2,
              "title": "Human Resources"
            },
            {
              "id": 3,
              "title": "Administration"
            }
          ],
          "members": [
            {
              "id": 1,
              "title": "Manager"
            },
            {
              "id": 3,
              "title": "CEO"
            },
            {
              "id": 4,
              "title": "Secretary"
            }
          ],
          "attended_by": []
        }
      ],
      "message": "meeting list retrieved"
    }
    
    //if no meeting is created yet
    {
        "status": "success",
        "message": "No meeting found"
    }`,
    error_response: `
    // error due to
    {
        "status": "error",
        "message": "Error getting meeting list"
    }`,
  },
  {
    title: "Get Meeting Details",
    value: "get_meeting",
    method: "GET",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/meetings/get_meeting/?meeting_id={id of meeting}",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/meetings/get_meeting/?meeting_id=1';
    
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
    // if meeting is found
    {
      "status": "success",
      "data": {
          "id": 1,
          "title": "End Of Week Meeting",
          "description": "<p>A general meeting among departmental heads in the company</p>",
          "date": "2023-11-04T01:01:03Z",
          "departments": [
            {
              "id": 1,
              "title": "Sales"
            },
            {
              "id": 2,
              "title": "Human Resources"
            },
            {
              "id": 3,
              "title": "Administration"
            }
          ],
          "members": [
            {
              "id": 1,
              "title": "Manager"
            },
            {
              "id": 3,
              "title": "CEO"
            },
            {
              "id": 4,
              "title": "Secretary"
            }
          ],
          "attended_by": []
      },
      "message": "meeting details retrieved"
    }`,
    error_response: `
    // error due to empty or invalid id
    {
        "status": "error",
        "message": "Invalid meeting ID"
    }`,
  },
  // for Event API
  {
    title: "Get All Events",
    value: "get_events",
    method: "GET",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/events/get_events/",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/events/get_events/';
    
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
    // if event list is found
    {
      "status": "success",
      "data": [],
      "message": "event list retrieved"
    }
    
    //if no event is created yet
    {
        "status": "success",
        "message": "No event found"
    }`,
    error_response: `
    // error due to
    {
        "status": "error",
        "message": "Error getting event list"
    }`,
  },
  {
    title: "Get Event Details",
    value: "get_event",
    method: "GET",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/events/get_event/?event_id={id of event}",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/events/get_event/?event_id=1';
    
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
    // if event is found
    {
      "status": "success",
      "data": {
          "id": 1,
          ......
      },
      "message": "event details retrieved"
    }`,
    error_response: `
    // error due to empty or invalid id
    {
        "status": "error",
        "message": "Invalid event ID"
    }`,
  },
  // for Task API
  {
    title: "Get All Tasks",
    value: "get_tasks",
    method: "GET",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/tasks/get_tasks/",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/tasks/get_tasks/';
    
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
    // if task list is found
    {
      "status": "success",
      "data": [
          {
              "id": 1,
              "title": "Minute Writing",
              "description": "<p>Writing and submission of last meeting minute</p>",
              "created_by": {
                  "id": 3,
                  "id_no": null,
                  "first_name": "Kosmos",
                  "last_name": "Admin",
                  "email": "admin@gmail.com"
              },
              "file": null,
              "type": "specific",
              "reward": null,
              "assigned_to": [
                  {
                      "id": 6,
                      "id_no": "kos0010",
                      "first_name": "Peter",
                      "last_name": "Parker",
                      "email": "peterparker@gmail.com"
                  }
              ],
              "completed": false,
              "completed_by": []
          }
      ],
      "message": "task list retrieved"
    }
    
    //if no task is created yet
    {
        "status": "success",
        "message": "No task found"
    }`,
    error_response: `
    // error due to
    {
        "status": "error",
        "message": "Error getting task list"
    }`,
  },
  {
    title: "Get Task Details",
    value: "get_task",
    method: "GET",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/tasks/get_task/?task_id={id of task}",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/tasks/get_task/?task_id=1';
    
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
    // if task is found
    {
      "status": "success",
    "data": {
        "id": 1,
        "title": "Minute Writing",
        "description": "<p>Writing and submission of last meeting minute</p>",
        "created_by": {
            "id": 3,
            "id_no": null,
            "first_name": "Kosmos",
            "last_name": "Admin",
            "email": "admin@gmail.com"
        },
        "file": null,
        "type": "specific",
        "reward": null,
        "assigned_to": [
            {
                "id": 6,
                "id_no": "kos0010",
                "first_name": "Peter",
                "last_name": "Parker",
                "email": "peterparker@gmail.com"
            }
        ],
        "completed": false,
        "completed_by": []
    },
    "message": "task details retrieved"
    }`,
    error_response: `
    // error due to empty or invalid id
    {
        "status": "error",
        "message": "Invalid task ID"
    }`,
  },
  // for Complaint API
  {
    title: "Get All Complaints",
    value: "get_complaints",
    method: "GET",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/complaints/get_complaints/",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/complaints/get_complaints/';
    
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
    // if complaint list is found
    {
      "status": "success",
      "data": [
        {
            "id": 1,
            "title": "Lunch Break",
            "complaint": "Our lunch break is too short",
            "proposed_solution": "Kindly make our lunch break at least 30 minutes",
            "addressed": false,
            "solution": "",
            "date": "2023-11-04T00:58:56Z",
            "employee": {
                "id": 4,
                "id_no": "kos0008",
                "first_name": "John",
                "last_name": "Doe",
                "email": "johndoe@gmail.com"
            }
        }
      ],
      "message": "complaint list retrieved"
    }
    
    //if no complaint is created yet
    {
        "status": "success",
        "message": "No complaint found"
    }`,
    error_response: `
    // error due to
    {
        "status": "error",
        "message": "Error getting complaint list"
    }`,
  },
  {
    title: "Get Conplaint Details",
    value: "get_complaint",
    method: "GET",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/complaints/get_complaint/?complaint_id={id of complaint}",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/complaints/get_complaint/?complaint_id=1';
    
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
    // if complaint is found
    {
      "status": "success",
      "data": {
        "id": 1,
        "title": "Lunch Break",
        "complaint": "Our lunch break is too short",
        "proposed_solution": "Kindly make our lunch break at least 30 minutes",
        "addressed": false,
        "solution": "",
        "date": "2023-11-04T00:58:56Z",
        "employee": {
            "id": 4,
            "id_no": "kos0008",
            "first_name": "John",
            "last_name": "Doe",
            "email": "johndoe@gmail.com"
        }
      },
      "message": "complaint details retrieved"
    }`,
    error_response: `
    // error due to empty or invalid id
    {
        "status": "error",
        "message": "Invalid complaint ID"
    }`,
  },
  // for News API
  {
    title: "Get All News",
    value: "get_news",
    method: "GET",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/news/get_news/",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/news/get_news/';
    
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
    // if news list is found
    {
      "status": "success",
      "data": [
        {
            "id": 1,
            "author": {
                "id": 3,
                "id_no": null,
                "first_name": "Kosmos",
                "last_name": "Admin",
                "email": "admin@gmail.com"
            },
            "title": "Implementation of Robots In Production",
            "slug": "implementation-of-robots-in-production",
            "category": {
                "id": 3,
                "title": "Technology",
                "slug": "technology"
            },
            "date": "2023-11-04T02:02:15Z",
            "active": true,
            "verified": true,
            "post": "<p>The company hereby announces the introduction and implementation of robots and A.I in the production department to boost productivity and higher sales.</p>"
        }
      ],
      "message": "news list retrieved"
    }
    
    //if no news is created yet
    {
        "status": "success",
        "message": "No news found"
    }`,
    error_response: `
    // error due to
    {
        "status": "error",
        "message": "Error getting news list"
    }`,
  },
  {
    title: "Get News Details",
    value: "get_news_detail",
    method: "GET",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/news/get_news/?news_id={id of news}",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/news/get_news/?news_id=1';
    
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
    // if news is found
    {
      "status": "success",
      "data": {
        "id": 1,
        "author": {
            "id": 3,
            "id_no": null,
            "first_name": "Kosmos",
            "last_name": "Admin",
            "email": "admin@gmail.com"
        },
        "title": "Implementation of Robots In Production",
        "slug": "implementation-of-robots-in-production",
        "category": {
            "id": 3,
            "title": "Technology",
            "slug": "technology"
        },
        "date": "2023-11-04T02:02:15Z",
        "active": true,
        "verified": true,
        "post": "<p>The company hereby announces the introduction and implementation of robots and A.I in the production department to boost productivity and higher sales.</p>"
      },
      "message": "news details retrieved"
    }`,
    error_response: `
    // error due to empty or invalid id
    {
        "status": "error",
        "message": "Invalid news ID"
    }`,
  },
  // for Group Chat API
  {
    title: "Get All Group Chats",
    value: "get_group_chats",
    method: "GET",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/group_chats/get_group_chats/",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/group_chats/get_group_chats/';
    
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
    // if group chat list is found
    {
      "status": "success",
      "data": [
        {
          "id": 3,
          "title": "Group Chat for Administration",
          "department": {
              "id": 3,
              "title": "Administration"
          },
          "members": [
              {
                  "id": 6,
                  "id_no": "kos0010",
                  "first_name": "Peter",
                  "last_name": "Parker",
                  "email": "peterparker@gmail.com",
                  "image": null
              }
          ],
          "created": "2023-11-06T10:21:10.346875Z"
        },
        {
          "id": 2,
          "title": "Group Chat for Human Resources",
          "department": {
              "id": 2,
              "title": "Human Resources"
          },
          "members": [
              {
                  "id": 4,
                  "id_no": "kos0008",
                  "first_name": "John",
                  "last_name": "Doe",
                  "email": "johndoe@gmail.com",
                  "image": "/media/profile/image/avatar-1.jpg"
              }
          ],
          "created": "2023-11-06T10:20:45.899739Z"
        },
        {
          "id": 1,
          "title": "Group Chat for Sales",
          "department": {
              "id": 1,
              "title": "Sales"
          },
          "members": [
              {
                  "id": 5,
                  "id_no": "kos0009",
                  "first_name": "Jane",
                  "last_name": "Doe",
                  "email": "janefoster@gmail.com",
                  "image": "/media/profile/image/avatar-3.jpg"
              }
          ],
          "created": "2023-11-06T10:20:24.728145Z"
        }
      ],
      "message": "group chat list retrieved"
    }
    
    //if no group chat is created yet
    {
        "status": "success",
        "message": "No group chat found"
    }`,
    error_response: `
    // error due to
    {
        "status": "error",
        "message": "Error getting group chat list"
    }`,
  },
  {
    title: "Get Group Chat Details",
    value: "get_group_chat_detail",
    method: "GET",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/group_chats/get_group_chat/?group_chat_id=3",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/group_chats/get_group_chat/?group_chat_id=3';
    
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
    // if group chat is found
    {
      "status": "success",
      "data": {
          "id": 3,
          "title": "Group Chat for Administration",
          "department": {
              "id": 3,
              "title": "Administration"
          },
          "members": [
              {
                  "id": 6,
                  "id_no": "kos0010",
                  "first_name": "Peter",
                  "last_name": "Parker",
                  "email": "peterparker@gmail.com",
                  "image": null
              }
          ],
          "created": "2023-11-06T10:21:10.346875Z"
      },
      "message": "group chat details retrieved"
    }`,
    error_response: `
    // error due to empty or invalid id
    {
        "status": "error",
        "message": "Invalid group chat ID"
    }`,
  },
  {
    title: "Get Group Chat Members",
    value: "get_group_chat_members",
    method: "GET",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/group_chats/get_group_members/?group_chat_id=3",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/group_chats/get_group_members/?group_chat_id=3';
    
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
    // if group members are found
    {
      "status": "success",
      "data": [
          {
              "id": 6,
              "id_no": "kos0010",
              "first_name": "Peter",
              "last_name": "Parker",
              "email": "peterparker@gmail.com",
              "image": null
          }
      ],
      "message": "members list retrieved"
  }`,
    error_response: `
    // error due to empty or invalid id
    {
        "status": "error",
        "message": "Invalid group chat ID"
    }`,
  },
  {
    title: "Get chat messages",
    value: "get_chat_messages",
    method: "GET",
    url: "https://kosmoshr.pythonanywhere.com/api/v1/group_chats/get_chats/?group_chat_id=3",
    request: `
    // import axios if you're using a module system
    const axios = require('axios');
    
    const url = 'https://kosmoshr.pythonanywhere.com/api/v1/group_chats/get_chats/?group_chat_id=3';
    
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
    // if group chat is found
    {
      "status": "success",
      "data": [
          {
              "id": 1,
              "group": {
                  "id": 3,
                  "title": "Group Chat for Administration",
                  "department": {
                      "id": 3,
                      "title": "Administration"
                  },
                  "members": [
                      {
                          "id": 6,
                          "id_no": "kos0010",
                          "first_name": "Peter",
                          "last_name": "Parker",
                          "email": "peterparker@gmail.com",
                          "image": null
                      }
                  ],
                  "created": "2023-11-06T10:21:10.346875Z"
              },
              "sender": {
                  "id": 6,
                  "id_no": "kos0010",
                  "first_name": "Peter",
                  "last_name": "Parker",
                  "email": "peterparker@gmail.com",
                  "image": null
              },
              "message": "Hi everyone",
              "date": "2023-11-06T10:46:49Z",
              "seen_by": [
                  {
                      "id": 6,
                      "id_no": "kos0010",
                      "first_name": "Peter",
                      "last_name": "Parker",
                      "email": "peterparker@gmail.com",
                      "image": null
                  }
              ]
          }
      ],
      "message": "chat messages retrieved"
  }`,
    error_response: `
    // error due to empty or invalid id
    {
        "status": "error",
        "message": "Invalid group chat ID"
    }`,
  },
  */
  // template
  {
        title: "",
        value: "",
        method: "",
        url: `${base_url}`,
        request: `
        const url = '${base_url}';
        `,
        success_response: ``,
        error_response: `
        // error due to
        {
            "status": "error",
            "message": ""
        }`,
    },
]