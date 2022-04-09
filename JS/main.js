(() => {

    let aboutUs= document.querySelectorAll(".us"),
        Info = document.querySelector("#info"),
        Name= document.querySelector("#name"),
        Picture= document.querySelector("#pic"),
        PoPbox= document.querySelector("#popBox");

    const infoText =[
        `Hey! I am Ishpreet. Designer of the group. Design Gradute from high school. Loves colors and like to explore with them.
         Fan girl of Sushant Singh Rajput- Indian film Actor.  ` ,
        `Hey! I am Mamatha Vaidehi Ramesh. Student of Fanshawe College from September 2021. I am the developer of the group. 
         `
    ]

    function ShowpopBox() {
        PoPbox.style.display="block";
        Name.classList.add("showpopBox");
    }

    function AboutUsInfo() {
        //debugger;
        console.log("know more about", this.alt);
        console.log(this.classList);
        this.classList.add("active");
        ShowpopBox();
         let offSet= this.dataset.offset;
         Name.textContent = this.alt;
         Info.textContent = infoText[offSet];
         Picture.src = `Images/${this.alt}.png`;
         console.log(this.classList);
    }
    function removeActiveClass(event) {
        if (event.propertyName === 'transform') {
          this.classList.remove("active");
          console.log(this.classList);
        }
      }



    aboutUs.forEach(about => about.addEventListener("click", AboutUsInfo));
    aboutUs.forEach(abt => abt.addEventListener("transitionend", removeActiveClass));

}) ();

