import { Component, OnInit } from '@angular/core';
import { CreatePositionService } from './create-position.service';

@Component({
  selector: 'jhi-create-position',
  templateUrl: './create-position.component.html',
  styleUrls: ['./create-position.component.scss'],
})
export class CreatePositionComponent implements OnInit {
  pair = 'a';
  price = 50;

  constructor(private createPositionService: CreatePositionService) {}

  ngOnInit(): void {}

  submitPosition(): void {
    this.createPositionService.submitPosition(this.pair, this.price).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
