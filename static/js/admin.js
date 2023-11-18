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
    // other data to be edited like email, phone number, address, etc
    formData.append('address', "24B, Kano Street")
    formData.append('city', "Lagos")
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
              "address": "24B, Kano Street",
              "city": "Lagos",
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
  /* =========================== Position ========================= */
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
  {
    title: "Delete Position",
    value: "delete_position",
    method: "POST",
    url: `${base_url}positions/delete_position/`,
    request: `
    const url = "${base_url}positions/delete_position/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 5); // id of position to be deleted
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "message": "position 'title-of-deleted-position' deleted successfully"
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
  /* =========================== Department ========================= */
  {
    title: "Get Departments",
    value: "get_departments",
    method: "GET",
    url: `${base_url}departments/get_departments/`,
    request: `
    const url = '${base_url}departments/get_departments/';
    // for pagination
    // to specify the number of items per page (default=20)
    const url = '${base_url}departments/get_departments/?per_page=5'; // returns 5 elements
    // to specify the page number requested (default=page 1)
    const url = '${base_url}departments/get_departments/?page=2'; // returns page 2
    // to perform search operation (the search is made by returning objects whose title contains the searched string)
    const url = '${base_url}departments/get_departments/?search=sa'; // returns list of objects that contains "sa" in title (e.g Sales)
    // to specify multiple parameters, any or all of the above parameters can be combined
    const url = '${base_url}departments/get_departments/?per_page=5&page=1&search=s'; // returns page 1 containing 5 objects per page of onjects containing "s" in their title
    
    ${make_get_req}`,
    success_response: `
    // when a list is found
    {
      "status": "success",
      "data": [
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
      "message": "department list retrieved",
      "page_number": 1,
      "list_per_page": 5,
      "total_pages": 1,
      "total_items": 3,
      "search_query": "s"
    }
    
    // when requested list is empty
    {
      "status": "success",
      "message": "No department found",
      "page_number": 1,
      "list_per_page": 5,
      "total_pages": 1,
      "total_items": 3,
      "search_query": "s"
    }`,
    error_response: `
    // error due to
        {
          "status": "error",
          "message": "Error getting department list"
        }`,
  },
  {
    title: "Get Specific Department",
    value: "get_specific_department",
    method: "GET",
    url: `${base_url}departments/get_department/?department_id={id of the department}`,
    request: `
    const url = '${base_url}departments/get_department/?department_id=3';
    
    ${make_get_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
          "id": 3,
          "title": "Administration"
      },
      "message": "department details retrieved"
    }`,
    error_response: `
        {
          'status': 'success',
          'message': 'Invalid department ID'
        }`,
  },
  {
    title: "Create Department",
    value: "create_department",
    method: "POST",
    url: `${base_url}departments/create_department/`,
    request: `
    const url = "${base_url}departments/create_department/";

    // form data to be created
    const formData = new FormData();
    formData.append('title', "title-of-department")
    formData.append('api_token', "admin-api-token")
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
          "id": 4,
          "title": "title-of-department"
      },
      "message": "department created successfully"
    }`,
    error_response: `
    // error due to existing position
        {
          "status": "error",
          "message": "department already exists"
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
    title: "Edit Department",
    value: "edit_department",
    method: "POST",
    url: `${base_url}departments/edit_department/`,
    request: `
    const url = "${base_url}departments/edit_department/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 4); // id of department to be edited
    formData.append('title', "title-of-edited-department");
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
          "id": 4,
          "title": "title-of-edited-department"
      },
      "message": "department edited successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "department with id '4' does not exist"
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
    title: "Delete Department",
    value: "delete_department",
    method: "POST",
    url: `${base_url}departments/delete_department/`,
    request: `
    const url = "${base_url}departments/delete_department/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 4); // id of department to be deleted
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "message": "department 'title-of-deleted-department' deleted successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "department with id '4' does not exist"
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
  /* =========================== Employee ========================= */
  {
    title: "Get Employees",
    value: "get_employees",
    method: "GET",
    url: `${base_url}employees/get_employees/<br>
    <span class="w-text-blue">to filter employee by department:</span><br>
    ${base_url}employees/filter_employees/?department_id={id of department}<br>
    <span class="w-text-blue">filtering also uses pagination</span><br>`,
    request: `
    const url = '${base_url}employees/get_employees/';
    // for pagination
    // to specify the number of items per page (default=20)
    const url = '${base_url}employees/get_employees/?per_page=5'; // returns 5 elements
    // to specify the page number requested (default=page 1)
    const url = '${base_url}employees/get_employees/?page=2'; // returns page 2
    // to perform search operation (the search is made by returning objects whose title contains the searched string)
    const url = '${base_url}employees/get_employees/?search=sa'; // returns list of objects that contains "sa" in names, phone number or email
    // to specify multiple parameters, any or all of the above parameters can be combined
    const url = '${base_url}employees/get_employees/?per_page=5&page=1&search=a'; // returns page 1 containing 5 objects per page of onjects containing "a" in their names, phone number or email
    
    ${make_get_req}`,
    success_response: `
    // when a list is found
    {
      "status": "success",
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
              "api_token": "mkdgpc931rw2yejbwdmpa83ak1qrh22sgkkt3kileehabp8h3cf1djwscjas",
              "city": null,
              "state": null,
              "nationality": "Nigeria"
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
              "api_token": "1me9rbn2ti60hculhszfhq5hwhlo9vjws11555d92kmwfo6m7ie6bli3vy0e",
              "city": null,
              "state": null,
              "nationality": "Nigeria"
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
              "api_token": "6je39zonyq6k352nt3j0cxb0xg4trnn0dqv0m247koffj52x1pjc5ypx7izk",
              "city": null,
              "state": null,
              "nationality": null
          }
      ],
      "message": "employee list retrieved",
      "page_number": 1,
      "list_per_page": 5,
      "total_pages": 1,
      "total_items": 3,
      "search_query": "a",
      "department": "title-of-filtered-department" // if url contains filtering
    }
    
    // when requested list is empty
    {
      "status": "success",
      "message": "No employee found",
      "page_number": 1,
      "list_per_page": 5,
      "total_pages": 1,
      "total_items": 3,
      "search_query": "a"
      "department": "title-of-filtered-department" // if url contains filtering
    }`,
    error_response: `
    // error due to
        {
          "status": "error",
          "message": "Error getting employee list"
        }`,
  },
  {
    title: "Get Specific Employee",
    value: "get_specific_employee",
    method: "GET",
    url: `${base_url}employees/get_employee/?employee_id={ID number of the employee}`,
    request: `
    const url = '${base_url}employees/get_employee/?employee_id=kos0008';
    
    ${make_get_req}`,
    success_response: `
    {
      "status": "success",
      "message": "employee details retrieved",
      "data": {
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
          "api_token": "1me9rbn2ti60hculhszfhq5hwhlo9vjws11555d92kmwfo6m7ie6bli3vy0e",
          "city": null,
          "state": null,
          "nationality": "Nigeria"
      }
    }`,
    error_response: `
        {
          'status': 'error',
          'message': 'Invalid ID Number'
        }`,
  },
  {
    title: "Get Specific Employee Report",
    value: "get_specific_employee_report",
    method: "GET",
    url: `${base_url}employees/get_employee_report/?employee_id={ID number of the employee}`,
    request: `
    const url = '${base_url}employees/get_employee_report/?employee_id=kos0008';
    
    ${make_get_req}`,
    success_response: `
    {
      "status": "success",
      "message": "employee tasks report retrieved",
      "data": [
          {
              "id": 2,
              "title": "Talent Hunt",
              "description": "<p>Going out to institutions and search for talented individuals</p>",
              "file": null,
              "reward": null,
              "assigned_to": {
                  "id": 4,
                  "id_no": "kos0008",
                  "first_name": "John",
                  "last_name": "Doe",
                  "email": "johndoe@gmail.com",
                  "image": "/media/profile/image/avatar-1.jpg"
              },
              "completed": true,
              "deadline": "2023-11-14T09:11:24Z"
          },
          {
              "id": 1,
              "title": "Minute Writing",
              "description": "<p>Writing and submission of last meeting minute</p>",
              "file": null,
              "reward": null,
              "assigned_to": {
                  "id": 4,
                  "id_no": "kos0008",
                  "first_name": "John",
                  "last_name": "Doe",
                  "email": "johndoe@gmail.com",
                  "image": "/media/profile/image/avatar-1.jpg"
              },
              "completed": false,
              "deadline": "2023-11-14T12:00:00Z"
          }
      ],
      "total_tasks": 2,
      "completed_tasks": 1,
      "incomplete_tasks": 1
    }`,
    error_response: `
        {
          'status': 'error',
          'message': 'Invalid ID Number'
        }`,
  },
  {
    title: "Edit Employee",
    value: "edit_employee",
    method: "POST",
    url: `${base_url}employees/edit_employee/`,
    request: `
    const url = "${base_url}employees/edit_employee/";

    // form data to be created
    const formData = new FormData();
    formData.append('employee_id', "kos0008"); // ID number of employee to be edited
    formData.append('api_token', "admin-api-token");
    // field to be edited including email, names, phone number, address, salary, etc
    formData.append('salary', 200000.00);
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
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
        "salary": "200000.00",
        "is_premium_user": false,
        "image": "/media/profile/image/avatar-1.jpg",
        "api_token": "1me9rbn2ti60hculhszfhq5hwhlo9vjws11555d92kmwfo6m7ie6bli3vy0e",
        "city": null,
        "state": null,
        "nationality": "Nigeria"
      },
      "message": "employee profile edited successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "employee with ID number 'kos0008' does not exist"
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
    title: "Delete Employee Account",
    value: "delete_employee",
    method: "POST",
    url: `${base_url}employees/delete_employee/`,
    request: `
    const url = "${base_url}employees/delete_employee/";

    // form data to be created
    const formData = new FormData();
    formData.append('employee_id', 'kos0008'); // id of employee to be deleted
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "message": "Employee 'John Doe' deleted successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "employee with id 'kos0008' does not exist"
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
    title: "Deactivate Employee Account",
    value: "deactivate_employee",
    method: "POST",
    url: `${base_url}employees/deactivate_employee/`,
    request: `
    const url = "${base_url}employees/deactivate_employee/";

    // form data to be created
    const formData = new FormData();
    formData.append('employee_id', 'kos0008'); // id of employee to be deactivated
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "message": "Employee 'John Doe' account deactivated successfully"
    } // deactivation means employee will not be able to login to their account`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "employee with id 'kos0008' does not exist"
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
  /* =========================== Task ========================= */
  {
    title: "Get Tasks",
    value: "get_tasks",
    method: "GET",
    url: `${base_url}tasks/get_tasks/`,
    request: `
    const url = '${base_url}tasks/get_tasks/';
    // to filter tasks by completed
    const url = '${base_url}tasks/get_tasks/?completed=true';
    // for pagination
    // to specify the number of items per page (default=20)
    const url = '${base_url}tasks/get_tasks/?per_page=5'; // returns 5 elements
    // to specify the page number requested (default=page 1)
    const url = '${base_url}tasks/get_tasks/?page=2'; // returns page 2
    // to perform search operation (the search is made by returning objects whose title contains the searched string)
    const url = '${base_url}tasks/get_tasks/?search=hunt'; // returns list of objects that contains "hunt" in title or description (e.g Talent Hunt)
    // to specify multiple parameters, any or all of the above parameters can be combined
    const url = '${base_url}tasks/get_tasks/?per_page=5&page=1&search=c'; // returns page 1 containing 5 objects per page of onjects conytaining "c" in their title or description
    
    ${make_get_req}`,
    success_response: `
    // when a list is found
    {
      "status": "success",
      "data": [
          {
              "id": 2,
              "title": "Talent Hunt",
              "description": "<p>Going out to institutions and search for talented individuals</p>",
              "file": null,
              "reward": null,
              "assigned_to": {
                  "id": 4,
                  "id_no": "kos0008",
                  "first_name": "John",
                  "last_name": "Doe",
                  "email": "johndoe@gmail.com",
                  "image": "/media/profile/image/avatar-1.jpg"
              },
              "completed": true,
              "deadline": "2023-11-14T09:11:24Z"
          },
          {
              "id": 1,
              "title": "Minute Writing",
              "description": "<p>Writing and submission of last meeting minute</p>",
              "file": null,
              "reward": null,
              "assigned_to": {
                  "id": 4,
                  "id_no": "kos0008",
                  "first_name": "John",
                  "last_name": "Doe",
                  "email": "johndoe@gmail.com",
                  "image": "/media/profile/image/avatar-1.jpg"
              },
              "completed": false,
              "deadline": "2023-11-14T12:00:00Z"
          }
      ],
      "message": "task list retrieved",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 2,
      "search_query": ""
    }
    
    // when requested list is empty
    {
      "status": "success",
      "message": "No task found",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 2,
      "search_query": ""
    }`,
    error_response: `
    // error due to
        {
          "status": "error",
          "message": "Error getting task list"
        }`,
  },
  {
    title: "Get Specific Task",
    value: "get_specific_task",
    method: "GET",
    url: `${base_url}tasks/get_task/?task_id={id of the task}`,
    request: `
    const url = '${base_url}tasks/get_task/?task_id=1';
    
    ${make_get_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
          "id": 1,
          "title": "Minute Writing",
          "description": "<p>Writing and submission of last meeting minute</p>",
          "file": null,
          "reward": null,
          "assigned_to": {
              "id": 4,
              "id_no": "kos0008",
              "first_name": "John",
              "last_name": "Doe",
              "email": "johndoe@gmail.com",
              "image": "/media/profile/image/avatar-1.jpg"
          },
          "completed": false,
          "deadline": "2023-11-14T12:00:00Z"
      },
      "message": "task details retrieved"
    }`,
    error_response: `
        {
          'status': 'success',
          'message': 'Invalid task ID'
        }`,
  },
  {
    title: "Create Task",
    value: "create_task",
    method: "POST",
    url: `${base_url}tasks/create_task/`,
    request: `
    const url = "${base_url}tasks/create_task/";

    // form data to be created
    const formData = new FormData();
    formData.append('title', "title-of-task")
    formData.append('description', "description-of-task")
    formData.append('deadline', "datetimefield-for-deadline")
    formData.append('file', fileInput) // if there's a file to work on
    formData.append('employee_id', "ID-number-of-employee-assigned-to")
    formData.append('reward_id', "id-of-selected-reward") // if there's a reward for completing task
    formData.append('api_token', "admin-api-token")
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
        "id": 3,
        "title": "Task Title",
        "description": "<p>Task Description</p>",
        "file": "/media/tasks/files/myfile.doc",
        "reward": null,
        "assigned_to": {
            "id": 5,
            "id_no": "kos0009",
            "first_name": "Jane",
            "last_name": "Doe",
            "email": "janefoster@gmail.com",
            "image": "/media/profile/image/avatar-3.jpg"
        },
        "completed": false,
        "deadline": "2023-11-22T10:15:02Z"
      },
      "message": "task created successfully"
    }`,
    error_response: `
    // error due to existing position
        {
          "status": "error",
          "message": "task already exists"
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
    title: "Edit Task",
    value: "edit_task",
    method: "POST",
    url: `${base_url}tasks/edit_task/`,
    request: `
    const url = "${base_url}tasks/edit_task/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 3); // id of task to be edited
    // items to be edited includes; title, description, employee_id, deadline, completed, reward_id
    formData.append('completed', true);
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
        "id": 3,
        "title": "Task Title",
        "description": "<p>Task Description</p>",
        "file": "/media/tasks/files/myfile.doc",
        "reward": null,
        "assigned_to": {
            "id": 5,
            "id_no": "kos0009",
            "first_name": "Jane",
            "last_name": "Doe",
            "email": "janefoster@gmail.com",
            "image": "/media/profile/image/avatar-3.jpg"
        },
        "completed": true,
        "deadline": "2023-11-22T10:15:02Z"
      },
      "message": "task edited successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "task  with id '3' does not exist"
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
    title: "Delete Task",
    value: "delete_task",
    method: "POST",
    url: `${base_url}tasks/delete_task/`,
    request: `
    const url = "${base_url}tasks/delete_task/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 3); // id of task to be deleted
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "message": "task'Task Title' deleted successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "task with id '3' does not exist"
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
  /* =========================== Query ========================= */
  {
    title: "Get Queries",
    value: "get_queries",
    method: "GET",
    url: `${base_url}queries/get_queries/`,
    request: `
    const url = '${base_url}queries/get_queries/';
    // to filter queries by completed
    const url = '${base_url}queries/get_queries/?completed=true';
    // for pagination
    // to specify the number of items per page (default=20)
    const url = '${base_url}queries/get_queries/?per_page=5'; // returns 5 elements
    // to specify the page number requested (default=page 1)
    const url = '${base_url}queries/get_queries/?page=2'; // returns page 2
    // to perform search operation (the search is made by returning objects whose title contains the searched string)
    const url = '${base_url}queries/get_queries/?search=hunt'; // returns list of objects that contains "hunt" in title
    // to specify multiple parameters, any or all of the above parameters can be combined
    const url = '${base_url}queries/get_queries/?per_page=5&page=1&search=c';
    
    ${make_get_req}`,
    success_response: `
    // when a list is found
    {
      "status": "success",
      "data": [
          {
              "id": 1,
              "title": "Late Coming",
              "query": "<p>It has been brought to notice of the administration abot your constant latecoming, kindly report to the admin office</p>",
              "addressed_to": {
                  "id": 4,
                  "id_no": "kos0008",
                  "first_name": "John",
                  "last_name": "Doe",
                  "email": "johndoe@gmail.com",
                  "image": "/media/profile/image/avatar-1.jpg"
              },
              "addressed": false
          }
      ],
      "message": "query list retrieved",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 1,
      "search_query": ""
    }
    
    // when requested list is empty
    {
      "status": "success",
      "message": "No query found",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 0,
      "search_query": ""
    }`,
    error_response: `
    // error due to
        {
          "status": "error",
          "message": "Error getting query list"
        }`,
  },
  {
    title: "Get Specific Query",
    value: "get_specific_query",
    method: "GET",
    url: `${base_url}queries/get_query/?query_id={id of the task}`,
    request: `
    const url = '${base_url}queries/get_query/?query_id=1';
    
    ${make_get_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
          "id": 1,
          "title": "Late Coming",
          "query": "<p>It has been brought to notice of the administration abot your constant latecoming, kindly report to the admin office</p>",
          "addressed_to": {
              "id": 4,
              "id_no": "kos0008",
              "first_name": "John",
              "last_name": "Doe",
              "email": "johndoe@gmail.com",
              "image": "/media/profile/image/avatar-1.jpg"
          },
          "addressed": false
    },
    "message": "query details retrieved"`,
    error_response: `
        {
          'status': 'success',
          'message': 'Invalid query ID'
        }`,
  },
  {
    title: "Create Query",
    value: "create_query",
    method: "POST",
    url: `${base_url}queries/create_query/`,
    request: `
    const url = "${base_url}queries/create_query/";

    // form data to be created
    const formData = new FormData();
    formData.append('title', "title-of-query")
    formData.append('query', "content-of-query") // you can use text editor for content
    formData.append('employee_id', "ID-number-of-employee-addressed-to")
    formData.append('api_token', "admin-api-token")
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
        "id": 2,
        "title": "title-of-query",
        "query": "content-of-query",
        "addressed_to": {
            "id": 4,
            "id_no": "kos0008",
            "first_name": "John",
            "last_name": "Doe",
            "email": "johndoe@gmail.com",
            "image": "/media/profile/image/avatar-1.jpg"
        },
        "addressed": false
      },
      "message": "query created successfully"
    }`,
    error_response: `
    // error due to invalid employee ID
        {
          "status": "error",
          "message": "invalid employee ID"
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
    title: "Edit Query",
    value: "edit_query",
    method: "POST",
    url: `${base_url}queries/edit_query/`,
    request: `
    const url = "${base_url}queries/edit_query/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 2); // id of query to be edited
    // items to be edited includes; title, query, employee_id, addressed (true/false)
    formData.append('addressed', true);
    formData.append('api_token', "admin-api-token"); // admin api token
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
        "id": 2,
        "title": "title-of-query",
        "query": "content-of-query",
        "addressed_to": {
            "id": 4,
            "id_no": "kos0008",
            "first_name": "John",
            "last_name": "Doe",
            "email": "johndoe@gmail.com",
            "image": "/media/profile/image/avatar-1.jpg"
        },
        "addressed": true
      },
      "message": "query edited successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "query  with id '2' does not exist"
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
    title: "Delete Query",
    value: "delete_query",
    method: "POST",
    url: `${base_url}queries/delete_query/`,
    request: `
    const url = "${base_url}queries/delete_query/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 2); // id of query to be deleted
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "message": "query 'title-of-query' deleted successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "query with id '2' does not exist"
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
  /* =========================== News Category ========================= */
  {
    title: "Get News Categories",
    value: "get_categories",
    method: "GET",
    url: `${base_url}news_categories/get_categories/`,
    request: `
    const url = '${base_url}news_categories/get_categories/';
    // for pagination
    // uses the same pagination and search pattern as other list items
    
    ${make_get_req}`,
    success_response: `
    // when a list is found
    {
      "status": "success",
      "data": [
          {
              "id": 3,
              "title": "Technology",
              "slug": "technology"
          },
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
      ],
      "message": "category list retrieved",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 3,
      "search_query": ""
    }
    
    // when requested list is empty
    {
      "status": "success",
      "message": "No categories found",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 3,
      "search_query": ""
    }`,
    error_response: `
    // error due to
        {
          "status": "error",
          "message": "Error getting category list"
        }`,
  },
  {
    title: "Create A News Category",
    value: "create_category",
    method: "POST",
    url: `${base_url}news_categories/create_category/`,
    request: `
    const url = "${base_url}news_categories/create_category/";

    // form data to be created
    const formData = new FormData();
    formData.append('title', "title-of-category")
    formData.append('api_token', "admin-api-token")
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
          "id": 5,
          "title": "title-of-category"
      },
      "message": "category created successfully"
    }`,
    error_response: `
    // error due to existing category
        {
          "status": "error",
          "message": "category already exists"
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
    title: "Edit Category",
    value: "edit_category",
    method: "POST",
    url: `${base_url}news_categories/edit_category/`,
    request: `
    const url = "${base_url}news_categories/edit_category/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 5); // id of category to be edited
    formData.append('title', "title-of-edited-category");
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
          "id": 5,
          "title": "title-of-edited-category"
      },
      "message": "category edited successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "category  with id '5' does not exist"
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
    title: "Delete Category",
    value: "delete_category",
    method: "POST",
    url: `${base_url}news_categories/delete_category/`,
    request: `
    const url = "${base_url}news_categories/delete_category/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 5); // id of category to be deleted
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "message": "category 'title-of-deleted-category' deleted successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "category with id '5' does not exist"
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
  /* =========================== Bank ========================= */
  {
    title: "Get Banks",
    value: "get_banks",
    method: "GET",
    url: `${base_url}banks/get_banks/`,
    request: `
    const url = '${base_url}banks/get_banks/';
    // for pagination
    // uses the same pagination and search pattern as other list items
    
    ${make_get_req}`,
    success_response: `
    // when a list is found
    {
      "status": "success",
      "data": [
          {
              "id": 1,
              "bank_name": "Access bank",
              "bank_code": "044"
          },
          {
              "id": 2,
              "bank_name": "Diamond bank",
              "bank_code": "063"
          },
          {
              "id": 3,
              "bank_name": "Ecobank Nigeria Plc",
              "bank_code": "050"
          },
          {
              "id": 7,
              "bank_name": "FIRSTMONIE WALLET",
              "bank_code": "928"
          },
          {
              "id": 4,
              "bank_name": "Fidelity bank",
              "bank_code": "070"
          },
          {
              "id": 6,
              "bank_name": "First City Monument Bank Plc (FCMB)",
              "bank_code": "214"
          },
          {
              "id": 5,
              "bank_name": "First bank",
              "bank_code": "011"
          },
          {
              "id": 9,
              "bank_name": "GTBank",
              "bank_code": "058"
          },
          {
              "id": 8,
              "bank_name": "Globus Bank",
              "bank_code": "00103"
          },
          {
              "id": 10,
              "bank_name": "Heritage bank",
              "bank_code": "030"
          }
      ],
      "message": "bank list retrieved",
      "page_number": 1,
      "list_per_page": 10,
      "total_pages": 4,
      "total_items": 34,
      "search_query": ""
    }
    
    // when requested list is empty
    {
      "status": "success",
      "message": "No bank found",
      "page_number": 1,
      "list_per_page": 10,
      "total_pages": 4,
      "total_items": 34,
      "search_query": ""
    }`,
    error_response: `
    // error due to
        {
          "status": "error",
          "message": "Error getting bank list"
        }`,
  },
  {
    title: "Create Bank",
    value: "create_bank",
    method: "POST",
    url: `${base_url}banks/create_bank/`,
    request: `
    const url = "${base_url}banks/create_bank/";

    // form data to be created
    const formData = new FormData();
    formData.append('bank_name', "name-of-bank")
    formData.append('bank_code', "bank-code") // you can get bank code by searching online
    formData.append('api_token', "admin-api-token")
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
          "id": 40,
          "bank_name": "name-of-bank",
          "bank_code": "bank-code"
      },
      "message": "bank created successfully"
    }`,
    error_response: `
    // error due to existing bank
        {
          "status": "error",
          "message": "bank already exists"
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
    title: "Edit Bank",
    value: "edit_bank",
    method: "POST",
    url: `${base_url}banks/edit_bank/`,
    request: `
    const url = "${base_url}banks/edit_bank/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 40); // id of bank to be edited
    formData.append('bank_name', "name-of-edited-bank");
    formData.append('bank_code', "code-of-edited-bank");
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
          "id": 40,
          "bank_name": "name-of-edited-bank",
          "bank_code": "code-of-edited-bank"
      },
      "message": "bank edited successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "bank with id '40' does not exist"
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
    title: "Delete Bank",
    value: "delete_bank",
    method: "POST",
    url: `${base_url}banks/delete_bank/`,
    request: `
    const url = "${base_url}banks/delete_bank/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 40); // id of bank to be deleted
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "message": "bank 'name-of-deleted-bank' deleted successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "bank with id '40' does not exist"
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
  /* =========================== News ========================= */
  {
    title: "Get News List",
    value: "get_news_list",
    method: "GET",
    url: `${base_url}news/news_list/`,
    request: `
    const url = '${base_url}news/news_list/';
    // for pagination
    // uses the same pagination and search pattern as other list items
    // for filtering by active or verified or both
    const url = '${base_url}news/filter_news/?active=true&verified=true';

    ${make_get_req}`,
    success_response: `
    // when a list is found
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
                  "email": "admin@gmail.com",
                  "image": "/media/profile/image/avatar-2.jpg"
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
      "message": "news list retrieved",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 1,
      "search_query": ""
    }
    
    // when requested list is empty
    {
      "status": "success",
      "message": "No news found",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 1,
      "search_query": ""
    }`,
    error_response: `
    // error due to
        {
          "status": "error",
          "message": "Error getting news list"
        }`,
  },
  {
    title: "Get Specific News",
    value: "get_specific_news",
    method: "GET",
    url: `${base_url}news/get_news/?news_id={id of the news}`,
    request: `
    const url = '${base_url}news/get_news/?news_id=1';
    
    ${make_get_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
          "id": 1,
          "author": {
              "id": 3,
              "id_no": null,
              "first_name": "Kosmos",
              "last_name": "Admin",
              "email": "admin@gmail.com",
              "image": "/media/profile/image/avatar-2.jpg"
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
        {
          'status': 'success',
          'message': 'Invalid news ID'
        }`,
  },
  {
    title: "Create News",
    value: "create_news",
    method: "POST",
    url: `${base_url}news/create_news/`,
    request: `
    const url = "${base_url}news/create_news/";

    // form data to be created
    const formData = new FormData();
    formData.append('title', "title-of-news")
    formData.append('post', "content-of-news") // you can use the textarea text editor
    formData.append('verified', true)
    formData.append('active', true) // employees can only see active news
    formData.append('category_id', 1) // id of selected news category
    formData.append('api_token', "admin-api-token")
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
        "id": 1,
        "author": {
            "id": 3,
            "id_no": null,
            "first_name": "Kosmos",
            "last_name": "Admin",
            "email": "admin@gmail.com",
            "image": "/media/profile/image/avatar-2.jpg"
        },
        "title": "title-of-news",
        "slug": "slug-of-title", // generated from title
        "category": {
            "id": 1,
            "title": "Production",
            "slug": "production"
        },
        "date": "2023-11-04T02:02:15Z",
        "active": true,
        "verified": true,
        "post": "content-of-news"
      },
      "message": "news created successfully"
    }`,
    error_response: `
    // error due to invalid category id
        {
          "status": "error",
          "message": "category ith id '1' does not exist"
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
    title: "Edit News",
    value: "edit_news",
    method: "POST",
    url: `${base_url}news/edit_news/`,
    request: `
    const url = "${base_url}news/edit_news/";

    // form data to be created
    // editable content includes; title, post, verified, active, category_id
    const formData = new FormData();
    formData.append('id', 4); // id of news to be edited
    formData.append('post', "edited-content-of-news");
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
        "id": 4,
        "author": {
            "id": 3,
            "id_no": null,
            "first_name": "Kosmos",
            "last_name": "Admin",
            "email": "admin@gmail.com",
            "image": "/media/profile/image/avatar-2.jpg"
        },
        "title": "title-of-news",
        "slug": "slug-of-title", // generated from title
        "category": {
            "id": 1,
            "title": "Production",
            "slug": "production"
        },
        "date": "2023-11-04T02:02:15Z",
        "active": true,
        "verified": true,
        "post": "edited-content-of-news"
      },
      "message": "news edited successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "news with id '4' does not exist"
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
    title: "Delete News",
    value: "delete_news",
    method: "POST",
    url: `${base_url}news/delete_news/`,
    request: `
    const url = "${base_url}news/delete_news/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 4); // id of news to be deleted
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "message": "news 'title-of-deleted-news' deleted successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "news with id '4' does not exist"
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
  /* =========================== Meeting ========================= */
  {
    title: "Get Meetings",
    value: "get_meetings",
    method: "GET",
    url: `${base_url}meetings/get_meetings/`,
    request: `
    const url = '${base_url}meetings/get_meetings/';
    // for pagination
    // uses the same pagination and search pattern as other list items

    ${make_get_req}`,
    success_response: `
    // when a list is found
    {
      "status": "success",
      "data": [
          {
              "id": 1,
              "title": "End Of Week Meeting",
              "description": "<p>A general meeting among departmental heads in the company</p>",
              "date": "2023-11-04T01:01:03Z",
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
      "message": "meeting list retrieved",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 1,
      "search_query": ""
    }
    
    // when requested list is empty
    {
      "status": "success",
      "message": "No news found",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 1,
      "search_query": ""
    }`,
    error_response: `
    // error due to
        {
          "status": "error",
          "message": "Error getting meeting list"
        }`,
  },
  {
    title: "Get Specific Meeting",
    value: "get_specific_meeting",
    method: "GET",
    url: `${base_url}meetings/get_meeting/?meeting_id={id of meeting}`,
    request: `
    const url = '${base_url}meetings/get_meeting/?meeting_id=1';
    
    ${make_get_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
          "id": 1,
          "title": "End Of Week Meeting",
          "description": "<p>A general meeting among departmental heads in the company</p>",
          "date": "2023-11-04T01:01:03Z",
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
    {
      "status": "error",
      "message": "Invalid meeting ID"
    }`,
  },
  {
    title: "Create Meeting",
    value: "create_meeting",
    method: "POST",
    url: `${base_url}meetings/create_meeting/`,
    request: `
    const url = "${base_url}meetings/create_meeting/";

    // form data to be created
    const formData = new FormData();
    formData.append('title', "title-of-meeting")
    formData.append('description', "description-of-meeting")
    formData.append('members', [1, 2, 3]) // array containig the id of the positions of all the members (must be an integer)
    // e.g [1, 2, 3] correspond to ['manager', 'clerk', 'CEO']
    formData.append('api_token', "admin-api-token")
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
        "id": 2,
        "title": "title-of-meeting",
        "description": "description-of-meeting",
        "date": "2023-11-04T01:01:03Z",
        "members": [
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
        ],
        "attended_by": []
      },
      "message": "meeting created successfully"
    }`,
    error_response: `
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
    title: "Edit Meeting",
    value: "edit_meeting",
    method: "POST",
    url: `${base_url}meetings/edit_meeting/`,
    request: `
    const url = "${base_url}meetings/edit_meeting/";

    // form data to be created
    // editable content includes; title, description, members, attended_by
    const formData = new FormData();
    formData.append('id', 2); // id of meeting to be edited
    formData.append('attended_by', [1, 2]); // array containig the id of the positions of attending members (must be an integer)
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
        "id": 2,
        "title": "title-of-meeting",
        "description": "description-of-meeting",
        "date": "2023-11-04T01:01:03Z",
        "members": [
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
        ],
        "attended_by": [
          {
            "id": 1,
            "title": "Manager"
          },
          {
            "id": 2,
            "title": "Clerk"
          }
        ]
      },
      "message": "meeting edited successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "meeting with id '2' does not exist"
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
    title: "Delete Meeting",
    value: "delete_meeting",
    method: "POST",
    url: `${base_url}meetings/delete_meeting/`,
    request: `
    const url = "${base_url}meetings/delete_meeting/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 2); // id of meeting to be deleted
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "message": "meeting 'title-of-deleted-meeting' deleted successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "meeting with id '2' does not exist"
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
  /* =========================== Complaint ========================= */
  {
    title: "Get Complaints",
    value: "get_complaints",
    method: "GET",
    url: `${base_url}complaints/get_complaints/`,
    request: `
    const url = '${base_url}complaints/get_complaints/';
    // to filter complaints by addressed or not addressed
    const url = '${base_url}complaints/get_complaints/?addressed=true';
    // for pagination
    // uses the same pagination and search pattern as other list items

    ${make_get_req}`,
    success_response: `
    // when a list is found
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
                  "email": "johndoe@gmail.com",
                  "image": "/media/profile/image/avatar-1.jpg"
              }
          }
      ],
      "message": "complaint list retrieved",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 1,
      "search_query": ""
    }
    
    // when requested list is empty
    {
      "status": "success",
      "message": "No query found",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 1,
      "search_query": ""
    }`,
    error_response: `
    // error due to
        {
          "status": "error",
          "message": "Error getting complaint list"
        }`,
  },
  {
    title: "Get Specific Complaint",
    value: "get_specific_complaint",
    method: "GET",
    url: `${base_url}complaints/get_complaint/?complaint_id={id of the complaint}`,
    request: `
    const url = '${base_url}complaints/get_complaint/?complaint_id=1';
    
    ${make_get_req}`,
    success_response: `
    {
      "status": "success",
      "data":  {
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
            "email": "johndoe@gmail.com",
            "image": "/media/profile/image/avatar-1.jpg"
        }
    },
    "message": "complaint details retrieved"`,
    error_response: `
        {
          'status': 'success',
          'message': 'Invalid complaint ID'
        }`,
  },
  {
    title: "Edit Complaint",
    value: "edit_complaint",
    method: "POST",
    url: `${base_url}complaints/edit_complaint/`,
    request: `
    const url = "${base_url}complaints/edit_complaint/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 1); // id of complaint to be edited
    // items to be edited includes; addressed (true/false), solution
    formData.append('addressed', true);
    formData.append('solution', 'solution-to-complaint');
    formData.append('api_token', "admin-api-token"); // admin api token
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data":  {
        "id": 1,
        "title": "Lunch Break",
        "complaint": "Our lunch break is too short",
        "proposed_solution": "Kindly make our lunch break at least 30 minutes",
        "addressed": true,
        "solution": "solution-to-complaint",
        "date": "2023-11-04T00:58:56Z",
        "employee": {
            "id": 4,
            "id_no": "kos0008",
            "first_name": "John",
            "last_name": "Doe",
            "email": "johndoe@gmail.com",
            "image": "/media/profile/image/avatar-1.jpg"
        }
      },
      "message": "complaint edited successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "complaint with id '1' does not exist"
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
    title: "Delete Complaint",
    value: "delete_complaint",
    method: "POST",
    url: `${base_url}complaints/delete_complaint/`,
    request: `
    const url = "${base_url}complaints/delete_complaint/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 1); // id of complaint to be deleted
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "message": "complaint 'title-of-complaint' deleted successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "complaint with id '1' does not exist"
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
  /* =========================== Activity Log ========================= */
  {
    title: "Get All Activity Logs",
    value: "get_logs",
    method: "GET",
    url: `${base_url}logs/get_logs/`,
    request: `
    const url = '${base_url}logs/get_logs/';
    // to filter logs of an employee
    const url = '${base_url}logs/get_logs/?employee_id={ID number of emloyee}';
    // for pagination
    // uses the same pagination and search pattern as other list items

    ${make_get_req}`,
    success_response: `
    // when a list is found
    
    {
      "status": "success",
      "data": [
          {
              "id": 2,
              "user": {
                  "id": 4,
                  "id_no": "kos0008",
                  "first_name": "John",
                  "last_name": "Doe",
                  "email": "johndoe@gmail.com",
                  "image": "/media/profile/image/avatar-1.jpg"
              },
              "action": "marked task \"talent hunt\" as completed",
              "date": "2023-11-16T08:31:58.948135Z"
          },
          {
              "id": 1,
              "user": {
                  "id": 3,
                  "id_no": null,
                  "first_name": "Kosmos",
                  "last_name": "Admin",
                  "email": "admin@gmail.com",
                  "image": "/media/profile/image/avatar-2.jpg"
              },
              "action": "created a new position \"Secretary\"",
              "date": "2023-11-16T08:31:26.357842Z"
          }
      ],
      "message": "log list retrieved",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 2,
      "search_query": ""
    }
    
    // when requested list is empty
    {
      "status": "success",
      "message": "No log found",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 2,
      "search_query": ""
    }`,
    error_response: `
    // error due to
        {
          "status": "error",
          "message": "Error getting log list"
        }`,
  },
  /* =========================== Notification ========================= */
  {
    title: "Get Notifications",
    value: "get_notifications",
    method: "GET",
    url: `${base_url}notifications/get_notifications/`,
    request: `
    const url = '${base_url}notifications/get_notifications/';
    // for pagination
    // uses the same pagination and search pattern as other list items

    ${make_get_req}`,
    success_response: `
    // when a list is found
    
    {
      "status": "success",
      "data": [
          {
              "id": 1,
              "verb": "added a new meeting End Of Week Meeting",
              "target_ct": "meeting",
              "created": "2023-11-09T20:12:26.650303Z"
          }
      ],
      "message": "notification list retrieved",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 1,
      "search_query": ""
    }
    
    // when requested list is empty
    {
      "status": "success",
      "message": "No notification found",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 1,
      "search_query": ""
    }`,
    error_response: `
    // error due to
        {
          "status": "error",
          "message": "Error getting notification list"
        }`,
  },
  {
    title: "Delete Notification",
    value: "delete_notification",
    method: "POST",
    url: `${base_url}notifications/delete_notification/`,
    request: `
    const url = "${base_url}notifications/delete_notification/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 5); // id of notification to be deleted
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "message": "notification 'notification-content' deleted successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "notification with id '5' does not exist"
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
  /* =========================== Reward ========================= */
  {
    title: "Get Rewards",
    value: "get_rewards",
    method: "GET",
    url: `${base_url}rewards/get_rewards/`,
    request: `
    const url = '${base_url}rewards/get_rewards/';
    // for pagination
    // uses the same pagination and search pattern as other list items

    ${make_get_req}`,
    success_response: `
    // when a list is found
    {
      "status": "success",
      "data": [
          {
              "id": 1,
              "title": "2 Days Off",
              "description": "A 2 days holiday off work"
          },
          {
              "id": 2,
              "title": "Vacation",
              "description": "An all-expense paid vacation to any African country"
          }
      ],
      "message": "reward list retrieved",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 2,
      "search_query": ""
    }
    
    // when requested list is empty
    {
      "status": "success",
      "message": "No reward found",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 0,
      "search_query": ""
    }`,
    error_response: `
    // error due to
        {
          "status": "error",
          "message": "Error getting reward list"
        }`,
  },
  {
    title: "Get Specific Reward",
    value: "get_specific_reward",
    method: "GET",
    url: `${base_url}rewards/get_reward/?reward_id={id of the position}`,
    request: `
    const url = '${base_url}rewards/get_reward/?reward_id=1';
    
    ${make_get_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
          "id": 1,
          "title": "2 Days Off",
          "description": "A 2 days holiday off work"
      },
      "message": "reward details retrieved"
    }`,
    error_response: `
        {
          'status': 'success',
          'message': 'Invalid reward ID'
        }`,
  },
  {
    title: "Create Reward",
    value: "create_reward",
    method: "POST",
    url: `${base_url}rewards/create_reward/`,
    request: `
    const url = "${base_url}rewards/create_reward/";

    // form data to be created
    const formData = new FormData();
    formData.append('title', "title-of-reward")
    formData.append('description', "description-of-reward")
    formData.append('api_token', "admin-api-token")
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
          "id": 5,
          "title": "title-of-reward",
          "description": "description-of-reward"
      },
      "message": "reward created successfully"
    }`,
    error_response: `
    // error due to existing reward
        {
          "status": "error",
          "message": "reward already exists"
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
    title: "Edit Reward",
    value: "edit_reward",
    method: "POST",
    url: `${base_url}rewards/edit_reward/`,
    request: `
    const url = "${base_url}rewards/edit_reward/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 5); // id of reward to be edited
    // items to be edited are title & description
    formData.append('description', "description-of-edited-reward");
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
          "id": 5,
          "title": "title-of-reward",
          "description": "description-of-edited-reward"
      },
      "message": "reward edited successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "reward with id '5' does not exist"
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
    title: "Delete Reward",
    value: "delete_reward",
    method: "POST",
    url: `${base_url}rewards/delete_reward/`,
    request: `
    const url = "${base_url}rewards/delete_reward/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 5); // id of reward to be deleted
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "message": "reward 'title-of-deleted-reward' deleted successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "reward with id '5' does not exist"
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
  /* =========================== Bank Accounts ========================= */
  {
    title: "Get All Bank Accounts",
    value: "get_bank_accounts",
    method: "GET",
    url: `${base_url}bank_accounts/get_bank_accounts/`,
    request: `
    const url = '${base_url}bank_accounts/get_bank_accounts/';
    // for pagination
    // uses the same pagination and search pattern as other list items
    // search is made against account name, account number & bank name
    ${make_get_req}`,
    success_response: `
    // when a list is found
    
    {
      "status": "success",
      "data": [
          {
              "id": 2,
              "user": {
                  "id": 3,
                  "id_no": null,
                  "first_name": "Kosmos",
                  "last_name": "Admin",
                  "email": "admin@gmail.com",
                  "image": "/media/profile/image/avatar-2.jpg"
              },
              "bank": {
                  "id": 9,
                  "bank_name": "GTBank",
                  "bank_code": "058"
              },
              "account_number": "1345678909",
              "account_name": "Peter John"
          }
      ],
      "message": "bank account list retrieved",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 1,
      "search_query": ""
    }
    
    // when requested list is empty
    {
      "status": "success",
      "message": "No bank account found",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 1,
      "search_query": ""
    }`,
    error_response: `
    // error due to
        {
          "status": "error",
          "message": "Error getting bank account list"
        }`,
  },
  {
    title: "Delete Bank Account",
    value: "delete_bank_account",
    method: "POST",
    url: `${base_url}bank_accounts/delete_bank_account/`,
    request: `
    const url = "${base_url}bank_accounts/delete_bank_account/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 5); // id of bank account to be deleted
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "message": "bank account 'account-name (account-number)' deleted successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "bank account with id '5' does not exist"
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
   /* =========================== Event ========================= */
  {
    title: "Get Events",
    value: "get_events",
    method: "GET",
    url: `${base_url}events/get_events/`,
    request: `
    const url = '${base_url}events/get_events/';
    // for pagination
    // uses the same pagination and search pattern as other list items

    ${make_get_req}`,
    success_response: `
    // when a list is found
    {
        "status": "success",
        "data": [
            {
                "id": 1,
                "title": "End of Year Get Together",
                "description": "<p>A get together party organized at the end of the year to celebrate the company's achievements so far.</p>",
                "date": "2023-11-18T03:16:48Z",
                "location": "The Grand Hotel, Abuja",
                "link": null,
                "invitation": null,
                "directions": "<p>from anywhere, go to abuja and ask for grand hotel, lol</p>"
            }
        ],
        "message": "event list retrieved",
        "page_number": 1,
        "list_per_page": 20,
        "total_pages": 1,
        "total_items": 1,
        "search_query": ""
    }
    
    // when requested list is empty
    {
      "status": "success",
      "message": "No event found",
      "page_number": 1,
      "list_per_page": 20,
      "total_pages": 1,
      "total_items": 1,
      "search_query": ""
    }`,
    error_response: `
    // error due to
        {
          "status": "error",
          "message": "Error getting event list"
        }`,
  },
  {
    title: "Get Specific Event",
    value: "get_specific_event",
    method: "GET",
    url: `${base_url}events/get_event/?event_id={id of the event}`,
    request: `
    const url = '${base_url}events/get_event/?event_id=1';
    
    ${make_get_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
          "id": 1,
          "title": "End of Year Get Together",
          "description": "<p>A get together party organized at the end of the year to celebrate the company's achievements so far.</p>",
          "date": "2023-11-18T03:16:48Z",
          "location": "The Grand Hotel, Abuja",
          "link": null,
          "invitation": null,
          "directions": "<p>from anywhere, go to abuja and ask for grand hotel, lol</p>"
      },
      "message": "event details retrieved"
    }`,
    error_response: `
        {
          'status': 'success',
          'message': 'Invalid event ID'
        }`,
  },
  {
    title: "Create Event",
    value: "create_event",
    method: "POST",
    url: `${base_url}events/create_event/`,
    request: `
    const url = "${base_url}events/create_event/";

    // form data to be created
    const formData = new FormData();
    formData.append('title', "title-of-event")
    formData.append('description', "description-of-event")
    formData.append('date', "date-of-event") // use date-time field instead of date-field
    formData.append('location', "venue-of-event")
    formData.append('link', "link-of-event") // if online link is available
    formData.append('invitation', "image-or-document-of-invitation")
    formData.append('directions', "directions-to-venue")
    formData.append('api_token', "admin-api-token")
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
          "id": 5,
          "title": "title-of-event",
          "description": "<p>description-of-event</p>",
          "date": "date-of-event",
          "location": "venue-of-event",
          "link": "link-of-event",
          "invitation": null,
          "directions": "<p>"directions-to-venue"</p>"
      },
      "message": "event created successfully"
    }`,
    error_response: `
    // error due to existing event
        {
          "status": "error",
          "message": "event already exists"
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
    title: "Edit Event",
    value: "edit_event",
    method: "POST",
    url: `${base_url}events/edit_event/`,
    request: `
    const url = "${base_url}events/edit_event/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 5); // id of event to be edited
    // items to be edited are title, description, location, date, link, invitation, directions
    formData.append('description', "description-of-edited-event");
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "data": {
          "id": 5,
          "title": "title-of-event",
          "description": "<p>description-of-edited-event</p>",
          "date": "date-of-event",
          "location": "venue-of-event",
          "link": "link-of-event",
          "invitation": null,
          "directions": "<p>"directions-to-venue"</p>"
      },
      "message": "reward edited successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "event with id '5' does not exist"
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
    title: "Delete Event",
    value: "delete_event",
    method: "POST",
    url: `${base_url}events/delete_event/`,
    request: `
    const url = "${base_url}events/delete_event/";

    // form data to be created
    const formData = new FormData();
    formData.append('id', 5); // id of event to be deleted
    formData.append('api_token', "admin-api-token");
    ${make_post_req}`,
    success_response: `
    {
      "status": "success",
      "message": "event 'title-of-deleted-event' deleted successfully"
    }`,
    error_response: `
    // error due to invalid id
        {
          "status": "error",
          "message": "event with id '5' does not exist"
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