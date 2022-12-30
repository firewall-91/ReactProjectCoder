import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Proovedores</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Ayuda</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Compras</a></li>
            <li><a href="#">Devoluciones</a></li>
            <li><a href="#">Opciones de pago</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Tienda online</h4>
          <ul>
            <li><a href="#">Guitarras</a></li>
            <li><a href="#">Percusión</a></li>
            <li><a href="#">Accesorios</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Siguenos</h4>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
    <p class="terms">Valores en USD, no acumulable con otras promociones. Producto hasta agotar stock. Proyecto realizado exclusivo para el curso React en Coderhouse</p>
  </footer>
  )
}

export default Footer