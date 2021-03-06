document.addEventListener('DOMContentLoaded', function() {
    let imagenes = [
        {img: '/img/foto1.jpg'},
        {img: '/img/foto2.jpg'},
        {img: '/img/foto3.jpg'},
        {img: '/img/foto4.jpg'},
        {img: '/img/foto5.jpg'},
        {img: '/img/foto6.jpg'},
        {img: '/img/foto7.jpg'},
        {img: '/img/foto8.jpg'},
        {img: '/img/foto9.jpg'},
        {img: '/img/foto10.jpg'},
        {img: '/img/foto11.jpg'},
        {img: '/img/foto12.jpg'},
        {img: '/img/foto13.jpg'},
        {img: '/img/foto14.jpg'},
        {img: '/img/foto15.jpg'},
        {img: '/img/foto16.jpg'},
        {img: '/img/foto17.jpg'},
        {img: '/img/foto18.jpg'},
        {img: '/img/foto19.jpg'},
        {img: '/img/foto20.jpg'},
        {img: '/img/foto21.jpg'},
        {img: '/img/foto22.jpg'},
        {img: '/img/foto23.jpg'},
        {img: '/img/foto24.jpg'},
        {img: '/img/foto25.jpg'}
    ]
    let contador  = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.galeria img')
    const img_slideshow = document.querySelector('.slideshow img')

    contenedor.addEventListener('click', function(event) {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        
        if(tgt == atras){
            if(contador > 0){
                img.src = imagenes[contador - 1].img
                contador--
            }
            else{
                img.src = imagenes[imagenes.length - 1].img
                contador = imagenes.length - 1
            }
        }
        else if(tgt == adelante){
            if(contador < imagenes.length - 1){
                img.src = imagenes[contador + 1].img
                contador++
            }
            else{
                img.src = imagenes[0].img
                contador = 0
            }
        }
    })

    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagen_seleccionada = +event.target.dataset.imgMostrar
            img_slideshow.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    document.querySelector('.btn_cerrar').addEventListener('click', () => {
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })

})
