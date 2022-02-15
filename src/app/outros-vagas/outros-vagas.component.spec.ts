import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrosVagasComponent } from './outros-vagas.component';

describe('OutrosVagasComponent', () => {
  let component: OutrosVagasComponent;
  let fixture: ComponentFixture<OutrosVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutrosVagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutrosVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
