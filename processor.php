<?php 
    $requestBody = json_decode(file_get_contents('php://input'));

    echo '          <h3>YOUR RECEIPT</h3>
                    <p>
                        Full Name:  <span>'.$requestBody->name.'</span>
                    </p>
                    <p>
                        Email:  <span>'.$requestBody->email.'</span>
                    </p>
                    <p>
                        Ghana Card:  <span>'.$requestBody->ghanacard.'</span>
                    </p>
                    <p>
                        Height:  <span>'.$requestBody->height.'</span>
                    </p>
                    <p>
                        Gender:  <span>'.$requestBody->gender.'</span>
                    </p>
                    <p>
                        marital Status:  <span>'.$requestBody->maritalStatus.'</span>
                    </p>
                    <p>
                        Date of birth:  <span>'.$requestBody->date.'</span>
                    </p>
                    <img src="'.$requestBody->image.'" alt="" style="width: 100%;" />
    '

?>