import { Component, input } from '@angular/core'
import { IconName } from '../icon-name'
import { SectionIcon } from '../section-icon/section-icon'

@Component({
  selector: 'app-section-title',
  imports: [SectionIcon],
  templateUrl: './section-title.html',
  styles: ``,
})
export class SectionTitle {
  icon = input.required<IconName>()
}
