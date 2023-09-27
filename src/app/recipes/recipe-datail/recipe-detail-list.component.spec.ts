import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetail } from './recipe-detail-list.component';

describe('DetailListComponent', () => {
  let component: RecipeDetail;
  let fixture: ComponentFixture<RecipeDetail>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeDetail],
    });
    fixture = TestBed.createComponent(RecipeDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
