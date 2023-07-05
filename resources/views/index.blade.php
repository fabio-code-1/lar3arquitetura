@extends('layouts.app')

@section('content')



<!-- Offcanvas Menu Begin -->
<section>
  @include('one_page.menu')
</section>
<!-- Offcanvas Menu End -->

<!-- Hero Section Begin -->
<section class="hero">
  @include('one_page.hero')
</section>
<!-- Hero Section End -->

<!-- About Section Begin -->
<section id="about" class="about spad">
  @include('one_page.about')
</section>
<!-- About Section End -->

<!-- Services Section Begin -->
<section id="services" class="services spad">
  @include('one_page.services')
</section>
<!-- Services Section End -->

<!-- Project Section Begin -->
<section id="project" class="project">
  @include('one_page.project')
</section>
<!-- Project Section End -->


<!-- Testimonial Section Begin -->
<section id="testimonial" class="testimonial">
  @include('one_page.testimonial')
</section>
<!-- Testimonial Section End -->


<!-- Question Section Begin -->
<section id="question" class="question">
  @include('one_page.question')
</section>
<!-- Question Section End -->

<!-- Team Section Begin 
<section class="team spad">
  @include('one_page.team')
</section>
-->
<!-- Team Section End -->


@endsection