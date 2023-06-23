import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeEvoCardComponent } from './poke-evo-card.component';

describe('PokeEvoCardComponent', () => {
  let component: PokeEvoCardComponent;
  let fixture: ComponentFixture<PokeEvoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeEvoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeEvoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
