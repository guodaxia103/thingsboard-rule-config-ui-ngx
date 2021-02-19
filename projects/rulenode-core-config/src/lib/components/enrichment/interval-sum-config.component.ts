import {Component} from '@angular/core';
import {AppState} from '@core/public-api';
import {RuleNodeConfiguration, RuleNodeConfigurationComponent} from '@shared/public-api';
import {Store} from '@ngrx/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {COMMA, ENTER, SEMICOLON} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {
  MinuteIntervalComputeFilterType,
  minuteIntervalComputeFilterTypeTranslations
} from '../../rulenode-core-config.models';

@Component({
  selector: 'tb-enrichment-node-interval-sum-config',
  templateUrl: './interval-sum-config.component.html',
  styleUrls: []
})
export class IntervalSumConfigComponent extends RuleNodeConfigurationComponent {

  intervalSumConfigForm: FormGroup;
  separatorKeysCodes = [ENTER, COMMA, SEMICOLON];

  filterType = MinuteIntervalComputeFilterType;
  filterTypes = Object.keys(MinuteIntervalComputeFilterType);
  filterTypeTranslation = minuteIntervalComputeFilterTypeTranslations;


  constructor(protected store: Store<AppState>,
              private fb: FormBuilder) {
    super(store);
  }

  protected configForm(): FormGroup {
    return this.intervalSumConfigForm;
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.intervalSumConfigForm = this.fb.group({
      listKeyNames: [configuration ? configuration.listKeyNames : null, [Validators.required]],
      am: [configuration ? configuration.am : null, []],
      hhStart: [configuration ? configuration.hhStart : null, [Validators.required]],
      hhKey: [configuration ? configuration.hhKey : null, [Validators.required]],
      ddStart: [configuration ? configuration.ddStart : null, [Validators.required]],
      ddKey: [configuration ? configuration.ddKey : null, [Validators.required]],
      mmStart: [configuration ? configuration.mmStart : null, [Validators.required]],
      mmKey: [configuration ? configuration.mmKey : null, [Validators.required]],
      yyStart: [configuration ? configuration.yyStart : null, [Validators.required]],
      yyKey: [configuration ? configuration.yyKey : null, [Validators.required]],
      everyTime:[configuration ? configuration.everyTime : true, []],
      filterType: [configuration ? configuration.filterType : this.filterType.NO, []],
      likeFilter: [configuration ? configuration.likeFilter : false, []],
      listEntityNames: [configuration ? configuration.listEntityNames : null, []]
    });
  }

  removeKey(key: string, keysField: string): void {
    const keys: string[] = this.intervalSumConfigForm.get(keysField).value;
    const index = keys.indexOf(key);
    if (index >= 0) {
      keys.splice(index, 1);
      this.intervalSumConfigForm.get(keysField).setValue(keys, {emitEvent: true});
    }
  }

  addKey(event: MatChipInputEvent, keysField: string): void {
    const input = event.input;
    let value = event.value;
    if ((value || '').trim()) {
      value = value.trim();
      let keys: string[] = this.intervalSumConfigForm.get(keysField).value;
      if (!keys || keys.indexOf(value) === -1) {
        if (!keys) {
          keys = [];
        }
        keys.push(value);
        this.intervalSumConfigForm.get(keysField).setValue(keys, {emitEvent: true});
      }
    }
    if (input) {
      input.value = '';
    }
  }
}
