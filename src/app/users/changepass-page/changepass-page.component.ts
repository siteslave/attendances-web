import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-changepass-page',
  templateUrl: './changepass-page.component.html',
  styleUrls: ['./changepass-page.component.css']
})
export class ChangepassPageComponent implements OnInit {
  pwd1: string;
  pwd2: string;
  loadgin = false;
  errorMessage: string;
  isSuccess = false;
  isError = false;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  changePassword() {

    if (this.pwd1 === this.pwd2) {
      this.loadgin = true;
      this.userService.changePassword(this.pwd1)
        .then((response: any) => {
          this.loadgin = false;
          if (response.ok) {
            this.isSuccess = true;
            this.isError = false;
          } else {
            this.isError = true;
            this.isSuccess = false;
            this.errorMessage = 'เกิดข้อผิดพลาดที่ Server';
          }
        })
        .catch(err => {
          this.loadgin = false;
          this.isError = true;
          this.isSuccess = false;
          this.errorMessage = 'เกิดข้อผิดพลาดที่ในการเชื่อมต่อกับ Server';
        })
    } else {
      this.loadgin = false;
      this.isError = true;
      this.isSuccess = false;
      this.errorMessage = 'รหัสผ่านใหม่ทั้งสอง ไม่ตรงกัน';
    }
  }

}
