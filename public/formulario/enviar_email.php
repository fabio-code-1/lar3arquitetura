<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

if (isset($_POST['enviar'])) {


    $mail = new PHPMailer(true);

    try {
        //Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;           
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'equipe@lar3arquitetura.com.br';
        $mail->Password = 'Bm@97794241';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        //Recipients
        $mail->setFrom('equipe@lar3arquitetura.com.br', $_POST['email']);
        $mail->addAddress('equipe@lar3arquitetura.com.br', 'lar3arquitetura');
        $mail->addReplyTo('equipe@lar3arquitetura.com.br', 'Information');




        // Verifica se há arquivos enviados
        if (isset($_FILES['fotos']) && !empty($_FILES['fotos']['name'][0])) {
            // Loop para anexar os arquivos enviados
            foreach ($_FILES['fotos']['tmp_name'] as $key => $tmp_name) {
                $file = $_FILES['fotos'];

                // Obtém os detalhes do arquivo
                $file_name = $file['name'][$key];
                $file_tmp = $file['tmp_name'][$key];
                $file_type = $file['type'][$key];

                // Adiciona o anexo ao email
                $mail->addAttachment($file_tmp, $file_name);
            }
        }



        //Content
        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';
        $mail->Subject = 'Mensagem via Site Lar3Arquitetura - ' . $_POST['nome'];
        $body = '
            <html>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css">
                
            </head>
            <body>
                <h2>Orçamento enviado através do site, segue informações abaixo:</h2><br>
                <div class="table-responsive">
                    <table class="contact-table table table-striped">
                        <tr>
                            <th>Nome</th>
                            <td>' . $_POST['nome'] . '</td>
                            <th>Sobrenome</th>
                            <td>' . $_POST['sobrenome'] . '</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>' . $_POST['email'] . '</td>
                            <th>Celular</th>
                            <td>' . $_POST['celular'] . '</td>
                        </tr>
                        <tr>
                            <th>Local do Projeto</th>
                            <td>' . $_POST['local_projeto'] . '</td>
                            <th>Projeto</th>
                            <td>' . $_POST['projeto'] . '</td>
                        </tr>
                        <tr>
                            <th>Imóvel</th>
                            <td>' . $_POST['imovel'] . '</td>
                            <th>Chaves</th>
                            <td>' . $_POST['chaves'] . '</td>
                        </tr>
                        <tr>
                            <th>Área</th>
                            <td>' . $_POST['area'] . '</td>
                            <th>Acompanhamento de Obra</th>
                            <td>' . $_POST['Acompanhamento_de_obra'] . '</td>
                        </tr>
                        <tr>
                            <th>Local</th>
                            <td>' . $_POST['local'] . '</td>
                            <th>Mensagem</th>
                            <td>' . $_POST['mensagem'] . '</td>
                        </tr>
                        <tr>
                            <th>Considerada no Orçamento</th>
                            <td>' . $_POST['considerada_no_orcamento'] . '</td>
                            <th>Como Conheceu</th>
                            <td>' . $_POST['como_conheceu'] . '</td>
                        </tr>
                    </table>
                </div>
            </body>
            </html>';


        $mail->Body = $body;


        // Verificar se os anexos estão sendo corretamente detectados
        echo "Número de arquivos anexados: " . count($_FILES['fotos']['tmp_name']) . "\n";
        echo "Arquivos anexados: \n";
        print_r($_FILES['fotos']);


        $mail->send();
        header('Location: https://lar3arquitetura.com.br/obrigado');
        exit();
    } catch (Exception $e) {
        echo "Erro ao enviar o email: {$mail->ErrorInfo}";
    }
} else {
    echo "Erro ao enviar email, acesso não foi via formulário";
}