#-1 server.php formData code

<?php
echo var_dump($_POST);

#-1 server.php application/json code

<?php
$_POST = json_decode(file_get_contents("php://input"), true);
echo var_dump($_POST);


slick slider carousel

json-server --watch db.json
npx webpack