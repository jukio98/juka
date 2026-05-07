/////com.dialogo("Testando Nuevo Julio")
////com.info("vai Corinthians !!! testando api num 3")
/////com.aviso("","")


gasolina=91
tt.append("12/10=21:00")



const cc=k=>alert(k);
id=idd=>document.getElementById(idd);
evento=((ids,evt,funcao)=>{
    id(ids).addEventListener(evt,funcao)

})
    usuario="Posição:  Julio"
local=(()=>{
    
    hth=new Date()
    hhh=hth.getHours();
    mmm=hth.getMinutes();
    ddd=hth.getDate()
    mesm=hth.getMonth();
    
    if(hhh<10) hhh="0"+hhh;
        if(mmm<10) mmm="0"+mmm;
        if(ddd<10) ddd="0"+ddd;
        if(mesm<10) mesm="0"+mesm;
    
    
    dia_do_envio=hhh+":"+mmm+" - "+ddd+"/"+mesm
    
if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (posicao) => {
                const lat = posicao.coords.latitude;
                const lon = posicao.coords.longitude;
geo=lat+","+lon+" ::: Data :::"+dia_do_envio;
////cc(geo);
enviar(usuario,geo);
            })
}else{
    cc("erro ao obter localização");
}

com.info("OI")

})


const ur="https://apis-q4i9.onrender.com/cadastro";

 enviar=((usu,loc)=>{
    
 fetch(ur, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nome:usu,
        senha:loc,
        data:new Date
    })
}).then((resposta)=>{
    return resposta.json()

    }).then((an)=>{
      
    }).catch((er)=>{
        
    })

   
 })


   evento("bd","click",()=>{
        local()
        })














