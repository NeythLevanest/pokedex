import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeGridCardComponent } from './poke-grid-card.component';

describe('PokeGridCardComponent', () => {
  let component: PokeGridCardComponent;
  let fixture: ComponentFixture<PokeGridCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeGridCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
