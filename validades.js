
com.aviso("Validades", "Última Alteração:10/06/2024");

usuario=[
"29483_Julio Cesar Rodrigues da Silva Sulino",
"32161_Pablo Vinícius da Costa",

]

cad=(()=>{
wr=log.value;

for(i=0; i<usuario.length; i++){
if(wr==usuario[i].substring(0,5)){
tt.innerText=usuario[i].substring(6)

setTimeout(()=>{
inp.style="margin-left: 0"
tela.style="margin-left: 0"
login.style="margin-left: 110%;"
horas()
},1000)

}

}

ch.focus()

})


produtos=[
{
dia:"16/06/2024",
nome:"BATATA SADIA 300G",
codigo:"78910203040"
},

{
dia:"18/06/2024",
nome:"BATATA SADIA 300G",
codigo:"78910203040"
},

{
dia:"13/06/2024",
nome:"ALGUMA COISA DE BUFALA",
codigo:"7898266080164"
},
{
dia:"20/06/2024",
nome:"PARMESÃO RELÍQUIA",
codigo:"7898924049051"
},
{
dia:"15/06/2024",
nome:"A",
codigo:"7898266064"
},

{
dia:"11/06/2024",
nome:"BATATA SADIA 300G",
codigo:"78910203040"
},


{
dia:"10/06/2024",
nome:"BATATA SEARA 300G",
codigo:"78910203040"
},


{
dia:"02/06/2024",
nome:"BATATA SEARA 300G",
codigo:"78910203040"
},


{
dia:"11/05/2024",

nome:"BATATA FRIMESA 300G",
codigo:"78910203040"
},

]