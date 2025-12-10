import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {   // <-- corregido: las clases en Angular van en Mayúscula

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
      createdAt: [new Date().toISOString()]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  cancelar() {
    this.contactForm.reset();
  }

  enviar() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const data = this.contactForm.value;

    // Convertir a JSON
    const json = JSON.stringify(data, null, 2);

    // Crear archivo
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Crear descarga
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.json';
    a.click();

    URL.revokeObjectURL(url);

    alert('Datos guardados en un archivo JSON descargado.');
  }
}
