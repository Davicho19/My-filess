import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDeDecisionComponent } from './tabla-de-decision.component';


describe('TablaDeDecisionComponent', () => {
  let component: TablaDeDecisionComponent;
  let fixture: ComponentFixture<TablaDeDecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaDeDecisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDeDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
