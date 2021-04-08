let $signin = document.getElementById('signin');
function getvalue(){
    let $username = document.getElementById('username').value;
    let $password = document.getElementById('password').value;
    if(($username!="")&($password!="")){
        alert('Sign in successfully')
    } else{
        if(($username=="")&($password=="")){
            alert('Input your Username and your Password')
        } else {
            if($username==""){
                alert('Input your Username')
            } else {
                alert('Input your Password')
            }
        }
    }
    
}