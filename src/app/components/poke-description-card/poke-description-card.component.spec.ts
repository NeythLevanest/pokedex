import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDescriptionCardComponent } from './poke-description-card.component';

describe('PokeDescriptionCardComponent', () => {
  let component: PokeDescriptionCardComponent;
  let fixture: ComponentFixture<PokeDescriptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeDescriptionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeDescriptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
