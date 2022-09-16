class Mobile{
    constructor(mobile, navDhoe,link ) {
        this.mobileMenu = document.querySelector(mobile);
        this.navDhoe = document.querySelector(navDhoe);
        this.link = document.querySelectorAll(link);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.navDhoe.classList.toggle(this.activeClass);
    }

    addClick(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init() {
        if(this.mobileMenu){
            this.addClick();
        }
        return this;
    }
}

const mobil = new Mobile(
    ".mobile",
    ".navDhoe",
    ".link",
)
mobil.init();