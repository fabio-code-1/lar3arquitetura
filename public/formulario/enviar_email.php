<?php
if (isset($_POST['nome']) && isset($_POST['sobrenome']) && isset($_POST['email']) && isset($_POST['celular']) && isset($_POST['local_projeto']) && isset($_POST['projeto']) && isset($_POST['imovel']) && isset($_POST['chaves']) && isset($_POST['Acompanhamento_de_obra']) && isset($_POST['local']) && isset($_POST['forro']) && isset($_POST['Interiores']) && isset($_POST['mensagem']) && isset($_POST['considerada_no_orcamento']) && isset($_POST['como_conheceu'])) {
    $nome = $_POST['nome'];
    $sobrenome = $_POST['sobrenome'];
    $email = $_POST['email'];
    $celular = $_POST['celular'];
    $localProjeto = $_POST['local_projeto'];
    $projeto = $_POST['projeto'];
    $imovel = $_POST['imovel'];
    $chaves = $_POST['chaves'];
    $acompanhamentoObra = $_POST['Acompanhamento_de_obra'];
    $local = $_POST['local'];
    $forro = $_POST['forro'];
    $interiores = $_POST['Interiores'];
    $mensagem = $_POST['mensagem'];
    $consideradaOrcamento = $_POST['considerada_no_orcamento'];
    $comoConheceu = $_POST['como_conheceu'];

    $assunto = mb_convert_encoding("Formulário de Contato", 'ISO-8859-1', 'UTF-8');
    
$corpo = "Nome: " . mb_convert_encoding($nome, 'ISO-8859-1') . " " . mb_convert_encoding($sobrenome, 'ISO-8859-1') . "\nE-mail: " . mb_convert_encoding($email, 'ISO-8859-1') . "\nCelular: " . mb_convert_encoding($celular, 'ISO-8859-1') . "\nLocal do Projeto: " . mb_convert_encoding($localProjeto, 'ISO-8859-1') . "\nProjeto: " . mb_convert_encoding($projeto, 'ISO-8859-1') . "\nImóvel: " . mb_convert_encoding($imovel, 'ISO-8859-1') . "\nChaves: " . mb_convert_encoding($chaves, 'ISO-8859-1') . "\nAcompanhamento de Obra: " . mb_convert_encoding($acompanhamentoObra, 'ISO-8859-1') . "\nLocal: " . mb_convert_encoding($local, 'ISO-8859-1') . "\nForro: " . mb_convert_encoding($forro, 'ISO-8859-1') . "\nInteriores: " . mb_convert_encoding($interiores, 'ISO-8859-1') . "\nMensagem: " . mb_convert_encoding($mensagem, 'ISO-8859-1') . "\nConsiderada no Orçamento: " . mb_convert_encoding($consideradaOrcamento, 'ISO-8859-1') . "\nComo Conheceu: " . mb_convert_encoding($comoConheceu, 'ISO-8859-1');
    

    // Configurar o destinatário do e-mail
    $destinatario = 'equipe@lar3arquitetura.com.br';

    // Configurar os cabeçalhos do e-mail
    $boundary = md5(time());
    $headers = "From: $email" . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "Content-Type: multipart/mixed; boundary=\"$boundary\"";

    // Verificar se foi enviada uma imagem
    if (isset($_FILES['fotos']) && $_FILES['fotos']['error'] == 0) {
        // Obter as informações do arquivo
        $file_name = $_FILES['fotos']['name'];
        $file_tmp = $_FILES['fotos']['tmp_name'];
        $file_type = $_FILES['fotos']['type'];

        // Ler o conteúdo do arquivo
        $file_content = file_get_contents($file_tmp);

        // Codificar o conteúdo do arquivo em base64
        $file_content_encoded = chunk_split(base64_encode($file_content));

        // Armar o cabeçalho do anexo
        $attachment = "--$boundary\r\n";
        $attachment .= "Content-Type: $file_type; name=\"$file_name\"\r\n";
        $attachment .= "Content-Disposition: attachment; filename=\"$file_name\"\r\n";
        $attachment .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $attachment .= $file_content_encoded . "\r\n";

        // Adicionar o anexo ao corpo do e-mail
        $corpo = "--$boundary\r\n" .
            "Content-Type: text/plain; charset=UTF-8\r\n" .
            "Content-Transfer-Encoding: 8bit\r\n\r\n" .
            $corpo . "\r\n" .
            $attachment . "--$boundary--\r\n";
    } else {
        // Se não houver imagem anexada, enviar o e-mail apenas com o corpo
        $corpo = "--$boundary\r\n" .
            "Content-Type: text/plain; charset=UTF-8\r\n" .
            "Content-Transfer-Encoding: 8bit\r\n\r\n" .
            $corpo . "\r\n";
    }

    // Enviar o e-mail
    if (mail($destinatario, $assunto, $corpo, $headers)) {
        echo "E-mail enviado com sucesso!";
        echo '<script>window.location.href = "https://lar3arquitetura.com.br/obrigado";</script>';
    } else {
        echo "Ocorreu um erro ao enviar o e-mail.";
    }
}
