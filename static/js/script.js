$(document).ready(function() {
    $('.api-option').on('change', function() {
        var val = $(this).val();
        val = '#' + val;
        location.href = val;
    });
    $('.lang-sel').on('change', function() {
        $(this).parent('.code-header').siblings('pre').children('code').hide();
        var val = $(this).val();
        val = '.' + val;
        //alert(val)
        $(this).parent('.code-header').siblings('pre').children(val).show();
    })

    $('.res-sel').on('change', function() {
        $(this).parent('.code-header').siblings('pre').children('code').hide();
        var val = $(this).val();
        val = '.' + val;
        //alert(val)
        $(this).parent('.code-header').siblings('pre').children(val).show();
    })

    $('.post-test-btn').click(function() {
        var url = `http://127.0.0.1:8000/api/v1/profile/create_account/`;
;
        // headers
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        // form data to be created
        /*
        const formData = JSON.stringify({
            email: "johndoe@gmail.com",
            middle_name: "G.",
            position: 2,
            department: 2,
            title: "Mr",
            salary: 50000.00,
            phone_number: "08123456787",
            address: "Block 2, Corona Street",
            nationality: "Nigeria"
        })
        const formData = JSON.stringify({
            email: "janefoster@gmail.com",
            first_name: "Jane",
            last_name: "Foster",
            account_type: "employee"
        })
        */
        const formData = JSON.stringify({
            email: "peterparker@gmail.com",
            first_name: "Peter",
            last_name: "Parker",
            account_type: "employee" // can either be "admin", "staff" or "employee"
          })

        fetch(url, {
            method: 'POST',
            headers: headers,
            body: formData
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    })

    $('.get-test-btn').click(function() {
        var url = `http://127.0.0.1:8000/api/v1/site/get_site_info/`;
        
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    })
})

function loadMenu(a) {
    var x;
    if(a == "admin") {x = admin}
    else if(a == "employee") {x = employee}
    for (var i in x) {
        var temp = `<option value="${x[i].value}">
        ${x[i].title}
        </option>`;
        $('.api-option').append(temp);
    }
}

function loadApi(a) {
    var x;
    if(a == "admin") {x = admin}
    else if(a == "employee") {x = employee}
    for (var i in x) {
        var temp = `
        <section id="${x[i].value}" class="w-card w-padding">
            <h5 class="w-bold-x mb-3">${x[i].title}</h5>
            <div class="table-responsive">
              <table class="table">
                <tbody>
                  <tr>
                    <td>Method</td>
                    <td>${x[i].method}</td>
                  </tr>
                  <tr>
                    <td>URL</td>
                    <td>${x[i].url}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <section>
                <div class="code-header">
                    <div>Request</div>
                    <select class="lang-sel">
                        <option selected value="axios">Axios</option>
                    </select>
                </div>
<pre aria-hidden="true">
<code class="language-javascript highlighting-content axios">
${x[i].request}
</code>
</pre>
</section>
<section>
  <div class="code-header">
    <div>Response</div>
    <select class="res-sel">
      <option selected value="success">success</option>
      <option value="error">error</option>
    </select>
  </div>            
  <pre aria-hidden="true">
  <code class="language-javascript highlighting-content success">
  ${x[i].success_response}
  </code>
  <code class="language-javascript highlighting-content error">
  ${x[i].error_response}
  </code>
  </pre>
</section>

</section>
        `;
        $('main').append(temp);
    }
}