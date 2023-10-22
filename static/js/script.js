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
})