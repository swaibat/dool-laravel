<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">
        @yield('content')
    </div>
</body>
<script type="application/javascript" defer src="{{ asset('vendor/lightbox2/js/lightbox.min.js') }}"></script>
<script type="application/javascript" defer src="{{ asset('vendor/nouislider/nouislider.min.js') }}"></script>
<script type="application/javascript" defer src="{{ asset('vendor/bootstrap-select/js/bootstrap-select.min.js') }}"></script>
<script type="application/javascript" defer src="{{ asset('vendor/owl.carousel2/owl.carousel.min.js') }}"></script>
<script type="application/javascript" defer src="{{ asset('vendor/owl.carousel2.thumbs/owl.carousel2.thumbs.min.js') }}"></script>
<script type="application/javascript" defer src="{{ asset('js/front.js"></script>
</html>
