<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>EXO Team - Data</title>
</head>
<body>
    <h2>Listagem de emails:</h2>

    <?php
    $filename = "emails.txt";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if (isset($_POST["email"])) {
            $email = $_POST["email"];

 
            file_put_contents($filename, $email . PHP_EOL, FILE_APPEND);

            echo "O email enviado é: " . $email;
        } else {
            echo "O campo de email não foi enviado no formulário.";
        }
    } 

   //A função explode divide uma string em um array e o PHP_EOL representa o caractere de quebra de linha
  
    $emails = file_get_contents($filename);
    $emailsArray = explode(PHP_EOL, trim($emails));

    if (!empty($emailsArray)) {
        echo "<ul>";
        foreach ($emailsArray as $email) {
            echo "<li>$email</li>";
        }
        echo "</ul>";
    }
    ?>
</body>
</html>

