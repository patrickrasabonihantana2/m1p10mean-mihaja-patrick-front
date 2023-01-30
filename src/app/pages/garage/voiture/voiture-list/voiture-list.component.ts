import { VoituresService } from './../../../../services/voitures.service';
import { Voiture } from './../../../../models/voiture';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voiture-list',
  templateUrl: './voiture-list.component.html',
  styleUrls: ['./voiture-list.component.scss']
})
export class VoitureListComponent implements OnInit {
  voitures: Voiture[];

  constructor(private voituresService: VoituresService) { }

  ngOnInit(): void {
    this.getVoitures();
  }

  getVoitures(): void {
    this.voituresService.getVoitures().subscribe(
      voitures => {
        this.voitures = voitures;
        console.log(this.voitures);
      }
    );
  }

}
