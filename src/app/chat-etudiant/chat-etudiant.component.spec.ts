import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatEtudiantComponent } from './chat-etudiant.component';

describe('ChatEtudiantComponent', () => {
  let component: ChatEtudiantComponent;
  let fixture: ComponentFixture<ChatEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
