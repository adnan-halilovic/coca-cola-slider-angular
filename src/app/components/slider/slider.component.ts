import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  activeSlideIndex = 0;
  slides = [
    {
      textColor: '#000',
      logo: '',
      title: 'NEW COLLAB: COCA-COLA X TIMEX',
      description: 'Two iconic American brands have come together to celebrate harmony with new watches in our 1971 Unity Collection.',
      backgroundExpanded: `url('https://us.coca-cola.com/store/media/wysiwyg/COKE-421-Desktop-Expanded.png')`,
      backgroundCollapsed: `url('https://us.coca-cola.com/store/media/wysiwyg/COKE-421-Desktop-Collapsed.png')`,
      ctaText: 'SHOP NOW',
      ctaLink: 'https://adnanhalilovic.com',
    },
    {
      textColor: "#fff",
      logo: "https://us.coca-cola.com/store/media/wysiwyg/coke-morphe.png",
      title: "",
      description: 'Explore our new line of Morphe products burstling with color and attitide, inspired by Cherry Coke.',
      backgroundExpanded: `url('https://us.coca-cola.com/store/media/wysiwyg/coke-400-desktop-expanded.png')`,
      backgroundCollapsed: `url('https://us.coca-cola.com/store/media/wysiwyg/coke-400-desktop-collapsed.png')`,
      ctaText: 'DISCOVER',
      ctaLink: 'https://adnanhalilovic.com'
    },
    {
      textColor: "#fff",
      logo: "",
      title: "PERSONALIZE YOUR COKE",
      description: 'With custom bottle designs for every occasion',
      backgroundExpanded: `url('https://us.coca-cola.com/store/media/wysiwyg/coke-406-desktop-expanded_1.png')`,
      backgroundCollapsed: `url('https://us.coca-cola.com/store/media/wysiwyg/coke-406-desktop-collapsed_1.png')`,
      ctaText: 'SHOP NOW',
      ctaLink: 'https://adnanhalilovic.com'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
