import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentID;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // const id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
    // this.departmentID = id;

    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'), 0);
      this.departmentID = id;
    });
  }

  goPrevious() {
    const previousID = this.departmentID - 1;
    this.router.navigate(['/departments', previousID]);
  }

  goNext() {
    const nextID = this.departmentID + 1;
    this.router.navigate(['/departments', nextID]);
  }

  gotoDepartments() {
    const selectedID = this.departmentID ? this.departmentID : null;
    // this.router.navigate(['/departments', { lastVisitedID: selectedID }]);
    this.router.navigate(['../', { lastVisitedID: selectedID }], { relativeTo: this.route });
  }

}
