function pop(){
    let name = prompt("Please Enter Name", "Name Here")
    if(name!="Name Here"){
        document.getElementById("confirm").innerHTML = `Hi ${name} <br>`
    }   
    let email = prompt("Please Enter Your E-Mail", "E-mail")
    if (email!="E-mail"){
        document.getElementById('confirm').innerHTML += `Your Email ${email} is Linked with our Website`;
    }

}


function show() {
    alert(`welcome to puma, where style meets comfort and every step tells a story. Today, we invite you to embark on a journey through the world of footwear excellence. From innovative designs to unparalleled craftsmanship, join us as we walk you through the unique footprint of puma in the dynamic landscape of the shoe industry."`)
}