<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

<style>
  @font-face {
    font-family: 'Tangerine';
    src: url('fonts/Tangerine-Regular.ttf') format('truetype');
    /* Outros formatos de fonte para suporte a navegadores diferentes */
  }

  @font-face {
    font-family: 'TangerineBold';
    src: url('fonts/Tangerine-Bold.ttf') format('truetype');
    /* Outros formatos de fonte para suporte a navegadores diferentes */
  }


  h1,
  h2 {
    font-family: 'Tangerine', sans-serif;
  }

  h1 {
    font-size: 100px;
    /* Tamanho menor para dispositivos móveis */
  }

  h2 {
    font-size: 50px;
    /* Tamanho menor para dispositivos móveis */
  }

  .voltar {
    font-size: 20px;
    /* Tamanho menor para dispositivos móveis */
  }

  .logo {
    height: 500px;
    /* Tamanho menor para dispositivos móveis */
    width: 500px;
    /* Tamanho menor para dispositivos móveis */
  }


  .logo {
    height: 300px;
    width: 300px;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    h1 {
      font-size: 200px;
      /* Tamanho menor para dispositivos móveis */
    }

    h2 {
      font-size: 80px;
      /* Tamanho menor para dispositivos móveis */
    }

    .voltar {
      font-size: 40px;
      /* Tamanho menor para dispositivos móveis */
    }

    .logo {
      height: 500px;
      /* Tamanho menor para dispositivos móveis */
      width: 500px;
      /* Tamanho menor para dispositivos móveis */
    }
  }
</style>

<div class="container" style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
  <img src="img/logo.png" class="d-flex align-items-center justify-content-center logo" alt="logo">
  <h1 class="text-center">Obrigado!</h1>
  <h2 class="text-secondary text-center">Seu envio foi recebido.</h2>
  <a class="btn btn-warning text-center voltar" href="/">Voltar para Página Inicial</a>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>