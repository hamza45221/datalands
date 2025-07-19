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
                            <form class="form" method="POST" action="{{route('admin.dataland.store')}}" enctype="multipart/form-data" >
                                @csrf

                                <div class="row">
                                    <div class=" col-md-6 fv-row mb-7">
                                        <label class="required fs-6 fw-semibold mb-2">Main Heading </label>
                                        <input type="text" name="main_heading" value="{{ $dataland->main_heading ?? '' }}" class="form-control form-control-solid" placeholder="Main Heading">
                                    </div>
                                    <div class="col-md-6 fv-row mb-7">
                                        <label class="required fs-6 fw-semibold mb-2">Main Video</label>

                                        <input type="file" name="main_video" class="form-control form-control-solid" accept="video/*"  placeholder="Main Video">

                                        @if (!empty($dataland->main_video))
                                            <video controls class="mt-3" style="max-width: 100%; max-height: 80px;" autoplay muted>
                                                <source src="{{ asset($dataland->main_video) }}" type="video/mp4">
                                                Your browser does not support the video tag.
                                            </video>
                                        @endif
                                    </div>
                                </div>


                              <div class="row">
                                  <div class=" col-md-6 fv-row mb-7">
                                      <label class="fs-6 fw-semibold mb-2">Main Heading 1</label>
                                      <input type="text" name="main_heading_1" value="{{ $dataland->main_heading_1 ?? '' }}" class="form-control form-control-solid" placeholder="main Heading 1">
                                  </div>
                                  <div class=" col-md-6  fv-row mb-7">
                                      <label class="fs-6 fw-semibold mb-2">Main Heading  2</label>
                                      <input type="text" name="main_heading_2" value="{{ $dataland->main_heading_2 ?? '' }}" class="form-control form-control-solid" placeholder="Main Heading 2">
                                  </div>
                              </div>

                                <div class=" col-md-6  fv-row mb-7">
                                    <label class="fs-6 fw-semibold mb-2">Case Studies Title</label>
                                    <input type="text" name="case_studies_title" value="{{ $dataland->case_studies_title ?? '' }}" class="form-control form-control-solid" placeholder="Case Studies Title">
                                </div>


                                <div id="case_studies_cards_repeater">
                                    <label class="fs-6 fw-semibold mb-2">Case Studies Cards</label>
                                    <div data-repeater-list="case_studies_cards">
                                        @php
                                            $caseStudiesCards = old('case_studies_cards', $dataland->case_studies_cards ?? []);
                                        @endphp

                                        @foreach ($caseStudiesCards as $card)
                                            <div data-repeater-item>
                                                <div class="row mb-5">
                                                    <!-- URL -->
                                                    <div class="col-md-6">
                                                        <label class="form-label">URL</label>
                                                        <input type="text" name="url" class="form-control" value="{{ $card['url'] ?? '' }}">
                                                    </div>

                                                    <!-- Title -->
                                                    <div class="col-md-6">
                                                        <label class="form-label">Title</label>
                                                        <input type="text" name="title" class="form-control" value="{{ $card['title'] ?? '' }}">
                                                    </div>

                                                    <!-- Video / Image Upload -->
                                                    <div class="col-md-6 mt-4">
                                                        <label class="form-label">Video or Image</label>
                                                        <input type="file" name="video_file" class="form-control" accept="video/*,image/*">

                                                        @if (!empty($card['video']))
                                                            @php
                                                                $ext = pathinfo($card['video'], PATHINFO_EXTENSION);
                                                            @endphp

                                                            <div class="mt-2">
                                                                @if (in_array(strtolower($ext), ['mp4', 'webm', 'ogg']))
                                                                    <video width="80" controls autoplay muted>
                                                                        <source src="{{ asset($card['video']) }}" type="video/{{ $ext }}">
                                                                        Your browser does not support the video tag.
                                                                    </video>
                                                                @else
                                                                    <img src="{{ asset($card['video']) }}" alt="Preview" class="img-fluid mt-2" style="max-height: 100px;">
                                                                @endif
                                                            </div>
                                                        @endif
                                                    </div>

                                                    <!-- Description -->
                                                    <div class="col-md-5 mt-4">
                                                        <label class="form-label">Description</label>
                                                        <textarea name="description" class="form-control" rows="3">{{ $card['description'] ?? '' }}</textarea>
                                                    </div>

                                                    <!-- Delete -->
                                                    <div class="col-md-1 d-flex align-items-end">
                                                        <a href="javascript:;" data-repeater-delete class="btn btn-sm btn-light-danger mt-4">
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
                                            <i class="la la-plus"></i> Add Case Study Card
                                        </a>
                                    </div>
                                </div>


                              <div class="row">
                                  <div class=" col-md-6  fv-row mb-7">
                                      <label class="fs-6 fw-semibold mb-2">Work Title</label>
                                      <input type="text" name="work_title" value="{{ $dataland->work_title ?? '' }}" class="form-control form-control-solid" placeholder="Work Title">
                                  </div>

                                  <div class=" col-md-6  fv-row mb-7">
                                      <label class="fs-6 fw-semibold mb-2">Services Title</label>
                                      <input type="text" name="services_title" value="{{ $dataland->services_title ?? '' }}" class="form-control form-control-solid" placeholder="Services Title">
                                  </div>
                              </div>

                                <div id="services_list_repeater">
                                    <label class="fs-6 fw-semibold mb-2">Services List Repeater</label>
                                    <div data-repeater-list="services_list">
                                        @php
                                            $services = old('services_list', $dataland->services_list ?? []);
                                        @endphp

                                        @foreach ($services as $service)
                                            <div data-repeater-item>
                                                <div class="row mb-5">
                                                    <!-- Count -->
                                                    <div class="col-md-2">
                                                        <label class="form-label">Count</label>
                                                        <input type="text" name="count" class="form-control" value="{{ $service['count'] ?? '' }}">
                                                    </div>

                                                    <!-- Title -->
                                                    <div class="col-md-4">
                                                        <label class="form-label">Title</label>
                                                        <input type="text" name="title" class="form-control" value="{{ $service['title'] ?? '' }}">
                                                    </div>

                                                    <!-- Image Upload -->
                                                    <div class="col-md-4">
                                                        <label class="form-label">Image</label>
                                                        <input type="file" name="image" class="form-control">

                                                        @if (!empty($service['image']))
                                                            <img src="{{ asset($service['image']) }}" class="img-thumbnail mt-2" style="max-height: 50px;">
                                                            <input type="hidden" name="existing_image" value="{{ $service['image'] }}">
                                                        @endif
                                                    </div>

                                                    <!-- Delete -->
                                                    <div class="col-md-2 ">
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
                                            <i class="la la-plus"></i> Add Service
                                        </a>
                                    </div>
                                </div>

                                <div class=" col-md-12  fv-row mb-7">
                                    <label class="required fs-6 fw-semibold mb-2">Work Desc</label>
                                    <textarea name="work_desc" id="production_links" class="form-control form-control-solid" placeholder="Write Description...">{!! $dataland->work_desc !!}</textarea>
                                </div>
<div class="row">

    <div class=" col-md-6  fv-row mb-7">
        <label class="fs-6 fw-semibold mb-2">Client Title</label>
        <input type="text" name="client_title" value="{{ $dataland->client_title ?? '' }}" class="form-control form-control-solid" placeholder="Client Title">
    </div>

    <div class=" col-md-6  fv-row mb-7">
        <label class="fs-6 fw-semibold mb-2">About Us Title</label>
        <input type="text" name="about_us_title" value="{{ $dataland->about_us_title ?? '' }}" class="form-control form-control-solid" placeholder="About Us Title">
    </div>

    <div class=" col-md-6  fv-row mb-7">
        <label class="fs-6 fw-semibold mb-2">About Us Heading</label>
        <input type="text" name="about_us_heading" value="{{ $dataland->about_us_heading ?? '' }}" class="form-control form-control-solid" placeholder="About Us Heading">
    </div>

    <div class=" col-md-12  fv-row mb-7">
        <label class="required fs-6 fw-semibold mb-2">About Us Description</label>
        <textarea name="about_us_desc" id="about_us_desc" class="form-control form-control-solid" placeholder="Write Description...">{!! $dataland->about_us_desc !!}</textarea>
    </div>
</div>


                                <div id="about_us_card_repeater">
                                    <label class="required fs-6 fw-semibold mb-2">About Us Cards</label>
                                    <div data-repeater-list="about_us_card">
                                        @php
                                            $cards = old('about_us_card', $dataland->about_us_card ?? []);
                                        @endphp
                                        @foreach ($cards as $card)
                                            <div data-repeater-item>
                                                <div class="row mb-5">
                                                    <!-- Name -->
                                                    <div class="col-md-6">
                                                        <label class="form-label">Name</label>
                                                        <input type="text" name="name" class="form-control" value="{{ $card['name'] ?? '' }}">
                                                    </div>

                                                    <!-- Position -->
                                                    <div class="col-md-6">
                                                        <label class="form-label">Position</label>
                                                        <input type="text" name="position" class="form-control" value="{{ $card['position'] ?? '' }}">
                                                    </div>

                                                    <!-- Description -->
                                                    <div class="col-md-6">
                                                        <label class="form-label">Description</label>
                                                        <textarea name="description" class="form-control" rows="4">{{ $card['description'] ?? '' }}</textarea>
                                                    </div>

                                                    <!-- Image Upload -->
                                                    <div class="col-md-6">
                                                        <label class="form-label">Image</label>
                                                        <input type="file" name="image" class="form-control">
                                                        @if (!empty($card['image']))
                                                            <img src="{{ asset($card['image']) }}" alt="image" width="60" class="mt-2">
                                                        @endif
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
                                            <i class="la la-plus"></i> Add About Us Card
                                        </a>
                                    </div>
                                </div>


                                <div class="col-md-6 fv-row mb-7">
                                    <label class="required fs-6 fw-semibold mb-2">Process Video</label>

                                    <input type="file" name="process_video" class="form-control form-control-solid" accept="video/*" placeholder="Process Video">

                                    @if (!empty($dataland->process_video))
                                        <video controls class="mt-3" style="max-width: 100%; max-height: 80px;" autoplay muted>
                                            <source src="{{ asset($dataland->process_video) }}" type="video/mp4">
                                            Your browser does not support the video tag.
                                        </video>
                                    @endif
                                </div>


{{--                                <div id="images_repeater">--}}
{{--                                    <div data-repeater-list="row_only_images">--}}
{{--                                        @php--}}
{{--                                            // Get old input or existing database values--}}
{{--                                            $images = old('row_only_images', []);--}}
{{--                                            $existingImages = $heromain->row_only_images ?? [];--}}

{{--                                            // If old input is empty but existing DB data exists--}}
{{--                                            if (empty($images) && !empty($existingImages)) {--}}
{{--                                                foreach ($existingImages as $item) {--}}
{{--                                                    $images[] = is_array($item) ? $item : ['url' => $item];--}}
{{--                                                }--}}
{{--                                            }--}}
{{--                                        @endphp--}}

{{--                                        @foreach ($images as $image)--}}
{{--                                            <div data-repeater-item>--}}
{{--                                                <div class="row mb-5 align-items-center">--}}
{{--                                                    <div class="col-md-6">--}}
{{--                                                        <label class="form-label">Image logo</label>--}}
{{--                                                        <input type="file" name="url" class="form-control image-input" accept="image/*">--}}
{{--                                                        <input type="hidden" name="existing_url" value="{{ $image['url'] ?? '' }}">--}}

{{--                                                        @if (!empty($image['url']))--}}
{{--                                                            <img src="{{ asset($image['url']) }}" class="img-preview mt-2" style="max-height: 80px;">--}}
{{--                                                        @endif--}}
{{--                                                    </div>--}}
{{--                                                    <div class="col-md-1 d-flex align-items-end">--}}
{{--                                                        <a href="javascript:;" data-repeater-delete class="btn btn-sm btn-light-danger mt-3">--}}
{{--                                                            <i class="la la-trash-o"></i>--}}
{{--                                                        </a>--}}
{{--                                                    </div>--}}
{{--                                                </div>--}}
{{--                                            </div>--}}
{{--                                        @endforeach--}}
{{--                                    </div>--}}

{{--                                    <div class="form-group mt-4 mb-4">--}}
{{--                                        <a href="javascript:;" data-repeater-create class="btn btn-sm btn-light-primary">--}}
{{--                                            <i class="la la-plus"></i> Add Image--}}
{{--                                        </a>--}}
{{--                                    </div>--}}
{{--                                </div>--}}

                               <div class="row">
                                   <div class=" col-md-6  fv-row mb-7">
                                       <label class="fs-6 fw-semibold mb-2">Process Title</label>
                                       <input type="text" name="process_title" value="{{ $dataland->process_title ?? '' }}" class="form-control form-control-solid" placeholder="Process Title">
                                   </div>

                                   <div class=" col-md-6  fv-row mb-7">
                                       <label class="fs-6 fw-semibold mb-2">Process Heading</label>
                                       <input type="text" name="process_heading" value="{{ $dataland->process_heading ?? '' }}" class="form-control form-control-solid" placeholder="Process Heading">
                                   </div>

                                   <div class=" col-md-6  fv-row mb-7">
                                       <label class="fs-6 fw-semibold mb-2">Process Heading 2</label>
                                       <input type="text" name="process_heading2" value="{{ $dataland->process_heading2 ?? '' }}" class="form-control form-control-solid" placeholder="Process Heading 2">
                                   </div>

                                   <div class=" col-md-6  fv-row mb-7">
                                       <label class="fs-6 fw-semibold mb-2">News Latter Title</label>
                                       <input type="text" name="news_latter_title" value="{{ $dataland->news_latter_title ?? '' }}" class="form-control form-control-solid" placeholder="News Latter Title">
                                   </div>

                                   <div class=" col-md-6  fv-row mb-7">
                                       <label class="fs-6 fw-semibold mb-2">News Latter Heading</label>
                                       <input type="text" name="news_latter_heading" value="{{ $dataland->news_latter_heading ?? '' }}" class="form-control form-control-solid" placeholder="News Latter Heading">
                                   </div>

                                   <div class=" col-md-12  fv-row mb-7">
                                       <label class="required fs-6 fw-semibold mb-2">News Latter Description</label>
                                       <textarea name="news_latter_desc" id="news_latter_desc" class="form-control form-control-solid" placeholder="Write Description...">{!! $dataland->news_latter_desc !!}</textarea>
                                   </div>

                                   <div class=" col-md-6  fv-row mb-7">
                                       <label class="fs-6 fw-semibold mb-2">Insta Url</label>
                                       <input type="text" name="insta_url" value="{{ $dataland->insta_url ?? '' }}" class="form-control form-control-solid" placeholder="">
                                   </div>

                                   <div class=" col-md-6  fv-row mb-7">
                                       <label class="fs-6 fw-semibold mb-2">Insta Name</label>
                                       <input type="text" name="insta_name" value="{{ $dataland->insta_name ?? '' }}" class="form-control form-control-solid" placeholder="">
                                   </div>
                                   <div class=" col-md-6  fv-row mb-7">
                                       <label class="fs-6 fw-semibold mb-2">Insta Title</label>
                                       <input type="text" name="insta_title" value="{{ $dataland->insta_title ?? '' }}" class="form-control form-control-solid" placeholder="">
                                   </div>

                                   <div class=" col-md-6  fv-row mb-7">
                                       <label class="fs-6 fw-semibold mb-2">twitter_Url</label>
                                       <input type="text" name="twitter_url" value="{{ $dataland->twitter_url ?? '' }}" class="form-control form-control-solid" placeholder="">
                                   </div>
                                   <div class=" col-md-6  fv-row mb-7">
                                       <label class="fs-6 fw-semibold mb-2">twitter Name</label>
                                       <input type="text" name="twitter_name" value="{{ $dataland->twitter_name ?? '' }}" class="form-control form-control-solid" placeholder="">
                                   </div>

                                   <div class=" col-md-6  fv-row mb-7">
                                       <label class="fs-6 fw-semibold mb-2">twitter Title</label>
                                       <input type="text" name="twitter_title" value="{{ $dataland->twitter_title ?? '' }}" class="form-control form-control-solid" placeholder="">
                                   </div>
                                   <div class=" col-md-6  fv-row mb-7">
                                       <label class="fs-6 fw-semibold mb-2">Behance Url</label>
                                       <input type="text" name="behance_url" value="{{ $dataland->behance_url ?? '' }}" class="form-control form-control-solid" placeholder="">
                                   </div>

                                   <div class=" col-md-6  fv-row mb-7">
                                       <label class="fs-6 fw-semibold mb-2">Behance Name</label>
                                       <input type="text" name="behance_name" value="{{ $dataland->behance_name ?? '' }}" class="form-control form-control-solid" placeholder="">
                                   </div>

                                   <div class=" col-md-6  fv-row mb-7">
                                       <label class="fs-6 fw-semibold mb-2">Behance Title</label>
                                       <input type="text" name="behance_title" value="{{ $dataland->behance_title ?? '' }}" class="form-control form-control-solid" placeholder="">
                                   </div>

                                   <div class=" col-md-6  fv-row mb-7">
                                       <label class="fs-6 fw-semibold mb-2">Footer Title</label>
                                       <input type="text" name="footer_title" value="{{ $dataland->footer_title ?? '' }}" class="form-control form-control-solid" placeholder="">
                                   </div>

                                   <div class=" col-md-6  fv-row mb-7">
                                       <label class="fs-6 fw-semibold mb-2">Footer Email</label>
                                       <input type="text" name="footer_email" value="{{ $dataland->footer_email ?? '' }}" class="form-control form-control-solid" placeholder="">
                                   </div>


                                   <div class=" col-md-6  fv-row mb-7">
                                       <label class="fs-6 fw-semibold mb-2">Footer Details</label>
                                       <input type="text" name="footer_detail" value="{{ $dataland->footer_detail ?? '' }}" class="form-control form-control-solid" placeholder="">
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
            .create(document.querySelector('#about_us_desc'))
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
        ClassicEditor
            .create(document.querySelector('#news_latter_desc'))
            .then(editor => {
                console.log(editor);
            })
            .catch(error => {
                console.error(error);
            });


        $(document).ready(function () {
            $('#case_studies_cards_repeater').repeater({
                initEmpty: false,
                defaultValues: {
                    'url': '',
                    'title': '',
                    'description': '',
                },
                show: function () {
                    $(this).slideDown();
                },
                hide: function (deleteElement) {
                    $(this).slideUp(deleteElement);
                }
            });

            $('#services_list_repeater').repeater({
                initEmpty: false,
                defaultValues: {
                    'count': '',
                    'title': '',
                },
                show: function () {
                    $(this).slideDown();
                },
                hide: function (deleteElement) {
                    $(this).slideUp(deleteElement);
                }
            });

            $('#about_us_card_repeater').repeater({
                initEmpty: false,
                defaultValues: {
                    'name': '',
                    'position': '',
                    'description': ''
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
