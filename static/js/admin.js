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
            "city": "",
            "state": "",
            "nationality": "Nigeria",
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
            "message": "Unauthorized API token"
        }
        
        // error due to invalid API token
        {
        "status": "error",
        "message": "invalid API token"
        }`,
  },
  {
    title: "Create Employee Account",
    value: "create_employee_account",
    method: "POST",
    url: `${base_url}profile/create_employee_account/`,
    request: `
    const url = '${base_url}profile/create_employee_account/';
    
    // form data to be created
    const formData = new FormData();
    formData.append('email', "johndoe@gmail.com")
    formData.append("title", "Mr")
    formData.append('first_name', "John")
    formData.append('last_name', "Doe")
    formData.append('middle_name', "B.")
    formData.append("city", "Ilorin")
    formData.append('state', "Kwara")
    formData.append('nationality', "Nigeria")
    formData.append('phone_number', "09056574634")
    formData.append('account_type', "employee") // can either be "staff" or "employee"
    formData.append('position', 2) // (an integer) id of the selected position (check documentation on how to fetch positions and departments), select form field is advised
    formData.append('department', 1) // same as position
    formData.append('salary', 150000.00) // a decimal field
    formData.append('date_of_birth', "1987-02-05")
    formData.append('appointment_date', "2023-11-05")
    formData.append('address', "Allen Avenue")
    formData.append('image', "") // image file
    formData.append('api_token', "admin-api-token")
    ${make_post_req}`,
    success_response: `
    // when user account has been created
      {
          "status": "success",
          "message": "Account created successfully. username is &apos;kos0001&apos; and password is &apos;John&apos;", // can be changed after login
          "data": {
              "user": {
              "id": 1,
              "username": "kos0001"
              },
              "address": "Allen Avenue",
              "api_token": "6je39zonyq6k352nt3j0cxb0xg4trnn0dqv0m247koffj52x1pjc5ypx7izk",
              "appointment_date": "2023-11-05",
              "date_of_birth": "1987-02-05",
              "email": "johndoe@gmail.com",
              "first_name": "John",
              "id": 6,
              "id_no": "kos0001",
              "image": "https://kosmoshr.pythonanywhere.com/media/profile/image/avatar-1.jpg",
              "is_premium_user": false,
              "last_name": "Doe",
              "middle_name": "B.",
              "phone_number": "09056574634",
              "city": "Ilorin",
              "state": "Kwara",
              "nationality": "Nigeria",
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
        "message": "error while creating account"
      }
      
      // error due to existing email
      {
      "status": "error",
      "message": "Email &apos;johndoe@gmail&apos; has already been used, kindly use another email"
      }
      
      // error due to invalid email
      {
          "status": "error",
          "message": "Invalid email"
      }
      
      // error due to unauthorized API key
      {
          "status": "error",
          "message": "Unauthorized user"
      }
      
      // error due to invalid API key
      {
          "status": "error",
          "message": "Invalid API Key"
      }`,
  },
  {
    title: "Admin Login/Authentication",
    value: "admin_login",
    method: "POST",
    url: `${base_url}profile/authentication/`,
    request: `
    const url = '${base_url}profile/authentication/';
    const formData = new FormData();
    formData.append('username', "admin-username")
    formData.append('password', "admin-password")
    ${make_post_req}`,
    success_response: `
    {
            "status": "success",
            "message": "login successful",
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
              "city": "",
              "state": "",
              "nationality": "Nigeria",
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
    title: "Admin Logout",
    value: "admin_logout",
    method: "POST",
    url: `${base_url}profile/admin_logout/`,
    request: `
    const url = '${base_url}profile/admin_logout/';
    const formData = new FormData();
    formData.append('api_token', "admin-api-token")
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "message": "logout successful"
    }`,
    error_response: `
    // error due to unauthorized API token
        {
            "status": "error",
            "message": "user not authorized"
        }
        
        // error due to invalid API token
        {
            "status": "error",
            "message": "Invalid API token"
        }`,
  },
  {
    title: "Get Admin Profile",
    value: "get_admin_profile",
    method: "POST",
    url: `${base_url}profile/get_admin_profile/`,
    request: `
    const url = '${base_url}profile/get_admin_profile/';
    const formData = new FormData();
    formData.append('api_token', "admin-api-token")
    ${make_post_req}`,
    success_response: `
    {
            "status": "success",
            "message": "data fetched successfully",
            "data": {
              "id": 3,
              "user": {
                  "id": 6,
                  "username": "Admin",
              },
              "title": null,
              "first_name": "Kosmos",
              "middle_name": "B.",
              "last_name": "Admin",
              "email": "admin@gmail.com",
              "phone_number": "07011223344",
              "date_of_birth": null,
              "address": "",
              "city": "",
              "state": "",
              "nationality": "Nigeria",
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
    // error due to unauthorized API token
        {
            "status": "error",
            "message": "user not authorized"
        }
        
        // error due to invalid API token
        {
            "status": "error",
            "message": "Invalid API token"
        }`,
  },
  {
    title: "Edit Admin Profile",
    value: "edit_admin_profile",
    method: "POST",
    url: `${base_url}profile/edit_admin_profile/`,
    request: `
    const url = '${base_url}profile/edit_admin_profile/';
    const formData = new FormData();
    formData.append('api_token', "admin-api-token")
    // other data to be edited like email, phone number, address, etc not added yet
    ${make_post_req}`,
    success_response: `
    {
            "status": "success",
            "message": "profile edited successfully",
            "data": {
              "id": 3,
              "user": {
                  "id": 6,
                  "username": "Admin",
              },
              "title": null,
              "first_name": "Kosmos",
              "middle_name": "B.",
              "last_name": "Admin",
              "email": "admin@gmail.com",
              "phone_number": "07011223344",
              "date_of_birth": null,
              "address": "",
              "city": "",
              "state": "",
              "nationality": "Nigeria",
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
    // error due to unauthorized API token
        {
            "status": "error",
            "message": "user not authorized"
        }
        
        // error due to invalid API token
        {
            "status": "error",
            "message": "Invalid API token"
        }`,
  },
  {
    title: "Get Positions",
    value: "get_positions",
    method: "GET",
    url: `${base_url}positions/get_positions/`,
    request: `
    const url = '${base_url}positions/get_positions/';
    // for pagination
    // to specify the number of items per page (default=20)
    const url = '${base_url}positions/get_positions/?per_page=5'; // returns 5 elements
    // to specify the page number requested (default=page 1)
    const url = '${base_url}positions/get_positions/?page=2'; // returns page 2
    // to perform search operation (the search is made by returning objects whose title contains the searched string)
    const url = '${base_url}positions/get_positions/?search=man'; // returns list of objects that contains "man" in title (e.g Manager)
    // to specify multiple parameters, any or all of the above parameters can be combined
    const url = '${base_url}positions/get_positions/?per_page=5&page=1&search=c'; // returns page 1 containing 5 objects per page of onjects conytaining "c" in their title
    
    ${make_get_req}`,
    success_response: `
    // when a list is found
    {
      "status": "success",
      "data": [
          {
              "id": 2,
              "title": "Clerk"
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
      "message": "position list retrieved",
      "page_number": 1,
      "list_per_page": 5,
      "total_pages": 1,
      "total_items": 3,
      "search_query": "c"
    }
    
    // when requested list is empty
    {
      "status": "success",
      "message": "No position found",
      "page_number": 1,
      "list_per_page": 5,
      "total_pages": 1,
      "total_items": 3,
      "search_query": "c"
    }`,
    error_response: `
    // error due to
        {
          "status": "error",
          "message": "Error getting position list"
        }`,
  },
  {
    title: "Get Specific Position",
    value: "get_specific_position",
    method: "GET",
    url: `${base_url}positions/get_position/?position_id={id of the position}`,
    request: `
    const url = '${base_url}positions/get_position/?position_id=2';
    
    ${make_get_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
          "id": 2,
          "title": "Clerk"
      },
      "message": "position details retrieved"
    }`,
    error_response: `
        {
          'status': 'success',
          'message': 'Invalid position ID'
        }`,
  },
  // template
  {
    title: "Create Position",
    value: "create_position",
    method: "POST",
    url: `${base_url}positions/create_position/`,
    request: `
    const url = "${base_url}positions/create_position/";

    // form data to be created
    const formData = new FormData();
    formData.append('title', "title-of-position")
    formData.append('api_token', "admin-api-token")
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
          "id": 5,
          "title": "title-of-position"
      },
      "message": "position created successfully"
    }`,
    error_response: `
    // error due to existing position
        {
          "status": "error",
          "message": "position already exists"
        }

        // error due to unauthorized user
        {
            "status": "error",
            "message": "User not authorized"
        }
        
        // error due to invalid API token
        {
        "status": "error",
        "message": "invalid API token"
        }`,
  },
  {
    title: "Edit Position",
    value: "edit_position",
    method: "POST",
    url: `${base_url}positions/edit_position/`,
    request: `
    const url = "${base_url}positions/edit_position/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 5); // id of position to be edited
    formData.append('title', "title-of-edited-position");
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
          "id": 5,
          "title": "title-of-edited-position"
      },
      "message": "position edited successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "position  with id '5' does not exist"
        }

        // error due to unauthorized user
        {
            "status": "error",
            "message": "User not authorized"
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
    const url = "${base_url}";
    ${make_get_req}`,
    success_response: ``,
    error_response: ``,
  },
]