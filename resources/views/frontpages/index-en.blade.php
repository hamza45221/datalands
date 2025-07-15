<!DOCTYPE html>

<html lang="hu-HU">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">

    <title>Vertical</title>


    <link rel="stylesheet" href="dist/index.css">

</head>

<body>


    <div class="logo"><a href="{{ $index_en->main_name_url }}">{{ $index_en->main_name }}</a></div>

    <div class="wrapper first-section">

        <div class="mainContent intro" id="mobile-1">
            <p>
                <span>{{ $index_en->main_name }}</span> {{ $index_en->main_desc }}
            </p>
        </div>
        <div class="rotatingBox" id="rotatingBox">
            <div class="square-container mobile"><div class="rotating-line"></div></div>
            <div class="square-container mobile"><div class="rotating-line"></div></div>
            <div class="square-container mobile"><div class="rotating-line"></div></div>
            <div class="square-container mobile"><div class="rotating-line"></div></div>
            <div class="square-container mobile"><div class="rotating-line"></div></div>
            <div class="square-container mobile"><div class="rotating-line"></div></div>
            <div class="square-container mobile"><div class="rotating-line"></div></div>
            <div class="square-container mobile"><div class="rotating-line"></div></div>
            <div class="square-container mobile"><div class="rotating-line"></div></div>
            <div class="square-container"><div class="rotating-line"></div></div>
            <div class="square-container"><div class="rotating-line"></div></div>
            <div class="square-container"><div class="rotating-line"></div></div>
            <div class="square-container"><div class="rotating-line"></div></div>
            <div class="square-container"><div class="rotating-line"></div></div>
            <div class="square-container"><div class="rotating-line"></div></div>
            <div class="square-container"><div class="rotating-line"></div></div>
            <div class="square-container"><div class="rotating-line"></div></div>
            <div class="square-container"><div class="rotating-line"></div></div>
            <div class="square-container"><div class="rotating-line"></div></div>
            <div class="square-container"><div class="rotating-line"></div></div>
            <div class="square-container"><div class="rotating-line"></div></div>
            <div class="square-container"><div class="rotating-line"></div></div>
            <div class="square-container"><div class="rotating-line"></div></div>
            <div class="square-container"><div class="rotating-line"></div></div>
            <div class="square-container"><div class="rotating-line"></div></div>
        </div>
        <div class="footer" id="mobile-2">
            <div class="footerColumn">
                <h6>{{ $index_en->strategy }}</h6>
                <ul>
                    @if (!empty($index_en->strategy_links) && is_array($index_en->strategy_links))
                        @foreach ($index_en->strategy_links as $link)
                            <li>
                                <a href="{{ $link['url'] ?: '#' }}">{{ $link['name'] }}</a>
                            </li>
                        @endforeach
                    @endif
                </ul>
            </div>
            <div class="footerColumn">
                <h6>{{ $index_en->creation }}</h6>
                <ul>
                    @if (!empty($index_en->creation_links) && is_array($index_en->creation_links))
                        @foreach ($index_en->creation_links as $link)
                            <li>
                                <a href="{{ $link['url'] ?: '#' }}">{{ $link['name'] }}</a>
                            </li>
                        @endforeach
                    @endif
                </ul>

            </div>
            <div class="footerColumn last">
                <h6>{{ $index_en->production }}</h6>
                {!! $index_en->production_links  !!}

            </div>
        </div>

    </div>
    <div class="wrapper second-section">
        <div class="logoSection" id="mobile-3">
            <div class="trigger"></div>
            <div class="transition">
                @foreach ($main_page_img as $index => $image)
                    <div class="animation {{ $index === 0 ? 'active' : '' }}" loading="lazy" id="image-{{ $index + 1 }}">
                        <img src="{{ asset($image->image) }}" alt="Image {{ $index + 1 }}">
                    </div>
                @endforeach
            </div>

            <div class="spacer"></div>
            <div class="logoRow onlyImages">
                @if (!empty($index_en->row_only_images) && is_array($index_en->row_only_images))
                    @foreach ($index_en->row_only_images as $url)
                        <img src="{{ asset($url) }}" alt="Logo">
                    @endforeach
                @endif
            </div>


        </div>

        <div class="footer" id="mobile-4">
            @if (!empty($index_en->footer_link) && is_array($index_en->footer_link))
                @foreach ($index_en->footer_link as $index => $footer)
                    <div class="footerColumn{{ $index == count($index_en->footer_link) - 2 ? ' pre' : '' }}{{ $index == count($index_en->footer_link) - 1 ? ' last' : '' }}">
                        <p>
                            @if (!empty($footer['heading']))
                                <strong>{{ $footer['heading'] }}</strong><br>
                            @endif
                            <a href="{{ $footer['url'] ?: '#' }}"
                                {{ Str::endsWith($footer['url'], '.pdf') ? 'target=_blank' : '' }}>
                                {{ $footer['url_name'] }}
                            </a>
                        </p>
                    </div>
                @endforeach
            @endif
        </div>

    </div>
    <script type="text/javascript">
    let imageIndex = 1;
        let intervalId;
        let isHovered = false;
       function cycleImages() {
            const images = document.querySelectorAll('.animation');

            images.forEach((image, index) => {

                if (index === imageIndex - 1) {

                    image.classList.add('active');
                } else {

                    image.classList.remove('active');
                }
            });

            imageIndex++;
            if (imageIndex > images.length) {
                imageIndex = 1;
            }
        }
        function startImageCycle() {
            if (isHovered) {
                document.querySelector('.transition').classList.add('active');
                intervalId = setInterval(cycleImages, 300);
            }
        }
        function stopImageCycle() {
            document.querySelector('.transition').classList.remove('active');
            clearInterval(intervalId);
        }
        function handleHover() {
            isHovered = !isHovered;
            if (isHovered) {
                startImageCycle();
            } else {
                stopImageCycle();
            }
        }
        if(window.innerWidth > 575) {
            document.querySelector('.trigger').addEventListener('mouseover', handleHover);
            document.querySelector('.trigger').addEventListener('mouseout', handleHover);

        } else {
            document.querySelector('.transition').classList.add('active');
            intervalId = setInterval(cycleImages, 500);
        }
    </script>
    <script src="dist/index.js"></script>
</body>

</html>
