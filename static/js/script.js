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
        const token = 'c29d232d50ca7ee6cfb3eff1ff4610bb43e0ba1a';
        // headers
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        // form data to be created
        const formData = JSON.stringify({
            email: "janefoster@gmail.com",
            first_name: "Jane",
            last_name: "Foster",
            account_type: "employee" // can either be "admin" or "employee"
        })

        fetch(ur, {
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