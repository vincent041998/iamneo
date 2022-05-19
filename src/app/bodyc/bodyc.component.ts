import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-bodyc',
  templateUrl: './bodyc.component.html',
  styleUrls: ['./bodyc.component.scss'],
})
export class BodycComponent implements OnInit {
  filter_l="";
  filter_c="";
   all_groups=[
    {
      'group_name':'Open',
      'filter':"",
      'candidates':[
        {
          'name':'Amirdharshan A',
          'company':'Intellectyx Data Science Private Limited',
          'star':1,
          "menu":'yes',
          'select':'yes'
         
        },
        {
          'name':'Vimal Kumar',
          'company':'Sirius Computer Solutions',
          'star':5,
          "menu":'yes',
          'select':'yes'
        },
        {
          'name':'JayaKrishnan Duraisamy',
          'company':'lakaba IT Solutions',
          'star':5,
          "menu":'yes',
          'select':'yes'
        },
        {
          'name':'Affan Ahmed Syed',
          'company':'Smart Parking',
          'star':5,
          "menu":'yes',
          'select':'yes'
        },
      ]
    },{
      'group_name':'Contracted',
      'filter':"",
      'candidates':[
        {
          'name':'Akash p',
          'company':'Centre',
          'star':5,
          "menu":'yes',
          'select':'yes'
        },
        {
          'name':'Gyathiri L',
          'company':'Katomaran Technologies Pvt Ltd',
          'star':5,
          "menu":'yes',
          'select':'yes'
        },
        {
          'name':'Suresh S',
          'company':'Synopsis',
          'star':5,
          "menu":'yes',
          'select':'yes'
        },
        {
          'name':'Arun Prakash A',
          'company':'IIT Madras',
          'star':5,
          "menu":'yes',
          'select':'yes'
        },
      ]
    },
    {
      'group_name':'Written Test',
      'filter':"",
      'candidates':[
        {
          'name':'Vijay Bhupathi V',
          'company':'Topclass Entertainment',
          'star':5,
          "menu":'yes',
          'select':'yes'
        },
        {
          'name':'Janasri M',
          'company':'TCS',
          'star':5,
          "menu":'yes',
          'select':'yes'
        },
        {
          'name':'Mohamed Mubarak',
          'company':'Mango DB',
          'star':5,
          "menu":'yes',
          'select':'yes'
        },
        {
          'name':'Jithin Sajay K',
          'company':'Topclass Entertainment',
          'star':5,
          "menu":'yes',
          'select':'yes'
        }
      ]
    },{
      'group_name':'Technical Round',
      'filter':"",
      'candidates':[
        {
          'name':'Arun Kumar K',
          'company':'Vidhya Skill School',
          "menu":'yes',
          'select':'yes'
        },
        {
          'name':'Midhun Krishna S',
          'company':'Cognizent',
          "menu":'yes',
          'select':'yes'
        },
        {
          'name':'Gowri Shankar S',
          'company':'BM Technologies',
          "menu":'yes',
          'select':'yes'
        },
      ]
    },
    {
      'group_name':'Culture Fit Round',
      'filter':"",
      'candidates':[
        {
          'name':'DineshKumar',
          'company':'Wipro Technologies'
        },
        {
          'name':'Pradeep K',
          'company':'Cognizent Technologies'
        },
        {
          'name':'Hemachandru K',
          'company':'Paypal Client'
        }
      ]
    }

  ];

  constructor() { }

  ngOnInit() {}

  dropMain(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.all_groups, event.previousIndex, event.currentIndex);
    }
    dropSub(event: CdkDragDrop<string[]>,index) {
      moveItemInArray(this.all_groups[index].candidates, event.previousIndex, event.currentIndex);
      }

}
