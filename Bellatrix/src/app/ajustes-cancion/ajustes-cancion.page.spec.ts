import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjustesCancionPage } from './ajustes-cancion.page';

describe('AjustesCancionPage', () => {
  let component: AjustesCancionPage;
  let fixture: ComponentFixture<AjustesCancionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjustesCancionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjustesCancionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
