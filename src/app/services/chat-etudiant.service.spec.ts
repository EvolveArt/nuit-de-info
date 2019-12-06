import { TestBed } from '@angular/core/testing';

import { ChatEtudiantService } from './chat-etudiant.service';

describe('ChatEtudiantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatEtudiantService = TestBed.get(ChatEtudiantService);
    expect(service).toBeTruthy();
  });
});
