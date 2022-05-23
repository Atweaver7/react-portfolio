import React from 'react';
import "../assets/styles/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import github from "../assets/pictures/Git.png";


const element = <FontAwesomeIcon icon="fa-brands fa-github" />

function Footer(){
    return (
<body>
    <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3></h3>
                        <ul>
                            <li className="github"><a href="https://github.com/Atweaver7" target="_blank"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3></h3>
                        <ul>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                            <li><a href="#"></a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                      
                    </div>
                    <img></img>
                    <div class="col item social">
                        <a href="https://github.com/Atweaver7" target="_blank">
                        <img className="gitlogo" src={github}></img>
                        <i class="icon ion-social-facebook"></i>
                        </a><a href="#"><i class="icon ion-social-twitter"></i>
                        </a><a href="#"><i class="icon ion-social-snapchat"></i>
                        </a><a href="#"><i class="icon ion-social-instagram"></i>
                        </a></div>
                </div>
                <p class="copyright">© 2022</p>
            </div>
        </footer>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
</body>

   
    )
}

export default Footer