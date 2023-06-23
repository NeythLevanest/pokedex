import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeEvolutionCardComponent } from './poke-evolution-card.component';

describe('PokeEvolutionCardComponent', () => {
  let component: PokeEvolutionCardComponent;
  let fixture: ComponentFixture<PokeEvolutionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeEvolutionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeEvolutionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
