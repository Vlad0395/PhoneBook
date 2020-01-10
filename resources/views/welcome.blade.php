<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('css/style.css')}}" rel="stylesheet" type="text/css">
    {{-- <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet"> --}}
    <script src="https://kit.fontawesome.com/821f2cbf10.js"></script>
</head>
<body>
<div id="example"></div>

<script src="{{asset('js/app.js')}}" ></script>
</body>
</html>
