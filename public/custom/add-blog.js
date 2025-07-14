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
                    'category_id': {
                        validators: {
                            notEmpty: {
                                message: 'Category is required'
                            }
                        }
                    },
                    'mini_title': {
                        validators: {
                            notEmpty: {
                                message: 'Blog Mini Title is required'
                            }
                        }
                    },
                    'title': {
                        validators: {
                            notEmpty: {
                                message: 'Blog Title is required'
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
                    'main_image': {
                        validators: {
                            notEmpty: {
                                message: 'Main Image Path is required'
                            }
                        }
                    },
                    'main_paragraph': {
                        validators: {
                            notEmpty: {
                                message: 'Main Paragraph is required'
                            }
                        }
                    },
                    'share_title': {
                        validators: {
                            notEmpty: {
                                message: 'Share Title is required'
                            }
                        }
                    },
                    'linkedin_url': {
                        validators: {
                            notEmpty: {
                                message: 'LinkedIn URL is required'
                            },
                            uri: {
                                message: 'The value is not a valid URL'
                            }
                        }
                    },
                    'linkedin_icon': {
                        validators: {
                            notEmpty: {
                                message: 'LinkedIn icon is required'
                            }
                        }
                    },
                    'facebook_url': {
                        validators: {
                            notEmpty: {
                                message: 'Facebook URL is required'
                            },
                            uri: {
                                message: 'The value is not a valid URL'
                            }
                        }
                    },
                    'facebook_icon': {
                        validators: {
                            notEmpty: {
                                message: 'Facebook icon is required'
                            }
                        }
                    },
                    'quick_ans_title': {
                        validators: {
                            notEmpty: {
                                message: 'Quick Answer Title is required'
                            }
                        }
                    },
                    'quick_ans_description': {
                        validators: {
                            notEmpty: {
                                message: 'Quick Answer Description is required'
                            }
                        }
                    },
                    'goal_title': {
                        validators: {
                            notEmpty: {
                                message: 'Goal Title is required'
                            }
                        }
                    },
                    'goal_description': {
                        validators: {
                            notEmpty: {
                                message: 'Goal Description is required'
                            }
                        }
                    },
                    'purchase_url': {
                        validators: {
                            notEmpty: {
                                message: 'Purchase URL is required'
                            },
                            uri: {
                                message: 'The value is not a valid URL'
                            }
                        }
                    },
                    'purchase_title': {
                        validators: {
                            notEmpty: {
                                message: 'Purchase Title is required'
                            }
                        }
                    },
                    'home_buy_timeline_title': {
                        validators: {
                            notEmpty: {
                                message: 'Home Buy Timeline Title is required'
                            }
                        }
                    },


                    'bottom_line_title': {
                        validators: {
                            notEmpty: {
                                message: 'Bottom Line Title is required'
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

            $('[name="category_id"]').val(data.category_id).trigger('change');

            $('[name="mini_title"]').val(data.mini_title);
            $('[name="title"]').val(data.title);
            $('[name="date"]').val(data.date);
            $('[name="main_paragraph"]').val(data.main_paragraph);

            $('[name="share_title"]').val(data.share_title);
            $('[name="linkedin_url"]').val(data.linkedin_url);
            $('[name="linkedin_icon"]').val(data.linkedin_icon);
            $('[name="facebook_url"]').val(data.facebook_url);
            $('[name="facebook_icon"]').val(data.facebook_icon);

            $('[name="quick_ans_title"]').val(data.quick_ans_title);
            $('[name="quick_ans_description"]').val(data.quick_ans_description);

            $('[name="goal_title"]').val(data.goal_title);
            $('[name="goal_description"]').val(data.goal_description);

            $('[name="purchase_url"]').val(data.purchase_url);
            $('[name="purchase_title"]').val(data.purchase_title);

            $('[name="home_buy_timeline_title"]').val(data.home_buy_timeline_title);
            $('[name="home_buying_timeline_description_step_1_2"]').val(data.home_buying_timeline_description_step_1_2);
            $('[name="home_buying_timeline_description_step_3"]').val(data.home_buying_timeline_description_step_3);

            $('[name="bottom_line_title"]').val(data.bottom_line_title);
            $('[name="bottom_line_description"]').val(data.bottom_line_description);

            $('[name=id]').val(editId);
            $('#main_image').attr('src',data.main_image_1)



            edit=true;
            console.log(data.description);
            editor.setData(data.description);
        })
        $('#kt_modal_add_customer').on('hide.bs.modal',function(){
            edit=false;
            $('input[name=name]').val('');
            $('input[name=department_id]').val('');
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
