import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        AppModule 
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require username and password', () => {
    component.loginForm.setValue({
      "username": "", 
      "password": "", 
    });

    expect(component.loginForm.valid).toEqual(false);
  });

  it('should accept username and password', () => {
    component.loginForm.setValue({
      "username": "Username", 
      "password": "password", 
    });

    expect(component.loginForm.valid).toEqual(true);
  });



});
