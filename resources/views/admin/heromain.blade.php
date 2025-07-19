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
                            <form class="form" method="POST" action="{{route('admin.heromain.store')}}" enctype="multipart/form-data" >
                                @csrf

                              <div class="row">
                                  <div class=" col-md-4 fv-row mb-7">
                                      <label class="required fs-6 fw-semibold mb-2">Main Name </label>
                                      <input type="text" name="main_name" value="{{ $heromain->main_name ?? '' }}" class="form-control form-control-solid" placeholder="Main Name">
                                  </div>
                                  <div class=" col-md-4 fv-row mb-7">
                                      <label class="required fs-6 fw-semibold mb-2">Main Name Url </label>
                                      <input type="text" name="main_name_url" value="{{ $heromain->main_name_url ?? '' }}" class="form-control form-control-solid" placeholder="Main Name Url">
                                  </div>
                              </div>

                                    <div class=" col-md-12  fv-row mb-7">
                                        <label class="required fs-6 fw-semibold mb-2">Main Description</label>
                                        <textarea name="main_desc" id="ck-editor" class="form-control form-control-solid" placeholder="Write Description...">{!! $heromain->main_desc !!}</textarea>
                                    </div>

                                    <div class=" col-md-6 fv-row mb-7">
                                        <label class="fs-6 fw-semibold mb-2">Main Heading 1</label>
                                        <input type="text" name="main_heading_1" value="{{ $heromain->main_heading_1 ?? '' }}" class="form-control form-control-solid" placeholder="main Heading 1">
                                    </div>
                                    <div class=" col-md-6  fv-row mb-7">
                                        <label class="fs-6 fw-semibold mb-2">Strategy</label>
                                        <input type="text" name="strategy" value="{{ $heromain->strategy ?? '' }}" class="form-control form-control-solid" placeholder="Strategy">
                                    </div>


                                <div id="strategy_links_repeater">
                                    <div data-repeater-list="strategy_links">
                                        @php
                                            $strategyLinks = old('strategy_links', $heromain->strategy_links ?? []);
                                        @endphp

                                        @foreach ($strategyLinks as $link)
                                            <div data-repeater-item>
                                                <div class="row mb-5">
                                                    <!-- URL -->
                                                    <div class="col-md-6">
                                                        <label class="form-label">URL</label>
                                                        <input type="text" name="url" class="form-control" value="{{ $link['url'] ?? '' }}">
                                                    </div>

                                                    <!-- Name -->
                                                    <div class="col-md-5">
                                                        <label class="form-label">Name</label>
                                                        <input type="text" name="name" class="form-control" value="{{ $link['name'] ?? '' }}">
                                                    </div>

                                                    <!-- Delete Button -->
                                                    <div class="col-md-1 d-flex align-items-end">
                                                        <a href="javascript:;" data-repeater-delete class="btn btn-sm btn-light-danger mt-3">
                                                            <i class="la la-trash-o"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>

                                    <!-- Add Button -->
                                    <div class="form-group mt-3">
                                        <a href="javascript:;" data-repeater-create class="btn my-4 btn-sm btn-light-primary">
                                            <i class="la la-plus"></i> Add Strategy Link
                                        </a>
                                    </div>
                                </div>

                                <div class=" col-md-6  fv-row mb-7">
                                    <label class="fs-6 fw-semibold mb-2">Creation</label>
                                    <input type="text" name="creation" value="{{ $heromain->creation ?? '' }}" class="form-control form-control-solid" placeholder="Creation">
                                </div>

                                <div id="creation_links_repeater">
                                    <div data-repeater-list="creation_links">
                                        @php
                                            $strategyLinks = old('creation_links', $heromain->creation_links ?? []);
                                        @endphp

                                        @foreach ($strategyLinks as $link)
                                            <div data-repeater-item>
                                                <div class="row mb-5">
                                                    <!-- URL -->
                                                    <div class="col-md-6">
                                                        <label class="form-label">URL</label>
                                                        <input type="text" name="url" class="form-control" value="{{ $link['url'] ?? '' }}">
                                                    </div>

                                                    <!-- Name -->
                                                    <div class="col-md-5">
                                                        <label class="form-label">Name</label>
                                                        <input type="text" name="name" class="form-control" value="{{ $link['name'] ?? '' }}">
                                                    </div>

                                                    <!-- Delete Button -->
                                                    <div class="col-md-1 d-flex align-items-end">
                                                        <a href="javascript:;" data-repeater-delete class="btn btn-sm btn-light-danger mt-3">
                                                            <i class="la la-trash-o"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>

                                    <!-- Add Button -->
                                    <div class="form-group mt-3">
                                        <a href="javascript:;" data-repeater-create class="btn btn-sm my-4 btn-light-primary">
                                            <i class="la la-plus"></i> Add Strategy Link
                                        </a>
                                    </div>
                                </div>

                                <div class=" col-md-6  fv-row mb-7">
                                    <label class="fs-6 fw-semibold mb-2">Production</label>
                                    <input type="text" name="production" value="{{ $heromain->production ?? '' }}" class="form-control form-control-solid" placeholder="Production">
                                </div>

                                <div class=" col-md-12  fv-row mb-7">
                                    <label class="required fs-6 fw-semibold mb-2">Production Links</label>
                                    <textarea name="production_links" id="production_links" class="form-control form-control-solid" placeholder="Write Description...">{!! $heromain->production_links !!}</textarea>
                                </div>


                                <div id="images_repeater">
                                    <div data-repeater-list="row_only_images">
                                        @php
                                            // Get old input or existing database values
                                            $images = old('row_only_images', []);
                                            $existingImages = $heromain->row_only_images ?? [];

                                            // If old input is empty but existing DB data exists
                                            if (empty($images) && !empty($existingImages)) {
                                                foreach ($existingImages as $item) {
                                                    $images[] = is_array($item) ? $item : ['url' => $item];
                                                }
                                            }
                                        @endphp

                                        @foreach ($images as $image)
                                            <div data-repeater-item>
                                                <div class="row mb-5 align-items-center">
                                                    <div class="col-md-6">
                                                        <label class="form-label">Image logo</label>
                                                        <input type="file" name="url[]" class="form-control image-input" accept="image/*">
                                                        <input type="hidden" name="existing_url[]" value="{{ $image['url'] ?? '' }}">

                                                        @if (!empty($image['url']))
                                                            <img src="{{ asset($image['url']) }}" class="img-preview mt-2" style="max-height: 80px;">
                                                        @endif
                                                    </div>
                                                    <div class="col-md-1 d-flex align-items-end">
                                                        <a href="javascript:;" data-repeater-delete class="btn btn-sm btn-light-danger mt-3">
                                                            <i class="la la-trash-o"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>

                                    <div class="form-group mt-4 mb-4">
                                        <a href="javascript:;" data-repeater-create class="btn btn-sm btn-light-primary">
                                            <i class="la la-plus"></i> Add Image
                                        </a>
                                    </div>
                                </div>


                                <div id="footer_links_repeater">
                                    <div data-repeater-list="footer_link">
                                        @php
                                            $footerLinks = old('footer_link', $heromain->footer_link ?? []);
                                        @endphp

                                        @foreach ($footerLinks as $footer)
                                            <div data-repeater-item>
                                                <div class="row mb-5">
                                                    <!-- URL -->
                                                    <div class="col-md-4">
                                                        <label class="form-label">URL</label>
                                                        <input type="text" name="url" class="form-control" value="{{ $footer['url'] ?? '' }}">
                                                    </div>

                                                    <!-- Heading -->
                                                    <div class="col-md-4">
                                                        <label class="form-label">Heading</label>
                                                        <input type="text" name="heading" class="form-control" value="{{ $footer['heading'] ?? '' }}">
                                                    </div>

                                                    <!-- URL Name -->
                                                    <div class="col-md-3">
                                                        <label class="form-label">Link Text</label>
                                                        <input type="text" name="url_name" class="form-control" value="{{ $footer['url_name'] ?? '' }}">
                                                    </div>

                                                    <!-- Delete Button -->
                                                    <div class="col-md-1 d-flex align-items-end">
                                                        <a href="javascript:;" data-repeater-delete class="btn btn-sm btn-light-danger mt-3">
                                                            <i class="la la-trash-o"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>

                                    <!-- Add Button -->
                                    <div class="form-group my-4">
                                        <a href="javascript:;" data-repeater-create class="btn btn-sm btn-light-primary">
                                            <i class="la la-plus"></i> Add Footer Link
                                        </a>
                                    </div>
                                </div>



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
            .create(document.querySelector('#production_links'))
            .then(editor => {
                console.log(editor);
            })
            .catch(error => {
                console.error(error);
            });


        $(document).ready(function () {
            $('#strategy_links_repeater').repeater({
                initEmpty: false,
                defaultValues: {
                    'url': '',
                    'name': ''
                },
                show: function () {
                    $(this).slideDown();
                },
                hide: function (deleteElement) {
                    $(this).slideUp(deleteElement);
                }
            });
            $('#creation_links_repeater').repeater({
                initEmpty: false,
                defaultValues: {
                    'url': '',
                    'name': ''
                },
                show: function () {
                    $(this).slideDown();
                },
                hide: function (deleteElement) {
                    $(this).slideUp(deleteElement);
                }
            });
            $('#images_repeater').repeater({
                initEmpty: false,
                defaultValues: {
                    'url': ''
                },
                show: function () {
                    $(this).slideDown();
                },
                hide: function (deleteElement) {
                    $(this).slideUp(deleteElement);
                }
            });
            $('#footer_links_repeater').repeater({
                initEmpty: false,
                defaultValues: {
                    'url': '',
                    'heading': '',
                    'url_name': ''
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
