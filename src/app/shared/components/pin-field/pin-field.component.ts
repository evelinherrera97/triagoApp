import { Component, OnInit, Input, HostListener, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-pin-field',
  templateUrl: './pin-field.component.html',
  styleUrls: ['./pin-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PinFieldComponent),
      multi: true
    }
  ]
})
export class PinFieldComponent implements OnInit {

  @Input() length = 5;
  @Input()
  set pattern(pattern: string) {
    this._pattern = new RegExp(pattern);
  }
  @Input() id = 'pin';
  @Input() charMask = '•';

  @Input() state = '';
  charPress: string;
  inputsArray = new Array<any>();
  _pattern: RegExp;
  valueOnInput = '';
  public input;
  allowedKeys: Array<number> = [9, 13, 16, 17, 18, 19,
    20, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    45, 46, 91, 92, 93, 104, 105, 106, 107, 109,
    110, 111, 112, 113, 114, 115, 116, 117, 118,
    119, 120, 121, 122, 123, 144, 145, 186, 187, 188, 189, 190,
    191, 192, 219, 220, 221, 222];
  inputChar = '';
  disabled = false;
  valueOnActualInput = '';
  onChange = (valueOnInput: string) => { };
  onTouched = () => { };

  ngOnInit() {
    for (let i = 0; i < this.length; i++) {
      this.inputsArray.push(
        {
          id: this.id + i,
          model: ''
        }
      );
      this.valueOnInput += this.charMask;
    }
  }

  get value(): string {
    return this.valueOnInput;
  }

  @HostListener('textInput', ['$event']) ontextInput(event: any) {
    this.inputChar = event.data;
    this.charPress = this.inputChar;
    event.preventDefault();
  }

  @HostListener('keydown', ['$event']) onkeydown(event: any) {
    this.valueOnActualInput = event.target['value'];
  }

  replaceAt(valueOnInput, index, replacement) {
    return valueOnInput.substr(0, index) + replacement + valueOnInput.substr(index + replacement.length);
  }


  writeValue(obj: any): void {
    if (obj === '') {
      this.valueOnInput = '';
      this.inputsArray = [];
      this.ngOnInit();
      return;
    }
    this.validateState();
    // if (!this._pattern.test(this.inputChar)) {
    //   return;
    // }
    if (this.inputsArray[obj.index].model !== '') {
      if (obj.index !== this.length - 1) {
        obj.index += 1;
        if (this.inputsArray[obj.index].model !== '') {
          return;
        } else {
          document.getElementById(this.id + (obj.index)).focus();
        }
      } else {
        return;
      }
    }
    let isSpecialChar = false;
    this.allowedKeys.forEach(value => {
      if (obj.event.keyCode === value) {
        isSpecialChar = true;
      }
    });
    if (isSpecialChar) {
      return;
    }
    this.isEventCodeKey(obj);

    this.valueOnActualInput = '';
    this.validateState();

    this.onChange(this.valueOnInput);
    this.charPress = '';
  }

  isEventCodeKey(obj) {
    if (obj.event.keyCode !== 8 && (obj.event.keyCode !== 229 || this.charPress)) {
      this.valueOnInput = this.replaceAt(this.valueOnInput, obj.index, this.inputChar);
      this.inputsArray[obj.index].model = this.charMask;
      if (obj.index !== this.length - 1) {
        if (this.inputsArray[obj.index + 1].model === '') {
          document.getElementById(this.id + (obj.index + 1)).focus();
        } else {
          document.getElementById(this.id + (obj.index)).blur();
        }
      } else {
        document.getElementById(this.id + (obj.index)).blur();
      }
    } else {
      this.inputsArray[obj.index].model = '';
      this.valueOnInput = this.replaceAt(this.valueOnInput, obj.index, this.charMask);
      if (obj.index !== 0 && this.valueOnActualInput === '') {
        document.getElementById(this.id + (obj.index - 1)).focus();
      }
    }
  }

  validateState() {
    if (!this.valueOnInput.includes(this.charMask)) {
      this.state = 'status';
    } else {
      if (this.valueOnInput.split(this.charMask).length > this.valueOnInput.length) {
        this.state = '';
      } else {
        this.state = 'focus';
      }
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  focusInput(index) {
    document.getElementById(this.id + index).focus();
  }


}
