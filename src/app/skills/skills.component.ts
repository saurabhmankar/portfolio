import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[{name:"NODE JS",percent:80,remark:'excellent'}, {name:"MongoDB",percent:80,remark:'good'},{name:"React",percent:80,remark:'excellent'},{name:"Express JS",percent:80,remark:'very-good'}, {name:"JavaScript, BootStrap, Angular", percent:90,remark:'excellent'}],
    tools:[{name:"Git",percent:90,remark:'excellent'},{name:"Office",percent:90,remark:'excellent'},{name:"Linux, Windows",percent:70,remark:'very-good'},{name:"MySql, PgSql",percent:70,remark:'excellent'},{name:"Docker, Kubernetes",percent:30,remark:'average'}],
    methodologies:[{name:"Scrum",percent:70,remark:'very-good'},{name:"Uml",percent:90,remark:'excellent'},{name:"Disign Thinking",percent:70,remark:'good'},{name:"TDD",percent:90,remark:'excellent'},{name:"DevOps",percent:50,remark:'average'}]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}

    
    
  
