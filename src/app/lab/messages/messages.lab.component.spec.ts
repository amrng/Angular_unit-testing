import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesComponentForLab } from './messages.lab.component';
import { MessageService } from 'src/app/services/message/message.service';

describe('message component integration testing:', () => {
  let fixture: ComponentFixture<MessagesComponentForLab>;
  let component: MessagesComponentForLab;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesComponentForLab],
      providers: [MessageService],
    });

    fixture = TestBed.createComponent(MessagesComponentForLab);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);

    fixture.detectChanges();
  });

  it('expect comp. created successfully', () => {
    expect(component).toBeTruthy();
  });

  it('expect component template to be empty', () => {
    const templateElement = fixture.nativeElement;
    const messageDiv = templateElement.querySelector('div.msg');

    expect(messageDiv).toBeNull();
  });

  it('then expect div.msg to have the messages after setting it', () => {
    const testMessages = ['Message 1'];
    messageService.messages = testMessages;
    fixture.detectChanges();

    const templateElement = fixture.nativeElement;
    const messageDiv = templateElement.querySelector('div.msg');

    expect(messageDiv).not.toBeNull();
    expect(messageDiv.textContent).toContain(testMessages[0]);
  });
});
