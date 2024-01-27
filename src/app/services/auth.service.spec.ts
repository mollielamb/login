import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return error if username or password is incorrect', () => {
    service.login('username', 'password')

    expect(service.data).toEqual({error: 'true', message: 'Username or password is incorrect'});
  });
  it('should return success if username and password are correct', () => {
    service.login('Username', 'password')

    expect(service.data).toEqual({error: 'false', message: 'Successful Login'});
  });
});
