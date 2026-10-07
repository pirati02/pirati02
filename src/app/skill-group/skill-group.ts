import { Component, input } from '@angular/core'

@Component({
  selector: 'app-skill-group',
  imports: [],
  templateUrl: './skill-group.html',
  styles: ``,
})
export class SkillGroup {
  title = input.required<string>()
  items = input.required<string[]>()
}
