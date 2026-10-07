import { Component, input } from '@angular/core'

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styles: ``,
})
export class Experience {
  date = input.required<string>()
  company = input.required<string>()
  role = input.required<string>()
  points = input.required<string[]>()
  stack = input<string>()
}
