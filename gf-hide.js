<script type="text/javascript">	

jQuery(document).on('change', '#input_2_34', function() {

    if(jQuery(".chosen-container-single .chosen-single span:contains('FULL')").length){
        jQuery("#field_2_42").hide();

    }
    else 
        jQuery("#field_2_42").show();

});

</script>
