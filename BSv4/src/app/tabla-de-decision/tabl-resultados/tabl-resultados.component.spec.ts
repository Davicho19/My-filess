import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablResultadosComponent } from './tabl-resultados.component';

describe('TablResultadosComponent', () => {
  let component: TablResultadosComponent;
  let fixture: ComponentFixture<TablResultadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablResultadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
