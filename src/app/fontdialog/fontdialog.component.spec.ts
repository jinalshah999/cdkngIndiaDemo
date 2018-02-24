import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontdialogComponent } from './fontdialog.component';

describe('FontdialogComponent', () => {
  let component: FontdialogComponent;
  let fixture: ComponentFixture<FontdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
