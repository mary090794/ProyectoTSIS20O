import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarCancionPage } from './editar-cancion.page';

describe('EditarCancionPage', () => {
  let component: EditarCancionPage;
  let fixture: ComponentFixture<EditarCancionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCancionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarCancionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
