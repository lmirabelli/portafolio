const menu = document.getElementById('menu')
let mobileMenu = () => {
    menu.innerHTML = `  <li><a href="#home"><img src='images/home.png'></a></li>
                        <li><a href="#who"><img src='images/question.png'></a></li>
                        <li><a href="#cert"><img src='images/medal.png'></a></li>
                        <li><a href="#works"><img src='images/tool.png'></a></li>
                        <li><a href="#contact"><img src='images/mail.png'></a></li>`
}
let desktopMenu = () => {
    menu.innerHTML = `  <li><a href="#home">Inicio</a></li>
                        <li><a href="#who">Quien Soy</a></li>
                        <li><a href="#cert">Certificaciones</a></li>
                        <li><a href="#works">Proyectos</a></li>
                        <li><a href="#contact">Contacto</a></li>`
}



screen.width < 501 ? mobileMenu() : desktopMenu();