<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="language" content="Portuguese">
  <meta name="author" content="Miria Amorim">
  <meta name="robots" content="index, follow">
  <meta name="revisit-after" content="7 days">
  <meta name="geo.country" content="BR">
  <meta name="description" content="lar3 arquitetura e interiores - Arquitetura inovadora e inspiradora. Soluções exclusivas e personalizadas. Projetos criativos, funcionais e sustentáveis. Palavras-chave: arquitetura, inovação, personalização, sustentabilidade.">
  <meta name="keywords" content="arquitetura, arquitetura inovadora, projetos personalizados, sustentabilidade, estilo, transformação de espaços, obras de arte, ambiente criativo, funcional e sustentável, lar3">
  <link rel="icon" href="favicon.png" type="favicon.png">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <title>Formulario de Orçamento</title>
  <link rel="stylesheet" href="css/form.css" type="text/css">

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/5.0.6/jquery.inputmask.min.js"></script>
  <script>
    $(document).ready(function() {
      $('#celular').inputmask('(99) 99999-9999');
    });
  </script>

</head>

<body>



  <div class="container">
    <div class="main d-flex align-items-center justify-content-center">



      <form class="form-control text-start" action="formulario/enviar_email.php" method="POST" id="myForm" enctype="multipart/form-data">
        <input type="hidden" name="_next" value="https://lar3arquitetura.com.br/obrigado">
        <input type="hidden" name="_captcha" value="false">
        <div class="cabecalho d-flex align-items-center justify-content-center">
          <div class="row">
            <div class="col col-auto w-100 text-center">
              <img class="img-fluid logo" src="img/logo.png" alt="">
            </div>
            <div class="col mt-0 text-center">
              <h4 class="fw-bold">Solicitação de Orçamento</h4>
              <h6 class="text-secondary">Retornaremos o mais breve possível</h6>
              <p class="text-secondary">Campos que possuem <span class="required">*</span> são obrigatórios!</p>
            </div>
          </div>
        </div>
        <hr>
        <div class="row mb-3">
          <div class="col">
            <label for="Nome" class="text-start mt-4">Nome: <span class="required">*</span></label>
            <input type="text" name="nome" required>
          </div>
          <div class="col">
            <label for="Sobrenome" class="text-start mt-4">Sobrenome: <span class="required">*</span></label>
            <input type="text" name="sobrenome" required>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="Email" class="text-start mt-3">Email <span class="required">*</span></label>
            <input type="email" name="email" required>
            <p for="Email" class="text-start text-secondary">Exemple@exemple.com</p>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="celular" class="text-start mt-3">Celular <span class="required">*</span></label>
            <input type="text" name="celular" id="celular" placeholder="(00) 00000-0000" required>
          </div>
        </div>


        <div class="row">
          <div class="col">
            <label for="Local_projeto" class="text-start mt-4">Endereço local do projeto? <span class="required">*</span></label>
            <input type="text" name="local_projeto" required>
          </div>
        </div>


        <div class="row">
          <div class="col">
            <label for="projeto" class="text-start mt-4">Qual projeto você precisa? <span class="required">*</span></label>
            <select class="form-select" name="projeto" id="projeto" aria-label="Default select example" required>
              <option selected disabled value="">Favor Selecionar</option>
              <option value="Executivo de Interiores">Executivo de Interiores</option>
              <option value="Projeto de Fachada">Projeto de Fachada</option>
              <option value="Aprovação da Prefeitura">Aprovação da Prefeitura</option>
              <option value="Arquitetônico + Interiores">Arquitetônico + Interiores</option>
              <option value="Arquitetônico + Interiores">Consultoria</option>
              <option value="Outros">Outros</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="imovel" class="text-start mt-4">Tipo de Imóvel: <span class="required">*</span></label>
            <select class="form-select" name="imovel" id="imovel" aria-label="Default select example" required>
              <option selected disabled value="">Favor Selecionar</option>
              <option value="Apartamento">Apartamento</option>
              <option value="Casa">Casa</option>
              <option value="Loja">Loja</option>
              <option value="Escritório">Escritório</option>
              <option value="Outros">Outros</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="chaves" class="text-start mt-4">Você já esta com as chaves do imóvel?: <span class="required">*</span></label>
            <select class="form-select" name="chaves" id="chaves" aria-label="Default select example" required>
              <option selected disabled value="">Favor Selecionar</option>
              <option value="Sim.">Sim.</option>
              <option value="Sim, e já usufruo dele.">Sim, e já usufruo dele.</option>
              <option value="Não, devo pegar até o próximo mês.">Não, devo pegar até o próximo mês.</option>
              <option value="Não, vai demorar mais para pegar.">Não, vai demorar mais para pegar.</option>
              <option value="Outros">Outros</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="area" class="text-start mt-4">Qual a área (m²) a ser projetada?</label>
            <input type="text" name="area">
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="Acompanhamento_de_obra" class="text-start mt-4">Deseja acompanhamento de obra? <span class="required">*</span></label>
            <select class="form-select" name="Acompanhamento_de_obra" id="Acompanhamento_de_obra" aria-label="Default select example" required>
              <option selected disabled value="">Favor Selecionar</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for="local" class="text-start mt-4">Quanto ao local: <span class="required">*</span></label>
            <select class="form-select" name="local" id="local" aria-label="Default select example" required>
              <option selected disabled value="">Favor Selecionar</option>
              <option value="Local novo - projeto com quebra de paredes">Local novo - projeto com quebra de paredes</option>
              <option value="Local antigo - projeto com quebra de paredes">Local antigo - projeto com quebra de paredes</option>
              <option value="Local novo - projeto sem quebra de paredes">Local novo - projeto sem quebra de paredes</option>
              <option value="Local antigo - projeto sem quebra de paredes">Local antigo - projeto sem quebra de paredes</option>
              <option value="Local novo a ser projeto (Em fase de construção)">Local novo a ser projeto (Em fase de construção)</option>
            </select>
          </div>
        </div>


        <div class="row">
          <div class="col">
            <label for="fotos" class="text-start mt-4">Possui plantas, fotos e/ou arquivos importantes do local do projeto?</label>
            <input type="file" name="fotos[]" accept="image/*" multiple>
          </div>
        </div>


        <div class="row">
          <div class="col">
            <label for="mensagem" class="text-start mt-4">Como descreveria o seu estilo? Quais seus gostos e preferências? <span class="required">*</span></label><br>
            <textarea name="mensagem" rows="4" required placeholder="Escreva Aqui..."></textarea>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <label for=" considerada_no_orcamento" class="text-start mt-4">Mais alguma informação a ser considerada no orçamento?</label>
            <input type="text" name=" considerada_no_orcamento">
          </div>
        </div>


        <div class="row">
          <div class="col">
            <label for="como_conheceu" class="text-start mt-4">Como conheceu o escritório? <span class="required">*</span></label>
            <select class="form-select" name="como_conheceu" id="como_conheceu" aria-label="Default select example" required>
              <option selected disabled value="">Favor Selecionar</option>
              <option value="Instagram">Instagram</option>
              <option value="Google">Google</option>
              <option value="Indicação de amigos e familiares">Indicação de amigos e familiares</option>
              <option value="Outros">Outros</option>
            </select>
          </div>
        </div>

        <!-- Botao enviar -->
        <div class="d-grid gap-2">
          <button type="submit" name="enviar" class="mt-5 btn btn-success">Enviar</button>
        </div>
      </form>

    </div>
  </div>



  <script>
    // Função para validar o formulário antes de enviar
    function validateForm() {
      var form = document.getElementById("myForm");

      // Verifica se todos os campos obrigatórios foram preenchidos
      if (form.checkValidity() === false) {
        // Exibe uma mensagem de erro
        var errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        return false;
      }
    }

    // Captura o evento de envio do formulário
    var submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", function(event) {
      event.preventDefault();
      validateForm();
    });
  </script>


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>

</html>