import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { BlogsService } from './blogs.service';

describe('BlogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [
        BlogsService
      ]
    });
  });

  it('should be created', inject([BlogsService, HttpClient], (service: BlogsService, httpClient) => {
    expect(service).toBeTruthy();
  }));

  it('should list all 100 blogposts', async(inject([BlogsService], (service: BlogsService) => {
    service.getPosts().subscribe(res => {
        expect(res.length).toBe(100);
      });
  })));

  it('should retreive all 10 authors', async(inject([BlogsService], (service: BlogsService) => {
    service.getAuthors().subscribe(res => {
        expect(res.length).toBe(10);
      });
  })));

  it('should include author details when retreiving all blogs', async(inject([BlogsService], (service: BlogsService) => {
    service.getPosts().subscribe(res => {
        expect(res[0].author.name).toBe('Leanne Graham');
      });
  })));

  it('should retrieve blog by id', async(inject([BlogsService], (service: BlogsService) => {
    const id = 10;
    const expectedTitle = 'optio molestias id quia eum';

    service.getPost(10).subscribe(res => {
        expect(res.title).toBe(expectedTitle);
      });
  })));

  it('should include author details with retreiving by id', async(inject([BlogsService], (service: BlogsService) => {
    const id = 10;
    const expectedAuthorName = 'Leanne Graham';

    service.getPost(10).subscribe(res => {
        expect(res.author.name).toBe(expectedAuthorName);
      });
  })));
});
