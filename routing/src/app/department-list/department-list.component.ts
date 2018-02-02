import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public selectedID;

  departments = [
    {
      id: 1,
      name: 'Angular'
    },
    {
      id: 2,
      name: 'Node'
    },
    {
      id: 3,
      name: 'MongoDB'
    },
    {
      id: 4,
      name: 'Ruby'
    },
    {
      id: 5,
      name: 'Bootstrap'
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const lastVisitedID = parseInt(params.get('lastVisitedID'), 0);
      this.selectedID = lastVisitedID;
    });
  }

  onSelect(department) {
    // this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department) {
    return department.id === this.selectedID;
  }

}
