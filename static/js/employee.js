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