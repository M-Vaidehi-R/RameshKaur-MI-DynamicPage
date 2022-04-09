(() => {

    let aboutUs = document.querySelectorAll(".us"),
        Info = document.querySelector("#info"),
        Name = document.querySelector("#name"),
        Picture = document.querySelector("#pic"),
        PoPbox = document.querySelector("#popBox");

    const infoText = [
        `Hi there! My name is Ishpreet. I'm the designer of this group. I graduated from high school in 2020. Presently, I'm enrolled in Interactive Media Design program of Fanshawe College. I love to design cool stuff. My favourite software is Adobe Illustrator. I like working on different design projects. I always try to put all my efforts to make my creations look the best.  ` ,
        `Hey! My name is Mamatha Vaidehi Ramesh. I am the developer of this group. Currently, I'm doing my diploma from Fanshawe College, London. I've always been passionate about coding. I like to code different webpages.
         `
    ]

    function ShowpopBox() {
        PoPbox.style.display = "block";
        Name.classList.add("showpopBox");
    }

    function AboutUsInfo() {
        //debugger;
        console.log("know more about", this.alt);
        console.log(this.classList);
        this.classList.add("active");
        ShowpopBox();
        let offSet = this.dataset.offset;
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

})();


