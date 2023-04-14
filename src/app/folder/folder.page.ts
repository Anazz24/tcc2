import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TexAnot } from '../models/TexAnot';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;

  listaAnotacoes: TexAnot[] = [];

  constructor(private activatedRoute: ActivatedRoute, private storageService: StorageService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  async buscarAnotacao(){
    this.listaAnotacoes = await this.storageService.getAll();
  }

  ionViewDidEnter(){
    this.buscarAnotacao();
  }

  async excluirAnotacao(titulo: string){
    await this.storageService.remove(titulo);
    this.buscarAnotacao();
  }

}
