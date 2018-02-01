var login=prompt("Логин:(Админ)");
if(login===null){
alert("Вход отменен");
}
else{

if(login==="Админ"){
	var password=prompt("Пароль:(Черный Властелин)","");

	if(password===null){
		alert("Вход отменен");
	}
	else{
		if (password==="Черный Властелин") {
           alert("Добро пожаловать чёрный брат!!");
		}
		else{
			alert("Пароль неверный");
		}
	}
}

    else{
	    alert("Я таких не знаю");
    }
}
