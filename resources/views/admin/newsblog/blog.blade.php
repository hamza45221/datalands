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
                        <h1 class="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0"> News Blogs</h1>
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
                            <li class="breadcrumb-item text-muted"> News Blogs</li>

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
                                <div class="d-flex align-items-center position-relative my-1">
                                    <i class="ki-outline ki-magnifier fs-3 position-absolute ms-5"></i>
                                    <input type="text" data-kt-customer-table-filter="search" class="form-control form-control-solid w-250px ps-12" placeholder="Search Blog" />
                                </div>
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
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_customer">Add News Blog</button>
                                    <!--end::Add customer-->
                                </div>
                                <!--end::Toolbar-->
                                <!--begin::Group actions-->
                                <div class="d-flex justify-content-end align-items-center d-none" data-kt-customer-table-toolbar="selected">
                                    <div class="fw-bold me-5">
                                        <span class="me-2" data-kt-customer-table-select="selected_count"></span>Selected</div>
                                    <button type="button" data-url="{{route('admin.news.blog.delete.multiple')}}" class="btn btn-danger" data-kt-customer-table-select="delete_selected">Delete Selected</button>
                                </div>
                                <!--end::Group actions-->
                            </div>
                            <!--end::Card toolbar-->
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body pt-0">
                            <!--begin::Table-->
                            <table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_customers_table">
                                <thead>
                                <tr class="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
                                    <th class="w-10px pe-2">
                                        <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                                            <input class="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_customers_table .form-check-input" value="1" />
                                        </div>
                                    </th>
                                    <th class="min-w-125px">Image</th>
                                    <th class="min-w-125px">Main Heading</th>
                                    <th class="min-w-125px">Date</th>
                                    <th class="min-w-125px">news Intro</th>

                                    <th class="text-end min-w-70px">Actions</th>
                                </tr>
                                </thead>
                                <tbody class="fw-semibold text-gray-600">
                                </tbody>
                            </table>
                            <!--end::Table-->
                        </div>
                        <!--end::Card body-->
                    </div>
                    <!--end::Card-->
                    <!--begin::Modals-->
                    <!--begin::Modal - Customers - Add-->
                    <div class="modal fade" id="kt_modal_add_customer" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content p-4 w-100 ">

                            <form  method="POST" action="{{ route('admin.news.blog.store') }}" enctype="multipart/form-data" id="kt_modal_add_customer_form">
                                @csrf

                                <div class="repeater">
                                    <div data-repeater-list="blogs">

                                            <div data-repeater-item class="border rounded p-4 mb-4">
                                                <div class="row">

                                                    <!-- Category Dropdown -->
                                                    <div class="col-md-6 mb-3">
                                                        <label class="required form-label">Category</label>
                                                        <select class="form-select" name="category_id" required>
                                                            <option value="">Select Category</option>
                                                            @foreach($categories as $cat)
                                                                <option value="{{ $cat->id }}" {{ old('category_id') == $cat->id ? 'selected' : '' }}>
                                                                    {{ $cat->name }}
                                                                </option>
                                                            @endforeach
                                                        </select>
                                                    </div>

                                                    <!-- Blog Mini Title -->
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Main Heading</label>
                                                        <input type="text" name="main_heading" class="form-control"  required>
                                                    </div>

                                                    <!-- Blog Title -->
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Skip Btn</label>
                                                        <input type="text" name="skip_btn" class="form-control" required>
                                                    </div>


                                                    <!-- Mini Title -->
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Skip Btn Url</label>
                                                        <input type="text" name="skip_btn_url" class="form-control" value="" required>
                                                    </div>

                                                    <!-- Blog Date -->
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Date</label>
                                                        <input type="date" name="date" class="form-control" required>
                                                    </div>

                                                    <!-- Main Image (Path) -->
                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Post Content Image</label>
                                                        <input type="file" name="post_content_image" class="form-control" value="" required>
                                                    </div>

                                                    <!-- Main Paragraph -->
                                                    <div class="col-md-12 mb-3">
                                                        <label class="form-label">Content Description</label>
                                                        <textarea name="content_description" rows="3" class="form-control" required></textarea>
                                                    </div>


                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label"> Title 1</label>
                                                        <input type="text" name="title1" class="form-control"  required>
                                                    </div>

                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label"> Title 2</label>
                                                        <input type="text" name="title2" class="form-control" value="" required>
                                                    </div>


                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">Sub Title</label>
                                                        <input type="text" name="sub_title" class="form-control" value="" required>
                                                    </div>

                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">News Intro</label>
                                                        <textarea name="news_intro" class="form-control" rows="4" required></textarea>

                                                    </div>


                                                    <div class="col-md-6 mb-3">
                                                        <label class="form-label">disclaimer</label>
                                                        <textarea name="disclaimer" class="form-control" rows="4" required></textarea>                                                    </div>


                                                </div>
                                            </div>

                                    </div>

                                </div>

                                <!-- Submit Button -->
                                <div class="fv-row mt-4">
                                    <button type="submit" class="btn btn-lg btn-primary">Submit</button>
                                </div>
                            </form>

                            </div>
                        </div>
                    </div>

                    <!--end::Modal - Customers - Add-->
                    <!--begin::Modal - Adjust Balance-->

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
        var fetchUrl='{{route('admin.news.blog.fetch')}}';
    </script>
    <script src="{{ asset('admin_assets/plugins/custom/datatables/datatables.bundle.js') }}"></script>
    <script src="{{ asset('admin_assets/plugins/custom/ckeditor/ckeditor-classic.bundle.js') }}"></script>
    <script src="{{ asset('custom/news-blog.js') }}"></script>
    <script src="{{ asset('custom/add-news-blog.js') }}"></script>


    <script>


    </script>
@endsection
