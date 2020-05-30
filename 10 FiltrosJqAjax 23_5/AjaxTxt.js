document.querySelector('#botontxt').addEventListener('click',datostxt);

function datostxt(){
    console.log('función');
    const rhttp=new XMLHttpRequest();//instanciar uno obejot XMLHttpRequest
    rhttp.open('GET','Archivo.txt',true);
    rhttp.send();
    rhttp.onreadystatechange= function(){   //respuesta de estado
        if(this.readyState==4 && this.status==200){ // 4 que ha finalizado y 200 correcto
            console.log(this.responseText);
            document.querySelector('#respuesta').innerHTML=this.responseText;

        }
    }
}