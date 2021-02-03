import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrausuarioPage } from './registrausuario.page';

describe('RegistrausuarioPage', () => {
  let component: RegistrausuarioPage;
  let fixture: ComponentFixture<RegistrausuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrausuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrausuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
