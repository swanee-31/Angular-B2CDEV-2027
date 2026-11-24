import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Catalog } from './catalog';

describe('Catalog', () => {
  let component: Catalog;
  let fixture: ComponentFixture<Catalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Catalog],
    }).compileComponents();

    fixture = TestBed.createComponent(Catalog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle a book availability when its action is clicked', () => {
    const firstBook = component.books[0];
    expect(firstBook.available).toBe(true);

    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();

    expect(firstBook.available).toBe(false);
    expect(fixture.nativeElement.textContent).toContain('Emprunté');
  });
});
