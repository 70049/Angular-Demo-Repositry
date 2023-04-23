import { Component, Input, OnInit } from '@angular/core';

interface crouselImages {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-crousel',
  templateUrl: './crousel.component.html',
  styleUrls: ['./crousel.component.scss']
})
export class CrouselComponent implements OnInit {

  @Input() images: crouselImages[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSide = true;
  @Input() sideInterval = 3000;

  public selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
    if (this.autoSide) {
      this.autoSideImages();
    }
  }

  public autoSideImages = (): void => {
    setInterval(() => {
      this.onNextClick();
    }, this.sideInterval);
  }

  public selectImage(index: number): void {
    this.selectedIndex = index;
  }

  public onPrevClick = (): void => {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  public onNextClick = (): void => {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

}
