import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { FirestoreService } from '../services/firestore.service';
import { SupabaseService } from '../services/supabase.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  base64Image: string | null = null;
  descripcion: string = '';

  constructor(
    private firestoreService: FirestoreService,
    private supabaseService: SupabaseService,
    private toastController: ToastController
  ) {}

  async seleccionarImagen() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Base64,
        source: CameraSource.Prompt
      });

      this.base64Image = `data:image/png;base64,${image.base64String}`;
    } catch (error) {
      this.mostrarToast('Error al seleccionar imagen');
    }
  }

  async guardar() {
    if (!this.base64Image || !this.descripcion.trim()) {
      this.mostrarToast('La imagen y la descripción son obligatorias.');
      return;
    }

    try {
      const imageUrl = await this.supabaseService.uploadImage(this.base64Image);
      if (!imageUrl) {
        this.mostrarToast('Error al subir la imagen.');
        return;
      }

      await this.firestoreService.addMultimedia({
        imageUrl,
        description: this.descripcion,
        date: new Date().toISOString()
      });

      this.mostrarToast('Registro guardado exitosamente.');
      this.base64Image = null;
      this.descripcion = '';

    } catch (error) {
      this.mostrarToast('Error al guardar el registro.');
    }
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
      color: 'medium'
    });
    await toast.present();
  }
}
