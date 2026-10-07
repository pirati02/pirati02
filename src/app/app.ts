import { Component } from '@angular/core'
import { SectionTitle } from './section-title/section-title'
import { Experience } from './experience/experience'
import { SkillGroup } from './skill-group/skill-group'
import {
  coreSkills,
  experiences,
  profile,
  selectedSystems,
  toolkit,
} from './resume-content'

@Component({
  selector: 'app-root',
  imports: [SectionTitle, Experience, SkillGroup],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly profile = profile
  protected readonly selectedSystems = selectedSystems
  protected readonly coreSkills = coreSkills
  protected readonly experiences = experiences
  protected readonly toolkit = toolkit

  protected ordinal(index: number): string {
    return String(index + 1).padStart(2, '0')
  }
}
