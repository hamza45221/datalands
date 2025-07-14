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
                        <h1 class="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">Playground</h1>
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
                            <li class="breadcrumb-item text-muted">Playground</li>

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
                            <form class="form" method="post" enctype="multipart/form-data" action="{{route('admin.playground.store')}}"  >
                                @csrf

                                <div class="row">
                                    <div class=" col-md-6 fv-row mb-7">
                                        <label class="required fs-6 fw-semibold mb-2">Title 1 </label>
                                        <input type="text" name="title1" value="{{ $playground->title1 ?? '' }}" class="form-control form-control-solid" placeholder="Title 1">
                                    </div>
                                    <div class=" col-md-6 fv-row mb-7">
                                        <label class="required fs-6 fw-semibold mb-2">Tiitle 2 </label>
                                        <input type="text" name="title2" value="{{ $playground->title2 ?? '' }}" class="form-control form-control-solid" placeholder="Title 2">
                                    </div>
                                </div>


                                <div class=" col-md-12 fv-row mb-7">
                                    <label class="required fs-6 fw-semibold mb-2"> Description </label>
                                    <textarea name="description" id="ck-editor" class="form-control form-control-solid" placeholder="Description....">{{ $playground->description ?? '' }}</textarea>
                                </div>


                                    <div class=" col-md-6 fv-row mb-7">
                                        <label class="fs-6 fw-semibold mb-2">Work Year</label>
                                        <input type="text" name="work_year" value="{{ $plaground->work_year ?? '' }}" class="form-control form-control-solid" placeholder="Work Year">
                                    </div>


                                <div id="kt_repeater_images">
                                    <div data-repeater-list="work_images">
                                        @php
                                            // Normalize the data structure
                                            $images = [];
                                            $workImages = old('work_images', $playground->work_images ?? []);

                                            foreach ($workImages as $key => $item) {
                                                if (is_array($item)) {
                                                    $images[] = [
                                                        'image' => $item['image'] ?? $item['url'] ?? '',
                                                        'url' => asset(($item['image'] ?? $item['url'] ?? ''))
                                                    ];
                                                } else {
                                                    // Handle legacy string format
                                                    $images[] = [
                                                        'image' => $item,
                                                        'url' => asset($item)
                                                    ];
                                                }
                                            }
                                        @endphp

                                        @foreach($images as $image)
                                            <div data-repeater-item class="mb-5">
                                                <input type="hidden" name="image" value="{{ $image['image'] }}" />

                                                <div class="mb-2 existing-image-preview">
                                                    @if($image['image'])
                                                        <img src="{{ $image['url'] }}"
                                                             height="70px"
                                                             class=""
                                                             alt="Work image">
                                                    @endif
                                                </div>

                                                <input type="file" name="image_upload" class="form-control mb-2">
                                                <button data-repeater-delete type="button" class="btn btn-sm btn-danger">
                                                    <i class="la la-trash"></i> Remove
                                                </button>
                                            </div>
                                        @endforeach
                                    </div>
                                    <button data-repeater-create type="button" class="btn btn-sm my-4 btn-primary">
                                        <i class="la la-plus"></i> Add Image
                                    </button>
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
                    'platform': '',
                    'award': '',
                    'date': '',
                    'url': ''
                },
                show: function () {
                    $(this).slideDown();
                },
                hide: function (deleteElement) {
                    $(this).slideUp(deleteElement);
                }
            });

            $('#kt_repeater_work_images').repeater({
                initEmpty: false,
                defaultValues: {
                    'image': ''
                },
                show: function () {
                    $(this).slideDown();
                },
                hide: function (deleteElement) {
                    if (confirm('Are you sure?')) {
                        $(this).slideUp(deleteElement);
                    }
                }
            });

            $('#kt_repeater_images').repeater({
                initEmpty: false,
                show: function() {
                    $(this).slideDown();
                    // Clear preview when adding new item
                    $(this).find('.existing-image-preview').html('');
                },
                hide: function(deleteElement) {
                    $(this).slideUp(deleteElement);
                }
            });
        });





    </script>
@endsection
