import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSkillsCardComponent } from './poke-skills-card.component';

describe('PokeSkillsCardComponent', () => {
  let component: PokeSkillsCardComponent;
  let fixture: ComponentFixture<PokeSkillsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeSkillsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeSkillsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
