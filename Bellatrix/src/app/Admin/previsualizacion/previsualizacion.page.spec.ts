import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrevisualizacionPage } from './previsualizacion.page';

describe('PrevisualizacionPage', () => {
  let component: PrevisualizacionPage;
  let fixture: ComponentFixture<PrevisualizacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevisualizacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrevisualizacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
