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
                        <h1 class="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">Header Footer</h1>
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
                            <li class="breadcrumb-item text-muted">Header Footer</li>

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
                            <form class="form" method="post" enctype="multipart/form-data" action="{{route('admin.header.footer.store')}}"  >
                                @csrf

                                <div class="row">
                                    <div class=" col-md-6 fv-row mb-7">
                                        <label class="required fs-6 fw-semibold mb-2">Logo Name </label>
                                        <input type="text" name="logo_name" value="{{ $header_footer->logo_name ?? '' }}" class="form-control form-control-solid" placeholder="Logo Name">
                                    </div>
                                    <div class=" col-md-6 fv-row mb-7">
                                        <label class="required fs-6 fw-semibold mb-2">Email </label>
                                        <input type="text" name="email" value="{{ $header_footer->email ?? '' }}" class="form-control form-control-solid" placeholder="Email">
                                    </div>
                                    <div class=" col-md-12 fv-row mb-7">
                                        <label class="required fs-6 fw-semibold mb-2">Email Url  </label>
                                        <input type="text" name="email_url" value="{{ $header_footer->email_url ?? '' }}" class="form-control form-control-solid" placeholder="Email Url">
                                    </div>
                                </div>

                                <div class="row">
                                    <div class=" col-md-6 fv-row mb-7">
                                        <label class="required fs-6 fw-semibold mb-2">Say Hi</label>
                                        <input type="text" name="say_hi" value="{{ $header_footer->say_hi ?? '' }}" class="form-control form-control-solid" placeholder="Say Hi">
                                    </div>
                                    <div class=" col-md-6 fv-row mb-7">
                                        <label class="required fs-6 fw-semibold mb-2">Personal Portfolio</label>
                                        <input type="text" name="personal_portfolio" value="{{ $header_footer->personal_portfolio ?? '' }}" class="form-control form-control-solid" placeholder="Personal Portfolio">
                                    </div>

                                </div>



{{--                                <div class="form-group mt-5">--}}
{{--                                    <label class="fw-bold fs-6 mb-2">Links</label>--}}
{{--                                    <div id="awards_links_repeater">--}}
{{--                                        <div data-repeater-list="awards_links" class="mb-5">--}}
{{--                                            @if(!empty($header_footer->footer_links))--}}
{{--                                                @foreach($header_footer->footer_links as $award)--}}
{{--                                                    <div data-repeater-item class="form-group row align-items-end mb-3">--}}
{{--                                                        <div class="col-md-5">--}}
{{--                                                            <label class="form-label">Url</label>--}}
{{--                                                            <input type="text" name="url" class="form-control" value="{{ $award['url'] ?? '' }}" placeholder="Enter platform (e.g. cssda)" />--}}
{{--                                                        </div>--}}

{{--                                                        <div class="col-md-6">--}}
{{--                                                            <label class="form-label">Name</label>--}}
{{--                                                            <input type="text" name="name" class="form-control" value="{{ $award['name'] ?? '' }}" placeholder="Enter award (e.g. website of the day)" />--}}
{{--                                                        </div>--}}


{{--                                                        <div class="col-md-1">--}}
{{--                                                            <a href="javascript:;" data-repeater-delete class="btn btn-sm btn-light-danger mt-4">--}}
{{--                                                                <i class="la la-trash-o fs-2"></i>--}}
{{--                                                            </a>--}}
{{--                                                        </div>--}}
{{--                                                    </div>--}}
{{--                                                @endforeach--}}
{{--                                            @else--}}
{{--                                                <!-- Empty default repeater item if no data exists -->--}}
{{--                                                <div data-repeater-item class="form-group row align-items-end mb-3">--}}
{{--                                                    <div class="col-md-3">--}}
{{--                                                        <label class="form-label">Url</label>--}}
{{--                                                        <input type="text" name="url" class="form-control" placeholder="Enter url  " />--}}
{{--                                                    </div>--}}

{{--                                                    <div class="col-md-3">--}}
{{--                                                        <label class="form-label">Name</label>--}}
{{--                                                        <input type="text" name="name" class="form-control" placeholder="Enter name " />--}}
{{--                                                    </div>--}}



{{--                                                    <div class="col-md-1">--}}
{{--                                                        <a href="javascript:;" data-repeater-delete class="btn btn-sm btn-light-danger mt-4">--}}
{{--                                                            <i class="la la-trash-o fs-2"></i>--}}
{{--                                                        </a>--}}
{{--                                                    </div>--}}
{{--                                                </div>--}}
{{--                                            @endif--}}
{{--                                        </div>--}}

{{--                                        <a href="javascript:;" data-repeater-create class="btn btn-sm my-4 btn-light-primary">--}}
{{--                                            <i class="la la-plus"></i> Add new--}}
{{--                                        </a>--}}
{{--                                    </div>--}}
{{--                                </div>--}}





                                <div class="fv-row mb-7">
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

    <script src="{{ asset('admin_assets/plugins/custom/ckeditor/ckeditor-classic.bundle.js') }}"></script>
    <script src="https://cdn.ckeditor.com/ckeditor5/39.0.1/classic/ckeditor.js"></script>
    <script src="{{ asset('admin_assets/plugins/global/plugins.bundle.js') }}"></script>
    <script src="{{ asset('admin_assets/plugins/custom/formrepeater/formrepeater.bundle.js') }}"></script>

    <script>


        ClassicEditor
            .create(document.querySelector('#ck-editor'))
            .then(editor => {
                console.log(editor);
            })
            .catch(error => {
                console.error(error);
            });

        ClassicEditor
            .create(document.querySelector('#ck-editor2'))
            .then(editor => {
                console.log(editor);
            })
            .catch(error => {
                console.error(error);
            });


        $(document).ready(function () {

            $('#awards_links_repeater').repeater({
                initEmpty: false,
                defaultValues: {
                    'url': '',
                    'name': '',
                },
                show: function () {
                    $(this).slideDown();
                },
                hide: function (deleteElement) {
                    $(this).slideUp(deleteElement);
                }
            });

        });





    </script>
@endsection
