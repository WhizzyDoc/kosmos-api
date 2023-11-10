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
        title: "Get site/company information",
        value: "get_site_info",
        method: "GET",
        url: `${base_url}site/get_site_info/`,
        request: `
        const url = "${base_url}site/get_site_info/"
        ${make_get_req}
        `,
        success_response: `
        // when site information has been created
        {
          "status": "success",
          "message": "site info fetched successfully",
          "data": {
            "title": "Kosmos",
            "tagline": "Providing HR solutions",
            "logo": "https://kosmoshr.pythonanywhere.com/media/site/logo/logo.png",
            "about": "A platform for employee engagement",
            "objectives": "&lt;p&gt;To improve the rate of employee engagement&lt;/p&gt;",
            "mission": "",
            "company_email": "kosmoshr@company.info",
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
        url: `${base_url}site/create_site_info/`,
        request: `
        const url = '${base_url}site/create_site_info/';
        
        // form data to be created
        var file = document.querySelector('#file')

        const formData = new FormData();
        formData.append('title', "KosmosHR")
        formData.append('tagline', "we provide solutions to HR problems")
        formData.append('objectives', "to ensure equal engagement")
        formData.append('mission', "to ensure equal engagement")
        formData.append('about', "A platform to HR employee")
        formData.append("email", "kosmoshr@company.info")
        formData.append('logo', file.files[0])
        formData.append('api_token', "admin-api-token")
        ${make_post_req}`,
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
            "company_email": "kosmoshr@company.info",
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

        // error due to existing site
        {
            "status": "error",
            "message": "site already exists, edit site info instead"
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
        url: `${base_url}site/edit_site_info/`,
        request: `
        const url = '${base_url}site/edit_site_info/';
        
        // form data to be edited
        const formData = new FormData();
        formData.append('mission', "to ensure equal engagement and employee happiness")
        formData.append('about', "A platform to HR employee and Departments alike")
        formData.append('api_token', "admin-api-token")
        ${make_post_req}`,
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
            "company_email": "kosmoshr@company.info",
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
      title: "Create Admin Account",
      value: "create_admin_account",
      method: "POST",
      url: `${base_url}profile/create_admin_account/`,
      request: `
      const url = '${base_url}profile/create_admin_account/';
      
      // form data to be created
      var file = document.querySelector('#file')

      const formData = new FormData();
      formData.append('email', "admin@gmail.com")
      formData.append('first_name', "Kosmos")
      formData.append('last_name', "Admin")
      formData.append('middle_name', "B.")
      formData.append('nationality', "Nigeria")
      formData.append('phone_number', "07011223344")
      formData.append('image', file.files[0])
      formData.append("username", "Admin")
      formData.append("password", "Kosmos")
      ${make_post_req}`,
      success_response: `
      // when admin account has been created
      {
          "status": "success",
          "message": "Admin account created successfully", // can be changed after login
          "data": {
            "id": 3,
            "user": {
                "id": 6,
                "username": "Admin"
            },
            "title": null,
            "first_name": "Kosmos",
            "middle_name": "B.",
            "last_name": "Admin",
            "email": "admin@gmail.com",
            "phone_number": "07011223344",
            "date_of_birth": null,
            "address": "",
            "appointment_date": null,
            "position": null,
            "department": null,
            "id_no": null,
            "salary": null,
            "is_premium_user": true,
            "image": "http://127.0.0.1:8000/media/profile/image/avatar-2.jpg",
            "api_token": "6s0gjrqr61xrrt7omzo8lmp4vo0dsgwamlzvoa7ygxsw8ledxadfp68ygjtr"
          }
      }`,
      error_response: `
      // when an error occur while processing request
      {
        "status": "error",
        "message": "error while creating account"
      }

      // error due to existing account
      {
        "status": "error",
        "message": "Admin account already exists."
      }

      // when an error occur while generating admin profile
      {
        "status": "error",
        "message": "Admin account created, Error generating profile"
      }
      
      // error due to invalid email/username/password
      {
      "status": "error",
      "message": "Invalid email/username/password"
      }`
    },
    {
      title: "Admin Forgot Password",
      value: "admin_forgot_pass",
      method: "POST",
      url: `${base_url}profile/forgot_password/`,
      request: `
      const url = '${base_url}profile/forgot_password/';
      
      // form data to be created
      const formData = new FormData();
      formData.append('email', "kosmos@admin.com")
      ${make_post_req}`,
      success_response: `
      {
        "status": "success",
        "message": "Password reset instructions has been sent to kosmos@admin.com"
      }`,
      error_response: `
      // error due to unregistered email
        {
          "status": "error",
          "message": "Unregistered email"
        }

        // error due to invalid email
        {
            "status": "error",
            "message": "Invalid email"
        }

        // error due to unauthorized user
        {
            "status": "error",
            "message": "Unauthorized email"
        }`,
    },
    {
      title: "Admin Change Password",
      value: "admin_change_pass",
      method: "POST",
      url: `${base_url}profile/change_password/`,
      request: `
      const url = '${base_url}profile/change_password/';
      
      // form data to be created
      const formData = new FormData();
      formData.append('old_password', "admin-old-password")
      formData.append('new_password', "admin-new-password")
      formData.append('api_token', "admin-api-token")
      ${make_post_req}`,
      success_response: `
      {
        "status": "success",
        "message": "password changed successfully"
      }`,
      error_response: `
      // error due to weak new password
        {
          "status": "error",
          "message": "Invalid new password combination"
        }

        // error due to incorrect old password
        {
            "status": "error",
            "message": "Incorrect password"
        }

        // error due to unauthorized user
        {
            "status": "error",
            "message": "Unauthorized email"
        }
        
        // error due to invalid API token
        {
        "status": "error",
        "message": "invalid API token"
        }`,
  },
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