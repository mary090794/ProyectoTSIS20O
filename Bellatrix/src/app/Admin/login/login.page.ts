import { Component, OnInit, ɵConsole } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpService } from '../../servicios/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})

export class LoginPage implements OnInit {

  usuario="";
  contrasena="";

  constructor(public http: HttpService, private navCtrl: NavController) { }
  ngOnInit() {
  }

  muestraAdmin(){
      this.navCtrl.navigateForward("principal");
  }

  mueveaRegistra(){
    this.navCtrl.navigateForward("registrausuario");
  }

  RegistraUsuario(){

      this.mueveaRegistra();
  }

  Login(usuario, contrasena){   
    
    console.log(this.usuario);
    console.log(contrasena);
   

    if (usuario !=""  &&  contrasena != "" ){      

      this.http.validaUsuario(usuario, contrasena).subscribe(
        (res) => {

              if (res.usuarios==null){
                alert("No existe ese usuario");


              } else{
                console.log(res.usuarioS);
                this.usuario=res.usuarios.usuario;
                this.contrasena=res.usuarios.pass;      
                console.log("Ese log es el de pagets lol");          
        
                console.log(this.usuario );
                console.log(usuario);
        
                console.log(this.contrasena );
                console.log(contrasena); 
                
                if(this.usuario==usuario && this.contrasena==contrasena){
                  this.muestraAdmin();
                }          

              }
            });
    }else{

      alert("campos obligatorios");
    }    
  }

   
}




