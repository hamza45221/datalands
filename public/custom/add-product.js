"use strict";

// Class definition
var KTModalCustomersAdd = function () {
    var submitButton;
    var cancelButton;
    var closeButton;
    var validator;
    var form;
    var modal;
    var editor;
    // Init form inputs
    var handleForm = function () {
        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validator = FormValidation.formValidation(
            form,
            {
                fields: {
                    // 'category_id': {
                    //     validators: {
                    //         notEmpty: {
                    //             message: 'Category is required'
                    //         }
                    //     }
                    // },



                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: '.fv-row',
                        eleInvalidClass: '',
                        eleValidClass: ''
                    })
                }
            }
        );

        // Revalidate country field. For more info, plase visit the official plugin site: https://select2.org/
        $(form.querySelector('[name="country"]')).on('change', function() {
            // Revalidate the field when an option is chosen
            validator.revalidateField('country');
        });
        var edit=false;
        var editId=0;
        $(document).on("click",'.btn-edit',function(){
            editId=$(this).attr('data-id');
            console.log($(this).attr('data-dt'));
            var data=JSON.parse($(this).attr('data-dt'));

            // $('[name="category_id"]').val(data.category_id).trigger('change');

            $('[name="hero_sub_heading"]').val(data.hero_sub_heading);
            $('[name="hero_heading1"]').val(data.hero_heading1);
            $('[name="hero_heading2"]').val(data.hero_heading2);
            $('[name="hero_description"]').val(data.hero_description);
            $('[name="dcb_protect_cards"]').val(data.dcb_protect_cards);
            $('[name="slogan_video_img"]').val(data.slogan_video_img);
            $('[name="image"]').val(data.image);
            $('[name="career_billing_heading"]').val(data.career_billing_heading);
            $('[name="career_offer_title"]').val(data.career_offer_title);
            $('[name="career_offer_list"]').val(data.career_offer_list);
            $('[name="masive_fraud_title"]').val(data.masive_fraud_title);
            $('[name="masive_fraud_list"]').val(data.masive_fraud_list);
            $('[name="mid_block_video_img_src_path"]').val(data.mid_block_video_img_src_path);
            $('[name="mid_block_img"]').val(data.mid_block_img);
            $('[name="block_fraud_heading"]').val(data.block_fraud_heading);
            $('[name="mobile_operater_title"]').val(data.mobile_operater_title);
            $('[name="mobile_operater_list"]').val(data.mobile_operater_list);
            $('[name="merchants_title"]').val(data.merchants_title);
            $('[name="merchants_list"]').val(data.merchants_list);
            $('[name="less_fruad_heading"]').val(data.less_fruad_heading);
            $('[name="less_fruad_card"]').val(data.less_fruad_card);
            $('[name="less_fruad_mention_card_title"]').val(data.less_fruad_mention_card_title);
            $('[name="less_fruad_mention_name"]').val(data.less_fruad_mention_name);
            $('[name="less_fruad_mention_sub_title"]').val(data.less_fruad_mention_sub_title);
            $('[name="cyber_technology_description"]').val(data.cyber_technology_description);
            $('[name="fraud_attempts_title"]').val(data.fraud_attempts_title);
            $('[name="fraud_attempts"]').val(data.fraud_attempts);
            $('[name="false_positive_rate_title"]').val(data.false_positive_rate_title);
            $('[name="false_positive_rate"]').val(data.false_positive_rate);
            $('[name="latency_title"]').val(data.latency_title);
            $('[name="latency"]').val(data.latency);
            $('[name="fraud_detected_type_title1"]').val(data.fraud_detected_type_title1);
            $('[name="fraud_detected_type_title2"]').val(data.fraud_detected_type_title2);
            $('[name="fraud_detected_type_faq"]').val(data.fraud_detected_type_faq);
            $('[name="integration_payment_title"]').val(data.integration_payment_title);
            $('[name="integration_payment_list"]').val(data.integration_payment_list);
            $('[name="gdpr_complaint_title"]').val(data.gdpr_complaint_title);
            $('[name="gdpr_complaint_list"]').val(data.gdpr_complaint_list);
            $('[name="moniter_analyze_title"]').val(data.moniter_analyze_title);
            $('[name="moniter_analyze_image"]').val(data.moniter_analyze_image);
            $('[name="moniter_analyze_list"]').val(data.moniter_analyze_list);
            $('[name="api_documentation_btn"]').val(data.api_documentation_btn);
            $('[name="api_documentation_btn_url"]').val(data.api_documentation_btn_url);
            $('[name="decrease_fraud_heading1"]').val(data.decrease_fraud_heading1);
            $('[name="decrease_fraud_heading2"]').val(data.decrease_fraud_heading2);


            $('[name=id]').val(editId);
            $('#main_image').attr('src',data.main_image_1)



            edit=true;
            console.log(data.description);
            editor.setData(data.description);
        })
        $('#kt_modal_add_customer').on('hide.bs.modal',function(){
            edit=false;
            $('input[name=hero_sub_heading]').val('');
            $('input[name=hero_heading1]').val('');
            $('input[name=hero_heading2]').val('');
            $('input[name=hero_description]').val('');
            $('input[name=dcb_protect_cards]').val('');
            $('input[name=slogan_video_img]').val('');
            $('input[name=image]').val('');
            $('input[name=career_billing_heading]').val('');
            $('input[name=career_offer_title]').val('');
            $('input[name=career_offer_list]').val('');
            $('input[name=masive_fraud_title]').val('');
            $('input[name=masive_fraud_list]').val('');
            $('input[name=mid_block_video_img_src_path]').val('');
            $('input[name=mid_block_img]').val('');
            $('input[name=block_fraud_heading]').val('');
            $('input[name=mobile_operater_title]').val('');
            $('input[name=mobile_operater_list]').val('');
            $('input[name=merchants_title]').val('');
            $('input[name=merchants_list]').val('');
            $('input[name=less_fruad_heading]').val('');
            $('input[name=less_fruad_card]').val('');
            $('input[name=less_fruad_mention_card_title]').val('');
            $('input[name=less_fruad_mention_name]').val('');
            $('input[name=less_fruad_mention_sub_title]').val('');
            $('input[name=cyber_technology_description]').val('');
            $('input[name=fraud_attempts_title]').val('');
            $('input[name=fraud_attempts]').val('');
            $('input[name=false_positive_rate_title]').val('');
            $('input[name=false_positive_rate]').val('');
            $('input[name=latency_title]').val('');
            $('input[name=latency]').val('');
            $('input[name=fraud_detected_type_title1]').val('');
            $('input[name=fraud_detected_type_title2]').val('');
            $('input[name=fraud_detected_type_faq]').val('');
            $('input[name=integration_payment_title]').val('');
            $('input[name=integration_payment_list]').val('');
            $('input[name=gdpr_complaint_title]').val('');
            $('input[name=gdpr_complaint_list]').val('');
            $('input[name=moniter_analyze_title]').val('');
            $('input[name=moniter_analyze_image]').val('');
            $('input[name=moniter_analyze_list]').val('');
            $('input[name=api_documentation_btn]').val('');
            $('input[name=api_documentation_btn_url]').val('');
            $('input[name=decrease_fraud_heading1]').val('');
            $('input[name=decrease_fraud_heading2]').val('');

            console.log('modal hide');

        });

        // Action buttons
        submitButton.addEventListener('click', function (e) {
            e.preventDefault();

            // Validate form before submit
            if (validator) {
                validator.validate().then(function (status) {
                    console.log('validated!');

                    if (status == 'Valid') {
                        var formData=new FormData($('#kt_modal_add_customer_form')[0]);
                        if (edit==true){
                            formData.append('edit',true);
                            formData.append('id',editId);
                        }
                        submitButton.setAttribute('data-kt-indicator', 'on');

                        // Disable submit button whilst loading
                        submitButton.disabled = true;
                        $.ajax({
                            url: $('#kt_modal_add_customer_form').attr('action'),
                            method: $('#kt_modal_add_customer_form').attr('method'),
                            data:formData,
                            cache : false,
                            processData: false,
                            contentType: false,
                            success:function(data){
                                submitButton.removeAttribute('data-kt-indicator');
                                edit=false;

                                if(data.success){
                                    swal.fire({
                                        text: "Thank you! You've updated your basic info",
                                        icon: "success",
                                        buttonsStyling: false,
                                        confirmButtonText: "Ok, got it!",
                                        customClass: {
                                            confirmButton: "btn fw-bold btn-light-primary"
                                        }
                                    });
                                    modal.hide();
                                }else {
                                    swal.fire({
                                        text: data.message,
                                        icon: "error",
                                        buttonsStyling: false,
                                        confirmButtonText: "Ok, got it!",
                                        customClass: {
                                            confirmButton: "btn fw-bold btn-light-primary"
                                        }
                                    });
                                }



                                // Enable submit button after loading
                                submitButton.disabled = false;
                                $('#kt_customers_table').DataTable().ajax.reload(null, false);
                                // setTimeout(function(){
                                //     window.location.reload();
                                // },500)

                            },
                            error:function(error){

                            }
                        });
                    } else {
                        Swal.fire({
                            text: "Sorry, looks like there are some errors detected, please try again.",
                            icon: "error",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn btn-primary"
                            }
                        });
                    }
                });
            }
        });

        cancelButton.addEventListener('click', function (e) {
            e.preventDefault();

            Swal.fire({
                text: "Are you sure you would like to cancel?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, cancel it!",
                cancelButtonText: "No, return",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form
                    modal.hide(); // Hide modal
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Your form has not been cancelled!.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary",
                        }
                    });
                }
            });
        });

        closeButton.addEventListener('click', function(e){
            e.preventDefault();

            Swal.fire({
                text: "Are you sure you would like to cancel?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, cancel it!",
                cancelButtonText: "No, return",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form
                    modal.hide(); // Hide modal
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Your form has not been cancelled!.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary",
                        }
                    });
                }
            });
        })
    }

    return {
        // Public functions
        init: function () {
            // Elements
            modal = new bootstrap.Modal(document.querySelector('#kt_modal_add_customer'));

            form = document.querySelector('#kt_modal_add_customer_form');
            submitButton = form.querySelector('#kt_modal_add_customer_submit');
            cancelButton = form.querySelector('#kt_modal_add_customer_cancel');
            closeButton = form.querySelector('#kt_modal_add_customer_close');
            ClassicEditor
                .create(document.querySelector('#kt_docs_ckeditor_classic'))
                .then(myEditor => {
                    console.log(editor);
                    editor=myEditor;
                })
                .catch(error => {
                    console.error(error);
                });
            handleForm();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTModalCustomersAdd.init();
});
