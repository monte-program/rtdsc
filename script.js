let word = "телепередача"
let attemp = 5
let letters = []
let word2 = ["телепередача", "автоэлектростеклоподъемники", "фиброэзофагогастродуоденоскопия", "рентгеноэлектрокардиографического", "четырёхсотпятидесятисемимиллиметровое", "тетрагидропиранилциклопентилтетрагидропиридопиридиновые"]
let getRandom = word2[Math.floor(Math.random() * word2.length)]



document.querySelector(".inB").disabled=true 


document.querySelector(".btB").onclick= function(){
    let pl = ""
        document.querySelector(".btD").disabled=false
        document.querySelector(".inD").disabled=false
        getRandom = word2[Math.floor(Math.random() * word2.length)]

    for(let i =0; i < getRandom.length; i++){
         pl=pl+"❌" 
    }
    document.querySelector(".inB").value=pl 
    letters=[]
    attemp = 5
    document.querySelector("span").innerHTML= attemp
}
document.querySelector(".btD").onclick= function(){
    let letter = document.querySelector(".inD").value
    let letterWord = document.querySelector(".inB").value
    if(letterWord!=""){
        letters.push(letter)
        
        let pl2 = ""
        for(let i =0; i < getRandom.length; i++){
            let nomer = getRandom[i]
            if(letters.indexOf(nomer)!=-1){
                pl2 = pl2 + nomer
                console.log(1)
            }else{
                pl2 = pl2 + "❌"
            }
        }
        document.querySelector(".inB").value= pl2
        if(pl2==getRandom){
            document.querySelector(".h2").innerHTML= "Ты победил Гитлера, Вот твой револьвер"
        }
        if(getRandom.indexOf(letter)==-1){
            attemp = attemp -1
            document.querySelector(".span").innerHTML= attemp
        }
        if(attemp==0){
            document.querySelector(".btD").disabled=true
            document.querySelector(".inD").disabled=true 
        }
    }
}
