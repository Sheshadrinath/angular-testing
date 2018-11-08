import { TestBed, inject } from '@angular/core/testing';

import { PostsService } from './posts.service';
import { HttpClientModule } from '@angular/common/http';

describe('PostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        PostsService
      ]
    });
  });

  describe('when PostService is initialized', () => {
    it('should be created', inject([PostsService], (service: PostsService) => {
      expect(service).toBeTruthy();
    }));
  })
});