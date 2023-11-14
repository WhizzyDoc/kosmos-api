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