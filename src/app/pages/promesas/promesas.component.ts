import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: ``
})
export class PromesasComponent implements OnInit {

  ngOnInit(): void {

    // * Llamamos a la funcion getUsuario que retorna una promesa
    this.getUsuario().then(usuarios => {
      console.log(usuarios);
    });
    /*
    const promesa = new Promise((resolve, reject) => {

      // * La respuesta de la promesa la podemos obtener en el .then
      resolve('Llego la data');

      // * Si hay un error lo podemos obtener en el .catch
      reject('No llego la data');
    });

    // * El then se ejecuta cuando la promesa se resuelve
    // * Este proceso es asincrono
    promesa.then((res) => {
      console.log('Termino', res);
    });

    // * El catch se ejecuta cuando la promesa no se resuelve
    // * Este proceso es asincrono
    promesa.catch((err) => {
      console.log('Error', err);
    });

    console.log('Fin del init');
    */
  }

  getUsuario() {

    // return new Promise((resolve, reject) => {
    const promesa = new Promise((resolve) => {
      // * Fetch es una promesa que hace una peticion http
      fetch('https://reqres.in/api/users')
        // * La respuesta de la promesa la manejamos como un json
        .then((res) => res.json())
        // * La respuesta de la promesa la resuelve manejando la data que arroja el json
        .then((res) => resolve(res.data));

    });
    // * Retornamos la promesa
    return promesa;

  }

}
