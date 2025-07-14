<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verholomchuk</title>
    <meta name="description" content="Hey, my name is Denys! I'm a UX/UI Designer & Mentor. I'll help you create a website, landing page, interface.">
    <meta property="og:title" content="Denys Verholomchuk UI/UX Designer & Mentor">
    <meta property="og:description" content="Hey, my name is Denys! I'm a UX/UI Designer & Mentor. I'll help you create a website, landing page, interface.">
    <meta property="og:image" content="./preview.jpg">
    <meta name="author" content="Denys Verholomchuk">
    <link rel="icon shortcut" href="favicon.a113c45d.ico" type="image/x-icon">
    <link rel="stylesheet" href="index.3457c956.css">
    <script type="module" src="index.1b295d1f.js"></script>
    <script type="module" src="playground.75877894.js"></script>
    <script type="module" src="index.e1157d71.js"></script>
    <script type="module" src="index.15b461a7.js"></script>
    <link rel="stylesheet" href="404.e0ada734.css">
    <script type="module" src="404.925f4941.js"></script>
    <link rel="stylesheet" href="index.7d4f3a61.css">
</head>
<body>
<div class="page">
    <div class="cursor"></div>
    <div class="loader">
        <div class="loader__content">
            <div class="loader__text-up_animation__wrapper">
                <h3 class="loader__content_logo">DV</h3>
            </div>
            <p class="loader__content_text">Personal portfolio © 2025</p>
        </div>
        <div class="loader__information">
            <div class="loader__text-up_animation__wrapper">
                <h3 class="loader__information_percent">0%</h3>
            </div>
            <div class="loader__information_progressbar">
                <div class="loader__information_progress"></div>
            </div>
        </div>
    </div>
    <div class="page-transition">
        <div class="page-transition_block"></div>
        <div class="page-transition_block"></div>
        <div class="page-transition_block"></div>
        <div class="page-transition_block"></div>
        <div class="page-transition_block"></div>
        <div class="page-transition_block"></div>
    </div>
    <main class="main">
        @php
            $data = resource_categories_nav();
            $hf = $data['header_footer'];
            $main_hero = $data['main_hero'];
        @endphp
        <section class="main-section">
            <header class="header">
                <a href="{{ route('index') }}" class="header__name page-transition_link">{{ $hf->logo_name }} &reg;</a>
                <time class="header__time">00:00 PM</time>
                <p class="header__text">
                    <span class="header__text-span">{{ $hf->say_hi }} — </span>
                    <a href="{{ $hf->email_url }}" class="header__text-href">{{ $hf->email }}</a>
                </p>
            </header>

    @yield('content')

    </main>
    <footer class="footer">
        <div class="footer__progress-bar"></div>
        <div class="footer_burger-menu">
            <p class="footer_menu_name">{{ $hf->logo_name }}&reg;</p>
            <div class="footer_menu_links">
                <a class="footer_menu_link page-transition_link" href="{{ route('index') }}">Main</a>
                <a class="footer_menu_link page-transition_link" href="{{ route('about') }}">About</a>
                <a class="footer_menu_link page-transition_link" href="{{ route('playground') }}">Playground</a>
            </div>
            <div class="footer_content__contacts">
                <p class="footer_content__text">
                    <span class="footer__text-span">{{ $hf->say_hi }} — </span>
                    <a href="{{ $hf->email_url }}" class="footer_content__text-href">{{ $hf->email }}</a>
                </p>
                <div class="footer_content__links">
                    @if (!empty($main_hero->info_links) && is_array($main_hero->info_links))
                        @foreach ($main_hero->info_links as $link)
                            <span class="footer_content__link links">
            <a href="{{ $link['url'] }}" target="_blank" class="footer_content__link link3D">
                <div>
                    <span class="link3D_text">{{ $link['title'] }} </span>
                </div>
            </a>
            <svg width="13" height="13" fill="none" class="footer_content__link_svg">
                <path d="M.354 0h12v12h-1V1.707L.707 12.354 0 11.646 10.646 1H.354V0Z" clip-rule="evenodd"></path>
            </svg>
        </span> some
                        @endforeach
                    @endif

                </div>
            </div>
            <p class="footer_menu_text">{{ $hf->personal_portfolio }}</p>
        </div>
        <div class="footer__wrapper">
            <button class="footer_burger-button">
                <svg width="25" height="25" fill="none" class="footer_burger-button_svg" viewbox="0 0 25 24">
                    <path stroke="#D6D8DA" stroke-linecap="round" d="M1 4h22" class="footer_burger-button_svg-first"></path>
                    <path stroke="#D6D8DA" stroke-linecap="round" d="M1 19h22" class="footer_burger-button_svg-second"></path>
                    <rect width="22" height="7" x="1" y="8" stroke="#D6D8DA" rx="3.5"></rect>
                </svg>
                <span class="footer_burger-button_text">Menu</span>
            </button>
            <a href="{{ route('index') }}" class="footer_text page-transition_link">{{ $hf->personal_portfolio }}</a>
            <div class="footer_links">
                <a href="{{ route('about') }}" class="footer_link link3D links page-transition_link"><div>
                        <span class="link3D_text links">About&nbsp;me</span>
                    </div></a>
                <a href="{{ route('playground') }}" class="footer_link link3D links page-transition_link"><div><span class="link3D_text links">Playground</span></div></a>
            </div>
            <a href="#form-link" class="following footer_button"><span class="footer_button_span">Contact me</span><span class="footer_button_span">Contact me</span></a>
        </div>
    </footer>
</div>
<script type="module" src="index.28226ce8.js"></script>
<script async="" src="gtag/js?id=G-T9XXF7M3BT%22%3E"></script>
<script>
    function a() {
        dataLayer.push(arguments);
    }
    (window.dataLayer = window.dataLayer || []),
        a("js", new Date()),
        a("config", "G-T9XXF7M3BT");
</script>
</body>
</html>

