import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Anuncios } from 'src/app/shared/models/Anuncios';
import { AnunciosService } from '../anuncios.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  anuncio:  Anuncios = null;

  constructor
  (
    private anunciosService: AnunciosService,
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const anuncioId = routeParams.get('id');
    if(anuncioId) {
      this.anunciosService.getById(anuncioId).subscribe( anuncioRetorno => {
        this.anuncio = anuncioRetorno;
      },
      error => {
        this.toastrService.error(error.message);
      });
    }
    else{
      console.error("Necessário enviar um ID como parâmetro");
      this.toastrService.error("Necessário enviar um ID como parâmetro");
    }
  }

}
