<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $inputUserName = isset($_POST['inputUserName']) ? htmlspecialchars($_POST['inputUserName']) : '';
    $inputContactInformation = isset($_POST['inputContactInformation']) ? htmlspecialchars($_POST['inputContactInformation']) : '';

    if (!empty($inputUserName) && !empty($inputContactInformation)) {
        $data = "userName: $inputUserName, contactInformation: $inputContactInformation\n";
        file_put_contents('applications.txt', $data, FILE_APPEND);

        echo json_encode([
            "message" => "Данные Отправлены",
            "data" => $data
        ]);
    } else {
        echo json_encode(["message" => "Invalid input"]);
    }
} else {
    echo json_encode(["message" => "Invalid request method"]);
}
