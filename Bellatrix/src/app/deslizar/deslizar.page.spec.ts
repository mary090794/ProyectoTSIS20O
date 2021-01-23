import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeslizarPage } from './deslizar.page';

describe('DeslizarPage', () => {
  let component: DeslizarPage;
  let fixture: ComponentFixture<DeslizarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeslizarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeslizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
