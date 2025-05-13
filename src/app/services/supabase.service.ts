import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async uploadImage(base64Image: string): Promise<string | null> {
    try {
      const fileName = `imagen_${Date.now()}.png`;
      const base64Data = base64Image.split(',')[1]; // quitar el encabezado data:image...

      const { error } = await this.supabase.storage
        .from('multimedia') // nombre del bucket en Supabase
        .upload(fileName, Buffer.from(base64Data, 'base64'), {
          contentType: 'image/png',
        });

      if (error) {
        console.error('Error al subir imagen:', error.message);
        return null;
      }

      // Obtener URL pública
      const { data } = this.supabase.storage
        .from('multimedia')
        .getPublicUrl(fileName);

      return data?.publicUrl || null;

    } catch (err) {
      console.error('Error en SupabaseService:', err);
      return null;
    }
  }
}
