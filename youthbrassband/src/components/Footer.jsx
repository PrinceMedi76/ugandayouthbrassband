
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='container footer max-h-full max-w-full justify-between bg-black p-10'>
        <div className='container-fluid flex  col-12 col-lg-4'>
            <div className='row gap-2 col-12 col-lg-4'>
                <div className='footer-card relative col-12 col-lg-4' style={{maxWidth: "320px"}}>
                   <div className='card-logo'>
                    <img src="./images/newlogo.png" class="card" alt="..."/>
                   </div>
                    <div className='card-logo-links'>
                        <ul className='flex gap-5'>
                            <li class="nav-item hover-lift">
                                <a class="nav-link" href="https://www.youtube.com/@UgandaYouthBrassBand"><IoLogoYoutube color="white" size={20}/></a>
                            </li>
                            <li class="nav-item hover-lift">
                                <a class="nav-link" href="https://www.facebook.com/share/1YohhJc5QY/"><FaFacebookF color="white" size={20}/></a>
                            </li>
                            <li class="nav-item hover-lift">
                                <a class="nav-link" href="https://instagram.com/ugandayouthbrassband"><GrInstagram color="white" size={20}/></a>
                            </li>
                            <li class="nav-item hover-lift">
                                <a class="nav-link" href="https://tiktok.com/@ugandayouthbrassband"><FaTiktok color="white" size={20}/></a>
                            </li>
                            <li class="nav-item hover-lift">
                                <a class="nav-link" href="https://x.com/UgandaYouthj"><FaXTwitter color="white" size={20}/></a>
                            </li>
                            <li class="nav-item hover-lift">
                                <a class="nav-link" href="mailto:ugandayouthbrassband@gmail.com"><MdMarkEmailUnread color="white" size={20}/></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-card col-12 col-lg-4" style={{maxWidth: "320px"}}>
                    <div class="card-body">
                        <h4 class="card-title">CONTACTS</h4>
                        <p class="card-text">P.O. BOX 214788 Kampala - Uganda</p>
                        <p class="card-subtitle fg-3">Phone : <br/> +256 788446462 / +256 744999159</p>
                        <p class="card-text">Email : <br/> ugandayouthbrassband@gmail.com</p>
                        <p class="card-subtitle fg-3">Location : <br/> Maganjo, Namalere Village, Wakiso District.</p>
                    </div>
                </div>
                <div class="footer-card col-12 col-lg-4" style={{maxWidth: "320px"}}>
                    <div class="card-body">
                        <h4 class="card-title">PARTNERS</h4>
                        <img class='card-p-logo' src='./images/Sounds.jpg' alt='...'/>
                        <p class="card-subtitle fg-3">Sounds Of Brass Radio<br/>UK - SME Awards Winner 2026</p>
                        <a href="http://www.sounds-of-brass.co.uk/">Partner Website</a>
                        <button type="button" class="btn"><a href="https://www.sounds-of-brass.co.uk/african-youth-band-partner">Donate ❤️</a></button>
                    </div>
                </div>
                <div class="footer-card col-12 col-lg-4" style={{maxWidth: "200px"}}>
                    <div class="card-body">
                        <h4 class="card-title">Donate</h4>
                        <p class=" fg-3">
                            Donate Instruments, Mouthpieces, School Fees, <br/> Rehearsal space and Transport
                        </p>
                        <p class="card-subtitle fg-success">
                            Your Support keeps the Music playing
                        </p>
                        <button type="button" class="btn"><a href="#">Donate ❤️</a></button>
                        
                    </div>
                </div>
            </div>
        </div>

      <div className='footer-copyright flex justify-between pt-20 col-12 col-md-6'>
        <p>&copy; 2026 Donated By PrinceMedi with ❤️</p>
        <p>Privacy Policy | Terms And Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
