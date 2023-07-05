<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <meta name="title" content="lar3 arquitetura e interiores - Arquitetura inovadora e inspiradora">
  <meta name="language" content="Portuguese">
  <meta name="author" content="Miria Amorim">
  <meta name="robots" content="index, follow">
  <meta name="revisit-after" content="7 days">
  <meta name="geo.country" content="BR">
  <meta name="description" content="lar3 arquitetura e interiores - Arquitetura inovadora e inspiradora. Soluções exclusivas e personalizadas. Projetos criativos, funcionais e sustentáveis. Palavras-chave: arquitetura, inovação, personalização, sustentabilidade.">
  <meta name="keywords" content="arquitetura, arquitetura inovadora, projetos personalizados, sustentabilidade, estilo, transformação de espaços, obras de arte, ambiente criativo, funcional e sustentável, lar3">
  <link rel="icon" href="favicon.png" type="favicon.png">
  <title>arquitetura-Lar3</title>


  <!-- Google Font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Aldrich&display=swap" rel="stylesheet">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">


  <!-- Vendor CSS Files -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="vendor/glightbox/css/glightbox.min.css" rel="stylesheet">

  <!-- Css Styles -->
  <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">
  <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css">
  <link rel="stylesheet" href="css/elegant-icons.css" type="text/css">
  <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css">
  <link rel="stylesheet" href="css/slicknav.min.css" type="text/css">
  <link rel="stylesheet" href="css/slick.css" type="text/css">
  <link rel="stylesheet" href="css/style.css" type="text/css">
  <link rel="stylesheet" href="css/gallary.css" type="text/css">
  <!-- so para seção chatbot -->
  <link rel="stylesheet" href="css/chatbot/main-chatbot.css">
</head>

<body>



  <!-- ======= Header ======= -->
  <header id="header" class="header">
    @include('layouts.header')
  </header><!-- End Header -->

  <!-- ======= Main ======= -->
  <main id="main">
    @yield('content')
  </main><!-- End #main -->


  <!-- Footer Section Begin -->
  <footer class="footer set-bg" data-setbg="img/footer-bg.jpg">
    @include('layouts.footer')
  </footer>
  <!-- Footer Section End -->

  <!-- Page Preloder -->
  <div id="preloder">
    <div class="loader"></div>
  </div>

  <section id="chatbot">
    @include('layouts.chatbot')
  </section>

</body>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

<!-- Vendor JS Files -->
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="vendor/glightbox/js/glightbox.min.js"></script>
<script src="vendor/isotope-layout/isotope.pkgd.min.js"></script>

<!-- Js Plugins -->
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.slicknav.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/slick.min.js"></script>
<script src="js/main.js"></script>
<script src="js/gallary.js"></script>

<!-- chatbot -->
<script src="js/chatbot/main-chatbot.js"></script>
<script src="js/chatbot/message-bot-1.js"></script>
<script src="js/chatbot/message-bot-2.js"></script>
<script src="js/chatbot/message-bot-3.js"></script>
<script src="js/chatbot/message-bot-4.js"></script>
<script src="js/chatbot/message-bot-5.js"></script>
<script src="js/chatbot/message-person.js"></script>
<script src="js/chatbot/voltar.js"></script>
<script src="js/chatbot/teclado.js"></script>
</html>