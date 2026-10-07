import { Component, input } from '@angular/core'
import { IconName } from '../icon-name'

@Component({
  selector: 'app-section-icon',
  imports: [],
  templateUrl: './section-icon.html',
  styles: ``,
})
export class SectionIcon {
  name = input.required<IconName>()
}
