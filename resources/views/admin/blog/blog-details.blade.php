@extends('layouts.mainadmin')

@section('content')
    <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
        <!--begin::Content wrapper-->
        <div class="d-flex flex-column flex-column-fluid">
            <!--begin::Toolbar-->
            <div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
                <!--begin::Toolbar container-->
                <div id="kt_app_toolbar_container" class="app-container container-xxl d-flex flex-stack">
                    <!--begin::Page title-->
                    <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                        <!--begin::Title-->
                        <h1 class="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">Hero Main</h1>
                        <!--end::Title-->
                        <!--begin::Breadcrumb-->
                        <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                            <!--begin::Item-->
                            <li class="breadcrumb-item text-muted">
                                <a href="{{route('admin.dashboard')}}" class="text-muted text-hover-primary">Admin</a>
                            </li>
                            <!--end::Item-->
                            <!--begin::Item-->
                            <li class="breadcrumb-item">
                                <span class="bullet bg-gray-500 w-5px h-2px"></span>
                            </li>
                            <!--end::Item-->
                            <!--begin::Item-->
                            <li class="breadcrumb-item text-muted">Hero Main</li>

                            <!--end::Item-->
                            <!--begin::Item-->
                            <!--end::Item-->
                        </ul>
                        <!--end::Breadcrumb-->
                    </div>
                    <!--end::Page title-->
                    <!--begin::Actions-->

                    <!--end::Actions-->
                </div>
                <!--end::Toolbar container-->
            </div>
            <!--end::Toolbar-->
            <!--begin::Content-->
            <div id="kt_app_content" class="app-content flex-column-fluid">
                <!--begin::Content container-->
                <div id="kt_app_content_container" class="app-container container-xxl">
                    <!--begin::Card-->
                    <!--begin::Card-->
                    <div class="card">
                        <!--begin::Card header-->
                        <div class="card-header border-0 pt-6">
                            <!--begin::Card title-->
                            <div class="card-title">
                                <!--begin::Search-->
                                {{--                                <div class="d-flex align-items-center position-relative my-1">--}}
                                {{--                                    <i class="ki-outline ki-magnifier fs-3 position-absolute ms-5"></i>--}}
                                {{--                                    <input type="text" data-kt-customer-table-filter="search" class="form-control form-control-solid w-250px ps-12" placeholder="Search Project" />--}}
                                {{--                                </div>--}}
                                <!--end::Search-->
                            </div>
                            <!--begin::Card title-->
                            <!--begin::Card toolbar-->
                            <div class="card-toolbar">
                                <!--begin::Toolbar-->
                                <div class="d-flex justify-content-end" data-kt-customer-table-toolbar="base">
                                    <!--begin::Filter-->

                                    <!--begin::Export-->

                                    <!--end::Export-->
                                    <!--begin::Add customer-->
                                    {{--                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_customer">Add Project</button>--}}
                                    <!--end::Add customer-->
                                </div>
                                <!--end::Toolbar-->
                                <!--begin::Group actions-->
                                {{--                                <div class="d-flex justify-content-end align-items-center d-none" data-kt-customer-table-toolbar="selected">--}}
                                {{--                                    <div class="fw-bold me-5">--}}
                                {{--                                        <span class="me-2" data-kt-customer-table-select="selected_count"></span>Selected</div>--}}
                                {{--                                    <button type="button" data-url="{{route('admin.blog.delete.multiple')}}" class="btn btn-danger" data-kt-customer-table-select="delete_selected">Delete Selected</button>--}}
                                {{--                                </div>--}}
                                <!--end::Group actions-->
                            </div>
                            <!--end::Card toolbar-->
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body pt-0">
                            <form  method="POST" action="{{ route('admin.learn.blog.detail.store') }}" enctype="multipart/form-data" id="kt_modal_add_customer_form">
                                @csrf

                                <div class="repeater">
                                    <div data-repeater-list="blogs">
                                        @foreach($learn_blog_details as $blog)
                                            <div data-repeater-item class="border rounded p-4 mb-4">
                                                <div class="row">

                                                    <!-- Category Dropdown -->
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Select Category</label>
                                                        <select name="category_id" class="form-control" required>
                                                            <option value="">Choose category</option>
                                                            @foreach(App\Models\BlogCategory::all() as $category)
                                                                <option value="{{ $category->id }}" {{ $blog->category_id == $category->id ? 'selected' : '' }}>
                                                                    {{ $category->name }}
                                                                </option>
                                                            @endforeach
                                                        </select>
                                                    </div>

                                                    <!-- Blog Mini Title -->
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Blog Mini Title</label>
                                                        <input type="text" name="mini_title" class="form-control" value="{{ $blog->mini_title }}" required>
                                                    </div>

                                                    <!-- Blog Title -->
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Blog Title</label>
                                                        <input type="text" name="title" class="form-control" value="{{ $blog->title }}" required>
                                                    </div>

                                                    <!-- Mini Title -->
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Mini Title</label>
                                                        <input type="text" name="mini_title" class="form-control" value="{{ $blog->mini_title }}" required>
                                                    </div>

                                                    <!-- Blog Date -->
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Date</label>
                                                        <input type="date" name="date" class="form-control" value="{{ $blog->date }}" required>
                                                    </div>

                                                    <!-- Main Image (Path) -->
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Main Image Path</label>
                                                        <input type="text" name="main_image" class="form-control" value="{{ $blog->main_image }}" required>
                                                    </div>

                                                    <!-- Main Paragraph -->
                                                    <div class="col-md-12 mb-3">
                                                        <label class="form-label">Main Paragraph</label>
                                                        <textarea name="main_paragraph" rows="3" class="form-control" required>{{ $blog->main_paragraph }}</textarea>
                                                    </div>


                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Share Title</label>
                                                        <input type="text" name="share_title" class="form-control" value="{{ $blog->share_title }}" required>
                                                    </div>


                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">linkedin url</label>
                                                        <input type="text" name="linkedin_url" class="form-control" value="{{ $blog->linkedin_url }}" required>
                                                    </div>

                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">linkedin icon </label>
                                                        <input type="text" name="linkedin_icon" class="form-control" value="{{ $blog->linkedin_icon }}" required>

                                                    </div>


                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">facebook url</label>
                                                        <input type="text" name="facebook_url" class="form-control" value="{{ $blog->facebook_url }}" required>
                                                    </div>

                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">facebook icon </label>
                                                        <input type="text" name="facebook_icon" class="form-control" value="{{ $blog->facebook_icon }}" required>
                                                    </div>

                                                    <!-- Quick Answer Title -->
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Quick Answer Title</label>
                                                        <input type="text" name="quick_ans_title" class="form-control" value="{{ $blog->quick_ans_title }}" required>
                                                    </div>

                                                    <!-- Quick Answer Description -->
                                                    <div class="col-md-12 mb-3">
                                                        <label class="form-label">Quick Answer Description</label>
                                                        <textarea name="quick_ans_description" rows="3" class="form-control ckeditor" >{{ $blog->quick_ans_description }}</textarea>
                                                    </div>

                                                    <!-- Goal Title -->
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Goal Title</label>
                                                        <input type="text" name="goal_title" class="form-control" value="{{ $blog->goal_title }}" required>
                                                    </div>

                                                    <!-- Goal Description -->
                                                    <div class="col-md-12 mb-3">
                                                        <label class="form-label">Goal Description</label>
                                                        <textarea name="goal_description" rows="3" class="form-control ckeditor" >{{ $blog->goal_description }}</textarea>
                                                    </div>

                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Purchase url</label>
                                                        <input type="text" name="purchase_url" class="form-control" value="{{ $blog->purchase_url }}" required>
                                                    </div>

                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Purchase title</label>
                                                        <input type="text" name="purchase_title" class="form-control" value="{{ $blog->purchase_title }}" required>
                                                    </div>

                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Home buy timeline title</label>
                                                        <input type="text" name="home_buy_timeline_title" class="form-control" value="{{ $blog->home_buy_timeline_title }}" required>
                                                    </div>

                                                    <div class="col-md-12 mb-3">
                                                        <label class="form-label">home buying timeline description step 1 2</label>
                                                        <textarea name="home_buying_timeline_description_step_1_2" rows="4" class="form-control ckeditor" >{{ $blog->home_buying_timeline_description_step_1_2 }}</textarea>
                                                    </div>

                                                    <div class="col-md-12 mb-3">
                                                        <label class="form-label">home buying timeline description step 3 </label>
                                                        <textarea name="home_buying_timeline_description_step_3" rows="4" class="form-control ckeditor" >{{ $blog->home_buying_timeline_description_step_3 }}</textarea>
                                                    </div>

                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Bottom line title</label>
                                                        <input type="text" name="bottom_line_title" class="form-control" value="{{ $blog->bottom_line_title }}" required>
                                                    </div>

                                                    <div class="col-md-12 mb-3">
                                                        <label class="form-label">Bottom line description </label>
                                                        <textarea name="bottom_line_description" rows="4" class="form-control ckeditor" >{{ $blog->bottom_line_description }}</textarea>
                                                    </div>

                                                    <!-- Remove Button -->
                                                    <div class="col-md-12">
                                                        <button type="button" data-repeater-delete class="btn btn-danger">Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>

                                    <!-- Add New Repeater Button -->
                                    <div class="mb-3">
                                        <button type="button" data-repeater-create class="btn btn-secondary">Add New Blog</button>
                                    </div>
                                </div>

                                <!-- Submit Button -->
                                <div class="fv-row mt-4">
                                    <button type="submit" class="btn btn-lg btn-primary">Submit</button>
                                </div>
                            </form>


                        </div>
                        <!--end::Card body-->
                    </div>
                    <!--end::Card-->


                    <!--end::Card-->
                </div>
                <!--end::Content container-->
            </div>
            <!--end::Content-->
        </div>
        <!--end::Content wrapper-->
        <!--begin::Footer-->
        <div id="kt_app_footer" class="app-footer">
            <!--begin::Footer container-->
            <div class="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                <!--begin::Copyright-->
                <div class="text-gray-900 order-2 order-md-1">
                    <span class="text-muted fw-semibold me-1">2024&copy;</span>
                    <a href="https://keenthemes.com" target="_blank" class="text-gray-800 text-hover-primary">Keenthemes</a>
                </div>
                <!--end::Copyright-->
                <!--begin::Menu-->
                <ul class="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                    <li class="menu-item">
                        <a href="https://keenthemes.com" target="_blank" class="menu-link px-2">About</a>
                    </li>
                    <li class="menu-item">
                        <a href="https://devs.keenthemes.com" target="_blank" class="menu-link px-2">Support</a>
                    </li>
                    <li class="menu-item">
                        <a href="https://1.envato.market/Vm7VRE" target="_blank" class="menu-link px-2">Purchase</a>
                    </li>
                </ul>
                <!--end::Menu-->
            </div>
            <!--end::Footer container-->
        </div>
        <!--end::Footer-->
    </div>

@endsection

@section('scripts')
    <script>
        var fetchUrl='{{route('admin.blog.fetch')}}';
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.repeater/1.2.1/jquery.repeater.min.js"></script>

    <script src="{{ asset('admin_assets/plugins/custom/ckeditor/ckeditor-classic.bundle.js') }}"></script>
    <script src="{{ asset('custom/blogs.js') }}"></script>
    <script src="{{ asset('custom/add-blog.js') }}"></script>


    <script>
        let editorInstances = [];

        function initCKEditor(textarea) {
            ClassicEditor
                .create(textarea)
                .then(editor => {
                    textarea.editorInstance = editor;
                    editorInstances.push(editor);
                })
                .catch(error => console.error(error));
        }

        function destroyCKEditor(textarea) {
            if (textarea.editorInstance) {
                textarea.editorInstance.destroy()
                    .then(() => {
                        textarea.editorInstance = null;
                    })
                    .catch(err => console.error('Destroy Error:', err));
            }
        }

        function reinitEditorsIn(container) {
            container.querySelectorAll('textarea.ckeditor').forEach(textarea => {
                // Avoid duplicating editor on already-initialized textareas
                if (!textarea.editorInstance) {
                    textarea.value = ""; // Clear value ONLY for new textarea
                    initCKEditor(textarea);
                }
            });
        }

        $(document).ready(function () {
            $('.repeater').repeater({
                initEmpty: false,
                show: function () {
                    $(this).slideDown();
                    setTimeout(() => {
                        reinitEditorsIn(this); // only initialize CKEditor in the new repeater block
                    }, 200);
                },
                hide: function (deleteElement) {
                    $(this).slideUp(deleteElement, function () {
                        // Destroy editors inside this repeater block
                        $(this).find('textarea.ckeditor').each(function () {
                            destroyCKEditor(this);
                        });
                    });
                }
            });

            // Initial CKEditor load for all existing fields
            document.querySelectorAll('textarea.ckeditor').forEach(textarea => {
                initCKEditor(textarea);
            });
        });
        // Append deleted IDs to the form before submit
        $('#kt_modal_add_customer_form').on('submit', function () {
            for (let id of deletedBlogIds) {
                $('<input>').attr({
                    type: 'hidden',
                    name: 'deleted_ids[]',
                    value: id
                }).appendTo(this);
            }
        });


    </script>
@endsection
