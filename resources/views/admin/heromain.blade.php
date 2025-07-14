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
                                      <label class="required fs-6 fw-semibold mb-2">Tiitle 1 </label>
                                      <input type="text" name="tiitle1" value="{{ $heromain->tiitle1 ?? '' }}" class="form-control form-control-solid" placeholder="Title 1">
                                  </div>
                                  <div class=" col-md-4 fv-row mb-7">
                                      <label class="required fs-6 fw-semibold mb-2">Tiitle 2 </label>
                                      <input type="text" name="tiitle2" value="{{ $heromain->tiitle2 ?? '' }}" class="form-control form-control-solid" placeholder="Title 2">
                                  </div>
                                  <div class=" col-md-4 fv-row mb-7">
                                      <label class="required fs-6 fw-semibold mb-2">Tiitle 3 </label>
                                      <input type="text" name="tiitle3" value="{{ $heromain->tiitle3 ?? '' }}" class="form-control form-control-solid" placeholder="Title 3">
                                  </div>
                              </div>

                                <div class="row">
                                    <div class=" col-md-6  fv-row mb-7">
                                        <label class="required fs-6 fw-semibold mb-2">Main Heading 1</label>
                                        <input type="text" name="main_heading_1" value="{{ $heromain->main_heading_1 ?? '' }}" class="form-control form-control-solid" placeholder="Main Heading 1">
                                    </div>


                                    <div class="col-md-6 fv-row mb-7">
                                        <label class="fs-6 fw-semibold mb-2">Main Heading 2</label>
                                        <input type="text" name="main_heading_2" value="{{ $heromain->main_heading_2 ?? '' }}" class="form-control form-control-solid" placeholder="Main Heading 2">
                                    </div>
                                </div>

                                <div class="fv-row mb-7">
                                    <label class="fs-6 fw-semibold mb-2">Main Video </label>
                                    <input type="file" name="main_video" value="{{ $heromain->main_video ?? '' }}" class="form-control form-control-solid" placeholder="main video">
                                </div>

                                @if (!empty($heromain->main_video))
                                    <video width="320" height="240" controls class="mt-3">
                                        <source src="{{ asset( $heromain->main_video) }}" type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>
                                @endif

                              <div class="row">
                                  <div class=" col-md-6 fv-row mb-7">
                                      <label class="fs-6 fw-semibold mb-2">Main Image</label>
                                      <input type="file" name="main_image" value="{{ $heromain->main_image ?? '' }}" class="form-control form-control-solid" placeholder="Main Image">
                                      <img src="{{ asset($heromain->main_image) }}" width="80px" />
                                  </div>

                                  <div class=" col-md-6 fv-row mb-7">
                                      <label class="fs-6 fw-semibold mb-2">Services Title</label>
                                      <input type="text" name="services_title" value="{{ $heromain->services_title ?? '' }}" class="form-control form-control-solid" placeholder="Services Title">
                                  </div>
                              </div>

                                <div class="row">
                                    <div class=" col-md-6 fv-row mb-7">
                                        <label class="fs-6 fw-semibold mb-2">Services Left Heading 1</label>
                                        <input type="text" name="services_left_heading_1" value="{{ $heromain->services_left_heading_1 ?? '' }}" class="form-control form-control-solid" placeholder="Services Left Heading 1">
                                    </div>

                                    <div class=" col-md-6 fv-row mb-7">
                                        <label class="fs-6 fw-semibold mb-2">Services Left Heading 2</label>
                                        <input type="text" name="services_left_heading_2" value="{{ $heromain->services_left_heading_2 ?? '' }}" class="form-control form-control-solid" placeholder="Services Left Heading 2">
                                    </div>
                                </div>

                                <div id="services_cards_repeater">
                                    <div data-repeater-list="services_cards">
                                        @php
                                            $cards = old('services_cards', $heromain->services_cards ?? []);
                                        @endphp

                                        @foreach ($cards as $index => $card)
                                            <div data-repeater-item>
                                                <div class="row mb-5">
                                                    <!-- Video Upload -->
                                                    <div class="col-md-6">
                                                        <label class="form-label">Service Video</label>
                                                        <input type="file" name="video" class="form-control mb-2">
                                                        @if (!empty($card['video']))
                                                            <video width="250" height="140" controls class="mt-2">
                                                                <source src="{{ asset($card['video']) }}" type="video/mp4">
                                                                Your browser does not support the video tag.
                                                            </video>
                                                            <input type="hidden" name="old_video" value="{{ $card['video'] }}">
                                                        @endif
                                                    </div>

                                                    <!-- Counter -->
                                                    <div class="col-md-2">
                                                        <label class="form-label">Counter</label>
                                                        <input type="text" name="counter" value="{{ $card['counter'] ?? '' }}" class="form-control">
                                                    </div>

                                                    <!-- Title -->
                                                    <div class="col-md-4">
                                                        <label class="form-label">Title</label>
                                                        <input type="text" name="title" value="{{ $card['title'] ?? '' }}" class="form-control">
                                                    </div>

                                                    <!-- Description -->
                                                    <div class="col-md-12 mt-3">
                                                        <label class="form-label">Description</label>
                                                        <textarea name="description" class="form-control" rows="3">{{ $card['description'] ?? '' }}</textarea>
                                                    </div>

                                                    <!-- Delete Button -->
                                                    <div class="col-12 mt-3 text-end">
                                                        <a href="javascript:;" data-repeater-delete class="btn btn-sm btn-light-danger">
                                                            <i class="la la-trash-o"></i> Delete
                                                        </a>
                                                    </div>
                                                </div>
                                                <hr>
                                            </div>
                                        @endforeach
                                    </div>

                                    <!-- Add Button -->
                                    <div class="form-group mt-5 mb-4">
                                        <a href="javascript:;" data-repeater-create class="btn btn-sm btn-light-primary">
                                            <i class="la la-plus"></i> Add Service Card
                                        </a>
                                    </div>
                                </div>

                                <div class="col-md-6 fv-row mb-7">
                                    <label class="fs-6 fw-semibold mb-2">Work Title</label>
                                    <input type="text" name="work_title" value="{{ $heromain->work_title ?? '' }}" class="form-control form-control-solid" placeholder="Work Title">
                                </div>


                                <div id="work_card_repeater">
                                    <div data-repeater-list="work_card">
                                        @php
                                            $cards = old('work_card', $heromain->work_card ?? []);
                                        @endphp

                                        @foreach ($cards as $index => $card)
                                            <div data-repeater-item>
                                                <div class="row mb-5">
                                                    <!-- Image Upload -->
                                                    <div class="col-md-4">
                                                        <label class="form-label">Project Image</label>
                                                        <input type="file" name="image" class="form-control mb-2">
                                                        @if (!empty($card['image']))
                                                            <img src="{{ asset( $card['image']) }}" width="70" class="mt-2" alt="Image">
                                                            <input type="hidden" name="old_image" value="{{ $card['image'] }}">
                                                        @endif
                                                    </div>

                                                    <!-- Title -->
                                                    <div class="col-md-4">
                                                        <label class="form-label">Title</label>
                                                        <input type="text" name="title" value="{{ $card['title'] ?? '' }}" class="form-control">
                                                    </div>

                                                    <!-- Date -->
                                                    <div class="col-md-2">
                                                        <label class="form-label">Year</label>
                                                        <input type="text" name="date" value="{{ $card['date'] ?? '' }}" class="form-control">
                                                    </div>

                                                    <!-- URL -->
                                                    <div class="col-md-2">
                                                        <label class="form-label">Website URL</label>
                                                        <input type="text" name="url" value="{{ $card['url'] ?? '' }}" class="form-control">
                                                    </div>

                                                    <!-- Delete Button -->
                                                    <div class="col-12 mt-3 text-end">
                                                        <a href="javascript:;" data-repeater-delete class="btn btn-sm btn-light-danger">
                                                            <i class="la la-trash"></i> Delete
                                                        </a>
                                                    </div>
                                                </div>
                                                <hr>
                                            </div>
                                        @endforeach
                                    </div>

                                    <!-- Add Button -->
                                    <div class="form-group mt-5 mb-4">
                                        <a href="javascript:;" data-repeater-create class="btn btn-sm btn-light-primary">
                                            <i class="la la-plus"></i> Add Work Card
                                        </a>
                                    </div>
                                </div>

                                <div id="links_repeater">
                                    <div data-repeater-list="links">
                                        @php
                                            $links = old('links', $heromain->links ?? []);
                                        @endphp

                                        @foreach ($links as $link)
                                            <div data-repeater-item>
                                                <div class="row mb-5">
                                                    <!-- Title -->
                                                    <div class="col-md-4">
                                                        <label class="form-label">Title</label>
                                                        <input type="text" name="title" value="{{ $link['title'] ?? '' }}" class="form-control">
                                                    </div>

                                                    <!-- URL -->
                                                    <div class="col-md-8">
                                                        <label class="form-label">URL</label>
                                                        <input type="text" name="url" value="{{ $link['url'] ?? '' }}" class="form-control">
                                                    </div>

                                                    <!-- Images -->
                                                    @for ($i = 1; $i <= 6; $i++)
                                                        @php $imageKey = 'image' . $i; @endphp
                                                        <div class="col-md-2 mt-4">
                                                            <label class="form-label">Image {{ $i }}</label>
                                                            <input type="file" name="image{{ $i }}" class="form-control mb-2">
                                                            @if (!empty($link[$imageKey]))
                                                                <img src="{{ asset( $link[$imageKey]) }}" width="70" class="mt-2" alt="Image {{ $i }}">
                                                                <input type="hidden" name="old_image{{ $i }}" value="{{ $link[$imageKey] }}">
                                                            @endif
                                                        </div>
                                                    @endfor

                                                    <!-- Delete -->
                                                    <div class="col-12 mt-3 text-end">
                                                        <a href="javascript:;" data-repeater-delete class="btn btn-sm btn-light-danger">
                                                            <i class="la la-trash"></i> Delete
                                                        </a>
                                                    </div>
                                                </div>
                                                <hr>
                                            </div>
                                        @endforeach
                                    </div>

                                    <!-- Add Button -->
                                    <div class="form-group mt-5 mb-4">
                                        <a href="javascript:;" data-repeater-create class="btn btn-sm btn-light-primary">
                                            <i class="la la-plus"></i> Add Link
                                        </a>
                                    </div>
                                </div>



                                <div class="row">
                                    <div class=" col-md-4 fv-row mb-7">
                                        <label class="fs-6 fw-semibold mb-2">Info Title 1</label>
                                        <input type="text" name="info_title_1" value="{{ $heromain->info_title_1 ?? '' }}" class="form-control form-control-solid" placeholder="Info Title 1">
                                    </div>

                                    <div class=" col-md-4 fv-row mb-7">
                                        <label class="fs-6 fw-semibold mb-2">Info Title 2</label>
                                        <input type="text" name="info_title_2" value="{{ $heromain->info_title_2 ?? '' }}" class="form-control form-control-solid" placeholder="Info Title 2">
                                    </div>

                                    <div class=" col-md-4 fv-row mb-7">
                                        <label class="fs-6 fw-semibold mb-2">Info Title 3</label>
                                        <input type="text" name="info_title_3" value="{{ $heromain->info_title_3 ?? '' }}" class="form-control form-control-solid" placeholder="Info Title 3">
                                    </div>
                                </div>

                                <div class=" col-md-6 fv-row mb-7">
                                    <label class="fs-6 fw-semibold mb-2">Say Hi</label>
                                    <input type="text" name="say_hi" value="{{ $heromain->say_hi ?? '' }}" class="form-control form-control-solid" placeholder="Say Hi">
                                </div>

                                <div id="info_links_repeater">
                                    <div data-repeater-list="info_links">
                                        @php
                                            $infoLinks = old('info_links', $heromain->info_links ?? []);
                                        @endphp

                                        @foreach ($infoLinks as $link)
                                            <div data-repeater-item>
                                                <div class="row mb-4 align-items-end">
                                                    <!-- Title -->
                                                    <div class="col-md-4">
                                                        <label class="form-label">Title</label>
                                                        <input type="text" name="title" value="{{ $link['title'] ?? '' }}" class="form-control" placeholder="e.g. Dribbble">
                                                    </div>

                                                    <!-- URL -->
                                                    <div class="col-md-6">
                                                        <label class="form-label">URL</label>
                                                        <input type="url" name="url" value="{{ $link['url'] ?? '' }}" class="form-control" placeholder="e.g. https://dribbble.com/">
                                                    </div>

                                                    <!-- Delete -->
                                                    <div class="col-md-2 text-end">
                                                        <a href="javascript:;" data-repeater-delete class="btn btn-sm btn-light-danger">
                                                            <i class="la la-trash"></i> Delete
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>

                                    <!-- Add Button -->
                                    <div class="form-group mt-3 mb-4">
                                        <a href="javascript:;" data-repeater-create class="btn btn-sm btn-light-primary">
                                            <i class="la la-plus"></i> Add Info Link
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


        $(document).ready(function () {
            $('#services_cards_repeater').repeater({
                initEmpty: false,
                defaultValues: {
                    'counter': '',
                    'title': '',
                    'description': ''
                },
                show: function () {
                    $(this).slideDown();
                },
                hide: function (deleteElement) {
                    $(this).slideUp(deleteElement);
                }
            });

            $('#work_card_repeater').repeater({
                initEmpty: false,
                defaultValues: {
                    'title': '',
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

            $('#links_repeater').repeater({
                initEmpty: false,
                defaultValues: {
                    'title': '',
                    'url': ''
                },
                show: function () {
                    $(this).slideDown();
                },
                hide: function (deleteElement) {
                    $(this).slideUp(deleteElement);
                }
            });
            $('#info_links_repeater').repeater({
                initEmpty: false,
                defaultValues: {
                    'title': '',
                    'url': ''
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
