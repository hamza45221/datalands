@extends('layouts.mainadmin')
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<style>
    .custom-pagination-wrapper .pagination {
        display: flex;
        padding-left: 0;
        list-style: none;
        border-radius: 0.375rem;
        gap: 6px;
    }


   .custom-pagination-wrapper img, svg {
       height: 30px !important;
   }

    .custom-pagination-wrapper p {
        margin-top: 14px !important;
    }

</style>

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
                        <h1 class="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">Hero Image</h1>
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
                            <li class="breadcrumb-item text-muted">Hero Image</li>

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
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_customer">Add Image</button>
                                    <!--end::Add customer-->
                                </div>
                                <!--end::Toolbar-->
                                <!--begin::Group actions-->
                                <div class="d-flex justify-content-end align-items-center d-none" data-kt-customer-table-toolbar="selected">
                                    <div class="fw-bold me-5">
                                        <span class="me-2" data-kt-customer-table-select="selected_count"></span>Selected</div>
{{--                                                                        <button type="button" data-url="{{route('admin.blog.delete.multiple')}}" class="btn btn-danger" data-kt-customer-table-select="delete_selected">Delete Selected</button>--}}
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

                                    <th class="min-w-125px"> Image</th>
                                    <th class="text-end min-w-70px">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                @forelse ($images as $image)
                                    <tr>
                                        <!-- Image column -->
                                        <td >
                                            <img src="{{ asset( $image->image) }}" alt="Hero Image" style="max-height: 60px;">
                                        </td>

                                        <!-- Action column -->
                                        <td class="text-end">
                                            <button type="button" class="btn btn-sm btn-light editImageBtn"
                                                    data-id="{{ $image->id }}"
                                                    data-image="{{ asset($image->image) }}">
                                                Edit
                                            </button>
                                            <form action="{{ route('admin.heromain.image.delete', $image->id) }}" method="POST" class="d-inline deleteImageForm">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-sm btn-danger deleteImageBtn">
                                                    Delete
                                                </button>
                                            </form>

                                        </td>

                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="2" class="text-center text-muted">No image found.</td>
                                    </tr>
                                @endforelse
                                </tbody>
                            </table>

                            <div class="d-flex justify-content-center custom-pagination-wrapper mt-4">

                                    {{ $images->onEachSide(1)->links() }}

                            </div>




                            <!--end::Table-->
                        </div>
                        <!--end::Card body-->
                    </div>
                    <!--end::Card-->
                    <!--begin::Modals-->
                    <!--begin::Modal - Customers - Add-->
                    <!--begin::Modal - Customers - Add-->
                    <div class="modal fade" id="kt_modal_add_customer" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                            <div class="modal-content w-100">
                                <form class="form" method="POST" enctype="multipart/form-data" action="{{ route('admin.heromain.image.store') }}">
                                    @csrf
                                    <input type="hidden" name="id" id="image_id"> <!-- Hidden ID for edit -->

                                    <!-- Header -->
                                    <div class="modal-header" id="kt_modal_add_customer_header">
                                        <h2 class="fw-bold" id="modal_title">Add or Edit Image</h2>
                                        <div id="kt_modal_add_customer_close" class="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                                            <i class="ki-outline ki-cross fs-1"></i>
                                        </div>
                                    </div>

                                    <!-- Body -->
                                    <div class="modal-body py-10 px-lg-17">
                                        <div class="row">
                                            <div class="col-md-12 fv-row mb-3">
                                                <label class="form-label">Image</label>
                                                <input type="file" name="image" class="form-control">
                                                <div class="mt-2" id="existing_image_preview" style="display: none;">
                                                    <img src="" id="preview_image" alt="Current Image" style="max-height: 120px;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Footer -->
                                    <div class="modal-footer flex-center">
                                        <button type="reset" class="btn btn-light me-3" data-bs-dismiss="modal">Discard</button>
                                        <button type="submit" class="btn btn-primary">
                                            <span class="indicator-label" id="submit_button_text">Submit</span>
                                        </button>
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

    <script src="{{ asset('admin_assets/plugins/custom/datatables/datatables.bundle.js') }}"></script>
    <script src="{{ asset('admin_assets/plugins/custom/ckeditor/ckeditor-classic.bundle.js') }}"></script>
    <script src="{{ asset('custom/category.js') }}"></script>
    <script src="{{ asset('custom/add-category.js') }}"></script>


    <script>
        $(document).on('click', '.editImageBtn', function () {
            const imageId = $(this).data('id');
            const imageUrl = $(this).data('image');

            // Fill hidden ID
            $('#image_id').val(imageId);

            // Update modal title and button text
            $('#modal_title').text('Edit Image');
            $('#submit_button_text').text('Update');

            // Show existing image if available
            if (imageUrl) {
                $('#preview_image').attr('src', imageUrl);
                $('#existing_image_preview').show();
            } else {
                $('#existing_image_preview').hide();
            }

            // Show the modal manually
            var modal = new bootstrap.Modal(document.getElementById('kt_modal_add_customer'));
            modal.show();
        });

    </script>
@endsection
