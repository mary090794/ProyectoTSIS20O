import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpService } from '../../servicios/http.service';


@Component({
  selector: 'app-registrausuario',
  templateUrl: './registrausuario.page.html',
  styleUrls: ['./registrausuario.page.scss'],
})

export class RegistrausuarioPage implements OnInit {
  
  constructor(public http: HttpService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  muevelogin(){

    this.navCtrl.navigateForward("/login");
  }

  guardaUsuario(usuario, contrasena,email){

    console.log("Entro a registra usuariots");
    console.log(usuario);
    console.log(contrasena);
    console.log(email); 

    if (usuario !=""  &&  contrasena != "" && email!="" ){ 
      
      if (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(email)){

        this.http.validaUsuarioR(usuario, email).subscribe(
          (res) => {
  
                if (res.usuarios==null){
                  alert("Usuario adecuado");                  
                
                  this.http.guardaUsuario(usuario,contrasena,email).subscribe(
                    (res) => {                  
  
                    });
  
                    this.muevelogin();
  
                } else{
  
                  alert("Este Usuario ya Existe intenta con otro ");              
  
                }
              });

      }else{

        alert("Por favor ingrese un correo existente");    
        
      }

    }else{

      alert("campos obligatorios de registro");
    }      
  }  

}



