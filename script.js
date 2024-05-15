document.addEventListener('DOMContentLoaded', () => {
    const imagen1 = document.querySelector('.micronociva1');
    const microalga1 = document.querySelector('.microalga1');
    const imagen2 = document.querySelector('.micronociva2');
    const microalga2 = document.querySelector('.microalga2');
   // const imagen3 = document.querySelector('.micronociva3');
   // const microalga3 = document.querySelector('.microalga3');
    const imagen4 = document.querySelector('.micronociva4');
    const microalga4 = document.querySelector('.microalga4');
    const imagen5 = document.querySelector('.micronociva5');
    const microalga5 = document.querySelector('.microalga5');
    const imagen6 = document.querySelector('.micronociva6');
    const microalga6 = document.querySelector('.microalga6');
    const imagen7 = document.querySelector('.micronociva7');
    const microalga7 = document.querySelector('.microalga7');
    const imagen8 = document.querySelector('.micronociva8');
    const microalga8 = document.querySelector('.microalga8');
    const imagen9 = document.querySelector('.micronociva9');
    const microalga9 = document.querySelector('.microalga9');
    const imagen10 = document.querySelector('.micronociva10');
    const microalga10 = document.querySelector('.microalga10');
    const imagen11 = document.querySelector('.micronociva11');
    const microalga11 = document.querySelector('.microalga11');
    const imagen12 = document.querySelector('.micronociva12');
    const microalga12 = document.querySelector('.microalga12');
    const imagen13 = document.querySelector('.micronociva13');
    const microalga13 = document.querySelector('.microalga13');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-content');
    const closeButton = document.querySelector('.close');
    const banner = document.querySelector('.banner');
    let imagenVisible = false;

    microalga1.addEventListener('click',()=>{
    modal.style.display = 'block'; 
    modalImg.src = imagen1.src; 
    imagen1.style.zIndex = '10';
    modal.style.zIndex= '1';
    document.body.classList.add('modal-open'); 
    })
    microalga2.addEventListener('click',()=>{
    modal.style.display = 'block'; 
    modalImg.src = imagen2.src; 
    imagen2.style.zIndex = '10';
    modal.style.zIndex= '1';
    document.body.classList.add('modal-open'); 
    })
    microalga4.addEventListener('click',()=>{
    modal.style.display = 'block'; 
    modalImg.src = imagen4.src; 
    imagen4.style.zIndex = '10';
    modal.style.zIndex= '1';
    document.body.classList.add('modal-open'); 
    })     
    microalga5.addEventListener('click',()=>{
    modal.style.display = 'block'; 
    modalImg.src = imagen5.src; 
    imagen5.style.zIndex = '10';
    modal.style.zIndex= '1';
    document.body.classList.add('modal-open'); 
    })     
    microalga6.addEventListener('click',()=>{
    /*   if(!imagenVisible){
        imagenes.style.display = 'block';
        imagenVisible= true;
    }else{
        imagenes.style.display = 'none';
        imagenVisible=false;
    }*/
    modal.style.display = 'block'; 
    modalImg.src = imagen6.src; 
    /*banner.style.display = 'none'; */// se desconfigura
    imagen6.style.zIndex = '10';
    modal.style.zIndex= '1';
    document.body.classList.add('modal-open'); 
        
    })
    microalga7.addEventListener('click',()=>{
    modal.style.display = 'block'; 
    modalImg.src = imagen7.src; 
    imagen7.style.zIndex = '10';
    modal.style.zIndex= '1';
    document.body.classList.add('modal-open'); 
    })  
    microalga8.addEventListener('click',()=>{
    modal.style.display = 'block'; 
    modalImg.src = imagen8.src; 
    imagen8.style.zIndex = '10';
    modal.style.zIndex= '1';
    document.body.classList.add('modal-open'); 
    })  
    microalga9.addEventListener('click',()=>{
    modal.style.display = 'block'; 
    modalImg.src = imagen9.src; 
    imagen9.style.zIndex = '10';
    modal.style.zIndex= '1';
    document.body.classList.add('modal-open'); 
    })  
    microalga10.addEventListener('click',()=>{
    modal.style.display = 'block'; 
    modalImg.src = imagen10.src; 
    imagen10.style.zIndex = '10';
    modal.style.zIndex= '1';
    document.body.classList.add('modal-open'); 
    })  
    microalga11.addEventListener('click',()=>{
    modal.style.display = 'block'; 
    modalImg.src = imagen11.src; 
    imagen7.style.zIndex = '10';
    modal.style.zIndex= '1';
    document.body.classList.add('modal-open'); 
    })  
    microalga12.addEventListener('click',()=>{
    modal.style.display = 'block'; 
    modalImg.src = imagen12.src; 
    imagen12.style.zIndex = '10';
    modal.style.zIndex= '1';
    document.body.classList.add('modal-open'); 
    })  
    microalga13.addEventListener('click',()=>{
    modal.style.display = 'block'; 
    modalImg.src = imagen13.src; 
    imagen13.style.zIndex = '10';
    modal.style.zIndex= '1';
    document.body.classList.add('modal-open'); 
    })  
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none'; 
        document.body.classList.remove('modal-open'); 
        //banner.style.zIndex = '2'; 
        /*banner.style.display = 'block'; se desconfigura*/
    });

    let logo = document.querySelector('.logomovimiento');
    logo.style.animation = 'emergeLogo 2s forwards';

});
