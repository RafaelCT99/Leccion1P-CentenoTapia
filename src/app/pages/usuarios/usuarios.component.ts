import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/Usuario.model';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  form!: FormGroup;
  eliminados: Usuario[] = [];
  usuarios: Usuario[] = [
    {
      id: 1,
      firstname: 'Rafael',
      lastname: 'Centeno',
      cedula: '0949234821',
      birthday: new Date('1999-02-18')
    },
    {
      id: 5,
      firstname: 'Samira',
      lastname: 'Mora',
      cedula: '0949283458',
      birthday: new Date('1997-09-18')
    },
    {
      id: 2,
      firstname: 'Arianna',
      lastname: 'Garcia',
      cedula: '0985738456',
      birthday: new Date('2000-12-04')
    },
    {
      id: 3,
      firstname: 'Omar',
      lastname: 'Tapia',
      cedula: '9843954893',
      birthday: new Date('1995-08-13')
    },
    {
      id: 4,
      firstname: 'Gerardo',
      lastname: 'Martinez',
      cedula: '0959485687',
      birthday: new Date('1992-08-20')
    }
];

  constructor(private formBuilder: FormBuilder, private router: Router) {}
  
  ngOnInit(){
    this.form = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      cedula: [''],
      birthday: [''],
    });
  }

  nuevaPersona() {
    if (this.form.valid) {
      const persona: Usuario = {
        firstname: this.form.value.firstname,
        lastname: this.form.value.lastname,
        cedula: this.form.value.cedula,
        birthday: new Date(this.form.value.birthday),
      };
      this.usuarios.push(persona);
      this.form.reset();
    } else {
      alert('Datos invalidos');
    }
  }

  eliminarEstudiante(indice: number, persona: Usuario) {
    this.usuarios.splice(indice, 1);
    this.eliminados.push(persona);
  }
}
