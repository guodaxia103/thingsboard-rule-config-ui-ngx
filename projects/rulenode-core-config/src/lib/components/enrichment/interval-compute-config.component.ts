import {Component} from '@angular/core';
import {AppState} from '@core/public-api';
import {RuleNodeConfiguration, RuleNodeConfigurationComponent} from '@shared/public-api';
import {Store} from '@ngrx/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {COMMA, ENTER, SEMICOLON} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {
  IntervalComputeFilterType,
  intervalComputeFilterTypeTranslations,
} from '../../rulenode-core-config.models';

@Component({
  selector: 'tb-enrichment-node-interval-compute-config',
  templateUrl: './interval-compute-config.component.html',
  styleUrls: []
})
export class IntervalComputeConfigComponent extends RuleNodeConfigurationComponent {

  intervalComputeConfigForm: FormGroup;
  separatorKeysCodes = [ENTER, COMMA, SEMICOLON];

  filterType = IntervalComputeFilterType;
  filterTypes = Object.keys(IntervalComputeFilterType);
  filterTypeTranslation = intervalComputeFilterTypeTranslations;

  constructor(protected store: Store<AppState>,
              private fb: FormBuilder) {
    super(store);
  }

  protected configForm(): FormGroup {
    return this.intervalComputeConfigForm;
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.intervalComputeConfigForm = this.fb.group({
      listKeyNames: [configuration ? configuration.listKeyNames : null, [Validators.required]],
      hhStart: [configuration ? configuration.hhStart : null, [Validators.required]],
      hhKey: [configuration ? configuration.hhKey : null, [Validators.required]],
      ddStart: [configuration ? configuration.ddStart : null, [Validators.required]],
      ddKey: [configuration ? configuration.ddKey : null, [Validators.required]],
      mmStart: [configuration ? configuration.mmStart : null, [Validators.required]],
      mmKey: [configuration ? configuration.mmKey : null, [Validators.required]],
      yyStart: [configuration ? configuration.yyStart : null, [Validators.required]],
      yyKey: [configuration ? configuration.yyKey : null, [Validators.required]],
      totalIsSave: [configuration ? configuration.totalIsSave : true, []],
      checkEntityFilter: [configuration ? configuration.checkEntityFilter : false, []],
      filterType: [configuration ? configuration.filterType : this.filterType.EXCLUDE, []],
      listEntityNames: [configuration ? configuration.listEntityNames : null, []]
    });
  }

  removeKey(key: string, keysField: string): void {
    const keys: string[] = this.intervalComputeConfigForm.get(keysField).value;
    const index = keys.indexOf(key);
    if (index >= 0) {
      keys.splice(index, 1);
      this.intervalComputeConfigForm.get(keysField).setValue(keys, {emitEvent: true});
    }
  }

  addKey(event: MatChipInputEvent, keysField: string): void {
    const input = event.input;
    let value = event.value;
    if ((value || '').trim()) {
      value = value.trim();
      let keys: string[] = this.intervalComputeConfigForm.get(keysField).value;
      if (!keys || keys.indexOf(value) === -1) {
        if (!keys) {
          keys = [];
        }
        keys.push(value);
        this.intervalComputeConfigForm.get(keysField).setValue(keys, {emitEvent: true});
      }
    }
    if (input) {
      input.value = '';
    }
  }

  protected validatorTriggers(): string[] {
    return ['checkEntityFilter'];
  }

  protected updateValidators(emitEvent: boolean) {
    const checkForSingleEntity: boolean = this.intervalComputeConfigForm.get('checkEntityFilter').value;
    if (checkForSingleEntity) {
      this.intervalComputeConfigForm.get('filterType').setValidators([]);
      this.intervalComputeConfigForm.get('listEntityNames').setValidators([]);
    }
  }
}
