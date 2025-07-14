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
                    'news_category_id': {
                        validators: {
                            notEmpty: {
                                message: 'Category is required'
                            }
                        }
                    },
                    'main_heading': {
                        validators: {
                            notEmpty: {
                                message: 'Main heading is required'
                            }
                        }
                    },
                    'skip_btn': {
                        validators: {
                            notEmpty: {
                                message: 'Skip btn is required'
                            }
                        }
                    },
                    'skip_btn_url': {
                        validators: {
                            notEmpty: {
                                message: 'Skip btn url is required'
                            }
                        }
                    },
                    'date': {
                        validators: {
                            notEmpty: {
                                message: 'Date is required'
                            }
                        }
                    },
                    'content_description': {
                        validators: {
                            notEmpty: {
                                message: 'Content Description is required'
                            }
                        }
                    },
                    'title1': {
                        validators: {
                            notEmpty: {
                                message: 'Title 1 is required'
                            }
                        }
                    },
                    'title2': {
                        validators: {
                            notEmpty: {
                                message: 'Title 2 is required'
                            }
                        }
                    },
                    'sub_title': {
                        validators: {
                            notEmpty: {
                                message: 'Sub Title is required'
                            },
                            uri: {
                                message: 'The value is not a valid URL'
                            }
                        }
                    },
                    'news_intro': {
                        validators: {
                            notEmpty: {
                                message: 'News Intro icon is required'
                            }
                        }
                    },
                    'disclaimer': {
                        validators: {
                            notEmpty: {
                                message: 'Disclaimer is required'
                            },
                            uri: {
                                message: 'The value is not a valid URL'
                            }
                        }
                    },


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

            $('[name="news_category_id"]').val(data.news_category_id).trigger('change');

            $('[name="main_heading"]').val(data.main_heading);
            $('[name="skip_btn"]').val(data.skip_btn);
            $('[name="skip_btn_url"]').val(data.skip_btn_url);
            $('[name="date"]').val(data.date);
            $('[name="content_description"]').val(data.content_description);
            $('[name="title1"]').val(data.title1);
            $('[name="title2"]').val(data.title2);
            $('[name="sub_title"]').val(data.sub_title);
            $('[name="news_intro"]').val(data.news_intro);
            $('[name="disclaimer"]').val(data.disclaimer);



            $('[name=id]').val(editId);
            $('#post_content_image').attr('src',data.main_image_1)



            edit=true;
            console.log(data.description);
            editor.setData(data.description);
        })
        $('#kt_modal_add_customer').on('hide.bs.modal',function(){
            edit=false;
            $('input[name=main_heading]').val('');
            $('input[name=skip_btn]').val('');
            $('input[name=skip_btn_url]').val('');
            $('input[name=date]').val('');
            $('input[name=content_description]').val('');
            $('input[name=title1]').val('');
            $('input[name=title2]').val('');
            $('input[name=sub_title]').val('');
            $('input[name=news_intro]').val('');
            $('input[name=disclaimer]').val('');
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
